import DatePicker from "react-datepicker";
import { CalendarDaysIcon } from "@heroicons/react/16/solid";
import InputLabel from "./InputLabel";
import { twMerge } from "tailwind-merge";
import { COLOR_CLASSES } from "@/constants/colorClasses";
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
  onChange,
  color = "blue",
}: Props) => {
  const colorClasses = COLOR_CLASSES[color];

  return (
    <div className="transition-all z-50">
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
        dateFormat={["dd.MM.yyyy", "dd/MM/yyyy", "dd-MM-yyyy"]}
        showYearDropdown
        yearDropdownItemNumber={40}
        scrollableYearDropdown
        maxDate={maxDate}
        minDate={minDate}
        required={required}
        autoComplete="off"
        className={twMerge(
          "w-full pl-3 pr-9 py-2 rounded-xl shadow-inner font-light bg-surface",
          colorClasses.caret,
          "placeholder:text-placeholder focus:outline-hidden focus:ring-2",
          colorClasses.accentRing,
          "transition-all duration-200 ease-out",
        )}
        calendarClassName="border-accent-blue bg-surface-blue text-foreground shadow-md rounded-lg"
        placeholderText={placeholder}
      />
      <div className="relative">
        <div
          className={twMerge(
            "absolute -top-9 h-8 w-8 right-0 pr-2 flex items-center pointer-events-none",
            colorClasses.text,
          )}
        >
          <CalendarDaysIcon />
        </div>
      </div>
    </div>
  );
};

export default DateInput;
