import type { Member } from "@/models";
import { getMemberTeamRoles } from "../positions";

export interface TeamRosterEntry {
  member: Member;
  roles: string;
  isLeader: boolean;
}

// Everyone with a position in the team, leaders first, then by name.
export const getTeamRoster = (
  members: Member[],
  teamId: string,
): TeamRosterEntry[] => {
  const roster: TeamRosterEntry[] = [];
  for (const member of members) {
    const positions = member.positions.filter(
      (position) => position.teamId === teamId,
    );
    if (positions.length === 0) continue;
    roster.push({
      member,
      roles: getMemberTeamRoles(member, teamId),
      isLeader: positions.some((position) => position.role.isLeaderPosition),
    });
  }
  return roster.sort(
    (a, b) =>
      Number(b.isLeader) - Number(a.isLeader) ||
      a.member.name.localeCompare(b.member.name, "uk"),
  );
};
