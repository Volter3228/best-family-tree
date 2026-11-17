import { twMerge } from "tailwind-merge";
import { COLOR_CLASSES } from "@/constants/colorClasses";
import type { AccentColor } from "@/types";

interface Props {
  checked: boolean;
  // Some, but not all, of a group is selected: shows a dash.
  indeterminate?: boolean;
  color?: AccentColor;
  className?: string;
}

// The box shared by every checkbox (filters panel and forms). Purely visual:
// the interactive element around it carries the role and the click handler.
const CheckBox = ({
  checked,
  indeterminate = false,
  color = "blue",
  className,
}: Props) => {
  const on = checked || indeterminate;
  const colorClasses = COLOR_CLASSES[color];
  return (
    <span
      aria-hidden
      className={twMerge(
        "flex h-4 w-4 shrink-0 items-center justify-center rounded border text-[11px] font-bold leading-none transition-all duration-150",
        colorClasses.border,
        on ? `${colorClasses.accentBg} text-surface` : "bg-surface text-transparent",
        className,
      )}
    >
      {indeterminate ? "–" : "✓"}
    </span>
  );
};

export default CheckBox;
