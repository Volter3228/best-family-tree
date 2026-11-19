import { useId, type ReactNode } from "react";
import { useT } from "@/i18n/useT";
import FilterSection from "./FilterSection";
import RangeInputs from "./RangeInputs";
import YearInput from "./YearInput";

interface YearRangeValue {
  from: number | null;
  to: number | null;
}

interface Props {
  title: string;
  value: YearRangeValue;
  onChange: (value: YearRangeValue) => void;
  // Greys out the years.
  disabled?: boolean;
  // Controls above the years (e.g. "only running teams").
  leading?: ReactNode;
}

// A from/to year range with open ends (an empty bound means "no limit").
// One filled year is an exact match.
const YearRangeFilterSection = ({
  title,
  value,
  onChange,
  disabled = false,
  leading,
}: Props) => {
  const t = useT().filters.dates;
  const inputId = useId();
  const { from, to } = value;

  // Leaving a field applies its year; a range typed the wrong way round
  // collapses to that year.
  const handleBlur = (field: "from" | "to") => (year: number | null) => {
    if (field === "from") {
      const inverted = year !== null && to !== null && year > to;
      onChange({ from: year, to: inverted ? year : to });
    } else {
      const inverted = year !== null && from !== null && year < from;
      onChange({ from: inverted ? year : from, to: year });
    }
  };

  return (
    <FilterSection title={title} htmlFor={inputId}>
      <div className="flex flex-col gap-2">
        {leading}
        <RangeInputs
          fromId={inputId}
          fromPlaceholder={t.from}
          toPlaceholder={t.to}
          disabled={disabled}
          renderFrom={(slot) => (
            <YearInput
              {...slot}
              value={from}
              onChange={(year) => onChange({ from: year, to })}
              onBlur={handleBlur("from")}
            />
          )}
          renderTo={(slot) => (
            <YearInput
              {...slot}
              value={to}
              onChange={(year) => onChange({ from, to: year })}
              onBlur={handleBlur("to")}
            />
          )}
        />
      </div>
    </FilterSection>
  );
};

export default YearRangeFilterSection;
