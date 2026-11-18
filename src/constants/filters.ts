import {
  type FilterState,
  type RecruitmentSeason,
  Gender,
  MemberStatus,
  ActivityState,
} from "@/types";
import type { Locale } from "@/i18n/locale";
import { messages } from "@/i18n/messages";

export const MEMBER_STATUSES: MemberStatus[] = [
  MemberStatus.Observer,
  MemberStatus.Baby,
  MemberStatus.Full,
  MemberStatus.Alumni,
];

export const ACTIVITY_STATES: ActivityState[] = [
  ActivityState.Active,
  ActivityState.Inactive,
  ActivityState.Excluded,
];

export const JOIN_SEASONS: RecruitmentSeason[] = ["spring", "autumn"];

export const GENDER_VALUES: Gender[] = [Gender.Male, Gender.Female];

export const EMPTY_FILTER_STATE: FilterState = {
  joinYearFrom: null,
  joinYearTo: null,
  // An empty list means no filter on that criterion.
  joinSeasons: [],
  statuses: [],
  activityStates: [],
  genders: [],
  familyGroupIds: [],
  birthdayFrom: null,
  birthdayTo: null,
  birthdayIncludeYear: false,
  treeMode: "family",
  roleNames: [],
  teamTypeNames: [],
  teamYearFrom: null,
  teamYearTo: null,
  teamOnlyOngoing: false,
};

// Checkbox groups filter sections options. The constants carry the Ukrainian
// labels; use the getters to follow the current locale.
const buildOptions = (locale: Locale) => {
  const t = messages[locale].filters;
  return {
    seasons: [
      { value: "spring", label: t.seasons.spring },
      { value: "autumn", label: t.seasons.autumn },
    ] as { value: RecruitmentSeason; label: string }[],
    statuses: [
      { value: MemberStatus.Observer, label: t.statuses.observer },
      { value: MemberStatus.Baby, label: t.statuses.baby },
      { value: MemberStatus.Full, label: t.statuses.full },
      { value: MemberStatus.Alumni, label: t.statuses.alumni },
    ] as { value: MemberStatus; label: string }[],
    genders: [
      { value: Gender.Male, label: t.genders.male },
      { value: Gender.Female, label: t.genders.female },
    ] as { value: Gender; label: string }[],
    activity: [
      { value: ActivityState.Active, label: t.activity.active },
      { value: ActivityState.Inactive, label: t.activity.inactive },
      { value: ActivityState.Excluded, label: t.activity.excluded },
    ] as { value: ActivityState; label: string }[],
  };
};

export const getSeasonOptions = (locale: Locale) =>
  buildOptions(locale).seasons;
export const getStatusOptions = (locale: Locale) =>
  buildOptions(locale).statuses;
export const getGenderOptions = (locale: Locale) =>
  buildOptions(locale).genders;
export const getActivityOptions = (locale: Locale) =>
  buildOptions(locale).activity;

// Styles
// One look for every text field in the filters panel. Callers add pl-9 (search
// icon) or pr-8 (clear button) when needed.
export const FILTER_INPUT_CLASSES =
  "block h-10 w-full rounded-xl border border-accent-green/30 bg-surface px-3 text-sm pointer-coarse:text-base text-foreground placeholder:text-placeholder transition-colors hover:border-accent-green/60 focus:border-accent-green focus:outline-none focus:ring-2 focus:ring-accent-green/20";

export const DATE_PICKER_CLASSES = FILTER_INPUT_CLASSES;
