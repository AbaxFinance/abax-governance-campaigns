import { In } from "typeorm";
import assert from "assert";

import * as ss58 from "@subsquid/ss58";
import { Store, TypeormDatabase } from "@subsquid/typeorm-store";

// import * as erc20 from './abi/erc20'
// import * as psp22Ink4 from "./abi/psp22_ink4";
import * as AbaxGovernorSquid from "./abi/abax_governor";
import * as AbaxTGESquid from "./abi/abax_tge";
import * as AbaxTokenSquid from "./abi/abax_token";
import { Owner, Transfer } from "./model";
import {
  processor,
  SS58_NETWORK,
  GOVERNOR_CONTRACT_ADDRESS,
  ProcessorContext,
  ABAX_TOKEN_CONTRACT_ADDRESS,
  ABAX_TGE_ADDRESS_SS58,
} from "./processor";
import BN from "bn.js";
import { parseAmountToAndConvertToE } from "@abaxfinance/utils";
import { write, writeFileSync } from "fs";
import { writeJSONSync } from "fs-extra";
import {
  getStakedByContributor,
  getTgeToContributorsTransfers,
  TransferRecord,
} from "./main.utils";
import Chooser from "./RandomWeightedChooser";
import { calculateAndStoreRaffle } from "./raffle";
import { calculateAndStoreAirdropResults } from "./airdrop";

(BigInt.prototype as any).toJSON = function () {
  return this.toString();
};

export const CAMPAIGNS_END_DATE = new Date("2024-09-27T00:00:00Z");

const TRANSFER_RECORDS: TransferRecord[] = [];

processor.run(new TypeormDatabase({ supportHotBlocks: true }), async (ctx) => {
  TRANSFER_RECORDS.push(...getTgeToContributorsTransfers(ctx));
  const timestamp = ctx.blocks[ctx.blocks.length - 1]?.header?.timestamp;
  if (timestamp && timestamp >= CAMPAIGNS_END_DATE.getTime()) {
    const amountsByContributor = TRANSFER_RECORDS.reduce((acc, tx) => {
      if (tx.contributor) {
        acc[tx.contributor] = (acc[tx.contributor] || 0n) + tx.amount;
      }
      return acc;
    }, {} as Record<string, bigint>);

    const contributors = Object.keys(amountsByContributor);

    const stakedByContributor = await getStakedByContributor(ctx, contributors);

    await calculateAndStoreAirdropResults(
      amountsByContributor,
      stakedByContributor
    );

    await calculateAndStoreRaffle(amountsByContributor, stakedByContributor);

    console.log("Reached the end of the campaign, exiting...");
    process.exit(0);
  }
});
