import type { FilterState } from "@/types";
import YearRangeFilterSection from "./YearRangeFilterSection";

interface Props {
  isOpen: boolean;
  filters: FilterState;
  onChange: (patch: Partial<FilterState>) => void;
  onToggle: () => void;
}

const JoinYearFilterSection = ({
  filters,
  onChange,
  isOpen,
  onToggle,
}: Props) => (
  <YearRangeFilterSection
    title="Рік вступу"
    isOpen={isOpen}
    onToggle={onToggle}
    value={{
      from: filters.joinYearFrom,
      to: filters.joinYearTo,
      isRange: filters.joinYearRange,
    }}
    onChange={({ from, to, isRange }) =>
      onChange({ joinYearFrom: from, joinYearTo: to, joinYearRange: isRange })
    }
  />
);

export default JoinYearFilterSection;
