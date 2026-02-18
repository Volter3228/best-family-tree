export type MentorsListItem = {
  id: string;
  name: string;
};

export type RecruitmentSeason = "spring" | "autumn";

export interface RecruitmentTerm {
  season: RecruitmentSeason;
  year: number;
}
