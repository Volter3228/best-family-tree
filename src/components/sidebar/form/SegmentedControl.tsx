import { twMerge } from "tailwind-merge";
import { COLOR_CLASSES } from "@/constants/colorClasses";
import type { AccentColor } from "@/types";

export interface SegmentOption<T extends string> {
  value: T;
  label: string;
}

interface Props<T extends string> {
  options: readonly SegmentOption<T>[];
  value: T;
  onChange: (value: T) => void;
  color?: AccentColor;
  className?: string;
}

// Pill switch used by every menu level of the manage sidebar.
const SegmentedControl = <T extends string>({
  options,
  value,
  onChange,
  color = "blue",
  className,
}: Props<T>) => {
  const colorClasses = COLOR_CLASSES[color];

  return (
    <div
      className={twMerge("flex w-full rounded-xl bg-surface/50 p-1", className)}
    >
      {options.map((option) => (
        <button
          key={option.value}
          type="button"
          onClick={() => onChange(option.value)}
          className={twMerge(
            "flex-1 py-2 text-sm font-medium rounded-lg transition-all duration-200",
            value === option.value
              ? `${colorClasses.accentBg} text-white`
              : "text-foreground/60 hover:text-foreground",
          )}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
};

export default SegmentedControl;

export const CREATE_EDIT_OPTIONS = [
  { value: "create", label: "Створити" },
  { value: "edit", label: "Редагувати" },
] as const satisfies readonly SegmentOption<"create" | "edit">[];
