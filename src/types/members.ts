import { Member as MemberModel } from "@/models";

export enum MemberStatus {
  Observer = "OBSERVER",
  Baby = "BABY",
  Full = "FULL",
  Alumni = "ALUMNI",
}

export enum ActivityState {
  Active = "ACTIVE",
  Inactive = "INACTIVE",
  Excluded = "EXCLUDED",
}

export type Member = {
  id: string;
  name: string;
  joinedAt: Date;
  status: MemberStatus;
  activityState: ActivityState;
  mentorId: string | null;
  familyGroupId: string | null;
  email: string | null;
  birthday: Date | null;
  course: number | null;
  photo: string | null;
  telegramLink: string | null;
  instagramLink: string | null;
  facebookLink: string | null;
  linkedinLink: string | null;
  createdAt: Date;
  updatedAt: Date;
  mentor?: Member | null;
  mentees?: Member[];
  phoneNumbers: string[];
};

export type MentorsListItem = {
  id: string;
  name: string;
};

export type RecruitmentSeason = "spring" | "autumn";

export interface RecruitmentTerm {
  season: RecruitmentSeason;
  year: number;
}

export type MembersMap = Map<string, MemberModel>;

export type MembersByMentorId = {
  [mentorId: string]: Member[];
};

export type MemberMetrics = {
  member: Member;
  size: number;
  depth: number;
  weight: number;
  hasChildren: boolean;
};
