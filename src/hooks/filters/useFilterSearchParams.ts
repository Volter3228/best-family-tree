import { useEffect, useRef, useCallback } from "react";
import { useSearchParams, usePathname } from "next/navigation";
import {
  parseFiltersFromSearchParams,
  filtersToSearchParams,
} from "@/utils/filters";
import type { FilterState } from "@/types/filters";
import { useFamilyGroups } from "@/hooks/data/useFamilyGroups";

interface Props {
  filters: FilterState;
  setFilters: (filters: FilterState) => void;
}

export const useFilterSearchParams = ({ filters, setFilters }: Props) => {
  const searchParams = useSearchParams();
  const familyGroups = useFamilyGroups();
  const pathname = usePathname();
  const isInitializedRef = useRef(false);
  const skipNextUrlUpdateRef = useRef(false);

  // Read URL -> state on mount
  useEffect(() => {
    if (isInitializedRef.current) return;
    // Family slugs resolve to ids by name, so wait for the family list.
    if (searchParams.has("family") && familyGroups.length === 0) return;
    isInitializedRef.current = true;

    const parsed = parseFiltersFromSearchParams(searchParams, familyGroups);
    const hasParams = searchParams.toString().length > 0;

    if (hasParams) {
      skipNextUrlUpdateRef.current = true;
      setFilters(parsed);
    }
  }, [searchParams, setFilters, familyGroups]);

  const syncToUrl = useCallback(
    (state: FilterState) => {
      if (skipNextUrlUpdateRef.current) {
        skipNextUrlUpdateRef.current = false;
        return;
      }

      const params = filtersToSearchParams(state, familyGroups);
      const queryStr = params.toString().replaceAll("%2C", ",");
      const url = queryStr ? `${pathname}?${queryStr}` : pathname;

      // Not router.replace: that re-runs the server page and refetches the tree
      window.history.replaceState(null, "", url);
    },
    [pathname, familyGroups],
  );

  useEffect(() => {
    if (!isInitializedRef.current) return;
    syncToUrl(filters);
  }, [filters, syncToUrl]);
};
