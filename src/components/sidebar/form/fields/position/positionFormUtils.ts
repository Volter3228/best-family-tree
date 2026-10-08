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

export const getTeamTypeOptions = (
  teamTypes: TeamType[],
): DropdownOption[] =>
  teamTypes.map((teamType) => ({
    value: teamType.id,
    text: teamType.name,
  }));

export const getRoleOptions = (
  roles: { id: string; name: string }[],
): DropdownOption[] =>
  roles.map((role) => ({ value: role.id, text: role.name }));

// Names of the selected team type's teams, or of every team when none is chosen.
export const getTeamOptions = (
  teams: Team[],
  teamTypeId?: string,
): DropdownOption[] =>
  teams
    .filter((team) => !teamTypeId || team.teamTypeId === teamTypeId)
    .map((team) => ({ value: team.name, text: team.name }));

export const getPositionRowSummary = (
  row: PositionFormRow,
  teamTypes: TeamType[],
): string => {
  const title = row.roleName.trim() || "Нова посада";
  const context =
    row.teamName?.trim() ||
    teamTypes.find((teamType) => teamType.id === row.teamTypeId)?.name ||
    row.teamTypeName ||
    row.organization?.trim();
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
  | { kind: "standalone" };

export const getRowPeriod = (
  teams: Team[],
  row: PositionFormRow,
): PositionPeriod => {
  if (row.teamName?.trim()) {
    const team = findTeamByName(teams, row.teamName);
    return team ? { kind: "existingTeam", team } : { kind: "newTeam" };
  }
  return row.teamTypeId || row.teamTypeName
    ? { kind: "newTeam" }
    : { kind: "standalone" };
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
    teamTypeName: undefined,
    teamStartYear: undefined,
    teamEndYear: undefined,
  };
};

// Picking a team type drops the team name only when it names an existing team
// of another type (re-picking the same type changes nothing).
export const getTeamTypeSelectionPatch = (
  teams: Team[],
  row: PositionFormRow,
  teamTypeId: string,
  text: string,
): Partial<PositionFormRow> | null => {
  const teamTypeName = teamTypeId ? undefined : text.trim() || undefined;
  if (
    teamTypeId
      ? teamTypeId === row.teamTypeId
      : teamTypeName === row.teamTypeName && !row.teamTypeId
  ) {
    return null;
  }

  const currentTeam = findTeamByName(teams, row.teamName);
  const dropsTeam =
    !!currentTeam && (currentTeam.teamTypeId ?? "") !== teamTypeId;

  return {
    teamTypeId: teamTypeId || undefined,
    teamTypeName,
    ...(dropsTeam && { teamName: undefined }),
  };
};
