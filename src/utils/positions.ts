import type { MemberPosition } from "@/types";

type Years = {
  start?: number | null;
  end?: number | null;
  ongoing?: boolean;
};

// "2018 - 2019", "2018 - ..." (still running), the single known year, or ""
// when nothing is known.
export const formatYearRange = ({ start, end, ongoing }: Years): string => {
  if (start && ongoing) return `${start} - ...`;
  if (start && end && start !== end) return `${start} - ${end}`;
  return String(start ?? end ?? "");
};

// A team position takes its team's period; a standalone one keeps its own
// (standalone positions have no "ongoing" flag).
export const getPositionPeriod = (position: MemberPosition): Years =>
  position.team
    ? {
      start: position.team.startYear,
      end: position.team.endYear,
      ongoing: position.team.isOngoing,
    }
    : { start: position.startYear, end: position.endYear };

export const getPositionYearLabel = (position: MemberPosition): string =>
  formatYearRange(getPositionPeriod(position));

// Every role the member holds in one team, leader roles first ("President, Secretary").
export const getMemberTeamRoles = (
  member: { positions: MemberPosition[] },
  teamId: string,
): string => {
  const roles = member.positions
    .filter((position) => position.teamId === teamId)
    .sort(
      (a, b) =>
        Number(b.role.isLeaderPosition) - Number(a.role.isLeaderPosition),
    )
    .map((position) => position.role.name);
  return Array.from(new Set(roles)).join(", ");
};
