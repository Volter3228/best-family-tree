import { useLayoutEffect, useRef } from "react";
import { twMerge } from "tailwind-merge";
import { formInputClasses } from "./inputClasses";
import type { AccentColor } from "@/types";
import InputLabel from "./InputLabel";

interface Props {
  name: string;
  value: string;
  onChange: (text: string) => void;
  label?: string;
  placeholder?: string;
  rows?: number;
  // Rows the field may grow to while typing; scrolls beyond that.
  maxRows?: number;
  maxLength?: number;
  color?: AccentColor;
}

const WARN_RATIO = 0.9;

const TextAreaInput = ({
  name,
  value,
  onChange,
  label = "",
  placeholder = "",
  rows = 3,
  maxRows = 10,
  maxLength,
  color = "blue",
}: Props) => {
  const ref = useRef<HTMLTextAreaElement>(null);

  useLayoutEffect(() => {
    const element = ref.current;
    if (!element) return;
    element.style.height = "auto";
    // Border-box sizing: content height plus the borders.
    element.style.height = `${element.scrollHeight + element.offsetHeight - element.clientHeight}px`;
  }, [value, maxRows]);

  const length = value.length;
  const isNearLimit =
    maxLength !== undefined && length >= maxLength * WARN_RATIO;

  return (
    <div>
      <InputLabel label={label} htmlFor={name} required={false} color={color} />
      <textarea
        ref={ref}
        id={name}
        name={name}
        rows={rows}
        value={value}
        placeholder={placeholder}
        maxLength={maxLength}
        onChange={(event) => onChange(event.target.value)}
        style={{ maxHeight: `calc(${maxRows}lh + 1rem + 2px)` }}
        className={formInputClasses(color, "h-auto resize-none py-2")}
      />
      {maxLength !== undefined && (
        <p
          aria-live="polite"
          className={twMerge(
            "mt-1 text-right text-xs tabular-nums text-foreground/40 transition-colors duration-200",
            isNearLimit && "text-red-500",
          )}
        >
          {length} / {maxLength}
        </p>
      )}
    </div>
  );
};

export default TextAreaInput;
