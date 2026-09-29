import { RecruitmentSeason, MemberStatus, ActivityState } from "./members";

export type AvatarFilterValue = "with" | "without";

export type TreeMode = "family" | "none" | "team";

export interface FilterState {
  joinYearFrom: number | null;
  joinYearTo: number | null;
  joinYearRange: boolean;
  joinSeasons: RecruitmentSeason[];
  statuses: MemberStatus[];
  activityStates: ActivityState[];
  birthdayFrom: string | null;
  birthdayTo: string | null;
  birthdayRange: boolean;
  birthdayIncludeYear: boolean;
  avatars: AvatarFilterValue[];
  lineageMemberId: string | null;
  treeMode: TreeMode;
  roleNames: string[];
  eventTypeNames: string[];
}

export type FilterSectionKey =
  | "joinYear"
  | "joinSeason"
  | "status"
  | "activity"
  | "birthday"
  | "avatar"
  | "lineage"
  | "connections"
  | "role"
  | "project";
