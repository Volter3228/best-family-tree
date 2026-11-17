import { twMerge } from "tailwind-merge";
import { COLOR_CLASSES } from "@/constants/colorClasses";
import type { AccentColor } from "@/types";

interface Props {
  pressed: boolean;
  onClick: () => void;
  color?: AccentColor;
  // "radio" for single-select groups (uses aria-checked), otherwise a toggle.
  role?: "radio";
  icon?: React.ComponentType<{ className?: string }>;
  className?: string;
  children: React.ReactNode;
}

// Pill button for choices: filters (multi-select) and forms (single-select).
const Chip = ({
  pressed,
  onClick,
  color = "blue",
  role,
  icon: Icon,
  className,
  children,
}: Props) => {
  const colorClasses = COLOR_CLASSES[color];
  return (
    <button
      type="button"
      role={role}
      aria-checked={role === "radio" ? pressed : undefined}
      aria-pressed={role === "radio" ? undefined : pressed}
      onClick={onClick}
      className={twMerge(
        "group inline-flex h-8 pointer-coarse:h-10 touch-manipulation items-center gap-1.5 rounded-full border px-3 text-sm font-medium transition-colors duration-150 focus:outline-none focus-visible:ring-2",
        colorClasses.focusVisibleRingSoft,
        pressed
          ? `${colorClasses.border} ${colorClasses.accentBg} text-white`
          : `${colorClasses.softBorder} ${colorClasses.softBorderHover} bg-surface text-foreground/80 hover:text-foreground`,
        className,
      )}
    >
      {Icon && <Icon className="h-4 w-4 shrink-0" />}
      {children}
    </button>
  );
};

export default Chip;
