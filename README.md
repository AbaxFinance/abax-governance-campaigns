# Abax Governance Campaigns: Airdrop & Raffle Implementation

This repository contains the implementation of the Airdrop and Raffle campaigns for the Abax community, participants of the Abax Governance who stake their tokens in the Abax Governor.

## Overview

The campaigns aim to encourage community members to actively participate in the governance of Abax by staking their tokens. Participants who meet the eligibility criteria are rewarded through:

- **Airdrop**: Distribution of 350,000 ABAX tokens proportionally among eligible participants.
- **Raffle**: Chance to win additional ABAX tokens (totaling 150,000 ABAX) based on the amount staked.

## Campaign Rules

Dear Abax Community,

August 6th will be a big step for our community as the Token Generation Event of ABAX starts and all of us will be able to contribute to the Abax treasury and receive ABAX tokens.

To celebrate this occasion and increase participation in the governance I would like to propose an Airdrop and Raffle campaign for users who will stake their funds in the Abax Governor.

**Rules Of Airdrop**

1. The total amount of Airdrop will be 350,000 ABAXes.
2. The ABAXes will come from the foundation allocation.
3. The Airdrop campaign will last for 51 days from TGE start + 7 days until distribution.
4. The Airdrop will be distributed proportionally to the amounts of staked tokens by eligible participants exactly 51 days after TGE starts.
5. To be eligible for an Airdrop one has to:

- Stake at least 90% of all\* tokens received through participating in TGE (Stakedrop and contribution) during the first 51 days of the campaign.
- At any time within the 51 days, there may not be a one-hour period where the amount of staked tokens is less than 90% of tokens received through participating in TGE(Stakedrop and contribution). In other words, if a participant gets new tokens from the TGE smart contract the participant has one hour to make sure that at least 90% of received tokens are staked.
- Throughout the campaign, during the 58 days, participants could not unstake tokens from the governor. Unstaking before receiving the airdrop makes a participant ineligible.

6. The Airdrop will be distributed 7 days after it ends. It is 58 days after TGE start.
7. The Airdrop will be added to the participants' stake in Abax Governor.

**Rules of Raffle**

1. Total rewards in Raffle are 150 000 ABAXes distributed to 3 winners in the amount of 100 000 ABAX, 30 000 ABAX, 20 000 ABAX.
2. The ABAXes will come from the foundation allocation.
3. The Raffle campaign will last for 51 days from TGE start + 7 days until drawn and distribution is performed.
4. The rewards will be drawn from the smallest to the highest.
5. One account can win only one reward. After winning a winner is removed from the pool.
6. Chances for winning will be proportional to the amounts of staked tokens (rounded down) by eligible participants exactly 51 days after TGE starts.
7. To be eligible for a Raffle one has to:

- Stake at least 99% of all\* tokens received through participating in TGE (Stakedrop and contribution) during the first 51 days of the campaign.
- At any time within the 51 days, there may not be a one-hour period where the amount of staked tokens is less than 99% of tokens received through participating in TGE(Stakedrop and contribution). In other words, if a participant receives new tokens from the TGE smart contract the participant has one hour to make sure that at least 99% of received tokens are staked.
- Throughout the campaign, during the 58 days, participants could not unstake tokens from the governor. Unstaking before receiving the reward makes a participant ineligible.

8. The draw will be conducted within 7 days after the campaign ends. The rewards will be distributed within 1 day after the drawing.
9. The draw will be organized by <@524689718076768273> and <@241980919068491777> publicly in a transparent and verifiable way.
10. The rewards will be added to the participants' stake in Abax Governor.
11. Founders are excluded from the Raffle.

In total half a million (500 000) ABAXes will be spent from foundation allocation for the campaigns to promote participating in the Abax Governance.

-\* _of all tokens received = of 40% that TGE contract sends to a stakedropper/contributor on the contribution/claim. Doesn't include the 60% that is vested_

## Randomness in Raffle

The Raffle uses the `random-seed-weighted-chooser` package for weighted randomness in selecting winners.

## License

This project is licensed under the [MIT License](LICENSE).
