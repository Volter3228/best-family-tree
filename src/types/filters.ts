import { RecruitmentSeason, MemberStatus, ActivityState, Gender } from "./members";


export type TreeMode = "family" | "grid" | "team";

export interface FilterState {
  joinYearFrom: number | null;
  joinYearTo: number | null;
  joinSeasons: RecruitmentSeason[];
  statuses: MemberStatus[];
  activityStates: ActivityState[];
  genders: Gender[];
  familyGroupIds: string[];
  birthdayFrom: string | null;
  birthdayTo: string | null;
  birthdayIncludeYear: boolean;
  treeMode: TreeMode;
  // Team filters. In team view they pick teams; elsewhere they keep members
  // that hold a matching position.
  roleNames: string[];
  teamTypeNames: string[];
  teamYearFrom: number | null;
  teamYearTo: number | null;
  // Only teams that are still running.
  teamOnlyOngoing: boolean;
}

export type FilterCategoryKey = "dates" | "member" | "teams" | "roles";
