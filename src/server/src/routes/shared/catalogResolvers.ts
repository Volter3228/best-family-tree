import type { MemberTransaction } from "../member/memberQueries.js";
import { ConflictError, ValidationError } from "../../utils/httpErrors.js";
import { sameName } from "../../utils/names.js";

type Tx = MemberTransaction;

export interface RoleRef {
  roleId?: string;
  roleName?: string;
  isLeaderPosition?: boolean;
}

export interface TeamTypeRef {
  teamTypeId?: string | null;
  teamTypeName?: string;
}

export interface TeamRef {
  name?: string;
  startYear?: number | null;
  endYear?: number | null;
}

type TeamTypeRecord = { id: string; name: string; isEvent: boolean };

// Role names are unique ignoring case. An existing role keeps its leader flag:
// leadership belongs to the role itself.
export const resolveRole = async (tx: Tx, ref: RoleRef) => {
  if (ref.roleId) {
    const role = await tx.role.findUnique({ where: { id: ref.roleId } });
    if (!role) throw new ValidationError("Unknown role");
    return role;
  }

  const name = ref.roleName!;
  const existing = await tx.role.findFirst({ where: { name: sameName(name) } });
  if (existing) return existing;

  return tx.role.create({
    data: { name, isLeaderPosition: Boolean(ref.isLeaderPosition) },
  });
};

export const resolveTeamType = async (
  tx: Tx,
  ref: TeamTypeRef,
): Promise<TeamTypeRecord | null> => {
  if (ref.teamTypeId) {
    const teamType = await tx.teamType.findUnique({
      where: { id: ref.teamTypeId },
    });
    if (!teamType) throw new ValidationError("Unknown team type");
    return teamType;
  }

  const name = ref.teamTypeName;
  if (!name) return null;

  const existing = await tx.teamType.findFirst({
    where: { name: sameName(name) },
  });
  return existing ?? tx.teamType.create({ data: { name } });
};

/**
 * The name a team gets when the user gives none: "<type> <start year>" for
 * events (the year is then required) or just the type name for working groups.
 */
export const deriveTeamName = (
  teamType: TeamTypeRecord | null,
  startYear?: number | null,
) => {
  if (!teamType) return undefined;
  if (!teamType.isEvent) return teamType.name;
  if (startYear == null) {
    throw new ValidationError(
      `Start year is required for "${teamType.name}" when the team has no name`,
    );
  }
  return `${teamType.name} ${startYear}`;
};

/**
 * Find the team a position refers to, or create it. Team names are globally
 * unique, so a name identifies its team (and type); the period is only used
 * when the team is created.
 */
export const resolveTeam = async (
  tx: Tx,
  teamType: TeamTypeRecord | null,
  ref: TeamRef,
) => {
  const name = ref.name ?? deriveTeamName(teamType, ref.startYear);
  if (!name) return null;

  const existing = await tx.team.findFirst({ where: { name: sameName(name) } });
  if (existing) {
    if (teamType && existing.teamTypeId && existing.teamTypeId !== teamType.id) {
      throw new ConflictError(
        `Team "${existing.name}" already exists in another team type`,
      );
    }
    if (teamType && !existing.teamTypeId) {
      return tx.team.update({
        where: { id: existing.id },
        data: { teamTypeId: teamType.id },
      });
    }
    return existing;
  }

  return tx.team.create({
    data: {
      name,
      teamTypeId: teamType?.id ?? null,
      startYear: ref.startYear ?? null,
      endYear: ref.endYear ?? null,
    },
  });
};
