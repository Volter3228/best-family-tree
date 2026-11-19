import type { AccessRank, Session } from "./types.js";

const RANK: Record<AccessRank, number> = { VIEWER: 0, EDITOR: 1, ADMIN: 2 };

export const hasAccess = (session: Session, needed: AccessRank) =>
  RANK[session.level] >= RANK[needed];

/**
 * Members with an access grant are editable only by Admins and by themselves,
 * so an Editor can not tamper with another Editor or an Admin.
 */
export const canEditMember = (
  session: Session,
  target: { id: string; hasGrant: boolean },
) => {
  if (!hasAccess(session, "EDITOR")) return false;
  if (!target.hasGrant) return true;
  return session.level === "ADMIN" || session.memberId === target.id;
};

/** Questions sessions are anonymous: they can read but never propose changes. */
export const canSuggest = (session: Session) => session.method !== "QUESTIONS";

/** Editing one's own profile needs a personal sign-in tied to a member. */
export const canSelfServe = (session: Session) =>
  session.method !== "QUESTIONS" && !!session.memberId;

/** Admins can not change or revoke their own grant (no lock-out). */
export const isOwnGrant = (session: Session, memberId: string) =>
  session.memberId === memberId;

/** Admins change or remove Editor grants only; Admin grants live in the CLI. */
export const canManageGrant = (
  session: Session,
  currentLevel: "EDITOR" | "ADMIN" | null,
) => hasAccess(session, "ADMIN") && currentLevel !== "ADMIN";
