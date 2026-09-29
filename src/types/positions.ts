export type EventType = {
  id: string;
  name: string;
  description?: string | null;
  color?: string | null;
  iconUrl?: string | null;
};

export type Role = {
  id: string;
  name: string;
  description?: string | null;
  isLeaderPosition: boolean;
};

export type Team = {
  id: string;
  name?: string | null;
  description?: string | null;
  eventTypeId?: string | null;
  iteration?: number | null;
  startDate?: string | null;
  endDate?: string | null;
  eventType?: EventType | null;
};

export type MemberPosition = {
  id: string;
  memberId: string;
  roleId: string;
  teamId?: string | null;
  year?: number | null;
  startDate?: string | null;
  endDate?: string | null;
  role: Role;
  team?: Team | null;
};
