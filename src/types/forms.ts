import { MemberStatus } from "@/types";

export type PositionFormRow = {
  id: string;
  teamTypeId?: string;
  teamTypeName?: string;
  teamName?: string;
  // Period of the team this row creates (an existing team keeps its own).
  teamStartYear?: number;
  teamEndYear?: number;
  roleName: string;
  roleId?: string;
  isLeaderPosition?: boolean;
  // Only for rows without a team: an external organisation and its years.
  organization?: string;
  startYear?: number;
  endYear?: number;
};

// One roster line of the team form: an existing member and a role.
export type TeamMemberRow = {
  id: string;
  memberId?: string;
  memberName: string;
  roleName: string;
  roleId?: string;
};

export type TeamFormData = {
  name: string;
  teamTypeId?: string;
  teamTypeName?: string;
  description: string;
  startYear?: number;
  endYear?: number;
  isOngoing?: boolean;
  icon: File | string | null;
  members: TeamMemberRow[];
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

export type TeamTypeFormData = {
  name: string;
  isEvent: boolean;
  color?: string;
  icon?: File | string | null;
};

export type MemberFormMode = "add" | "edit";

export type SidebarMode = "info" | "edit";

export type DropdownOption = {
  text: string;
  value: string;
};
