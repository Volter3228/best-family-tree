import prisma from "../../db/prisma/clientInstance.js";
import type { Session } from "../../auth/types.js";
import { HttpError } from "../../utils/httpErrors.js";
import { exceedsPendingCap } from "../../utils/suggestions.js";

export type SuggestionTarget = { kind: "member" | "team"; id: string };

/** A session's own suggestions: by member when it has one, else by email. */
export const authorWhere = (session: Session) =>
  session.memberId
    ? { authorMemberId: session.memberId }
    : { authorEmail: session.email };

export const targetWhere = (target: SuggestionTarget) =>
  target.kind === "member" ? { memberId: target.id } : { teamId: target.id };

/** An author may have pending suggestions on a limited number of targets. */
export const assertUnderPendingCap = async (
  session: Session,
  target: SuggestionTarget,
) => {
  const pending = await prisma.editSuggestion.findMany({
    where: { status: "PENDING", ...authorWhere(session) },
    select: { memberId: true, teamId: true },
    distinct: ["memberId", "teamId"],
  });
  const keys = new Set(
    pending.map((p) =>
      p.memberId ? `member:${p.memberId}` : `team:${p.teamId}`,
    ),
  );
  if (exceedsPendingCap(keys, `${target.kind}:${target.id}`)) {
    throw new HttpError(
      429,
      "Too many pending suggestions",
      "too_many_pending",
    );
  }
};
