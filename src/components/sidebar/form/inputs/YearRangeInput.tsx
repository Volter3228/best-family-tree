import { Fragment } from "react";
import { formInputClasses } from "./inputClasses";
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
  const inputClassName = formInputClasses(
    color,
    "disabled:cursor-not-allowed disabled:opacity-60",
  );

  // While typing, propagate the raw value without cross-field validation:
  // an in-progress entry (e.g. "2" before "2025") must not wipe the other
  // year mid-flight. The start/end consistency check runs on blur instead.
  const handleStart = (value: string) => {
    onChange(toYear(value), end);
  };

  const handleEnd = (value: string) => {
    onChange(start, toYear(value));
  };

  // On blur, drop the *other* year if the range became inconsistent, mirroring
  // the previous keystroke-time behaviour but only once editing is finished.
  const validateStart = () => {
    if (start && end && start > end) onChange(start, undefined);
  };

  const validateEnd = () => {
    if (start && end && start > end) onChange(undefined, end);
  };

  const fields = [
    {
      id: "start",
      label: startLabel,
      value: start,
      isDisabled: false,
      onChange: handleStart,
      onBlur: validateStart,
    },
    {
      id: "end",
      label: endLabel,
      value: ongoing ? undefined : end,
      isDisabled: ongoing,
      onChange: handleEnd,
      onBlur: validateEnd,
    },
  ];

  return (
    <div className="flex flex-col gap-2">
      <div className="flex flex-row items-end gap-2">
        {fields.map((field, index) => (
          <Fragment key={field.id}>
            {index > 0 && (
              <span
                aria-hidden
                className="flex h-10 items-center text-foreground/40"
              >
                –
              </span>
            )}
          <div className="flex min-w-0 flex-1 flex-col">
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
              onBlur={field.onBlur}
              className={inputClassName}
            />
          </div>
          </Fragment>
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
