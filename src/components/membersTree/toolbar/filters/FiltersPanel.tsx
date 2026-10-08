import { useCallback, useMemo, useState } from "react";
import { twMerge } from "tailwind-merge";
import type { FilterState, FilterSectionKey } from "@/types";
import { useFilters } from "@/hooks/membersTree/useFilters";
import { isFilterActive } from "@/utils/filters";
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
  const {
    draftFilters,
    setDraftFilters,
    applyFilters,
    resetFilters,
    filteredCount,
    appliedFilters,
  } = useFilters();

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
    <div
      className={twMerge(
        "fixed bottom-24 left-1/2 -translate-x-1/2 z-40 w-[calc(100%-2rem)] max-w-80 max-h-[60vh]",
        "backdrop-blur-lg rounded-2xl",
        isClosing ? "animate-sidebar-slide-out" : "animate-sidebar-slide-in",
      )}
    >
      <div className="rounded-2xl bg-surface/70 shadow-2xl flex flex-col max-h-[60vh]">
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
          style={{
            scrollbarWidth: "thin",
            scrollbarColor: "var(--accent-green) transparent",
          }}
        >
          <MemberFilterCategory {...groupProps} />
          <TeamFilterCategory {...groupProps} />
        </div>
      </div>
    </div>
  );
};

export default FiltersPanel;
