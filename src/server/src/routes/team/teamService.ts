import prisma from "../../db/prisma/clientInstance.js";
import type { TeamBody, TeamMembersBody } from "../../utils/catalogValidation.js";
import {
  ConflictError,
  NotFoundError,
  ValidationError,
} from "../../utils/httpErrors.js";
import { sameName } from "../../utils/names.js";
import {
  deriveTeamName,
  resolveRole,
  resolveTeamType,
} from "../shared/catalogResolvers.js";
import type { MemberTransaction } from "../member/memberQueries.js";

export const TEAM_INCLUDE = {
  teamType: true,
  _count: { select: { positions: true } },
} as const;

const assertNameFree = async (
  tx: MemberTransaction,
  name: string,
  exceptId?: string,
) => {
  const taken = await tx.team.findFirst({
    where: { name: sameName(name), ...(exceptId && { NOT: { id: exceptId } }) },
  });
  if (taken) throw new ConflictError("A team with this name already exists");
};

const assertOngoingHasStart = (
  isOngoing: boolean | undefined,
  startYear: number | null | undefined,
) => {
  if (isOngoing && startYear == null) {
    throw new ValidationError("An ongoing team needs a start year");
  }
};

export const getTeamDetails = async (id: string) => {
  const team = await prisma.team.findUnique({
    where: { id },
    include: {
      ...TEAM_INCLUDE,
      positions: {
        include: { role: true, member: { select: { id: true, name: true } } },
        orderBy: { createdAt: "asc" },
      },
    },
  });
  if (!team) throw new NotFoundError("Team not found");
  return team;
};

export const createTeam = (body: TeamBody, iconUrl: string | null) =>
  prisma.$transaction(async (tx) => {
    const teamType = await resolveTeamType(tx, body);
    const name = body.name ?? deriveTeamName(teamType, body.startYear);
    if (!name) throw new ValidationError("Team name is required");
    await assertNameFree(tx, name);
    assertOngoingHasStart(body.isOngoing, body.startYear);

    return tx.team.create({
      data: {
        name,
        description: body.description ?? null,
        iconUrl,
        teamTypeId: teamType?.id ?? null,
        startYear: body.startYear ?? null,
        endYear: body.isOngoing ? null : (body.endYear ?? null),
        isOngoing: Boolean(body.isOngoing),
      },
      include: TEAM_INCLUDE,
    });
  });

/**
 * `icon`: undefined keeps the logo, null removes it, a string replaces it.
 * Returns the logo URL that is no longer used (to delete it from storage).
 */
export const updateTeam = (
  id: string,
  body: TeamBody,
  icon: string | null | undefined,
) =>
  prisma.$transaction(async (tx) => {
    const existing = await tx.team.findUnique({ where: { id } });
    if (!existing) throw new NotFoundError("Team not found");
    if (body.name && body.name.toLowerCase() !== existing.name.toLowerCase()) {
      await assertNameFree(tx, body.name, id);
    }

    // undefined keeps the type, null clears it.
    const teamType =
      body.teamTypeId === null
        ? null
        : body.teamTypeId || body.teamTypeName
          ? await resolveTeamType(tx, body)
          : undefined;

    const startYear =
      body.startYear === undefined ? existing.startYear : body.startYear;
    const isOngoing =
      body.isOngoing === undefined ? existing.isOngoing : body.isOngoing;
    let endYear = body.endYear === undefined ? existing.endYear : body.endYear;
    assertOngoingHasStart(isOngoing, startYear);
    if (isOngoing) endYear = null;
    if (startYear != null && endYear != null && endYear < startYear) {
      throw new ValidationError("End year must not be before start year");
    }

    const team = await tx.team.update({
      where: { id },
      data: {
        name: body.name ?? existing.name,
        description:
          body.description === undefined
            ? existing.description
            : body.description,
        teamTypeId:
          teamType === undefined ? existing.teamTypeId : (teamType?.id ?? null),
        startYear,
        endYear,
        isOngoing,
        ...(icon !== undefined && { iconUrl: icon }),
      },
      include: TEAM_INCLUDE,
    });

    return {
      team,
      unusedIconUrl: icon !== undefined ? existing.iconUrl : null,
    };
  });

/** Removes the team together with its members' positions in it. */
export const deleteTeam = (id: string) =>
  prisma.$transaction(async (tx) => {
    const team = await tx.team.findUnique({ where: { id } });
    if (!team) throw new NotFoundError("Team not found");

    await tx.memberPosition.deleteMany({ where: { teamId: id } });
    await tx.team.delete({ where: { id } });
    return team;
  });

/**
 * Make the team's roster match `body`: one position per (member, role) pair.
 * Unchanged positions are kept; a member's positions elsewhere are untouched.
 */
export const syncTeamMembers = (id: string, body: TeamMembersBody) =>
  prisma.$transaction(async (tx) => {
    const team = await tx.team.findUnique({ where: { id } });
    if (!team) throw new NotFoundError("Team not found");

    const memberIds = [...new Set(body.members.map((row) => row.memberId))];
    const found = await tx.member.count({ where: { id: { in: memberIds } } });
    if (found !== memberIds.length) throw new ValidationError("Unknown member");

    const desired = new Map<string, { memberId: string; roleId: string }>();
    for (const row of body.members) {
      const role = await resolveRole(tx, row);
      desired.set(`${row.memberId}|${role.id}`, {
        memberId: row.memberId,
        roleId: role.id,
      });
    }

    const existing = await tx.memberPosition.findMany({
      where: { teamId: id },
    });
    const existingKeys = new Set(
      existing.map((row) => `${row.memberId}|${row.roleId}`),
    );

    await tx.memberPosition.deleteMany({
      where: {
        id: {
          in: existing
            .filter((row) => !desired.has(`${row.memberId}|${row.roleId}`))
            .map((row) => row.id),
        },
      },
    });

    const created = [...desired].filter(([key]) => !existingKeys.has(key));
    if (created.length > 0) {
      await tx.memberPosition.createMany({
        data: created.map(([, row]) => ({ ...row, teamId: id })),
      });
    }
  });
