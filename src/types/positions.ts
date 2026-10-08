export type TeamType = {
  id: string;
  name: string;
  description?: string | null;
  color?: string | null;
  iconUrl?: string | null;
  // Events have yearly editions ("BTW 2024"); other types are working groups.
  isEvent: boolean;
};

export type Role = {
  id: string;
  name: string;
  description?: string | null;
  isLeaderPosition: boolean;
};

export type Team = {
  id: string;
  name: string;
  description?: string | null;
  iconUrl?: string | null;
  teamTypeId?: string | null;
  // The team's period in whole years; either end may be unknown, and the
  // isOngoing flag says the team still runs (no end is planned yet).
  startYear?: number | null;
  endYear?: number | null;
  isOngoing?: boolean;
  teamType?: TeamType | null;
  _count?: { positions: number };
};

export type MemberPosition = {
  id: string;
  memberId: string;
  roleId: string;
  teamId?: string | null;
  // Only for positions without a team (e.g. a role in an external project).
  organization?: string | null;
  startYear?: number | null;
  endYear?: number | null;
  role: Role;
  team?: Team | null;
};

export type TeamDetails = Team & {
  positions: {
    id: string;
    memberId: string;
    role: Role;
    member: { id: string; name: string };
  }[];
};
