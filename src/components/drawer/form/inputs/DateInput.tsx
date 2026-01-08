import DatePicker from "react-datepicker";
import { CalendarDaysIcon } from "@heroicons/react/16/solid";
import InputLabel from "./InputLabel";
import "react-datepicker/dist/react-datepicker.css";
import "../styles/datepicker-overrides.css";

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
}: Props) => {
  return (
    <div className="transition-all z-50">
      <InputLabel label={label} htmlFor={name} required />
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
        className="
          w-full pl-3 pr-9 py-2 rounded-xl shadow-inner bg-purple-50 caret-accent
        placeholder:text-placeholder focus:outline-hidden focus:ring-3 focus:ring-accent
          transition-all duration-200 ease-out font-light
        "
        calendarClassName="border-purple-700 bg-purple-50 text-foreground shadow-md rounded-lg"
        placeholderText={placeholder}
      />
      <div className="relative">
        <div className="absolute -top-9 h-8 w-8 text-accent right-0 pr-2 flex items-center pointer-events-none">
          <CalendarDaysIcon />
        </div>
      </div>
    </div>
  );
};

export default DateInput;
