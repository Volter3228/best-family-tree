import { useCallback, useMemo, useState } from "react";
import type { FilterCategoryKey, FilterState } from "@/types";
import { useFiltersStore } from "@/store/filtersStore";
import { areFiltersEqual, isFilterActive } from "@/utils/filters";
import ToolbarPanel from "../ToolbarPanel";
import FiltersFooter from "./FiltersFooter";
import FiltersHeader from "./FiltersHeader";
import FilterCategoryRail from "./FilterCategoryRail";
import FilterCategoryPane, {
  SELF_SCROLLING_PANES,
} from "./panes/FilterCategoryPane";
import { useDraftFilterCount } from "./useDraftFilterCount";

interface Props {
  isOpen: boolean;
  isClosing: boolean;
  onClose: () => void;
}

// Fixed height: switching categories must not resize the panel.
const FiltersPanel = ({ isOpen, isClosing, onClose }: Props) => {
  const draftFilters = useFiltersStore((s) => s.draftFilters);
  const setDraftFilters = useFiltersStore((s) => s.setDraftFilters);
  const applyFilters = useFiltersStore((s) => s.applyFilters);
  const discardDraft = useFiltersStore((s) => s.discardDraft);
  const resetFilters = useFiltersStore((s) => s.resetFilters);
  const appliedFilters = useFiltersStore((s) => s.appliedFilters);
  const shownCount = useFiltersStore((s) => s.filteredCount);

  const [category, setCategory] = useState<FilterCategoryKey>("dates");

  const hasChanges = useMemo(
    () => !areFiltersEqual(draftFilters, appliedFilters),
    [draftFilters, appliedFilters],
  );
  const draftCount = useDraftFilterCount(draftFilters, hasChanges);

  // The layout alone is not a criterion: "Очистити" keeps it.
  const canReset = useMemo(
    () =>
      isFilterActive({ ...appliedFilters, treeMode: "family" }) ||
      isFilterActive({ ...draftFilters, treeMode: "family" }),
    [appliedFilters, draftFilters],
  );

  const handleChange = useCallback(
    (patch: Partial<FilterState>) =>
      setDraftFilters((prev) => ({ ...prev, ...patch })),
    [setDraftFilters],
  );

  if (!isOpen) return null;

  return (
    <ToolbarPanel
      isClosing={isClosing}
      className="flex h-[min(60vh,26rem)] max-w-[26rem] flex-col touch-manipulation"
    >
      <FiltersHeader
        shownCount={shownCount}
        isTeamView={appliedFilters.treeMode === "team"}
        canReset={canReset}
        onReset={resetFilters}
        onClose={onClose}
      />
      <div className="flex min-h-0 flex-1 pl-3 pr-1.5">
        <FilterCategoryRail
          active={category}
          filters={draftFilters}
          onSelect={setCategory}
        />
        <div
          role="tabpanel"
          className={
            SELF_SCROLLING_PANES.has(category)
              ? "relative min-w-0 flex-1 overflow-hidden pl-3 pr-2.5"
              : "relative min-w-0 flex-1 overflow-y-auto overflow-x-hidden overscroll-contain pl-3 pr-2.5 [scrollbar-gutter:stable]"
          }
          style={
            { "--scroll-color": "var(--accent-green)" } as React.CSSProperties
          }
        >
          <FilterCategoryPane
            category={category}
            filters={draftFilters}
            onChange={handleChange}
          />
        </div>
      </div>
      <FiltersFooter
        count={draftCount}
        hasChanges={hasChanges}
        onApply={applyFilters}
        onDiscard={discardDraft}
      />
    </ToolbarPanel>
  );
};

export default FiltersPanel;
