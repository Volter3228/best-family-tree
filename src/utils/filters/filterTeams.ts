import { Member } from "@/models";
import type { FilterState, MemberPosition, Team } from "@/types";
import { rangeBounds } from "./filterRange";

export type TeamFilters = Pick<
  FilterState,
  | "roleNames"
  | "teamTypeNames"
  | "teamYearFrom"
  | "teamYearTo"
  | "teamOnlyOngoing"
>;

// Whether any team criterion (including roles) is set.
export const isTeamFilterActive = (filters: TeamFilters): boolean =>
  filters.roleNames.length > 0 ||
  filters.teamTypeNames.length > 0 ||
  filters.teamYearFrom !== null ||
  filters.teamYearTo !== null ||
  filters.teamOnlyOngoing;

// A team's span of years: unknown ends fall back to the other end, and a team
// that is still running lasts until this year.
const getTeamSpan = (team: Team): [number, number] | null => {
  const start = team.startYear ?? team.endYear;
  if (start == null) return null;
  const end = team.isOngoing
    ? Math.max(new Date().getFullYear(), start)
    : (team.endYear ?? start);
  return [start, end];
};

// The team's span overlaps the filter's range (see rangeBounds).
const matchesPeriod = (
  team: Team,
  from: number | null,
  to: number | null,
): boolean => {
  const bounds = rangeBounds(from, to);
  if (!bounds) return true;
  const span = getTeamSpan(team);
  if (!span) return false;
  return span[1] >= bounds[0] && span[0] <= bounds[1];
};

/**
 * Team-level criteria (everything except roles): type, period, running.
 * Roles belong to positions, see `positionMatchesTeamFilters`.
 */
export const teamMatchesFilters = (
  team: Team,
  filters: TeamFilters,
): boolean => {
  const { teamTypeNames, teamOnlyOngoing } = filters;
  const { teamType } = team;

  if (teamTypeNames.length > 0) {
    const matches =
      !!teamType &&
      (teamTypeNames.includes(teamType.name) ||
        teamTypeNames.includes(teamType.id));
    if (!matches) return false;
  }
  if (teamOnlyOngoing && !team.isOngoing) return false;
  return matchesPeriod(team, filters.teamYearFrom, filters.teamYearTo);
};

export const hasRole = (position: MemberPosition, roleNames: string[]) =>
  roleNames.length === 0 ||
  // Ids are matched too for backward compatibility with old URL params.
  roleNames.includes(position.role.name) ||
  roleNames.includes(position.roleId);

const hasTeamCriteria = (filters: TeamFilters) =>
  isTeamFilterActive({ ...filters, roleNames: [] });

// One position satisfies the role and every team criterion.
const positionMatchesTeamFilters = (
  position: MemberPosition,
  filters: TeamFilters,
): boolean => {
  if (!hasRole(position, filters.roleNames)) return false;
  if (!hasTeamCriteria(filters)) return true;
  return !!position.team && teamMatchesFilters(position.team, filters);
};

// Family tree and grid: keep members that hold a matching position.
export const memberMatchesTeamFilters = (
  member: Member,
  filters: TeamFilters,
): boolean =>
  !isTeamFilterActive(filters) ||
  member.positions.some((position) =>
    positionMatchesTeamFilters(position, filters),
  );

// Number of filter groups that are set (shown next to the category title).
export const countActiveTeamFilters = (filters: TeamFilters): number =>
  [
    filters.roleNames.length > 0,
    filters.teamTypeNames.length > 0,
    filters.teamYearFrom !== null || filters.teamYearTo !== null,
    filters.teamOnlyOngoing,
  ].filter(Boolean).length;
