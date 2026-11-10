export const SESSION_COOKIE = "bft_session";

const DAY_MS = 24 * 60 * 60 * 1000;

/** Sliding lifetimes: questions are anonymous, so they expire sooner. */
export const SESSION_TTL_MS = {
  QUESTIONS: 30 * DAY_MS,
  PERSONAL: 90 * DAY_MS,
} as const;

export const CHALLENGE_TTL_MS = 10 * 60 * 1000;
export const QUESTIONS_SHOWN = 3;
export const MIN_ACTIVE_QUESTIONS = QUESTIONS_SHOWN + 1;

export const isProduction = () => process.env.NODE_ENV === "production";
export const isDemoMode = () => process.env.DEMO_MODE === "true";
