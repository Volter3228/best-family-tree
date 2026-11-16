import type { FilterState } from "@/types";
import YearRangeFilterSection from "./YearRangeFilterSection";

interface Props {
  filters: FilterState;
  onChange: (patch: Partial<FilterState>) => void;
}

const JoinYearFilterSection = ({ filters, onChange }: Props) => (
  <YearRangeFilterSection
    title="Рік вступу"
    value={{ from: filters.joinYearFrom, to: filters.joinYearTo }}
    onChange={({ from, to }) => onChange({ joinYearFrom: from, joinYearTo: to })}
  />
);

export default JoinYearFilterSection;
