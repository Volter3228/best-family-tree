import { twMerge } from "tailwind-merge";
import { COLOR_CLASSES } from "@/constants/colorClasses";
import type { AccentColor } from "@/types";
import FormCheckbox from "./FormCheckbox";
import InputLabel from "./InputLabel";

interface Props {
  name: string;
  start?: number;
  end?: number;
  onChange: (start: number | undefined, end: number | undefined) => void;
  min?: number;
  max?: number;
  startLabel?: string;
  endLabel?: string;
  // When `onOngoingChange` is given, a checkbox marks the period as still
  // running, which disables (and hides the value of) the end year.
  ongoing?: boolean;
  onOngoingChange?: (ongoing: boolean) => void;
  color?: AccentColor;
}

const toYear = (value: string) => (value ? Number(value) : undefined);

// Two year fields (from / to); an end before the start is dropped.
const YearRangeInput = ({
  name,
  start,
  end,
  onChange,
  min = 1990,
  max = new Date().getFullYear() + 1,
  startLabel = "Початок",
  endLabel = "Кінець",
  ongoing = false,
  onOngoingChange,
  color = "blue",
}: Props) => {
  const colorClasses = COLOR_CLASSES[color];
  const inputClassName = twMerge(
    "w-full px-3 py-2 rounded-xl shadow-inner font-light bg-surface",
    colorClasses.caret,
    "placeholder:text-placeholder focus:outline-hidden focus:ring-2",
    colorClasses.accentRing,
    "transition-all duration-200 ease-out",
    "disabled:cursor-not-allowed disabled:opacity-60",
  );

  const handleStart = (value: string) => {
    const year = toYear(value);
    onChange(year, year && end && year > end ? undefined : end);
  };

  const handleEnd = (value: string) => {
    const year = toYear(value);
    onChange(start && year && start > year ? undefined : start, year);
  };

  const fields = [
    {
      id: "start",
      label: startLabel,
      value: start,
      isDisabled: false,
      onChange: handleStart,
    },
    {
      id: "end",
      label: endLabel,
      value: ongoing ? undefined : end,
      isDisabled: ongoing,
      onChange: handleEnd,
    },
  ];

  return (
    <div className="flex flex-col gap-2">
      <div className="flex flex-row gap-2">
        {fields.map((field) => (
          <div key={field.id} className="flex flex-col flex-1">
            <InputLabel
              label={field.label}
              htmlFor={`${name}-${field.id}`}
              required={false}
              color={color}
            />
            <input
              id={`${name}-${field.id}`}
              name={`${name}-${field.id}`}
              type="number"
              min={min}
              max={max}
              value={field.value ?? ""}
              placeholder={field.isDisabled ? "..." : String(max - 1)}
              disabled={field.isDisabled}
              onChange={(event) => field.onChange(event.target.value)}
              className={inputClassName}
            />
          </div>
        ))}
      </div>
      {onOngoingChange && (
        <FormCheckbox
          checked={ongoing}
          label="Триває зараз"
          color={color}
          onChange={onOngoingChange}
        />
      )}
    </div>
  );
};

export default YearRangeInput;
