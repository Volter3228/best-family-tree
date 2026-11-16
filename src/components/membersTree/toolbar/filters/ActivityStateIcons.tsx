import type { ComponentType } from "react";
import { twMerge } from "tailwind-merge";
import { ActivityState } from "@/types";

type IconProps = { className?: string };
type IconComponent = ComponentType<IconProps>;

// Dots in the 16px icon box of a pill. The group-aria-pressed variants turn
// them white on a pressed (green) pill.
const dotIcon = (dotClass: string): IconComponent => {
  const ActivityDot = ({ className }: IconProps) => (
    <span
      aria-hidden
      className={twMerge("flex items-center justify-center", className)}
    >
      <span className={twMerge("h-2.5 w-2.5 rounded-full", dotClass)} />
    </span>
  );
  return ActivityDot;
};

export const ACTIVITY_ICONS: Record<ActivityState, IconComponent> = {
  [ActivityState.Active]: dotIcon(
    "bg-accent-green group-aria-pressed:bg-white",
  ),
  [ActivityState.Inactive]: dotIcon(
    "border-2 border-accent-green group-aria-pressed:border-white",
  ),
  [ActivityState.Excluded]: dotIcon(
    "bg-foreground/40 group-aria-pressed:bg-white/60",
  ),
};
