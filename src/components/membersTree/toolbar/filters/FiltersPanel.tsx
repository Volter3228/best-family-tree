import { useCallback, useState } from "react";
import { twMerge } from "tailwind-merge";
import type { FilterState, FilterSectionKey } from "@/types";
import { useFilters } from "@/hooks/membersTree/useFilters";
import {
  MEMBER_STATUSES,
  ACTIVITY_STATES,
  JOIN_SEASONS,
  AVATAR_VALUES,
  SEASON_OPTIONS,
  STATUS_OPTIONS,
  ACTIVITY_OPTIONS,
  AVATAR_OPTIONS,
} from "@/constants/filters";
import FiltersHeader from "./FiltersHeader";
import {
  CheckboxGroupFilterSection,
  JoinYearFilterSection,
  BirthdayFilterSection,
  LineageFilterSection,
  ConnectionsFilterSection,
  RoleFilterSection,
  EventTypeFilterSection,
} from "./sections";

interface Props {
  isOpen: boolean;
  isClosing: boolean;
}

const FiltersPanel = ({ isOpen, isClosing }: Props) => {
  const {
    draftFilters,
    setDraftFilters,
    applyFilters,
    resetFilters,
    filteredCount,
    isFilterActive: active,
    isDraftActive,
  } = useFilters();

  const [sections, setSections] = useState<Record<FilterSectionKey, boolean>>({
    joinYear: false,
    joinSeason: false,
    status: false,
    activity: false,
    birthday: false,
    avatar: false,
    lineage: false,
    connections: false,
    role: false,
    project: false,
  });

  const toggleSection = (key: FilterSectionKey) => {
    setSections((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const handleToggleSection = useCallback(
    (key: FilterSectionKey) => () => toggleSection(key),
    [toggleSection],
  );

  const handleChange = (patch: Partial<FilterState>) => {
    setDraftFilters((prev) => ({ ...prev, ...patch }));
  };

  const handleFilterChange =
    (filter: keyof FilterState) => (next: string[] | string) =>
      handleChange({ [filter]: next });

  if (!isOpen) return null;

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
          isActive={active}
          isDraftActive={isDraftActive}
          onApply={applyFilters}
          onReset={resetFilters}
        />
        <div
          className="overflow-y-auto overflow-x-hidden flex-1 transparent"
          style={{
            scrollbarWidth: "thin",
            scrollbarColor: "var(--accent-green) transparent",
          }}
        >
          <JoinYearFilterSection
            filters={draftFilters}
            isOpen={sections.joinYear}
            onChange={handleChange}
            onToggle={handleToggleSection("joinYear")}
          />
          <CheckboxGroupFilterSection
            title="Сезон вступу"
            options={SEASON_OPTIONS}
            allValues={JOIN_SEASONS}
            selected={draftFilters.joinSeasons}
            isOpen={sections.joinSeason}
            onChangeSelected={handleFilterChange("joinSeasons")}
            onToggle={handleToggleSection("joinSeason")}
          />
          <BirthdayFilterSection
            filters={draftFilters}
            isOpen={sections.birthday}
            onChange={handleChange}
            onToggle={handleToggleSection("birthday")}
          />
          <CheckboxGroupFilterSection
            title="Статус"
            options={STATUS_OPTIONS}
            allValues={MEMBER_STATUSES}
            selected={draftFilters.statuses}
            isOpen={sections.status}
            onChangeSelected={handleFilterChange("statuses")}
            onToggle={handleToggleSection("status")}
          />
          <CheckboxGroupFilterSection
            title="Стан активності"
            options={ACTIVITY_OPTIONS}
            allValues={ACTIVITY_STATES}
            selected={draftFilters.activityStates}
            isOpen={sections.activity}
            onChangeSelected={handleFilterChange("activityStates")}
            onToggle={handleToggleSection("activity")}
          />
          <CheckboxGroupFilterSection
            title="Аватар"
            options={AVATAR_OPTIONS}
            allValues={AVATAR_VALUES}
            selected={draftFilters.avatars}
            isOpen={sections.avatar}
            onChangeSelected={handleFilterChange("avatars")}
            onToggle={handleToggleSection("avatar")}
          />
          <LineageFilterSection
            filters={draftFilters}
            isOpen={sections.lineage}
            onChange={handleChange}
            onToggle={handleToggleSection("lineage")}
          />
          <RoleFilterSection
            filters={draftFilters}
            isOpen={sections.role}
            onChange={handleChange}
            onToggle={handleToggleSection("role")}
          />
          <EventTypeFilterSection
            filters={draftFilters}
            isOpen={sections.project}
            onChange={handleChange}
            onToggle={handleToggleSection("project")}
          />
          <ConnectionsFilterSection
            filters={draftFilters}
            isOpen={sections.connections}
            onChange={handleChange}
            onToggle={handleToggleSection("connections")}
          />
        </div>
      </div>
    </div>
  );
};

export default FiltersPanel;
