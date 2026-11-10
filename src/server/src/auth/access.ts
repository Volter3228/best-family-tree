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
