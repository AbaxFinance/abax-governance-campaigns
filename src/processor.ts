import { assertNotNull } from "@subsquid/util-internal";
import { toHex } from "@subsquid/util-internal-hex";
import * as ss58 from "@subsquid/ss58";
import {
  BlockHeader,
  DataHandlerContext,
  SubstrateBatchProcessor,
  SubstrateBatchProcessorFields,
  Event as _Event,
  Call as _Call,
  Extrinsic as _Extrinsic,
  DataSource,
} from "@subsquid/substrate-processor";
import { lookupArchive } from "@subsquid/archive-registry";

export const SS58_NETWORK = "substrate"; // used for the ss58 prefix

export const GOVERNOR_ADDRESS_SS58 =
  "5DX8nBod3StXN2frYyf6pW3cJhqozcErmTJHiHSeP45WQv5K";
export const GOVERNOR_CONTRACT_ADDRESS = ss58
  .codec(SS58_NETWORK)
  .decode(GOVERNOR_ADDRESS_SS58);
export const ABAX_TGE_ADDRESS_SS58 =
  "5H6BtP9CYM4XUWpqqgAaVvha67SMxFqFveu66TKJ81Ljn1b1";
export const ABAX_TGE_CONTRACT_ADDRESS = ss58
  .codec(SS58_NETWORK)
  .decode(ABAX_TGE_ADDRESS_SS58);
export const ABAX_TOKEN_ADDRESS_SS58 =
  "5DfSpEnVDLgyf4Gkwwgh8JSeNbCGE89Fo9QgtZ4LfTC6Rh95";
export const ABAX_TOKEN_CONTRACT_ADDRESS = ss58
  .codec(SS58_NETWORK)
  .decode(ABAX_TOKEN_ADDRESS_SS58);

const ALEPH_DATA_SOURCE: DataSource = {
  // Lookup archive by the network name in Subsquid registry
  // See https://docs.subsquid.io/substrate-indexing/supported-networks/
  archive: lookupArchive(
    process.env.WS_ENDPOINT === "wss://ws.test.azero.dev"
      ? "aleph-zero-testnet"
      : "aleph-zero",
    {
      release: "ArrowSquid",
    }
  ),
  // Chain RPC endpoint is required on Substrate for metadata and real-time updates
  chain: {
    // Set via .env for local runs or via secrets when deploying to Subsquid Cloud
    // https://docs.subsquid.io/deploy-squid/env-variables/
    url: assertNotNull(process.env.WS_ENDPOINT),
    // More RPC connection options at https://docs.subsquid.io/substrate-indexing/setup/general/#set-data-source
    capacity: 25,
    maxBatchCallSize: 25,
  },
};

export const processor = new SubstrateBatchProcessor()
  .setDataSource(ALEPH_DATA_SOURCE)
  .addContractsContractEmitted({
    contractAddress: [
      GOVERNOR_CONTRACT_ADDRESS,
      ABAX_TGE_CONTRACT_ADDRESS,
      ABAX_TOKEN_CONTRACT_ADDRESS,
    ],
    extrinsic: true,
  })
  .setFields({
    event: {
      topics: true,
      name: true,
      args: true,
    },
    block: {
      timestamp: true,
    },
    extrinsic: {
      hash: true,
    },
  })
  .setBlockRange({
    // genesis block happens to not have a timestamp, so it's easier
    // to start from 1 in cases when the deployment height is unknown
    // from: 1,
    from: 80672500,
  });

export type Fields = SubstrateBatchProcessorFields<typeof processor>;
export type Block = BlockHeader<Fields>;
export type Event = _Event<Fields>;
export type Call = _Call<Fields>;
export type Extrinsic = _Extrinsic<Fields>;
export type ProcessorContext<Store> = DataHandlerContext<Store, Fields>;
