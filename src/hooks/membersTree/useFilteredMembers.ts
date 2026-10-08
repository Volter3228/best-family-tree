import { useMemo } from "react";
import { useMembers } from "../data/useMembers";
import { memberMatchesFilters, isFilterActive } from "@/utils/filters";
import { computeLineageBranchIds } from "@/utils/membersTree/lineageBranch";
import { countVisibleTeams, getTeamTreeNodeIds } from "@/utils";
import type { FilterState } from "@/types";

/**
 * The heavy part of filtering: which members pass the applied filters. It is
 * computed once, by FiltersProvider, and shared through the context (every
 * useFilters caller used to redo this scan on its own).
 */
export const useFilteredMembers = (appliedFilters: FilterState) => {
  const { flatMembersList, membersMap } = useMembers();

  const active = useMemo(
    () => isFilterActive(appliedFilters),
    [appliedFilters],
  );

  const teamTreeNodeIds = useMemo(
    () =>
      appliedFilters.treeMode === "team"
        ? getTeamTreeNodeIds(flatMembersList, appliedFilters)
        : null,
    [appliedFilters, flatMembersList],
  );

  const filteredMemberIds = useMemo(() => {
    if (!active) return null;

    const lineageIds = appliedFilters.lineageMemberId
      ? computeLineageBranchIds(membersMap, appliedFilters.lineageMemberId)
      : null;

    const ids = new Set<string>();
    for (const member of flatMembersList) {
      if (
        memberMatchesFilters(member, appliedFilters) &&
        (!lineageIds || lineageIds.has(member.id)) &&
        (!teamTreeNodeIds || teamTreeNodeIds.has(member.id))
      ) {
        ids.add(member.id);
      }
    }

    // The lineage focus member stays whatever the other filters say (but it
    // still has to be part of the team tree in team view).
    const focusId = appliedFilters.lineageMemberId;
    if (focusId && (!teamTreeNodeIds || teamTreeNodeIds.has(focusId))) {
      ids.add(focusId);
    }
    return ids;
  }, [appliedFilters, flatMembersList, membersMap, active, teamTreeNodeIds]);

  // Team view counts teams (those that still have a visible member), the
  // other views count members.
  const filteredCount = useMemo(
    () =>
      appliedFilters.treeMode === "team"
        ? countVisibleTeams(flatMembersList, appliedFilters, filteredMemberIds)
        : (filteredMemberIds?.size ?? flatMembersList.length),
    [appliedFilters, flatMembersList, filteredMemberIds],
  );

  return {
    filteredMemberIds,
    filteredCount,
    isFilterActive: active,
  };
};
