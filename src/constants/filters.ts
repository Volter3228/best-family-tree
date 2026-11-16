import {
  type FilterState,
  type RecruitmentSeason,
  Gender,
  MemberStatus,
  ActivityState,
} from "@/types";

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

// Checkbox groups filter sections options
export const SEASON_OPTIONS: { value: RecruitmentSeason; label: string }[] = [
  { value: "spring", label: "Весна" },
  { value: "autumn", label: "Осінь" },
];

export const STATUS_OPTIONS: { value: MemberStatus; label: string }[] = [
  { value: MemberStatus.Observer, label: "Observer" },
  { value: MemberStatus.Baby, label: "Baby" },
  { value: MemberStatus.Full, label: "Full" },
  { value: MemberStatus.Alumni, label: "Alumni" },
];

export const GENDER_OPTIONS: { value: Gender; label: string }[] = [
  { value: Gender.Male, label: "Чоловіча" },
  { value: Gender.Female, label: "Жіноча" },
];

export const ACTIVITY_OPTIONS: { value: ActivityState; label: string }[] = [
  { value: ActivityState.Active, label: "Active" },
  { value: ActivityState.Inactive, label: "Inactive" },
  { value: ActivityState.Excluded, label: "Excluded" },
];

// Styles
// One look for every text field in the filters panel. Callers add pl-9 (search
// icon) or pr-8 (clear button) when needed.
export const FILTER_INPUT_CLASSES =
  "block h-10 w-full rounded-xl border border-accent-green/30 bg-surface px-3 text-sm pointer-coarse:text-base text-foreground placeholder:text-placeholder transition-colors hover:border-accent-green/60 focus:border-accent-green focus:outline-none focus:ring-2 focus:ring-accent-green/20";

export const DATE_PICKER_CLASSES = FILTER_INPUT_CLASSES;
