"use client";

import {
  createContext,
  useMemo,
  useState,
  useCallback,
  type Dispatch,
  type SetStateAction,
} from "react";
import { useFilterSearchParams } from "@/hooks";
import { useFilteredMembers } from "@/hooks/membersTree/useFilteredMembers";
import { EMPTY_FILTER_STATE } from "@/constants/filters";
import type { FilterState } from "@/types";

interface IFiltersContext {
  /** Draft filters edited in the panel (not yet applied) */
  draftFilters: FilterState;
  setDraftFilters: Dispatch<SetStateAction<FilterState>>;
  appliedFilters: FilterState;
  applyFilters: () => void;
  resetFilters: () => void;
  /** Filters change counter, bumps on every apply. */
  filterVersion: number;
  /** Members passing the applied filters (null = no filtering). */
  filteredMemberIds: Set<string> | null;
  filteredCount: number;
  isFilterActive: boolean;
}

export const FiltersContext = createContext<IFiltersContext | undefined>(
  undefined,
);

interface Props {
  children: React.ReactNode;
}

export const FiltersProvider = ({ children }: Props) => {
  const [draftFilters, setDraftFilters] =
    useState<FilterState>(EMPTY_FILTER_STATE);
  const [appliedFilters, setAppliedFilters] =
    useState<FilterState>(EMPTY_FILTER_STATE);
  const [filterVersion, setFilterVersion] = useState(0);

  const applyFilters = useCallback(() => {
    setAppliedFilters(draftFilters);
    setFilterVersion((v) => v + 1);
  }, [draftFilters]);

  // Clearing the criteria keeps the chosen layout.
  const resetFilters = useCallback(() => {
    setDraftFilters((prev) => ({
      ...EMPTY_FILTER_STATE,
      treeMode: prev.treeMode,
    }));
  }, []);

  const applySearchParamsFilters = useCallback((filters: FilterState) => {
    setAppliedFilters(filters);
    setDraftFilters(filters);
  }, []);

  // Applied filters sync to URL
  useFilterSearchParams({
    filters: appliedFilters,
    setFilters: applySearchParamsFilters,
  });

  const { filteredMemberIds, filteredCount, isFilterActive } =
    useFilteredMembers(appliedFilters);

  const value = useMemo(
    () => ({
      draftFilters,
      setDraftFilters,
      appliedFilters,
      applyFilters,
      resetFilters,
      filterVersion,
      filteredMemberIds,
      filteredCount,
      isFilterActive,
    }),
    [
      draftFilters,
      appliedFilters,
      applyFilters,
      resetFilters,
      filterVersion,
      filteredMemberIds,
      filteredCount,
      isFilterActive,
    ],
  );

  return (
    <FiltersContext.Provider value={value}>{children}</FiltersContext.Provider>
  );
};
