import type { FilterCategoryKey, FilterState } from "@/types";
import {
  JOIN_SEASONS,
  MEMBER_STATUSES,
  ACTIVITY_STATES,
  GENDER_VALUES,
} from "@/constants/filters";
import { isListFilterSet } from "./filterMembers";

export const FILTER_CATEGORY_KEYS: FilterCategoryKey[] = [
  "dates",
  "member",
  "teams",
  "roles",
];

const isCategoryActiveByKey: Record<
  FilterCategoryKey,
  (filters: FilterState) => boolean
> = {
  dates: (f) =>
    f.joinYearFrom !== null ||
    f.joinYearTo !== null ||
    isListFilterSet(f.joinSeasons, JOIN_SEASONS) ||
    f.birthdayFrom !== null ||
    f.birthdayTo !== null,
  member: (f) =>
    isListFilterSet(f.statuses, MEMBER_STATUSES) ||
    isListFilterSet(f.activityStates, ACTIVITY_STATES) ||
    isListFilterSet(f.genders, GENDER_VALUES) ||
    f.familyGroupIds.length > 0,
  teams: (f) =>
    f.teamTypeNames.length > 0 ||
    f.teamYearFrom !== null ||
    f.teamYearTo !== null ||
    f.teamOnlyOngoing,
  roles: (f) => f.roleNames.length > 0,
};

/** Whether a category of the filter panel holds any criterion. */
export const isCategoryActive = (
  filters: FilterState,
  key: FilterCategoryKey,
): boolean => isCategoryActiveByKey[key](filters);
