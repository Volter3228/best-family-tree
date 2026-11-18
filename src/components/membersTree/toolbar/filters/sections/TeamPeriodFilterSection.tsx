import { useT } from "@/i18n/useT";
import type { FilterState } from "@/types";
import YearRangeFilterSection from "./YearRangeFilterSection";
import FilterCheckbox from "./FilterCheckbox";

interface Props {
  filters: FilterState;
  onChange: (patch: Partial<FilterState>) => void;
}

// Teams whose years overlap the chosen year(s). "Active now" keeps only
// teams still running, which makes the years meaningless, so it greys them out.
const TeamPeriodFilterSection = ({ filters, onChange }: Props) => {
  const t = useT().filters.teams;
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
      title={t.activityPeriod}
      disabled={teamOnlyOngoing}
      leading={
        <FilterCheckbox
          checked={teamOnlyOngoing}
          onChange={toggleOngoing}
          label={t.activeNow}
        />
      }
      value={{ from: filters.teamYearFrom, to: filters.teamYearTo }}
      onChange={({ from, to }) =>
        onChange({ teamYearFrom: from, teamYearTo: to })
      }
    />
  );
};

export default TeamPeriodFilterSection;
