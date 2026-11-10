export type ChallengeState = {
  questionIds: string[];
  solvedQuestionIds: string[];
  swapsLeft: number;
  expiresAt: Date;
};

export const isExpired = (challenge: ChallengeState, now = new Date()) =>
  challenge.expiresAt.getTime() <= now.getTime();

export const isSolved = (challenge: ChallengeState) =>
  challenge.questionIds.every((id) => challenge.solvedQuestionIds.includes(id));

/** Picks `count` distinct random items. */
export const pickRandom = <T>(items: T[], count: number): T[] => {
  const pool = [...items];
  const picked: T[] = [];
  while (picked.length < count && pool.length > 0) {
    const index = Math.floor(Math.random() * pool.length);
    picked.push(pool.splice(index, 1)[0]);
  }
  return picked;
};

export type SwapResult =
  | { ok: true; questionIds: string[]; swapsLeft: number }
  | { ok: false; reason: "no-swaps" | "solved" | "not-in-challenge" | "no-spare" };

/** Swaps one unsolved question for a spare one; once per challenge. */
export const swapQuestion = (
  challenge: ChallengeState,
  questionId: string,
  activeIds: string[],
  pick: (spare: string[]) => string = (spare) => pickRandom(spare, 1)[0],
): SwapResult => {
  if (challenge.swapsLeft <= 0) return { ok: false, reason: "no-swaps" };
  if (!challenge.questionIds.includes(questionId))
    return { ok: false, reason: "not-in-challenge" };
  if (challenge.solvedQuestionIds.includes(questionId))
    return { ok: false, reason: "solved" };

  const spare = activeIds.filter((id) => !challenge.questionIds.includes(id));
  if (spare.length === 0) return { ok: false, reason: "no-spare" };

  const replacement = pick(spare);
  return {
    ok: true,
    swapsLeft: challenge.swapsLeft - 1,
    questionIds: challenge.questionIds.map((id) =>
      id === questionId ? replacement : id,
    ),
  };
};
