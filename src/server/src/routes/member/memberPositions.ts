import type { MemberTransaction } from "./memberQueries.js";
import type { PositionInput } from "./memberPayload.js";
import {
  resolveRole,
  resolveTeam,
  resolveTeamType,
} from "../shared/catalogResolvers.js";

interface ResolvedPosition {
  roleId: string;
  teamId: string | null;
  organization: string | null;
  startYear: number | null;
  endYear: number | null;
}

const getPositionKey = (position: ResolvedPosition) =>
  [
    position.roleId,
    position.teamId ?? "",
    position.organization ?? "",
    position.startYear ?? "",
    position.endYear ?? "",
  ].join("|");

const resolvePosition = async (
  tx: MemberTransaction,
  position: PositionInput,
): Promise<ResolvedPosition> => {
  const role = await resolveRole(tx, position);
  const teamType = await resolveTeamType(tx, position);
  const team = await resolveTeam(tx, teamType, {
    name: position.teamName,
    startYear: position.teamStartYear,
    endYear: position.teamEndYear,
  });

  // A team carries the period; only standalone positions keep their own.
  return {
    roleId: role.id,
    teamId: team?.id ?? null,
    organization: team ? null : (position.organization ?? null),
    startYear: team ? null : (position.startYear ?? null),
    endYear: team ? null : (position.endYear ?? null),
  };
};

/**
 * Make the member's positions match `positions` while keeping the rows that did
 * not change (ids and timestamps survive). Only exact duplicates are merged;
 * several roles in the same team are all stored.
 */
export const syncPositions = async (
  tx: MemberTransaction,
  memberId: string,
  positions: PositionInput[],
) => {
  const desired = new Map<string, ResolvedPosition>();
  for (const position of positions) {
    const resolved = await resolvePosition(tx, position);
    desired.set(getPositionKey(resolved), resolved);
  }

  const existing = await tx.memberPosition.findMany({ where: { memberId } });
  const keptKeys = new Set<string>();
  const keptIds: string[] = [];
  for (const row of existing) {
    const key = getPositionKey(row);
    if (desired.has(key) && !keptKeys.has(key)) {
      keptKeys.add(key);
      keptIds.push(row.id);
    }
  }

  await tx.memberPosition.deleteMany({
    where: { memberId, id: { notIn: keptIds } },
  });

  const created = [...desired].filter(([key]) => !keptKeys.has(key));
  if (created.length > 0) {
    await tx.memberPosition.createMany({
      data: created.map(([, position]) => ({ memberId, ...position })),
    });
  }
};
