import { MemberStatus } from "@/types";

export type AddMemberForm = {
  firstName: string;
  lastName: string;
  birthday: Date | null;
  joinedAt: Date | null;
  mentorId: string;
  status: MemberStatus;
  phoneNumber: string;
  email: string;
  photo: File | null;
  telegramLink: string;
  instagramLink: string;
  facebookLink: string;
  linkedinLink: string;
};

export type DropdownOption = {
  text: string;
  value: string;
};
