import assert from "assert";

import * as ss58 from "@subsquid/ss58";
import { Store } from "@subsquid/typeorm-store";

// import * as erc20 from './abi/erc20'
// import * as psp22Ink4 from "./abi/psp22_ink4";
import * as AbaxGovernorSquid from "./abi/abax_governor";
import * as AbaxTokenSquid from "./abi/abax_token";
import {
  ABAX_TGE_ADDRESS_SS58,
  ABAX_TOKEN_CONTRACT_ADDRESS,
  GOVERNOR_CONTRACT_ADDRESS,
  ProcessorContext,
  SS58_NETWORK,
} from "./processor";
import { CAMPAIGNS_END_DATE } from "./main";
import { getApiProviderWrapper } from "@c-forge/polkahat-network-helpers";
import { nobody } from "@polkadot/keyring/pair/nobody";
import AbaxGovernorContract from "@abaxfinance/contract-helpers/dist/src/typechain/contracts/abax_governor";
import type { Abi } from "@polkadot/api-contract";
import type { ContractCallOutcome } from "@polkadot/api-contract/types";
import type { ApiDecoration } from "@polkadot/api/types";
import type { ContractExecResult } from "@polkadot/types/interfaces";
import { firstValueFrom, map } from "rxjs";
import { convertWeight } from "@c-forge/polkahat-chai-matchers";
import { getApiAt } from "@c-forge/polkahat-network-helpers";
import {
  SignAndSendSuccessResponse,
  genValidContractOptionsWithValue,
} from "@c-forge/typechain-types";
import type { ApiPromise } from "@polkadot/api";

const CAMPAING_END_BLOCK = 90627031;
export async function getStakedByContributor(
  ctx: ProcessorContext<Store>,
  contributors: string[]
) {
  const governorContract = new AbaxGovernorSquid.Contract(
    ctx,
    GOVERNOR_CONTRACT_ADDRESS
  );
  const api = await getApiProviderWrapper(
    ctx._chain.rpc.url
  ).getAndWaitForReady();
  const apiAt = await getApiAt(api, CAMPAING_END_BLOCK);

  const governorContractAbax = new AbaxGovernorContract(
    GOVERNOR_CONTRACT_ADDRESS,
    nobody(),
    api
  );
  const stakedByContributor: { contributor: string; totalStaked: bigint }[] =
    [];
  for (const contributor of contributors) {
    const totalStaked = await queryAt(
      apiAt as any,
      governorContractAbax,
      GOVERNOR_CONTRACT_ADDRESS,
      "PSP22::balance_of",
      [contributor]
    );
    stakedByContributor.push({
      contributor,
      totalStaked: BigInt((totalStaked as any).toString()),
    });
  }
  return stakedByContributor.reduce((acc, { contributor, totalStaked }) => {
    acc[contributor] = totalStaked;
    return acc;
  }, {} as Record<string, bigint>);
}

export interface TransferRecord {
  id: string;
  from: string;
  contributor: string;
  amount: bigint;
  block: number;
  timestamp: Date;
  extrinsicHash: string;
}

export function getTgeToContributorsTransfers(
  ctx: ProcessorContext<Store>
): TransferRecord[] {
  const records: TransferRecord[] = [];
  for (const block of ctx.blocks) {
    assert(
      block.header.timestamp,
      `Block ${block.header.height} had no timestamp`
    );
    for (const event of block.events) {
      if (
        event.name === "Contracts.ContractEmitted" &&
        event.args.contract === ABAX_TOKEN_CONTRACT_ADDRESS
      ) {
        assert(
          event.extrinsic,
          `Event ${event} arrived without a parent extrinsic`
        );
        const decodedEvent = AbaxTokenSquid.decodeEvent(
          event.args.data,
          event.topics
        );
        if (decodedEvent.__kind === "Transfer") {
          const from =
            decodedEvent.from &&
            ss58.codec(SS58_NETWORK).encode(decodedEvent.from);
          const to =
            decodedEvent.to && ss58.codec(SS58_NETWORK).encode(decodedEvent.to);

          if (!from || !to) {
            continue;
          }

          if (CAMPAIGNS_END_DATE.getTime() < block.header.timestamp) {
            continue;
          }

          const recordToAdd: TransferRecord = {
            id: event.id,
            from,
            contributor: to,
            amount: decodedEvent.value,
            block: block.header.height,
            timestamp: new Date(block.header.timestamp),
            extrinsicHash: event.extrinsic.hash,
          };

          if (from === ABAX_TGE_ADDRESS_SS58) {
            records.push(recordToAdd);
          }
        }
      }
    }
  }
  return records;
}

export async function queryAt<T>(
  apiAt: ApiDecoration<"promise">,
  contract: any,
  asAddress: string,
  messageLabel: string,
  args: any[]
): Promise<T> {
  const message = (contract.contractAbi as Abi).findMessage(messageLabel);
  const encoded = message.toU8a([...args]);
  const observable = apiAt.rx.call.contractsApi
    .call<ContractExecResult>(
      asAddress,
      contract.address,
      0,
      (await genValidContractOptionsWithValue(contract.nativeAPI)).gasLimit,
      null, //storageDepositLimit
      encoded
    )
    .pipe(
      map(
        ({
          debugMessage,
          gasConsumed,
          gasRequired,
          result,
          storageDeposit,
        }): ContractCallOutcome => ({
          debugMessage,
          gasConsumed,
          gasRequired:
            gasRequired && !convertWeight(gasRequired as any).v1Weight.isZero()
              ? gasRequired
              : gasConsumed,
          output:
            result.isOk && message.returnType
              ? (contract.contractAbi as Abi).registry.createTypeUnsafe(
                  message.returnType.lookupName || message.returnType.type,
                  [result.asOk.data.toU8a(true)],
                  {
                    isPedantic: true,
                  }
                )
              : null,
          result,
          storageDeposit,
        })
      )
    );
  const queryRes = await firstValueFrom(observable);
  if ((queryRes.output as any).isOk) {
    return (queryRes.output as any).asOk as T;
  }

  throw new Error(`queryAt failed ${queryRes.debugMessage}`);
}
