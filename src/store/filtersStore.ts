import { create } from "zustand";
import { EMPTY_FILTER_STATE } from "@/constants/filters";
import { computeFilteredMembers, type FilteredMembers } from "@/utils/filters";
import { useMembersStore } from "./membersStore";
import type { FilterState, TreeMode } from "@/types";

interface FiltersState extends FilteredMembers {
  /** Draft filters edited in the panel (not yet applied). */
  draftFilters: FilterState;
  appliedFilters: FilterState;
  /** Bumps on every apply. */
  filterVersion: number;
}

interface FiltersActions {
  setDraftFilters: (next: FilterState | ((prev: FilterState) => FilterState)) => void;
  applyFilters: () => void;
  /** Drops draft edits: the draft goes back to the applied filters. */
  discardDraft: () => void;
  /** Clears every criterion in the draft and the applied filters; keeps the layout. */
  resetFilters: () => void;
  /** Switches the layout at once, leaving other draft edits pending. */
  setTreeMode: (treeMode: TreeMode) => void;
  /** Applies filters read from the URL (draft and applied together). */
  applyUrlFilters: (filters: FilterState) => void;
}

const derive = (filters: FilterState, previous: FilteredMembers | null) =>
  computeFilteredMembers(filters, useMembersStore.getState(), previous);

const initialState: FiltersState = {
  draftFilters: EMPTY_FILTER_STATE,
  appliedFilters: EMPTY_FILTER_STATE,
  filterVersion: 0,
  ...derive(EMPTY_FILTER_STATE, null),
};

export const useFiltersStore = create<FiltersState & FiltersActions>(
  (set) => ({
    ...initialState,

    setDraftFilters: (next) =>
      set((state) => ({
        draftFilters:
          typeof next === "function" ? next(state.draftFilters) : next,
      })),

    applyFilters: () =>
      set((state) => ({
        appliedFilters: state.draftFilters,
        filterVersion: state.filterVersion + 1,
        ...derive(state.draftFilters, state),
      })),

    discardDraft: () =>
      set((state) => ({ draftFilters: state.appliedFilters })),

    resetFilters: () =>
      set((state) => {
        const cleared = {
          ...EMPTY_FILTER_STATE,
          treeMode: state.appliedFilters.treeMode,
        };
        return {
          draftFilters: cleared,
          appliedFilters: cleared,
          filterVersion: state.filterVersion + 1,
          ...derive(cleared, state),
        };
      }),

    setTreeMode: (treeMode) =>
      set((state) => {
        if (state.appliedFilters.treeMode === treeMode) return state;
        const applied = { ...state.appliedFilters, treeMode };
        return {
          draftFilters: { ...state.draftFilters, treeMode },
          appliedFilters: applied,
          // Same refit as an apply that changes the layout.
          filterVersion: state.filterVersion + 1,
          ...derive(applied, state),
        };
      }),

    applyUrlFilters: (filters) =>
      set((state) => ({
        appliedFilters: filters,
        draftFilters: filters,
        ...derive(filters, state),
      })),
  }),
);

// Members changed (edit, add, reload): rescan with the applied filters.
useMembersStore.subscribe((members, prev) => {
  if (
    members.members === prev.members &&
    members.byId === prev.byId &&
    members.childrenOf === prev.childrenOf
  )
    return;
  const { appliedFilters, filteredMemberIds, filteredCount, isFilterActive } =
    useFiltersStore.getState();
  const next = derive(appliedFilters, {
    filteredMemberIds,
    filteredCount,
    isFilterActive,
  });
  useFiltersStore.setState(next);
});
