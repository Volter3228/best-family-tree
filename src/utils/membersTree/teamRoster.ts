import type { Member } from "@/models";
import type { Locale } from "@/i18n/locale";
import { displayName } from "../displayName";
import { getMemberTeamRoles } from "../positions";

export interface TeamRosterEntry {
  member: Member;
  roles: string;
  isLeader: boolean;
}

// Everyone with a position in the team, leaders first, then by displayed name.
export const getTeamRoster = (
  members: Member[],
  teamId: string,
  locale: Locale,
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
      displayName(a.member.name, locale).localeCompare(
        displayName(b.member.name, locale),
        locale,
      ),
  );
};
