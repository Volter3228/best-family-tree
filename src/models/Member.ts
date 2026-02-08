import { getPhotoUrlAsAvatar } from "@/libs/cloudinary";
import {
  MemberStatus,
  type Member as MemberType,
  ActivityState,
} from "@/types";
import { getMonth, getYear } from "date-fns";

export default class Member {
  id: string;
  birthday: Date | null;
  email: string | null;
  facebookLink: string | null;
  familyGroupId: string | null;
  instagramLink: string | null;
  joinedAt: Date;
  linkedinLink: string | null;
  mentees: Member[];
  mentor: Member | null;
  mentorId: string | null;
  name: string;
  phoneNumbers: string[];
  photo: string | null;
  avatar: string | null;
  status: MemberStatus;
  telegramLink: string | null;
  activityState: ActivityState;
  course: number | null;
  createdAt: Date;
  updatedAt: Date;

  constructor({
    id,
    birthday,
    email,
    facebookLink,
    familyGroupId,
    instagramLink,
    joinedAt,
    linkedinLink,
    mentees,
    mentor,
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
  }: MemberType) {
    this.id = id;
    this.birthday = birthday ? new Date(birthday) : null;
    this.email = email;
    this.facebookLink = facebookLink;
    this.familyGroupId = familyGroupId;
    this.instagramLink = instagramLink;
    this.joinedAt = joinedAt;
    this.linkedinLink = linkedinLink;
    this.mentees =
      mentees?.map((mentee: MemberType) => new Member(mentee)) || []; // Recursively create mentees instances
    this.mentor = mentor ? new Member(mentor) : null;
    this.mentorId = mentorId;
    this.name = name;
    this.phoneNumbers = phoneNumbers;
    this.photo = photo;
    this.status = status;
    this.telegramLink = telegramLink;
    this.avatar = photo ? getPhotoUrlAsAvatar(photo) : "";
    this.activityState = activityState;
    this.course = course;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }

  // Add a mentee
  addMentee(mentee: Member) {
    this.mentees.push(mentee); // Add mentee if this is the mentor
  }

  getRecruitmentSeason(): string {
    let season = "Весна";
    if (!this.joinedAt) return "";
    const month = getMonth(this.joinedAt);
    if (month >= 7 && month <= 12) {
      season = "Осінь";
    }

    return `${season} ${getYear(this.joinedAt)}`;
  }

  isMentor(): boolean {
    return (
      this.status === MemberStatus.Alumni || this.status === MemberStatus.Full
    );
  }

  getMenteesNamesString(): string {
    return this.mentees.length
      ? this.mentees.map(({ name }) => name).join(", ")
      : "";
  }

  getDescendantIds(): Set<string> {
    const descendantIds = new Set<string>();
    const collectDescendants = (mentees: Member[]) => {
      for (const mentee of mentees) {
        descendantIds.add(mentee.id);
        if (mentee.mentees.length) {
          collectDescendants(mentee.mentees);
        }
      }
    };

    collectDescendants(this.mentees);
    return descendantIds;
  }
}
