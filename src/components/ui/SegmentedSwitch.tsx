import { twMerge } from "tailwind-merge";
import type { ReactNode } from "react";
import type { AccentColor } from "@/types";
import { COLOR_CLASSES } from "@/constants/colorClasses";

export interface SegmentedOption<T extends string> {
  value: T;
  label: string;
  icon?: ReactNode;
  disabled?: boolean;
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
}: Props<T>) => (
  <div
    role="radiogroup"
    aria-label={ariaLabel}
    className={twMerge(
      "flex rounded-xl bg-foreground/5 p-0.5",
      disabled && "opacity-50",
    )}
  >
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
            "flex flex-1 items-center justify-center gap-1.5 rounded-lg py-1.5 text-xs font-medium transition-all duration-200",
            "focus:outline-none focus-visible:ring-1",
            COLOR_CLASSES[color].focusVisibleRing,
            value === option.value
              ? `${COLOR_CLASSES[color].accentBg} text-white shadow-sm`
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

export default SegmentedSwitch;
