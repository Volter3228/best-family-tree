import { RecruitmentSeason, MemberStatus, ActivityState } from "./members";

export type AvatarFilterValue = "with" | "without";

export type TreeMode = "family" | "grid" | "team";

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
  // Team filters. In team view they pick teams; elsewhere they keep members
  // that hold a matching position.
  roleNames: string[];
  teamTypeNames: string[];
  teamYearFrom: number | null;
  teamYearTo: number | null;
  teamYearRange: boolean;
  // Only teams that are still running / only event teams.
  teamOnlyOngoing: boolean;
  teamOnlyEvents: boolean;
}

export type FilterSectionKey =
  | "joinYear"
  | "joinSeason"
  | "status"
  | "activity"
  | "birthday"
  | "avatar"
  | "lineage"
  | "role"
  | "teamType"
  | "teamPeriod";
