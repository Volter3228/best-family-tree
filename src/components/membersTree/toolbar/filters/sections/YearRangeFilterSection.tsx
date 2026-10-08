import { DATE_PICKER_CLASSES } from "@/constants/filters";
import FilterSection from "./FilterSection";
import FilterCheckbox from "./FilterCheckbox";
import ClearButton from "./ClearButton";

export interface YearRangeValue {
  from: number | null;
  to: number | null;
  isRange: boolean;
}

interface Props {
  title: string;
  isOpen: boolean;
  value: YearRangeValue;
  onChange: (value: YearRangeValue) => void;
  onToggle: () => void;
  // Highlights the section in the list even when no year is entered.
  hasActiveValue?: boolean;
  // Extra controls under the years (e.g. "only running teams").
  children?: React.ReactNode;
}

const parseYear = (raw: string): number | null => {
  const digits = raw.replace(/\D/g, "");
  return digits ? Number(digits) : null;
};

interface YearInputProps {
  placeholder: string;
  value: number | null;
  onChange: (value: number | null) => void;
  onBlur?: (value: number | null) => void;
  onClear: () => void;
}

const YearInput = ({
  placeholder,
  value,
  onChange,
  onBlur,
  onClear,
}: YearInputProps) => (
  <div className="relative flex-1">
    <input
      type="text"
      inputMode="numeric"
      pattern="[0-9]*"
      placeholder={placeholder}
      value={value ?? ""}
      onChange={(e) => onChange(parseYear(e.target.value))}
      onBlur={(e) => onBlur?.(parseYear(e.target.value))}
      className={DATE_PICKER_CLASSES}
    />
    {value !== null && <ClearButton onClick={onClear} />}
  </div>
);

// One year, or a from/to range with open ends (an empty bound means "no limit").
const YearRangeFilterSection = ({
  title,
  isOpen,
  value,
  onChange,
  onToggle,
  hasActiveValue,
  children,
}: Props) => {
  const { from, to, isRange } = value;

  // A range typed the wrong way round is fixed once the field loses focus.
  const handleBlur = (field: "from" | "to") => (year: number | null) => {
    if (year === null) return;
    if (field === "from" && to !== null && year > to) {
      onChange({ ...value, from: year, to: year });
    } else if (field === "to" && from !== null && year < from) {
      onChange({ ...value, from: year, to: year });
    }
  };

  const toggleRange = () =>
    onChange({ from, to: isRange ? from : null, isRange: !isRange });

  return (
    <FilterSection
      title={title}
      isOpen={isOpen}
      onToggle={onToggle}
      hasActiveValue={hasActiveValue ?? (from !== null || to !== null)}
    >
      <div className="flex flex-col gap-2">
        {isRange ? (
          <div className="flex items-center gap-2">
            <YearInput
              placeholder="Від"
              value={from}
              onChange={(year) => onChange({ ...value, from: year })}
              onBlur={handleBlur("from")}
              onClear={() => onChange({ ...value, from: null })}
            />
            <span className="text-placeholder text-xs shrink-0">—</span>
            <YearInput
              placeholder="До"
              value={to}
              onChange={(year) => onChange({ ...value, to: year })}
              onBlur={handleBlur("to")}
              onClear={() => onChange({ ...value, to: null })}
            />
          </div>
        ) : (
          <div className="flex">
            <YearInput
              placeholder="Рік"
              value={from}
              onChange={(year) => onChange({ ...value, from: year, to: year })}
              onClear={() => onChange({ ...value, from: null, to: null })}
            />
          </div>
        )}
        <FilterCheckbox
          checked={isRange}
          onChange={toggleRange}
          label="Діапазон"
        />
        {children}
      </div>
    </FilterSection>
  );
};

export default YearRangeFilterSection;
