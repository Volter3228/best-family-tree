import { useId } from "react";
import DatePicker from "react-datepicker";
import { enUS, uk } from "date-fns/locale";
import { twMerge } from "tailwind-merge";
import { toDate, fromDate } from "@/utils";
import { useLocale, useT } from "@/i18n/useT";
import { FILTER_INPUT_CLASSES } from "@/constants/filters";
import { MAX_DATE_BIRTHDAY, MIN_DATE_BIRTHDAY } from "@/constants/form";
import type { FilterState } from "@/types";
import FilterSection from "./FilterSection";
import FilterCheckbox from "./FilterCheckbox";
import ClearButton from "./ClearButton";
import RangeInputs from "./RangeInputs";

interface Props {
  filters: FilterState;
  onChange: (patch: Partial<FilterState>) => void;
}

const BirthdayFilterSection = ({ filters, onChange }: Props) => {
  const locale = useLocale();
  const t = useT().filters.dates;
  const { birthdayIncludeYear, birthdayFrom, birthdayTo } = filters;
  // Labels the first date field.
  const firstInputId = useId();
  const fmt = birthdayIncludeYear ? "dd.MM.yyyy" : "dd.MM";

  const fromDateObj = toDate(birthdayFrom, birthdayIncludeYear);
  const toDateObj = toDate(birthdayTo, birthdayIncludeYear);

  const handleFromChange = (d: Date | null) =>
    onChange({ birthdayFrom: fromDate(d, birthdayIncludeYear) });

  const handleToChange = (d: Date | null) =>
    onChange({ birthdayTo: fromDate(d, birthdayIncludeYear) });

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

  // Room for the clear button only when the field holds a date.
  const inputClass = (value: string | null) =>
    twMerge(FILTER_INPUT_CLASSES, value ? "pr-8" : undefined);

  const minBound = birthdayIncludeYear ? MIN_DATE_BIRTHDAY : undefined;
  const maxBound = birthdayIncludeYear ? MAX_DATE_BIRTHDAY : undefined;

  // Common datepicker props
  const pickerProps = {
    locale: locale === "uk" ? uk : enUS,
    dateFormat: fmt,
    autoComplete: "off" as const,
    showYearDropdown: birthdayIncludeYear,
    scrollableYearDropdown: birthdayIncludeYear,
    yearDropdownItemNumber: birthdayIncludeYear ? 40 : undefined,
    dateFormatCalendar: birthdayIncludeYear ? "LLLL yyyy" : "LLLL",
    // Block wrapper, so the 40px field is the full height the clear button centres on.
    wrapperClassName: "block w-full",
    portalId: "datepicker-portal",
    popperClassName: "datepicker-accent-green",
    minDate: minBound,
    maxDate: maxBound,
  };

  return (
    <FilterSection title={t.birthday} htmlFor={firstInputId}>
      <div className="flex flex-col gap-2">
        <RangeInputs
          fromId={firstInputId}
          fromPlaceholder={t.from}
          toPlaceholder={t.to}
          renderFrom={({ id, placeholder }) => (
            <div className="relative">
              <DatePicker
                id={id}
                selected={fromDateObj}
                onChange={handleFromChange}
                placeholderText={placeholder}
                {...pickerProps}
                className={inputClass(birthdayFrom)}
                maxDate={toDateObj ?? maxBound}
              />
              {birthdayFrom && (
                <ClearButton onClick={handleClear("birthdayFrom")} />
              )}
            </div>
          )}
          renderTo={({ placeholder }) => (
            <div className="relative">
              <DatePicker
                selected={toDateObj}
                onChange={handleToChange}
                placeholderText={placeholder}
                {...pickerProps}
                className={inputClass(birthdayTo)}
                minDate={fromDateObj ?? minBound}
              />
              {birthdayTo && (
                <ClearButton onClick={handleClear("birthdayTo")} />
              )}
            </div>
          )}
        />
        <FilterCheckbox
          checked={birthdayIncludeYear}
          onChange={toggleIncludeYear}
          label={t.includeYear}
        />
      </div>
    </FilterSection>
  );
};

export default BirthdayFilterSection;
