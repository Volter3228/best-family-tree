import type { AccentColor } from "@/types";
import Chip from "./Chip";
import { twMerge } from "tailwind-merge";

interface Option<T extends string> {
  value: T;
  label: string;
  icon?: React.ComponentType<{ className?: string }>;
}

interface Props<T extends string> {
  label: string;
  options: readonly Option<T>[];
  value: T | undefined;
  onChange: (value: T) => void;
  color?: AccentColor;
  // Chips share the full width equally.
  fill?: boolean;
  className?: string;
}

// Single-select group of chips.
const ChipGroup = <T extends string>({
  label,
  options,
  value,
  onChange,
  color = "blue",
  fill = false,
  className,
}: Props<T>) => (
  <div
    role="radiogroup"
    aria-label={label}
    className={twMerge("flex flex-wrap gap-1.5", fill && "w-full", className)}
  >
    {options.map((option) => (
      <Chip
        key={option.value}
        role="radio"
        pressed={option.value === value}
        icon={option.icon}
        color={color}
        className={fill ? "flex-1 justify-center" : undefined}
        onClick={() => onChange(option.value)}
      >
        {option.label}
      </Chip>
    ))}
  </div>
);

export default ChipGroup;
