import type { FilterState } from "@/types";
import YearRangeFilterSection from "./YearRangeFilterSection";
import FilterCheckbox from "./FilterCheckbox";

interface Props {
  filters: FilterState;
  onChange: (patch: Partial<FilterState>) => void;
}

// Teams whose years overlap the chosen year(s). "Активні зараз" keeps only
// teams still running, which makes the years meaningless, so it greys them out.
const TeamPeriodFilterSection = ({ filters, onChange }: Props) => {
  const { teamOnlyOngoing } = filters;

  const toggleOngoing = () => {
    if (teamOnlyOngoing) {
      onChange({ teamOnlyOngoing: false });
    } else {
      onChange({ teamOnlyOngoing: true, teamYearFrom: null, teamYearTo: null });
    }
  };

  return (
    <YearRangeFilterSection
      title="Період активності"
      disabled={teamOnlyOngoing}
      leading={
        <FilterCheckbox
          checked={teamOnlyOngoing}
          onChange={toggleOngoing}
          label="Активні зараз"
        />
      }
      value={{ from: filters.teamYearFrom, to: filters.teamYearTo }}
      onChange={({ from, to }) => onChange({ teamYearFrom: from, teamYearTo: to })}
    />
  );
};

export default TeamPeriodFilterSection;
