import { getMonth, getYear } from "date-fns";
import { Member } from "@/models";
import type { FilterState, RecruitmentSeason } from "@/types";
import {
  countActiveTeamFilters,
  isTeamFilterActive,
  memberMatchesTeamFilters,
} from "./filterTeams";
import { rangeBounds } from "./filterRange";
import {
  MEMBER_STATUSES,
  ACTIVITY_STATES,
  JOIN_SEASONS,
  GENDER_VALUES,
} from "@/constants/filters";

const matchesJoinYear = (
  member: Member,
  from: number | null,
  to: number | null,
): boolean => {
  const bounds = rangeBounds(from, to);
  if (!bounds) return true;
  const year = getYear(member.joinedAt);
  return year >= bounds[0] && year <= bounds[1];
};

const matchesJoinSeason = (
  member: Member,
  seasons: RecruitmentSeason[],
): boolean => {
  if (seasons.length === 0) return true;
  const { season } = member.getRecruitmentTerm();
  return season !== null && seasons.includes(season);
};

const parseDateStr = (
  raw: string,
): { year: number | null; month: number; day: number } => {
  const parts = raw.split("-").map(Number);
  if (parts.length === 3)
    return { year: parts[0], month: parts[1], day: parts[2] };
  return { year: null, month: parts[0], day: parts[1] };
};

const toDateVal = (
  d: { year: number | null; month: number; day: number },
  fallbackYear: number,
): number => (d.year ?? fallbackYear) * 10000 + d.month * 100 + d.day;

const toMMDD = (d: { month: number; day: number }): number =>
  d.month * 100 + d.day;

// Sort key of a birthday bound. Without the year only the day of year counts.
// A bound without a year spans every year (min for "from", max for "to").
const birthdayBoundKey = (
  raw: string,
  includeYear: boolean,
  fallbackYear: number,
): number => {
  const d = parseDateStr(raw);
  return includeYear ? toDateVal(d, fallbackYear) : toMMDD(d);
};

/**
 * Birthday rule: both bounds form an inclusive range; one bound matches exactly
 * (day and month, plus year when birthdayIncludeYear and the bound has one).
 */
const matchesBirthday = (member: Member, filters: FilterState): boolean => {
  const { birthdayFrom, birthdayTo, birthdayIncludeYear } = filters;
  if (!birthdayFrom && !birthdayTo) return true;
  if (!member.birthday) return false;

  const mYear = getYear(member.birthday);
  const mMonth = getMonth(member.birthday) + 1;
  const mDay = member.birthday.getDate();

  if (birthdayFrom && birthdayTo) {
    const bounds = rangeBounds(
      birthdayBoundKey(birthdayFrom, birthdayIncludeYear, 0),
      birthdayBoundKey(birthdayTo, birthdayIncludeYear, 9999),
    );
    if (!bounds) return true;
    const value = birthdayIncludeYear
      ? toDateVal({ year: mYear, month: mMonth, day: mDay }, 0)
      : toMMDD({ month: mMonth, day: mDay });
    return value >= bounds[0] && value <= bounds[1];
  }

  const bound = parseDateStr((birthdayFrom || birthdayTo) as string);
  if (bound.month !== mMonth || bound.day !== mDay) return false;
  return !birthdayIncludeYear || bound.year === null || bound.year === mYear;
};

const matchesGender = (member: Member, genders: FilterState["genders"]) =>
  !!member.gender && genders.includes(member.gender);

const matchesFamilyGroup = (member: Member, ids: string[]) =>
  !!member.familyGroupId && ids.includes(member.familyGroupId);

export const memberMatchesFilters = (
  member: Member,
  filters: FilterState,
): boolean => {
  if (!matchesJoinYear(member, filters.joinYearFrom, filters.joinYearTo))
    return false;
  if (!matchesJoinSeason(member, filters.joinSeasons)) return false;
  if (filters.statuses.length > 0 && !filters.statuses.includes(member.status))
    return false;
  if (
    filters.activityStates.length > 0 &&
    !filters.activityStates.includes(member.activityState)
  )
    return false;
  if (
    isListFilterSet(filters.genders, GENDER_VALUES) &&
    !matchesGender(member, filters.genders)
  )
    return false;
  if (
    filters.familyGroupIds.length > 0 &&
    !matchesFamilyGroup(member, filters.familyGroupIds)
  )
    return false;
  if (!matchesBirthday(member, filters)) return false;
  // Team view keeps whole teams (chosen in groupMembersByTeam), so team
  // criteria must not hide the other members of a matching team.
  return (
    filters.treeMode === "team" || memberMatchesTeamFilters(member, filters)
  );
};

// A list filter is set only when it narrows the full list; [] means no filter.
export const isListFilterSet = (
  selected: readonly unknown[],
  all: readonly unknown[],
): boolean => selected.length > 0 && selected.length < all.length;

// Id lists have no "all" value, so any selection is a filter.
const isIdListSet = (selected: readonly unknown[]): boolean =>
  selected.length > 0;

export const isFilterActive = (filters: FilterState): boolean => {
  return (
    filters.joinYearFrom !== null ||
    filters.joinYearTo !== null ||
    isListFilterSet(filters.joinSeasons, JOIN_SEASONS) ||
    isListFilterSet(filters.statuses, MEMBER_STATUSES) ||
    isListFilterSet(filters.activityStates, ACTIVITY_STATES) ||
    isListFilterSet(filters.genders, GENDER_VALUES) ||
    isIdListSet(filters.familyGroupIds) ||
    filters.birthdayFrom !== null ||
    filters.birthdayTo !== null ||
    isTeamFilterActive(filters) ||
    filters.treeMode !== "family"
  );
};

// Number of member filter groups that are set (shown next to the category title).
export const countActiveMemberFilters = (filters: FilterState): number =>
  [
    filters.joinYearFrom !== null || filters.joinYearTo !== null,
    isListFilterSet(filters.joinSeasons, JOIN_SEASONS),
    isListFilterSet(filters.statuses, MEMBER_STATUSES),
    isListFilterSet(filters.activityStates, ACTIVITY_STATES),
    isListFilterSet(filters.genders, GENDER_VALUES),
    isIdListSet(filters.familyGroupIds),
    filters.birthdayFrom !== null || filters.birthdayTo !== null,
  ].filter(Boolean).length;

// Number of set filters across both categories (one per filter chip). The
// layout is not a criterion.
export const countActiveFilters = (filters: FilterState): number =>
  countActiveMemberFilters(filters) + countActiveTeamFilters(filters);
