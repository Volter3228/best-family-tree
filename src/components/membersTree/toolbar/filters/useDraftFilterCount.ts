import { useMemo } from "react";
import type { FilterState } from "@/types";
import { useFiltersStore } from "@/store/filtersStore";
import { useMembersStore } from "@/store/membersStore";
import { computeFilteredMembers } from "@/utils/filters";

// How many members (or teams) the draft filters would show. Reuses the applied
// count while the draft equals the applied filters.
export const useDraftFilterCount = (
  draftFilters: FilterState,
  hasChanges: boolean,
): number => {
  const filteredCount = useFiltersStore((s) => s.filteredCount);
  const members = useMembersStore((s) => s.members);

  return useMemo(() => {
    if (!hasChanges) return filteredCount;
    return computeFilteredMembers(
      draftFilters,
      { members },
      null,
    ).filteredCount;
  }, [hasChanges, filteredCount, draftFilters, members]);
};
