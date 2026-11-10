import prisma from "../db/prisma/clientInstance.js";
import { ConflictError, HttpError, NotFoundError } from "../utils/httpErrors.js";
import { answerMatches } from "./answerMatching.js";
import {
  CHALLENGE_TTL_MS,
  MIN_ACTIVE_QUESTIONS,
  QUESTIONS_SHOWN,
} from "./config.js";
import {
  isExpired,
  isSolved,
  pickRandom,
  swapQuestion,
} from "./challengeRules.js";

export type ChallengeView = {
  id: string;
  swapsLeft: number;
  questions: { id: string; prompt: string; solved: boolean }[];
};

const toView = async (challenge: {
  id: string;
  questionIds: string[];
  solvedQuestionIds: string[];
  swapsLeft: number;
}): Promise<ChallengeView> => {
  const rows = await prisma.signInQuestion.findMany({
    where: { id: { in: challenge.questionIds } },
    select: { id: true, prompt: true },
  });
  return {
    id: challenge.id,
    swapsLeft: challenge.swapsLeft,
    questions: challenge.questionIds.map((id) => ({
      id,
      prompt: rows.find((r) => r.id === id)?.prompt ?? "",
      solved: challenge.solvedQuestionIds.includes(id),
    })),
  };
};

const loadChallenge = async (id: string) => {
  const challenge = await prisma.signInChallenge.findUnique({ where: { id } });
  if (!challenge) throw new NotFoundError("Challenge not found");
  if (isExpired(challenge)) {
    await prisma.signInChallenge.delete({ where: { id } }).catch(() => {});
    throw new HttpError(410, "Challenge expired");
  }
  return challenge;
};

export const createChallenge = async () => {
  const active = await prisma.signInQuestion.findMany({
    where: { isActive: true },
    select: { id: true },
  });
  if (active.length < MIN_ACTIVE_QUESTIONS) {
    throw new HttpError(503, "Questions are not configured");
  }
  const challenge = await prisma.signInChallenge.create({
    data: {
      questionIds: pickRandom(
        active.map((q) => q.id),
        QUESTIONS_SHOWN,
      ),
      expiresAt: new Date(Date.now() + CHALLENGE_TTL_MS),
    },
  });
  // Opportunistic cleanup of dead challenges.
  await prisma.signInChallenge
    .deleteMany({ where: { expiresAt: { lt: new Date() } } })
    .catch(() => {});
  return toView(challenge);
};

export const swapChallengeQuestion = async (
  challengeId: string,
  questionId: string,
) => {
  const challenge = await loadChallenge(challengeId);
  const active = await prisma.signInQuestion.findMany({
    where: { isActive: true },
    select: { id: true },
  });
  const result = swapQuestion(
    challenge,
    questionId,
    active.map((q) => q.id),
  );
  if (!result.ok) throw new ConflictError(`Cannot swap: ${result.reason}`);

  const updated = await prisma.signInChallenge.update({
    where: { id: challengeId },
    data: { questionIds: result.questionIds, swapsLeft: result.swapsLeft },
  });
  return toView(updated);
};

export type VerifyResult =
  | { complete: true }
  | { complete: false; view: ChallengeView; wrong: string[] };

/** Checks the given answers; correct ones stay solved, wrong ones are returned. */
export const verifyAnswers = async (
  challengeId: string,
  answers: Record<string, string>,
): Promise<VerifyResult> => {
  const challenge = await loadChallenge(challengeId);
  const questions = await prisma.signInQuestion.findMany({
    where: { id: { in: challenge.questionIds } },
  });

  const solved = new Set(challenge.solvedQuestionIds);
  const wrong: string[] = [];
  for (const question of questions) {
    if (solved.has(question.id)) continue;
    const given = answers[question.id];
    if (typeof given !== "string" || !given.trim()) continue;
    if (answerMatches(given, question.acceptedAnswers)) solved.add(question.id);
    else wrong.push(question.id);
  }

  const next = { ...challenge, solvedQuestionIds: [...solved] };
  if (isSolved(next)) {
    await prisma.signInChallenge.delete({ where: { id: challengeId } });
    return { complete: true };
  }

  await prisma.signInChallenge.update({
    where: { id: challengeId },
    data: { solvedQuestionIds: next.solvedQuestionIds },
  });
  return { complete: false, view: await toView(next), wrong };
};
