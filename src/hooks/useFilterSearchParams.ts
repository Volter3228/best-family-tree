import { useEffect, useRef, useCallback } from "react";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import {
  parseFiltersFromSearchParams,
  filtersToSearchParams,
} from "@/utils/filters";
import type { FilterState } from "@/types/filters";

interface Props {
  filters: FilterState;
  setFilters: (filters: FilterState) => void;
}

export const useFilterSearchParams = ({ filters, setFilters }: Props) => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const isInitializedRef = useRef(false);
  const skipNextUrlUpdateRef = useRef(false);

  // Read URL -> state on mount
  useEffect(() => {
    if (isInitializedRef.current) return;
    isInitializedRef.current = true;

    const parsed = parseFiltersFromSearchParams(searchParams);
    const hasParams = searchParams.toString().length > 0;

    if (hasParams) {
      skipNextUrlUpdateRef.current = true;
      setFilters(parsed);
    }
  }, [searchParams, setFilters]);

  const syncToUrl = useCallback(
    (state: FilterState) => {
      if (skipNextUrlUpdateRef.current) {
        skipNextUrlUpdateRef.current = false;
        return;
      }

      const params = filtersToSearchParams(state);
      const queryStr = params.toString().replaceAll("%2C", ",");
      const url = queryStr ? `${pathname}?${queryStr}` : pathname;

      router.replace(url, { scroll: false });
    },
    [pathname, router],
  );

  useEffect(() => {
    if (!isInitializedRef.current) return;
    syncToUrl(filters);
  }, [filters, syncToUrl]);
};
