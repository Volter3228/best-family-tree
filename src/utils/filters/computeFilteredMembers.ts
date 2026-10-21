import type { Member } from "@/models";
import type { ChildrenMap, FilterState, MembersMap } from "@/types";
import { memberMatchesFilters, isFilterActive } from "./filterMembers";
import { computeLineageBranchIds } from "../membersTree/lineageBranch";
import {
  countVisibleTeams,
  getTeamTreeNodeIds,
} from "../membersTree/teamGroups";

export interface FilteredMembers {
  filteredMemberIds: Set<string> | null;
  filteredCount: number;
  isFilterActive: boolean;
}

interface Source {
  members: Member[];
  byId: MembersMap;
  childrenOf: ChildrenMap;
}

const areSetsEqual = (a: Set<string>, b: Set<string>) => {
  if (a.size !== b.size) return false;
  for (const id of a) if (!b.has(id)) return false;
  return true;
};

/**
 * Which members pass the applied filters. `previous` is returned as is (same
 * Set instance) when the ids did not change, so edits that do not affect the
 * result do not retrigger layouts.
 */
export const computeFilteredMembers = (
  filters: FilterState,
  { members, byId, childrenOf }: Source,
  previous: FilteredMembers | null,
): FilteredMembers => {
  const active = isFilterActive(filters);
  const isTeamView = filters.treeMode === "team";
  const teamTreeNodeIds = isTeamView
    ? getTeamTreeNodeIds(members, filters)
    : null;

  let ids: Set<string> | null = null;
  if (active) {
    const lineageIds = filters.lineageMemberId
      ? computeLineageBranchIds(byId, childrenOf, filters.lineageMemberId)
      : null;

    ids = new Set<string>();
    for (const member of members) {
      if (
        memberMatchesFilters(member, filters) &&
        (!lineageIds || lineageIds.has(member.id)) &&
        (!teamTreeNodeIds || teamTreeNodeIds.has(member.id))
      ) {
        ids.add(member.id);
      }
    }

    // The lineage focus member stays whatever the other filters say (but it
    // still has to be part of the team tree in team view).
    const focusId = filters.lineageMemberId;
    if (focusId && (!teamTreeNodeIds || teamTreeNodeIds.has(focusId))) {
      ids.add(focusId);
    }

    const prevIds = previous?.filteredMemberIds;
    if (prevIds && areSetsEqual(ids, prevIds)) ids = prevIds;
  }

  // Team view counts teams (those that still have a visible member), the
  // other views count members.
  const filteredCount = isTeamView
    ? countVisibleTeams(members, filters, ids)
    : (ids?.size ?? members.length);

  if (
    previous &&
    previous.filteredMemberIds === ids &&
    previous.filteredCount === filteredCount &&
    previous.isFilterActive === active
  ) {
    return previous;
  }
  return { filteredMemberIds: ids, filteredCount, isFilterActive: active };
};
