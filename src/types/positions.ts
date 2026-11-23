export type TeamType = {
  id: string;
  name: string;
  description?: string | null;
  color?: string | null;
  iconUrl?: string | null;
  // Events have yearly editions ("BTW 2024"); other types are working groups.
  isEvent: boolean;
  // Only on the team types list: how many teams use the type.
  _count?: { teams: number };
};

export type Role = {
  id: string;
  name: string;
  description?: string | null;
  isLeaderPosition: boolean;
  // Only on the roles list: how many positions use the role.
  _count?: { positions: number };
  // Only on the roles list: how many distinct members hold the role.
  memberCount?: number;
};

export type Team = {
  id: string;
  name: string;
  description?: string | null;
  photoUrl?: string | null;
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
