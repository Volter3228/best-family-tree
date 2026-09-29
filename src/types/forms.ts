import { MemberStatus } from "@/types";

export type PositionFormRow = {
  id: string;
  eventTypeId?: string;
  eventTypeName?: string;
  teamName?: string;
  roleName: string;
  roleId?: string;
  year?: number;
  startDate?: string;
  endDate?: string;
  isYearOnly?: boolean;
  isCurrent?: boolean;
  isLeaderPosition?: boolean;
};

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
  positions: PositionFormRow[];
};

export type EventTypeFormData = {
  name: string;
  color?: string;
  icon?: File | string | null;
};

export type FormType = "member" | "event";

export type MemberFormMode = "add" | "edit";

export type SidebarMode = "info" | "edit";

export type DropdownOption = {
  text: string;
  value: string;
};
