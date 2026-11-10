import { http } from "@/libs/http";
import { ENDPOINTS } from "@/constants/endpoints";

export type AccessLevel = "VIEWER" | "EDITOR" | "ADMIN";
export type AuthMethod = "QUESTIONS" | "EMAIL" | "GOOGLE" | "TELEGRAM";

export interface SessionInfo {
  demo: boolean;
  method: AuthMethod;
  level: AccessLevel;
  memberId?: string | null;
  // Grant holders an Editor may not edit (themselves excluded by canEdit).
  lockedMemberIds?: string[];
  email?: string | null;
  member?: { id: string; name: string; photo: string | null } | null;
}

export interface ChallengeQuestion {
  id: string;
  prompt: string;
  solved: boolean;
}

export interface Challenge {
  id: string;
  swapsLeft: number;
  questions: ChallengeQuestion[];
}

export type VerifyOutcome =
  | { kind: "ok" }
  | { kind: "wrong"; wrong: string[]; challenge: Challenge }
  | { kind: "partial"; challenge: Challenge }
  | { kind: "locked"; retryAfterSeconds: number }
  | { kind: "expired" };

const post = (endpoint: string, body?: unknown) =>
  http(endpoint, {
    method: "POST",
    body: body === undefined ? undefined : JSON.stringify(body),
  });

export const fetchSession = async (): Promise<SessionInfo | null> => {
  const res = await http(ENDPOINTS.authMe, { cache: "no-store" });
  return res.ok ? ((await res.json()) as SessionInfo) : null;
};

export const startChallenge = async (): Promise<Challenge> => {
  const res = await post(ENDPOINTS.questionsChallenge);
  if (!res.ok) throw new Error(String(res.status));
  return res.json();
};

export const swapQuestion = async (
  challengeId: string,
  questionId: string,
): Promise<Challenge> => {
  const res = await post(ENDPOINTS.questionsSwap(challengeId), { questionId });
  if (!res.ok) throw new Error(String(res.status));
  return res.json();
};

export const verifyAnswers = async (
  challengeId: string,
  answers: Record<string, string>,
): Promise<VerifyOutcome> => {
  const res = await post(ENDPOINTS.questionsVerify, { challengeId, answers });
  if (res.status === 429) {
    const body = await res.json().catch(() => null);
    return { kind: "locked", retryAfterSeconds: body?.retryAfterSeconds ?? 900 };
  }
  if (res.status === 404 || res.status === 410) return { kind: "expired" };
  if (!res.ok && res.status !== 401) throw new Error(String(res.status));

  const body = await res.json();
  if (body.ok) return { kind: "ok" };
  return body.wrong.length > 0
    ? { kind: "wrong", wrong: body.wrong, challenge: body.challenge }
    : { kind: "partial", challenge: body.challenge };
};

export const logout = () => post(ENDPOINTS.authLogout);

export type RequestCodeOutcome = "sent" | "limited";

/** The server answers the same for every address, so "sent" means "asked". */
export const requestEmailCode = async (
  email: string,
): Promise<RequestCodeOutcome> => {
  const res = await post(ENDPOINTS.emailRequest, { email });
  if (res.status === 429) return "limited";
  if (!res.ok) throw new Error(String(res.status));
  return "sent";
};

/** The new session, or null when the code is wrong, expired or used up. */
export const verifyEmailCode = async (
  email: string,
  code: string,
): Promise<SessionInfo | null> => {
  const res = await post(ENDPOINTS.emailVerify, { email, code });
  if (res.status === 401) return null;
  if (!res.ok) throw new Error(String(res.status));
  return res.json();
};
