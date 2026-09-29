import { useContext, useMemo } from "react";
import { FiltersContext } from "@/context/FiltersContext";
import { useMembers } from "../data/useMembers";
import { memberMatchesFilters, isFilterActive } from "@/utils/filters";
import { computeLineageBranchIds } from "@/utils/membersTree/lineageBranch";
import { getTeamTreeNodeIds } from "@/utils";

export const useFilters = () => {
  const context = useContext(FiltersContext);

  if (!context) {
    throw new Error("useFilters must be used within a FiltersProvider");
  }

  const {
    draftFilters,
    setDraftFilters,
    appliedFilters,
    applyFilters,
    resetFilters,
    filterVersion,
  } = context;

  const { flatMembersList, membersMap } = useMembers();

  const active = useMemo(
    () => isFilterActive(appliedFilters),
    [appliedFilters],
  );

  const draftActive = useMemo(
    () => isFilterActive(draftFilters),
    [draftFilters],
  );

  const teamTreeNodeIds = useMemo(
    () =>
      appliedFilters.treeMode === "team"
        ? getTeamTreeNodeIds(flatMembersList, appliedFilters.eventTypeNames)
        : null,
    [appliedFilters.treeMode, appliedFilters.eventTypeNames, flatMembersList],
  );

  const filteredMemberIds = useMemo(() => {
    if (!active) return null;

    let lineageIds: Set<string> | null = null;
    if (appliedFilters.lineageMemberId) {
      lineageIds = computeLineageBranchIds(
        membersMap,
        appliedFilters.lineageMemberId,
      );
    }

    const ids = new Set<string>();

    for (const member of flatMembersList) {
      const matchesStandard = memberMatchesFilters(member, appliedFilters);
      const inLineage = lineageIds ? lineageIds.has(member.id) : true;

      if (matchesStandard && inLineage) {
        ids.add(member.id);
      }
    }

    // Always include the lineage focus member regardless of other filters
    if (appliedFilters.lineageMemberId) {
      ids.add(appliedFilters.lineageMemberId);
    }

    // In team tree mode, intersect with team tree nodes
    if (teamTreeNodeIds) {
      for (const id of ids) {
        if (!teamTreeNodeIds.has(id)) {
          ids.delete(id);
        }
      }
    }

    return ids;
  }, [appliedFilters, flatMembersList, membersMap, active, teamTreeNodeIds]);

  const filteredCount = useMemo(() => {
    if (!filteredMemberIds) return flatMembersList.length;
    return filteredMemberIds.size;
  }, [filteredMemberIds, flatMembersList.length]);

  return {
    draftFilters,
    setDraftFilters,
    appliedFilters,
    applyFilters,
    resetFilters,
    filteredMemberIds,
    filteredCount,
    isFilterActive: active,
    isDraftActive: draftActive,
    filterVersion,
  };
};
