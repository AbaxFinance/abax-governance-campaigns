import { writeJSONSync } from "fs-extra";

export const AIRDROP_AMOUNT = 350_000n * 10n ** 12n;

// Rules Of Airdrop

// The total amount of Airdrop will be 350,000 ABAXes.
// The ABAXes will come from the foundation allocation.
// The Airdrop campaign will last for 51 days from TGE start + 7 days until distribution.
// The Airdrop will be distributed proportionally to the amounts of staked tokens by eligible participants exactly 51 days after TGE starts.
// To be eligible for an Airdrop one has to:
// Stake at least 90% of all* tokens received through participating in TGE (Stakedrop and contribution) during the first 51 days of the campaign. Throughout the campaign, during the 58 days, participants could not unstake tokens from the governor. Unstaking before receiving the airdrop makes a participant ineligible.
// Throughout the campaign, during the 58 days, participants could not unstake tokens from the governor. Unstaking before receiving the airdrop makes a participant ineligible.
// The Airdrop will be distributed 7 days after it ends. It is 58 days after TGE start.
// The Airdrop will be added to the participants' stake in Abax Governor.

export async function calculateAndStoreAirdropResults(
  amountsByContributor: Record<string, bigint>,
  stakedByContributor: Record<string, bigint>
) {
  const amountStakedByContributorOfElligible: Record<string, bigint> = {};

  for (const contributor in amountsByContributor) {
    const amount = amountsByContributor[contributor];
    const staked = stakedByContributor[contributor];
    if ((amount * 9n) / 10n <= staked) {
      amountStakedByContributorOfElligible[contributor] = staked;
    }
  }

  const totalStakedByElligible = Object.values(
    amountStakedByContributorOfElligible
  ).reduce((acc, staked) => acc + staked, 0n);

  const airdropByContributor = Object.entries(
    amountStakedByContributorOfElligible
  ).reduce((acc, [contributor, staked]) => {
    acc[contributor] = (staked * AIRDROP_AMOUNT) / totalStakedByElligible;
    return acc;
  }, {} as Record<string, bigint>);

  const airdropTotal = Object.values(airdropByContributor).reduce(
    (acc, airdrop) => acc + airdrop,
    0n
  );

  console.log("Airdrop total", airdropTotal);
  console.log("Airdrop by contributor", airdropByContributor);

  writeJSONSync("airdrop.json", airdropByContributor);
}
