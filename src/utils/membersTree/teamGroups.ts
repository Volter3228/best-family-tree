import { DEFAULT_POSITION } from "@/libs/elk";
import { Member } from "@/models";
import type { MemberNode } from "@/types";
import { teamMatchesFilters, type TeamFilters } from "../filters/filterTeams";
import { getTeamNodeId } from "./graph";

const PRIMARY_COLOR_COUNT = 3;

interface TeamGroup {
  leaderIds: Set<string>;
  memberIds: Set<string>;
  // Names and ids of the roles held in the team (for the role filter).
  roles: Set<string>;
}

/**
 * Group member positions by team, marking leaders separately. Only teams that
 * pass the team filters are kept: team-level criteria must hold, and with a
 * role filter at least one position in the team must have one of those roles.
 */
export const groupMembersByTeam = (
  members: Member[],
  filters: TeamFilters,
): Map<string, TeamGroup> => {
  const groups = new Map<string, TeamGroup>();
  const matchedTeams = new Map<string, boolean>();

  for (const member of members) {
    for (const position of member.positions) {
      const { teamId, team } = position;
      if (!teamId || !team) continue;

      let matches = matchedTeams.get(teamId);
      if (matches === undefined) {
        matches = teamMatchesFilters(team, filters);
        matchedTeams.set(teamId, matches);
      }
      if (!matches) continue;

      let group = groups.get(teamId);
      if (!group) {
        group = {
          leaderIds: new Set(),
          memberIds: new Set(),
          roles: new Set(),
        };
        groups.set(teamId, group);
      }

      if (position.role.isLeaderPosition) group.leaderIds.add(member.id);
      group.memberIds.add(member.id);
      group.roles.add(position.role.name);
      group.roles.add(position.roleId);
    }
  }

  if (filters.roleNames.length > 0) {
    for (const [teamId, group] of groups) {
      if (!filters.roleNames.some((role) => group.roles.has(role))) {
        groups.delete(teamId);
      }
    }
  }

  return groups;
};

// One node per member per team. Team edges are drawn from the layout's own
// geometry, so no edge list is built here.
export const transformMembersToTeamTreeValues = (
  members: Member[],
  filters: TeamFilters,
): MemberNode[] => {
  const nodes: MemberNode[] = [];
  const memberById = new Map(members.map((member) => [member.id, member]));

  let colorIdx = 0;
  for (const [teamId, { memberIds }] of groupMembersByTeam(members, filters)) {
    for (const memberId of memberIds) {
      const member = memberById.get(memberId);
      if (!member) continue;

      nodes.push({
        id: getTeamNodeId(teamId, memberId),
        type: "member",
        data: {
          member,
          placeholderColorIndex: colorIdx % PRIMARY_COLOR_COUNT,
        },
        position: DEFAULT_POSITION,
        style: {} as React.CSSProperties,
      });
      colorIdx++;
    }
  }

  return nodes;
};

// Members that belong to at least one team of the current team view.
export const getTeamTreeNodeIds = (
  members: Member[],
  filters: TeamFilters,
): Set<string> => {
  const memberIds = new Set<string>();
  for (const group of groupMembersByTeam(members, filters).values()) {
    for (const id of group.memberIds) memberIds.add(id);
  }
  return memberIds;
};

// Teams shown in team view: those with at least one visible member.
export const countVisibleTeams = (
  members: Member[],
  filters: TeamFilters,
  visibleMemberIds: Set<string> | null,
): number => {
  const groups = groupMembersByTeam(members, filters);
  if (!visibleMemberIds) return groups.size;

  let count = 0;
  for (const { memberIds } of groups.values()) {
    for (const id of memberIds) {
      if (visibleMemberIds.has(id)) {
        count++;
        break;
      }
    }
  }
  return count;
};
