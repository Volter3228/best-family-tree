import { twMerge } from "tailwind-merge";
import { COLOR_CLASSES } from "@/constants/colorClasses";
import type { AccentColor } from "@/types";

// The round "remove" badge on photo / icon pickers: blue outline, surface
// background, blue cross. Position and size come from the caller.
export const removeBadgeClasses = (color: AccentColor, ...extra: (string | false | undefined)[]) => {
  const c = COLOR_CLASSES[color];
  return twMerge(
    "flex items-center justify-center rounded-full border bg-surface shadow-sm transition-transform duration-150 hover:scale-110 focus:outline-none focus-visible:ring-2",
    c.border,
    c.text,
    c.focusVisibleRingSoft,
    ...extra,
  );
};

// One look for every text field of the forms, shared with the filters panel.
export const formInputClasses = (color: AccentColor, ...extra: (string | false | undefined)[]) => {
  const c = COLOR_CLASSES[color];
  return twMerge(
    "block h-10 w-full rounded-xl border bg-surface px-3 text-sm pointer-coarse:text-base text-foreground placeholder:text-placeholder transition-colors focus:outline-none focus:ring-2",
    c.softBorder,
    c.softBorderHover,
    c.focusBorder,
    c.focusRingSoft,
    c.caret,
    ...extra,
  );
};
