import { RecruitmentSeason, MemberStatus, ActivityState } from "./members";

export type AvatarFilterValue = "with" | "without";

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
  showTree: boolean;
}

export type FilterSectionKey =
  | "joinYear"
  | "joinSeason"
  | "status"
  | "activity"
  | "birthday"
  | "avatar"
  | "lineage"
  | "connections";
