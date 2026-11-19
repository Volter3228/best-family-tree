import { useEffect, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";
import { FILTER_INPUT_CLASSES } from "@/constants/filters";
import type { RangeSlot } from "./RangeInputs";
import ClearButton from "./ClearButton";

const YEAR_LENGTH = 4;

// A shorter year waits this long before the draft filters (and the footer count) update.
const COMMIT_DELAY_MS = 700;

const parseYear = (raw: string): number | null => {
  const digits = raw.replace(/\D/g, "");
  return digits ? Number(digits) : null;
};

interface Props extends RangeSlot {
  value: number | null;
  // Fired after a typing pause, on a full year, on Enter and on clear.
  onChange: (value: number | null) => void;
  // Fired when the field loses focus; the caller may fix an inverted range.
  onBlur?: (value: number | null) => void;
}

// The text lives here while typing, so the filters only see the finished year.
const YearInput = ({
  id,
  placeholder,
  value,
  disabled,
  onChange,
  onBlur,
}: Props) => {
  const [text, setText] = useState(value?.toString() ?? "");
  const [prevValue, setPrevValue] = useState(value);
  const timer = useRef<ReturnType<typeof setTimeout>>(undefined);
  const latest = useRef({ onChange, onBlur, value });

  useEffect(() => {
    latest.current = { onChange, onBlur, value };
  });
  useEffect(() => () => clearTimeout(timer.current), []);

  // A change from outside (clear, reset, swapped range) replaces the text.
  if (value !== prevValue) {
    setPrevValue(value);
    if (value !== parseYear(text)) setText(value?.toString() ?? "");
  }

  const commit = (next: string) => {
    clearTimeout(timer.current);
    const year = parseYear(next);
    if (year !== latest.current.value) latest.current.onChange(year);
  };

  const handleChange = (raw: string) => {
    const digits = raw.replace(/\D/g, "").slice(0, YEAR_LENGTH);
    setText(digits);
    clearTimeout(timer.current);
    if (digits.length === YEAR_LENGTH) {
      commit(digits);
      return;
    }
    timer.current = setTimeout(() => commit(digits), COMMIT_DELAY_MS);
  };

  const handleBlur = () => {
    clearTimeout(timer.current);
    const year = parseYear(text);
    if (latest.current.onBlur) latest.current.onBlur(year);
    else commit(text);
  };

  const handleClear = () => {
    clearTimeout(timer.current);
    setText("");
    onChange(null);
  };

  const hasText = text !== "" && !disabled;

  return (
    <div className="relative">
      <input
        id={id}
        type="text"
        inputMode="numeric"
        pattern="[0-9]*"
        autoComplete="off"
        maxLength={YEAR_LENGTH}
        placeholder={placeholder}
        value={text}
        disabled={disabled}
        onChange={(e) => handleChange(e.target.value)}
        onBlur={handleBlur}
        onKeyDown={(e) => {
          if (e.key === "Enter") commit(text);
        }}
        className={twMerge(
          FILTER_INPUT_CLASSES,
          hasText && "pr-8",
          "disabled:cursor-not-allowed disabled:opacity-50",
        )}
      />
      {hasText && <ClearButton onClick={handleClear} />}
    </div>
  );
};

export default YearInput;
