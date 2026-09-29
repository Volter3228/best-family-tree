import type { MemberTransaction } from "./memberQueries.js";
import type { PositionInput } from "./memberPayload.js";

const findOrCreateRole = async (
  tx: MemberTransaction,
  position: PositionInput,
) => {
  if (position.roleId) return { id: position.roleId };

  if (position.roleName) {
    return tx.role.upsert({
      where: { name: position.roleName },
      update: {},
      create: {
        name: position.roleName,
        isLeaderPosition: Boolean(position.isLeaderPosition),
      },
    });
  }

  throw new Error("Position must have either roleId or roleName");
};

const findOrCreateEventTypeId = async (
  tx: MemberTransaction,
  position: PositionInput,
): Promise<string | null> => {
  if (position.eventTypeId) return position.eventTypeId;

  const name = position.eventTypeName?.trim();
  if (!name) return null;

  const eventType = await tx.eventType.upsert({
    where: { name },
    update: {},
    create: { name },
  });
  return eventType.id;
};

const findOrCreateTeam = async (
  tx: MemberTransaction,
  eventTypeId: string | null,
  position: PositionInput,
) => {
  const teamName = position.teamName?.trim();
  if (!teamName) return undefined;

  const where = { eventTypeId, name: teamName };
  const existing = await tx.team.findFirst({ where });
  if (existing) return existing;

  return await tx.team.create({ data: where });
};

export const syncPositions = async (
  tx: MemberTransaction,
  memberId: string,
  positions: PositionInput[],
) => {
  await tx.memberPosition.deleteMany({ where: { memberId } });

  const seen = new Set<string>();
  for (const position of positions) {
    const role = await findOrCreateRole(tx, position);
    const eventTypeId = await findOrCreateEventTypeId(tx, position);
    const team = await findOrCreateTeam(tx, eventTypeId, position);

    const year = position.year ?? null;
    const key = `${role.id}|${team?.id ?? ""}|${year ?? ""}`;
    if (seen.has(key)) continue;
    seen.add(key);

    await tx.memberPosition.create({
      data: {
        memberId,
        roleId: role.id,
        teamId: team?.id,
        year,
        startDate: position.startDate ? new Date(position.startDate) : null,
        endDate: position.endDate ? new Date(position.endDate) : null,
      },
    });
  }
};
