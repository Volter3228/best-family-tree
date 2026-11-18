import DatePicker from "react-datepicker";
import { enUS, uk } from "date-fns/locale";
import { CalendarDaysIcon } from "@heroicons/react/16/solid";
import InputLabel from "./InputLabel";
import { twMerge } from "tailwind-merge";
import { COLOR_CLASSES } from "@/constants/colorClasses";
import { formInputClasses } from "./inputClasses";
import { useLocale } from "@/i18n/useT";
import type { AccentColor } from "@/types";

interface Props {
  id?: string;
  label: string;
  name: string;
  selected: Date | null;
  required?: boolean;
  placeholder?: string;
  maxDate?: Date;
  minDate?: Date;
  disabled?: boolean;
  onChange: (date: Date | null) => void;
  color?: AccentColor;
}

const DateInput = ({
  id,
  label,
  name,
  selected,
  required = false,
  placeholder = "",
  maxDate,
  minDate,
  disabled = false,
  onChange,
  color = "blue",
}: Props) => {
  const colorClasses = COLOR_CLASSES[color];
  const locale = useLocale();

  return (
    <div className="transition-all">
      <InputLabel
        label={label}
        htmlFor={name}
        required={required}
        color={color}
      />
      <DatePicker
        id={id || name}
        name={name}
        onChange={onChange}
        selected={selected}
        locale={locale === "uk" ? uk : enUS}
        dateFormat={["dd.MM.yyyy", "dd/MM/yyyy", "dd-MM-yyyy"]}
        showYearDropdown
        yearDropdownItemNumber={40}
        scrollableYearDropdown
        maxDate={maxDate}
        minDate={minDate}
        disabled={disabled}
        required={required}
        autoComplete="off"
        className={formInputClasses(
          color,
          "pr-9 disabled:cursor-not-allowed disabled:opacity-60",
        )}
        popperClassName={`datepicker-accent-${color}`}
        portalId="datepicker-portal"
        calendarClassName={twMerge(
          colorClasses.border,
          colorClasses.surfaceBg,
          "text-foreground shadow-md rounded-lg",
        )}
        placeholderText={placeholder}
      />
      <div className="relative">
        <div
          className={twMerge(
            "absolute -top-9 h-8 w-8 right-0 pr-2 flex items-center pointer-events-none",
            colorClasses.text,
            disabled && "opacity-40",
          )}
        >
          <CalendarDaysIcon />
        </div>
      </div>
    </div>
  );
};

export default DateInput;
