import { writeJSONSync } from "fs-extra";
import Chooser from "./RandomWeightedChooser";

const RAFFLE_REWARDS = [
  20_000n * 10n ** 12n,
  30_000n * 10n ** 12n,
  100_000n * 10n ** 12n,
];

// Rules of Raffle

// Total rewards in Raffle are 150 000 ABAXes distributed to 3 winners in the amount of 100 000 ABAX, 30 000 ABAX, 20 000 ABAX.
// The ABAXes will come from the foundation allocation.
// The Raffle campaign will last for 51 days from TGE start + 7 days until drawn and distribution is performed.
// The rewards will be drawn from the smallest to the highest.
// One account can win only one reward. After winning a winner is removed from the pool.
// Chances for winning will be proportional to the amounts of staked tokens (rounded down) by eligible participants exactly 51 days after TGE starts.
// To be eligible for a Raffle one has to:
// Stake at least 99% of all* tokens received through participating in TGE (Stakedrop and contribution) during the first 51 days of the campaign. Throughout the campaign, during the 58 days, participants could not unstake tokens from the governor. Unstaking before receiving the reward makes a participant ineligible.
// The draw will be conducted within 7 days after the campaign ends. The rewards will be distributed within 1 day after the drawing.
// The draw will be organized by <@524689718076768273> and <@241980919068491777> publicly in a transparent and verifiable way.
// The rewards will be added to the participants' stake in Abax Governor.
// Founders are excluded from the Raffle.
// In total half a million (500 000) ABAXes will be spent from foundation allocation for the campaigns to promote participating in the Abax Governance.

// -* of all tokens received = of 40% that TGE contract sends to a stakedropper/contributor on the contribution/claim. Doesn't include the 60% that is vested

export async function calculateAndStoreRaffle(
  amountsByContributor: Record<string, bigint>,
  stakedByContributor: Record<string, bigint>
) {
  const amountStakedByContributorOfElligible: Record<string, bigint> = {};

  for (const contributor in amountsByContributor) {
    const amount = amountsByContributor[contributor];
    const staked = stakedByContributor[contributor];
    if ((amount * 99n) / 100n <= staked) {
      amountStakedByContributorOfElligible[contributor] = staked;
    }
  }

  const totalStakedByElligible = Object.values(
    amountStakedByContributorOfElligible
  ).reduce((acc, staked) => acc + staked, 0n);

  const raffleChancesByContributor = Object.entries(
    amountStakedByContributorOfElligible
  ).reduce((acc, [contributor, staked]) => {
    acc[contributor] = (staked * 10n ** 18n) / totalStakedByElligible;
    return acc;
  }, {} as Record<string, bigint>);

  const raffleWinners: { address: string; reward: bigint }[] = [];

  const raffleEntries: Record<string, { address: string; weight: number }> = {};

  for (const [address, weight] of Object.entries(raffleChancesByContributor)) {
    raffleEntries[address] = { address, weight: parseInt(weight.toString()) };
  }

  writeJSONSync("raffleEntries.json", raffleEntries);

  for (const reward of RAFFLE_REWARDS) {
    const winner = Chooser.chooseWeightedObject(Object.values(raffleEntries));
    if (!winner) {
      throw new Error("No winner found");
    }
    raffleWinners.push({ address: winner.address, reward });
    delete raffleEntries[winner.address];
  }

  const raffleWinnersMap = raffleWinners.reduce((acc, { address, reward }) => {
    acc[address] = reward;
    return acc;
  }, {} as Record<string, bigint>);

  console.log("Raffle winners", raffleWinnersMap);

  writeJSONSync("raffle.json", raffleWinnersMap);
}
