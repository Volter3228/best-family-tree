import { DATE_PICKER_CLASSES } from "@/constants/filters";
import type { FilterState } from "@/types";
import FilterSection from "./FilterSection";
import FilterCheckbox from "./FilterCheckbox";
import ClearButton from "./ClearButton";

interface Props {
  isOpen: boolean;
  filters: FilterState;
  onChange: (patch: Partial<FilterState>) => void;
  onToggle: () => void;
}

const parseYear = (raw: string): number | null => {
  const digits = raw.replace(/\D/g, "");
  if (!digits) return null;
  return Number(digits);
};

const JoinYearFilterSection = ({
  filters,
  onChange,
  isOpen,
  onToggle,
}: Props) => {
  const { joinYearRange } = filters;

  const handleSingleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseYear(e.target.value);
    onChange({ joinYearFrom: val, joinYearTo: val });
  };

  const handleChange =
    (field: "joinYearFrom" | "joinYearTo") =>
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const val = parseYear(e.target.value);
      const patch: Partial<FilterState> = { [field]: val };
      onChange(patch);
    };

  // If user enters wrong range (ex: year to > year from), set other input to last one value
  const handleBlur =
    (field: "joinYearFrom" | "joinYearTo") =>
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const val = parseYear(e.target.value);
      const patch: Partial<FilterState> = { [field]: val };

      if (val !== null) {
        if (field === "joinYearFrom") {
          if (filters.joinYearTo !== null && val > filters.joinYearTo) {
            patch.joinYearTo = val;
          }
        } else {
          if (filters.joinYearFrom !== null && val < filters.joinYearFrom) {
            patch.joinYearFrom = val;
          }
        }
      }

      onChange(patch);
    };

  const toggleRange = () => {
    if (joinYearRange) {
      onChange({ joinYearRange: false, joinYearTo: filters.joinYearFrom });
    } else {
      onChange({ joinYearRange: true, joinYearTo: null });
    }
  };

  const handleClear = (patch: Partial<FilterState>) => () => onChange(patch);

  const hasYearFrom = filters.joinYearFrom !== null;
  const hasYearTo = filters.joinYearTo !== null;
  const hasActiveValue = hasYearFrom || hasYearTo;

  return (
    <FilterSection
      title="Рік вступу"
      isOpen={isOpen}
      onToggle={onToggle}
      hasActiveValue={hasActiveValue}
    >
      <div className="flex flex-col gap-2">
        {joinYearRange ? (
          <div className="flex items-center gap-2">
            <div className="relative flex-1">
              <input
                type="text"
                inputMode="numeric"
                pattern="[0-9]*"
                placeholder="Від"
                value={filters.joinYearFrom ?? ""}
                onBlur={handleBlur("joinYearFrom")}
                onChange={handleChange("joinYearFrom")}
                className={DATE_PICKER_CLASSES}
              />
              {hasYearFrom && (
                <ClearButton onClick={handleClear({ joinYearFrom: null })} />
              )}
            </div>
            <span className="text-placeholder text-xs shrink-0">—</span>
            <div className="relative flex-1">
              <input
                type="text"
                inputMode="numeric"
                pattern="[0-9]*"
                placeholder="До"
                value={filters.joinYearTo ?? ""}
                onBlur={handleBlur("joinYearTo")}
                onChange={handleChange("joinYearTo")}
                className={DATE_PICKER_CLASSES}
              />
              {hasYearTo && (
                <ClearButton onClick={handleClear({ joinYearTo: null })} />
              )}
            </div>
          </div>
        ) : (
          <div className="relative">
            <input
              type="text"
              inputMode="numeric"
              pattern="[0-9]*"
              placeholder="Рік"
              value={filters.joinYearFrom ?? ""}
              onChange={handleSingleChange}
              className={DATE_PICKER_CLASSES}
            />
            {hasYearFrom && (
              <ClearButton
                onClick={handleClear({ joinYearFrom: null, joinYearTo: null })}
              />
            )}
          </div>
        )}
        <FilterCheckbox
          checked={joinYearRange}
          onChange={toggleRange}
          label="Діапазон"
        />
      </div>
    </FilterSection>
  );
};

export default JoinYearFilterSection;
