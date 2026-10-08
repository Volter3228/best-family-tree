import type { FilterState } from "@/types";
import YearRangeFilterSection from "./YearRangeFilterSection";
import FilterCheckbox from "./FilterCheckbox";

interface Props {
  isOpen: boolean;
  filters: FilterState;
  onChange: (patch: Partial<FilterState>) => void;
  onToggle: () => void;
}

// Teams whose years overlap the chosen year(s); "Активні" keeps only teams
// that are still running.
const TeamPeriodFilterSection = ({
  filters,
  onChange,
  isOpen,
  onToggle,
}: Props) => (
  <YearRangeFilterSection
    title="Період активності"
    isOpen={isOpen}
    onToggle={onToggle}
    hasActiveValue={
      filters.teamYearFrom !== null ||
      filters.teamYearTo !== null ||
      filters.teamOnlyOngoing
    }
    value={{
      from: filters.teamYearFrom,
      to: filters.teamYearTo,
      isRange: filters.teamYearRange,
    }}
    onChange={({ from, to, isRange }) =>
      onChange({ teamYearFrom: from, teamYearTo: to, teamYearRange: isRange })
    }
  >
    <FilterCheckbox
      checked={filters.teamOnlyOngoing}
      onChange={() => onChange({ teamOnlyOngoing: !filters.teamOnlyOngoing })}
      label="Активні"
    />
  </YearRangeFilterSection>
);

export default TeamPeriodFilterSection;
