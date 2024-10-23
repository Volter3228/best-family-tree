import { MemberStatus, type Member as MemberType } from "@/types";
import { getMonth, getYear } from "date-fns";

export default class Member {
  id: string;
  name: string;
  joinedAt: Date | null = null;
  birthday: Date;
  mentorId: string | null;
  mentees: Member[];
  familyGroupId: string | null;
  status: string;
  photo: string | null;

  constructor({
    id,
    name,
    joinedAt,
    birthday,
    mentorId,
    mentees,
    familyGroupId,
    status,
    photo,
  }: MemberType) {
    this.id = id;
    this.name = name;
    this.joinedAt = joinedAt;
    this.birthday = new Date(birthday);
    this.mentorId = mentorId;
    this.mentees = mentees.map((mentee: MemberType) => new Member(mentee)); // Recursively create mentees
    this.familyGroupId = familyGroupId;
    this.status = status;
    this.photo = photo;
  }

  // Add a mentee
  addMentee(mentee: Member) {
    this.mentees.push(mentee); // Add mentee if this is the mentor
  }

  getRecruitmentSeason(): string | null {
    let season = "Весна";
    if (!this.joinedAt) return null;
    const month = getMonth(this.joinedAt);
    if (month >= 7 && month <= 12) {
      season = "Осінь";
    }

    return `${season} ${getYear(this.joinedAt)}`;
  }

  isMentor(): boolean {
    return (
      this.status === MemberStatus.ALUMNI || this.status === MemberStatus.FULL
    );
  }
}
