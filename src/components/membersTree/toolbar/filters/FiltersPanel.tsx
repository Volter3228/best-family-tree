import { useCallback, useMemo, useState } from "react";
import type { FilterState, FilterSectionKey } from "@/types";
import { useFiltersStore } from "@/store/filtersStore";
import { isFilterActive } from "@/utils/filters";
import ToolbarPanel from "../ToolbarPanel";
import FiltersHeader from "./FiltersHeader";
import MemberFilterCategory from "./MemberFilterCategory";
import TeamFilterCategory from "./TeamFilterCategory";
import ViewModeSwitch from "./ViewModeSwitch";

interface Props {
  isOpen: boolean;
  isClosing: boolean;
}

const ALL_SECTIONS_CLOSED: Record<FilterSectionKey, boolean> = {
  joinYear: false,
  joinSeason: false,
  status: false,
  activity: false,
  birthday: false,
  avatar: false,
  lineage: false,
  role: false,
  teamType: false,
  teamPeriod: false,
};

const FiltersPanel = ({ isOpen, isClosing }: Props) => {
  const draftFilters = useFiltersStore((s) => s.draftFilters);
  const setDraftFilters = useFiltersStore((s) => s.setDraftFilters);
  const applyFilters = useFiltersStore((s) => s.applyFilters);
  const resetFilters = useFiltersStore((s) => s.resetFilters);
  const filteredCount = useFiltersStore((s) => s.filteredCount);
  const appliedFilters = useFiltersStore((s) => s.appliedFilters);

  const [openSections, setOpenSections] = useState(ALL_SECTIONS_CLOSED);

  // The layout alone is not a criterion: "Очистити" keeps it.
  const canReset = useMemo(
    () =>
      isFilterActive({ ...appliedFilters, treeMode: "family" }) ||
      isFilterActive({ ...draftFilters, treeMode: "family" }),
    [appliedFilters, draftFilters],
  );

  const handleToggleSection = useCallback(
    (key: FilterSectionKey) => () =>
      setOpenSections((prev) => ({ ...prev, [key]: !prev[key] })),
    [],
  );

  const handleChange = useCallback(
    (patch: Partial<FilterState>) =>
      setDraftFilters((prev) => ({ ...prev, ...patch })),
    [setDraftFilters],
  );

  if (!isOpen) return null;

  const groupProps = {
    filters: draftFilters,
    openSections,
    onChange: handleChange,
    onToggleSection: handleToggleSection,
  };

  return (
    <ToolbarPanel isClosing={isClosing} className="flex flex-col max-h-[60vh]">
      <FiltersHeader
        count={filteredCount}
        isTeamMode={appliedFilters.treeMode === "team"}
        canReset={canReset}
        onApply={applyFilters}
        onReset={resetFilters}
      />
      <ViewModeSwitch
        value={draftFilters.treeMode}
        onChange={(treeMode) => handleChange({ treeMode })}
      />
      <div
        className="overflow-y-auto overflow-x-hidden flex-1 transparent"
        style={
          { "--scroll-color": "var(--accent-green)" } as React.CSSProperties
        }
      >
        <MemberFilterCategory {...groupProps} />
        <TeamFilterCategory {...groupProps} />
      </div>
    </ToolbarPanel>
  );
};

export default FiltersPanel;
