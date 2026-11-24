import type { EditSuggestion } from "../../db/prisma/generated/client.js";
import {
  POSITION_REMOVE,
  POSITION_REPLACE,
  decodePosition,
} from "../../utils/suggestionPositions.js";
import { ValidationError } from "../../utils/httpErrors.js";
import type { MemberTransaction } from "../member/memberQueries.js";
import { getPositionKey, resolvePosition } from "../member/memberPositions.js";

export const applyPosition = async (
  tx: MemberTransaction,
  memberId: string,
  row: EditSuggestion,
) => {
  const old = decodePosition(row.fromValue);
  if (row.field === POSITION_REMOVE) {
    if (old?.id) {
      await tx.memberPosition.deleteMany({ where: { id: old.id, memberId } });
    }
    return;
  }

  const next = decodePosition(row.toValue);
  if (!next) {
    throw new ValidationError("Invalid positions", {
      code: "positions_invalid",
    });
  }
  // Creates the role or the event team when they do not exist yet.
  const resolved = await resolvePosition(tx, {
    roleId: next.roleId,
    roleName: next.roleName,
    teamTypeId: next.teamTypeId,
    teamName: next.teamName,
    teamStartYear: next.teamStartYear,
    teamEndYear: next.teamEndYear,
    organization: next.organization,
    startYear: next.startYear,
    endYear: next.endYear,
    teamTypeName: undefined,
    isLeaderPosition: undefined,
  });

  if (row.field === POSITION_REPLACE && old?.id) {
    const { count } = await tx.memberPosition.updateMany({
      where: { id: old.id, memberId },
      data: resolved,
    });
    // The old position is already gone (a forced stale approve): add the new one.
    if (count > 0) return;
  }

  const existing = await tx.memberPosition.findMany({ where: { memberId } });
  const key = getPositionKey(resolved);
  if (existing.some((p) => getPositionKey(p) === key)) return;
  await tx.memberPosition.create({ data: { memberId, ...resolved } });
};
