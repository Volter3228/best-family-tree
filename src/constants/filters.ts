import {
  type FilterState,
  type AvatarFilterValue,
  type RecruitmentSeason,
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

export const AVATAR_VALUES: AvatarFilterValue[] = ["with", "without"];

export const EMPTY_FILTER_STATE: FilterState = {
  joinYearFrom: null,
  joinYearTo: null,
  joinYearRange: false,
  joinSeasons: [...JOIN_SEASONS],
  statuses: [...MEMBER_STATUSES],
  activityStates: [...ACTIVITY_STATES],
  birthdayFrom: null,
  birthdayTo: null,
  birthdayRange: false,
  birthdayIncludeYear: false,
  avatars: [...AVATAR_VALUES],
  lineageMemberId: null,
  showTree: true,
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

export const ACTIVITY_OPTIONS: { value: ActivityState; label: string }[] = [
  { value: ActivityState.Active, label: "Active" },
  { value: ActivityState.Inactive, label: "Inactive" },
  { value: ActivityState.Excluded, label: "Excluded" },
];

export const AVATAR_OPTIONS: { value: AvatarFilterValue; label: string }[] = [
  { value: "with", label: "З фото" },
  { value: "without", label: "Без фото" },
];

// Styles
export const DATE_PICKER_CLASSES =
  "w-full rounded-lg bg-violet-800 pl-2 pr-7 py-1.5 text-sm text-white placeholder:text-fuchsia-400/50 focus:outline-none focus:ring-1 focus:ring-fuchsia-500";
