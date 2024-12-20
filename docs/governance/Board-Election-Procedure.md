---
id: board-election
title: Governing Board Election Procedure
---

FINOS uses a ranked-choice instant-runoff voting process for elections of Gold and Silver representatives on the Governing Board. These are the rules by which the results are tabulated. (Platinum representatives are not elected, but are appointed by individual Platinum members.)

I. Single-Winner Elections

In any contest for exactly one office conducted by ranked choice voting,each validly cast ballot shall be initially counted as one vote for the candidate at its highest continuing ranking or as an exhausted ballot. If a candidate has more than half of the total votes counting for candidates, that candidate is elected and the tabulation is complete. Otherwise, the tiebreaker score is calculated and tabulation proceeds in rounds. Each round shall proceed sequentially as follows:
1. If two or fewer continuing candidates remain, the candidate with the greatest number of votes is elected and the tabulation is complete. Otherwise, the tabulation continues to paragraph 2.
1. The candidate with the fewest votes is defeated. Votes for the defeated candidate shall cease counting for the defeated candidate and shall be added to the totals of each ballot’s next-ranked continuing candidate or counted as exhausted ballots, and a new round begins with paragraph 1.


II. Multiple-Winner Elections

In any contest for more than one office conducted by ranked choice voting, each validly cast ballot shall be initially counted as one vote for its highest-ranked continuing candidate or as an exhausted ballot. The election threshold and tiebreaker score shall be calculated. Tabulation shall then proceed sequentially as follows:
1. If the number of continuing candidates whose vote totals exceed the election threshold is equal to the number of seats remaining to be filled, those candidates are elected and the tabulation is complete. If the number of continuing candidates is equal to or less than the number of seats remaining to be filled, then all continuing candidates are elected and the tabulation is complete. Otherwise, the tabulation continues to paragraph 2.
1. If no candidate has a vote total that exceeds the election threshold, the tabulation continues to paragraph 3. If at least one continuing candidate has a vote total that exceeds the election threshold, then the continuing candidate with the highest vote total is elected. The number of surplus votes for such candidate shall be calculated. The surplus fraction for such candidate shall be calculated. The new transfer value of each vote cast for such candidate shall be calculated. Votes for such candidate shall be added, at their new transfer values, to the totals of each ballot’s highest-ranked continuing candidate or counted as exhausted ballots, and a new round begins with paragraph 1. In all subsequent rounds, any candidates elected under this subsection shall have vote totals equal to the election threshold.
1. The candidate with the fewest votes is defeated. Then, if the number of continuing candidates is equal to the number of seats remaining to be filled, all continuing candidates are elected,and the tabulation is complete. Otherwise, votes for the defeated candidate shall cease counting for the defeated candidate and shall be added, at their current transfer values, to the totals of each ballot’s next-ranked continuing candidate or counted as exhausted ballots, and a new round begins with paragraph 1.

III. Ties

FINOS shall resolve prospective ties between candidates using a "backward" approach:
1. The vote count at the previous round is used to break the tie. Suppose we are selecting a candidate to eliminate at round 4 and Alice and Bob are tied for last place. The tie would be broken by comparing Alice and Bob's vote counts at round 3. If they are still tied at round 3, then round 2 is used and so forth.
2. If the candidates are tied at all rounds, then the tie is broken randomly.
   
IV. Definitions

For the purposes of this policy, the following terms have the following meanings:
* “Can be mathematically eliminated” means a candidate is part of a group of candidates such that:
  * if a candidate is in the group, then every continuing candidate with equal or fewer votes is also in the group;
  * the total votes for all candidates in the group is less than the number of votes for any continuing candidate not in the group;
  * for a single winner contest, there are at least two continuing candidates not in the group.
  * for a multi winner contest, the total votes for all candidates in the group is less than the election threshold;
  * for a multi winner contest, there are at least as many continuing candidates not in the group as there are seats remaining to be filled.
* “Continuing candidate” means any candidate that has not been defeated or elected.
* “Election threshold” means the number of votes sufficient for a candidate to be elected in a multi winner contest. The election threshold is calculated by dividing the total number of votes counting for continuing candidates in the first round by the sum of one plus the number of offices to be filled, rounding up to four decimal places.
* “Exhausted ballot” means a ballot that is not counted for any continuing candidate for one or more of the following reasons:
  * It does not rank any continuing candidates;
  * its highest continuing ranking contains an overvote; or
  * it includes two or more consecutive skipped rankings prior to its highest continuing ranking.
* “Highest continuing ranking” means the highest ranking for any continuing candidate.
* “Overvote” means a voter has ranked more than one candidate at the same ranking.
* “Ranking” means the number assigned by a voter to a candidate to express the voter’s choice for that candidate. A ranking of “1” is the highest ranking followed by “2” and then “3” and so on.
* “Round” means an instance of the sequence of voting tabulation beginning with paragraph 1 of Section I (Single-Winner Elections) or Section II (Multiple-Winner Elections).
* “Skipped ranking” means a voter has left a ranking blank and ranks a candidate at a subsequent ranking.
* “Surplus” means a positive difference between a candidate’s vote total and the election threshold.
* “Surplus fraction” means the number equal to a candidate’s surplus divided by that candidate’s vote total, calculated to four decimal places, ignoring any remainder.
* “Transfer value” means the proportion of a vote that a ballot will contribute to its highest continuing ranking. Each ballot begins with a transfer value of 1. If a ballot transfers from an elected candidate with a surplus, it receives a new transfer value. The new transfer value of such a ballot is calculated by multiplying the surplus fraction of the elected candidate by the ballot’s current transfer value, calculated to four decimal places, ignoring any remainder.

