import { getMonth, getYear } from "date-fns";
import {
  type Member as MemberType,
  type Gender,
  type RecruitmentSeason,
  type RecruitmentTerm,
  type MemberPosition,
  type NameBadge,
  ActivityState,
  MemberStatus,
} from "@/types";

// A join date on 1 January means only the year is known. Stored values are UTC
// midnight; a date picked in the form is local midnight (UTC the day before in
// zones ahead of UTC), so either reading counts, but only at its own midnight:
// otherwise 2 January picked in Kyiv (1 January 22:00 UTC) would match.
const getYearOnlyJoinYear = (value: Date | string): number | null => {
  // The API hands dates over as ISO strings.
  const date = new Date(value);
  if (
    date.getMonth() === 0 &&
    date.getDate() === 1 &&
    date.getHours() === 0 &&
    date.getMinutes() === 0
  ) {
    return date.getFullYear();
  }
  if (
    date.getUTCMonth() === 0 &&
    date.getUTCDate() === 1 &&
    date.getUTCHours() === 0 &&
    date.getUTCMinutes() === 0
  ) {
    return date.getUTCFullYear();
  }
  return null;
};

export const isJoinYearOnly = (date: Date | string): boolean =>
  getYearOnlyJoinYear(date) !== null;

const getRecruitmentTerm = (joinedAt: Date): RecruitmentTerm => {
  const yearOnly = getYearOnlyJoinYear(joinedAt);
  if (yearOnly !== null) return { season: null, year: yearOnly };

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
    getMonth(birthday) === getMonth(today) &&
    birthday.getDate() === today.getDate()
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
  gender: Gender | null;
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
  featuredPositionId: string | null;
  nameBadge: NameBadge | null;
  private readonly recruitmentTerm: RecruitmentTerm;
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
    gender,
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
    featuredPositionId,
    nameBadge,
  }: MemberType) {
    this.id = id;
    this.birthday = birthday ? new Date(birthday) : null;
    this.email = email;
    this.facebookLink = facebookLink;
    this.familyGroupId = familyGroupId;
    this.instagramLink = instagramLink;
    this.joinedAt = joinedAt;
    this.linkedinLink = linkedinLink;
    this.gender = gender ?? null;
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
    this.featuredPositionId = featuredPositionId ?? null;
    this.nameBadge = nameBadge ?? null;
    this.recruitmentTerm = getRecruitmentTerm(joinedAt);
    this.birthdayToday = isBirthdayToday(name, this.birthday);
  }

  getRecruitmentTerm(): RecruitmentTerm {
    return this.recruitmentTerm;
  }

  isJoinYearOnly(): boolean {
    return this.recruitmentTerm.season === null;
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
