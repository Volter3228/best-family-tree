import type { DropdownOption, TeamType, PositionFormRow, Team } from "@/types";
import { formatYearRange } from "@/utils";

export const MIN_POSITION_YEAR = 1990;
export const MAX_POSITION_YEAR = new Date().getFullYear() + 1;

const EMPTY_POSITION_ROW: Omit<PositionFormRow, "id"> = {
  roleName: "",
};

export const createEmptyPositionRow = (): PositionFormRow => ({
  ...EMPTY_POSITION_ROW,
  id: crypto.randomUUID(),
});

export const getTeamTypeOptions = (teamTypes: TeamType[]): DropdownOption[] =>
  teamTypes.map((teamType) => ({
    value: teamType.id,
    text: teamType.name,
  }));

export const getRoleOptions = (
  roles: { id: string; name: string }[],
): DropdownOption[] =>
  roles.map((role) => ({ value: role.id, text: role.name }));

// The stored role name for a picked option; typed text stays as typed.
export const resolveRoleName = (
  roles: { id: string; name: string }[],
  roleId: string,
  text: string,
): string => roles.find((role) => role.id === roleId)?.name ?? text;

// Names of the selected team type's teams, or of every team when none is chosen.
export const getTeamOptions = (
  teams: Team[],
  teamTypeId: string | undefined,
): DropdownOption[] =>
  teams
    .filter((team) => !teamTypeId || team.teamTypeId === teamTypeId)
    .map((team) => ({ value: team.name, text: team.name }));

export const getPositionRowSummary = (
  row: PositionFormRow,
  teamTypes: TeamType[],
  newPositionLabel: string,
): string => {
  const roleName = row.roleName.trim();
  const title = roleName ? roleName : newPositionLabel;
  const teamName = row.teamName?.trim();
  const typeName = teamTypes.find(
    (teamType) => teamType.id === row.teamTypeId,
  )?.name;
  const context = teamName || typeName || row.organization?.trim();
  const years = formatYearRange({
    start: row.teamStartYear ?? row.startYear,
    end: row.teamEndYear ?? row.endYear,
  });
  return [context, title, years].filter(Boolean).join(" · ");
};

// Team names are unique (ignoring case), so a name identifies its team.
export const findTeamByName = (
  teams: Team[],
  name?: string,
): Team | undefined => {
  const wanted = name?.trim().toLowerCase();
  return wanted
    ? teams.find((team) => team.name.toLowerCase() === wanted)
    : undefined;
};

/**
 * Where the row's years live:
 * - an existing team already has its period (shown, not editable here);
 * - a new team (or a team named after type + year) gets the years entered here;
 * - without any team the row is a standalone position with its own years.
 */
export type PositionPeriod =
  | { kind: "existingTeam"; team: Team }
  | { kind: "newTeam" }
  // The row names a team that does not exist and cannot be created here (the
  // server only creates new teams as editions of an event type).
  | { kind: "unavailable" }
  | { kind: "standalone" };

export const getRowPeriod = (
  teams: Team[],
  row: PositionFormRow,
  teamTypes: TeamType[],
): PositionPeriod => {
  const teamType = teamTypes.find(({ id }) => id === row.teamTypeId);
  if (row.teamName?.trim()) {
    const team = findTeamByName(teams, row.teamName);
    if (team) return { kind: "existingTeam", team };
    return teamType?.isEvent ? { kind: "newTeam" } : { kind: "unavailable" };
  }
  if (!teamType) return { kind: "standalone" };
  if (teamType.isEvent) return { kind: "newTeam" };
  // A team without a name falls back to the type's own team.
  const own = findTeamByName(teams, teamType.name);
  return own ? { kind: "existingTeam", team: own } : { kind: "unavailable" };
};

// Picking an existing team also picks its type; its period comes with it.
export const getTeamSelectionPatch = (
  teams: Team[],
  row: PositionFormRow,
  teamName: string,
): Partial<PositionFormRow> => {
  if (!teamName.trim()) return { teamName: undefined };

  const team = findTeamByName(teams, teamName);
  if (!team) return { teamName };

  return {
    teamName: team.name,
    teamTypeId: team.teamTypeId ?? row.teamTypeId,
    teamStartYear: undefined,
    teamEndYear: undefined,
  };
};

// Picking a team type drops the team name when it names an existing team of
// another type, or a new team the chosen type cannot create (only event types
// create teams). Re-picking the same type changes nothing. Team types are
// pick-only, so an empty value means the field was cleared.
export const getTeamTypeSelectionPatch = (
  teams: Team[],
  row: PositionFormRow,
  teamTypeId: string,
  teamTypes: TeamType[],
): Partial<PositionFormRow> | null => {
  if (teamTypeId === (row.teamTypeId ?? "")) return null;

  const currentTeam = findTeamByName(teams, row.teamName);
  const isEvent = teamTypes.find(({ id }) => id === teamTypeId)?.isEvent;
  const dropsTeam = currentTeam
    ? (currentTeam.teamTypeId ?? "") !== teamTypeId
    : !!row.teamName?.trim() && !isEvent;

  return {
    teamTypeId: teamTypeId || undefined,
    ...(dropsTeam && { teamName: undefined }),
  };
};
