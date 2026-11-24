import type { MemberPosition, Role, Team, TeamType } from "@/types";
import { formatYearRange, getPositionYearLabel } from "@/utils/positions";

export const POSITION_FIELDS = [
  "position:add",
  "position:replace",
  "position:remove",
] as const;

export const isPositionField = (field: string) =>
  (POSITION_FIELDS as readonly string[]).includes(field);

// A position as the server stores it in a suggestion. A role or team without
// an id does not exist yet: approving the suggestion creates it.
export interface PositionValue {
  id?: string;
  roleId?: string;
  roleName: string;
  teamId?: string;
  teamName?: string;
  teamTypeId?: string;
  teamStartYear?: number;
  teamEndYear?: number;
  organization?: string;
  startYear?: number;
  endYear?: number;
}

export const parsePositionValue = (
  raw: string | null | undefined,
): PositionValue | null => {
  if (!raw) return null;
  try {
    const value = JSON.parse(raw) as PositionValue;
    return typeof value?.roleName === "string" ? value : null;
  } catch {
    return null;
  }
};

interface Catalog {
  teams: Team[];
  teamTypes: TeamType[];
  roles: Pick<Role, "id" | "name" | "isLeaderPosition">[];
}

export interface BadgePosition {
  position: MemberPosition;
  years: string;
  roleIsNew: boolean;
  teamIsNew: boolean;
}

const sameName = (a: string, b?: string) =>
  !!b && a.toLowerCase() === b.toLowerCase();

/** A position shaped for PositionBadge, with the catalog's current names. */
export const toBadgePosition = (
  value: PositionValue,
  { teams, teamTypes, roles }: Catalog,
): BadgePosition => {
  const role =
    roles.find((r) => r.id === value.roleId) ??
    roles.find((r) => sameName(r.name, value.roleName));
  const storedTeam =
    teams.find((t) => t.id === value.teamId) ??
    (value.teamName
      ? teams.find((t) => sameName(t.name, value.teamName))
      : undefined);
  const teamType = teamTypes.find(
    (type) => type.id === (storedTeam?.teamType?.id ?? value.teamTypeId),
  );
  const team: Team | null = storedTeam
    ? { ...storedTeam, teamType: storedTeam.teamType ?? teamType }
    : value.teamName
      ? {
          id: "",
          name: value.teamName,
          startYear: value.teamStartYear,
          endYear: value.teamEndYear,
          teamType,
        }
      : null;

  const position: MemberPosition = {
    id: value.id ?? "",
    memberId: "",
    roleId: role?.id ?? "",
    teamId: team?.id || null,
    organization: team ? null : (value.organization ?? null),
    startYear: team ? null : (value.startYear ?? null),
    endYear: team ? null : (value.endYear ?? null),
    role: {
      id: role?.id ?? "",
      name: role?.name ?? value.roleName,
      isLeaderPosition: role?.isLeaderPosition ?? false,
    },
    team,
  };
  return {
    position,
    years: getPositionYearLabel(position),
    roleIsNew: !role,
    teamIsNew: !!value.teamName && !storedTeam,
  };
};

/** "Team · Role · years" in one line, for the pending-suggestion list. */
export const summarizePosition = (value: PositionValue) =>
  [
    value.teamName ?? value.organization,
    value.roleName,
    formatYearRange({
      start: value.teamStartYear ?? value.startYear,
      end: value.teamEndYear ?? value.endYear,
    }),
  ]
    .filter(Boolean)
    .join(" · ");
