// Frontend-compatible types (mirrors Prisma schema without dependency)

export enum MemberStatus {
  OBSERVER = "observer",
  BABY = "baby",
  FULL = "full",
  ALUMNI = "alumni",
}

export enum ActivityState {
  ACTIVE = "active",
  INACTIVE = "inactive",
  EXCLUDED = "excluded",
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
  // Relations (populated by API)
  mentor?: Member;
  mentees?: Member[];
  phoneNumbers?: string[];
};
