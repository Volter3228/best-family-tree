import { twMerge } from "tailwind-merge";
import type { ReactNode } from "react";
import type { AccentColor } from "@/types";
import { COLOR_CLASSES } from "@/constants/colorClasses";

export interface SegmentedOption<T extends string> {
  value: T;
  label: string;
  icon?: ReactNode;
  disabled?: boolean;
  // Overrides the switch color while this option is selected.
  color?: AccentColor;
}

interface Props<T extends string> {
  options: SegmentedOption<T>[];
  value: T;
  onChange: (value: T) => void;
  ariaLabel: string;
  color?: AccentColor;
  disabled?: boolean;
}

const SegmentedSwitch = <T extends string>({
  options,
  value,
  onChange,
  ariaLabel,
  color = "green",
  disabled = false,
}: Props<T>) => {
  const activeIndex = Math.max(
    0,
    options.findIndex((o) => o.value === value),
  );
  const activeColor = options[activeIndex]?.color ?? color;

  return (
  <div
    role="radiogroup"
    aria-label={ariaLabel}
    className={twMerge(
      "relative flex rounded-xl bg-foreground/5 p-0.5",
      disabled && "opacity-50",
    )}
  >
    {/* Sliding thumb: moves and changes color between options. */}
    <span
      aria-hidden
      className={twMerge(
        "pointer-events-none absolute inset-y-0.5 left-0.5 rounded-lg shadow-sm transition-[transform,background-color] duration-300 ease-out",
        COLOR_CLASSES[activeColor].accentBg,
      )}
      style={{
        width: `calc((100% - 4px) / ${options.length})`,
        transform: `translateX(${activeIndex * 100}%)`,
      }}
    />
    {options.map((option) => {
      const optionDisabled = disabled || option.disabled;
      return (
        <button
          key={option.value}
          type="button"
          role="radio"
          aria-checked={value === option.value}
          disabled={optionDisabled}
          onClick={() => onChange(option.value)}
          className={twMerge(
            "relative flex flex-1 items-center justify-center gap-1.5 rounded-lg py-1.5 text-xs font-medium transition-colors duration-300",
            "focus:outline-none focus-visible:ring-1",
            COLOR_CLASSES[option.color ?? color].focusVisibleRing,
            value === option.value
              ? "text-white"
              : "text-foreground/60 hover:text-foreground",
            optionDisabled && "cursor-not-allowed hover:text-foreground/60",
          )}
        >
          {option.icon}
          {option.label}
        </button>
      );
    })}
  </div>
  );
};

export default SegmentedSwitch;
