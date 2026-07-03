import DatePicker from "react-datepicker";
import { toDate, fromDate } from "@/utils";
import { DATE_PICKER_CLASSES } from "@/constants/filters";
import type { FilterState } from "@/types/filters";
import FilterSection from "./FilterSection";
import FilterCheckbox from "./FilterCheckbox";
import ClearButton from "./ClearButton";

interface Props {
  isOpen: boolean;
  filters: FilterState;
  onChange: (patch: Partial<FilterState>) => void;
  onToggle: () => void;
}

const BirthdayFilterSection = ({
  isOpen,
  filters,
  onChange,
  onToggle,
}: Props) => {
  const { birthdayRange, birthdayIncludeYear, birthdayFrom, birthdayTo } =
    filters;
  const fmt = birthdayIncludeYear ? "dd.MM.yyyy" : "dd.MM";

  const fromDateObj = toDate(birthdayFrom, birthdayIncludeYear);
  const toDateObj = toDate(birthdayTo, birthdayIncludeYear);

  const handleFromChange = (d: Date | null) =>
    onChange({ birthdayFrom: fromDate(d, birthdayIncludeYear) });

  const handleToChange = (d: Date | null) =>
    onChange({ birthdayTo: fromDate(d, birthdayIncludeYear) });

  const toggleRange = () => {
    if (birthdayRange) {
      onChange({ birthdayRange: false, birthdayTo: null });
    } else {
      onChange({ birthdayRange: true });
    }
  };

  const toggleIncludeYear = () => {
    // Reset dates when toggling year mode to avoid format mismatch
    onChange({
      birthdayIncludeYear: !birthdayIncludeYear,
      birthdayFrom: null,
      birthdayTo: null,
    });
  };

  const handleClear = (key: "birthdayFrom" | "birthdayTo") => () => {
    onChange({
      [key]: null,
    });
  };

  // Common datepicker props
  const pickerProps = {
    dateFormat: fmt,
    autoComplete: "off" as const,
    showYearDropdown: birthdayIncludeYear,
    scrollableYearDropdown: birthdayIncludeYear,
    yearDropdownItemNumber: birthdayIncludeYear ? 40 : undefined,
    dateFormatCalendar: birthdayIncludeYear ? "LLLL yyyy" : "LLLL",
    className: DATE_PICKER_CLASSES,
    portalId: "datepicker-portal",
  };

  const hasActiveValue = birthdayFrom !== null || birthdayTo !== null;

  return (
    <FilterSection
      title="День народження"
      isOpen={isOpen}
      onToggle={onToggle}
      hasActiveValue={hasActiveValue}
    >
      <div className="flex flex-col gap-2">
        {birthdayRange ? (
          <div className="flex items-center gap-2">
            <div className="relative flex-1 min-w-0">
              <DatePicker
                selected={fromDateObj}
                onChange={handleFromChange}
                placeholderText="Від"
                maxDate={toDateObj ?? undefined}
                {...pickerProps}
              />
              {birthdayFrom && (
                <ClearButton onClick={handleClear("birthdayFrom")} />
              )}
            </div>
            <span className="text-fuchsia-400/60 text-xs shrink-0">—</span>
            <div className="relative flex-1 min-w-0">
              <DatePicker
                selected={toDateObj}
                onChange={handleToChange}
                placeholderText="До"
                minDate={fromDateObj ?? undefined}
                {...pickerProps}
              />
              {birthdayTo && (
                <ClearButton onClick={handleClear("birthdayTo")} />
              )}
            </div>
          </div>
        ) : (
          <div className="relative w-full">
            <DatePicker
              selected={fromDateObj}
              onChange={handleFromChange}
              placeholderText="Дата"
              {...pickerProps}
            />
            {birthdayFrom && (
              <ClearButton onClick={handleClear("birthdayFrom")} />
            )}
          </div>
        )}
        <FilterCheckbox
          checked={birthdayRange}
          onChange={toggleRange}
          label="Діапазон"
        />
        <FilterCheckbox
          checked={birthdayIncludeYear}
          onChange={toggleIncludeYear}
          label="Враховувати рік"
        />
      </div>
    </FilterSection>
  );
};

export default BirthdayFilterSection;
