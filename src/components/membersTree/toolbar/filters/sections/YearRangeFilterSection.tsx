import { useId, type ReactNode } from "react";
import { twMerge } from "tailwind-merge";
import { FILTER_INPUT_CLASSES } from "@/constants/filters";
import { useT } from "@/i18n/useT";
import FilterSection from "./FilterSection";
import ClearButton from "./ClearButton";
import RangeInputs, { type RangeSlot } from "./RangeInputs";

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

const parseYear = (raw: string): number | null => {
  const digits = raw.replace(/\D/g, "");
  return digits ? Number(digits) : null;
};

interface YearInputProps extends RangeSlot {
  value: number | null;
  onChange: (value: number | null) => void;
  onBlur?: (value: number | null) => void;
  onClear: () => void;
}

const YearInput = ({
  id,
  placeholder,
  value,
  disabled,
  onChange,
  onBlur,
  onClear,
}: YearInputProps) => (
  <div className="relative">
    <input
      id={id}
      type="text"
      inputMode="numeric"
      pattern="[0-9]*"
      placeholder={placeholder}
      value={value ?? ""}
      disabled={disabled}
      onChange={(e) => onChange(parseYear(e.target.value))}
      onBlur={(e) => onBlur?.(parseYear(e.target.value))}
      className={twMerge(
        FILTER_INPUT_CLASSES,
        value !== null && !disabled && "pr-8",
        "disabled:cursor-not-allowed disabled:opacity-50",
      )}
    />
    {value !== null && !disabled && <ClearButton onClick={onClear} />}
  </div>
);

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

  // A range typed the wrong way round is fixed once the field loses focus.
  const handleBlur = (field: "from" | "to") => (year: number | null) => {
    if (year === null) return;
    if (field === "from" && to !== null && year > to) {
      onChange({ from: year, to: year });
    } else if (field === "to" && from !== null && year < from) {
      onChange({ from: year, to: year });
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
              onClear={() => onChange({ from: null, to })}
            />
          )}
          renderTo={(slot) => (
            <YearInput
              {...slot}
              value={to}
              onChange={(year) => onChange({ from, to: year })}
              onBlur={handleBlur("to")}
              onClear={() => onChange({ from, to: null })}
            />
          )}
        />
      </div>
    </FilterSection>
  );
};

export default YearRangeFilterSection;
