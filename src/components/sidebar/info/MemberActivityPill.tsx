import { twMerge } from "tailwind-merge";
import { COLOR_CLASSES } from "@/constants/colorClasses";
import { ActivityState, type AccentColor } from "@/types";

interface Props {
  state: ActivityState;
  color?: AccentColor;
}

const LABELS: Record<ActivityState, string> = {
  [ActivityState.Active]: "Active",
  [ActivityState.Inactive]: "Inactive",
  [ActivityState.Excluded]: "Excluded",
};

// Secondary to the status pill: a soft tint in the card's accent while the
// member is active, gray once they are inactive or excluded. Their history
// stays on the card, so the pill never disappears.
const MemberActivityPill = ({ state, color = "blue" }: Props) => {
  const colorClasses = COLOR_CLASSES[color];
  const isActive = state === ActivityState.Active;
  const isInactive = state === ActivityState.Inactive;

  return (
    <span
      className={twMerge(
        "inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-sm font-medium",
        isActive
          ? [colorClasses.softBg, colorClasses.text]
          : "bg-foreground/5 text-foreground/60",
      )}
    >
      <span
        aria-hidden
        className={twMerge(
          "h-2 w-2 rounded-full",
          isActive && colorClasses.accentBg,
          isInactive && "border border-foreground/50",
          !isActive && !isInactive && "bg-foreground/40",
        )}
      />
      {LABELS[state]}
    </span>
  );
};

export default MemberActivityPill;
