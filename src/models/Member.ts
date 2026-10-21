import { getMonth, getYear } from "date-fns";
import {
  type Member as MemberType,
  type RecruitmentSeason,
  type RecruitmentTerm,
  type MemberPosition,
  ActivityState,
  MemberStatus,
} from "@/types";

const getRecruitmentTerm = (joinedAt: Date | null): RecruitmentTerm | null => {
  if (!joinedAt) return null;
  const month = getMonth(joinedAt);
  const year = getYear(joinedAt);

  let season: RecruitmentSeason = "spring";
  if (month > 6 && month < 12) {
    season = "autumn";
  }

  return { season, year };
};

const isBirthdayToday = (name: string, birthday: Date | null): boolean => {
  if (!birthday) return false;
  if (name.includes("Оксана") && name.includes("Магіс")) return true;

  const today = new Date();
  return (
    getMonth(birthday) === getMonth(today) && birthday.getDate() === today.getDate()
  );
};

/**
 * A plain member record with derived values computed once on construction.
 * The mentor/mentee relations live in the members store (`byId`,
 * `childrenOf`), not on the member, so members never hold copies of each other.
 */
export default class Member {
  id: string;
  birthday: Date | null;
  email: string | null;
  facebookLink: string | null;
  familyGroupId: string | null;
  instagramLink: string | null;
  joinedAt: Date;
  linkedinLink: string | null;
  mentorId: string | null;
  name: string;
  phoneNumbers: string[];
  photo: string | null;
  status: MemberStatus;
  telegramLink: string | null;
  activityState: ActivityState;
  course: number | null;
  createdAt: Date;
  updatedAt: Date;
  positions: MemberPosition[];
  private readonly recruitmentTerm: RecruitmentTerm | null;
  private readonly birthdayToday: boolean;

  constructor({
    id,
    birthday,
    email,
    facebookLink,
    familyGroupId,
    instagramLink,
    joinedAt,
    linkedinLink,
    mentorId,
    name,
    phoneNumbers,
    photo,
    status,
    telegramLink,
    activityState,
    course,
    createdAt,
    updatedAt,
    positions,
  }: MemberType) {
    this.id = id;
    this.birthday = birthday ? new Date(birthday) : null;
    this.email = email;
    this.facebookLink = facebookLink;
    this.familyGroupId = familyGroupId;
    this.instagramLink = instagramLink;
    this.joinedAt = joinedAt;
    this.linkedinLink = linkedinLink;
    this.mentorId = mentorId;
    this.name = name;
    this.phoneNumbers = phoneNumbers;
    this.photo = photo;
    this.status = status;
    this.telegramLink = telegramLink;
    this.activityState = activityState;
    this.course = course;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
    this.positions = positions || [];
    this.recruitmentTerm = joinedAt ? getRecruitmentTerm(joinedAt) : null;
    this.birthdayToday = isBirthdayToday(name, this.birthday);
  }

  getRecruitmentTerm(): RecruitmentTerm | null {
    return this.recruitmentTerm;
  }

  isMentor(): boolean {
    return (
      this.status === MemberStatus.Alumni || this.status === MemberStatus.Full
    );
  }

  clone(overrides: Partial<MemberType> = {}): Member {
    return new Member({ ...this, ...overrides } as MemberType);
  }

  isBirthdayToday(): boolean {
    return this.birthdayToday;
  }
}
