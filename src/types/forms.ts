import { MemberStatus } from "@/types";

export type MemberFormData = {
  firstName: string;
  lastName: string;
  birthday: Date | null;
  joinedAt: Date | null;
  mentorId: string;
  status: MemberStatus | null;
  phoneNumber: string;
  email: string;
  photo: File | string | null;
  telegramLink: string;
  instagramLink: string;
  facebookLink: string;
  linkedinLink: string;
};

export type MemberFormMode = "add" | "edit";

export type DrawerMode = "info" | "edit";

export type DropdownOption = {
  text: string;
  value: string;
};
