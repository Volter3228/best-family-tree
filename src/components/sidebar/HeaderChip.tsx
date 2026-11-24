import React from "react";
import { twMerge } from "tailwind-merge";
import { COLOR_CLASSES } from "@/constants/colorClasses";
import type { AccentColor } from "@/types";

interface Props {
  icon?: React.ComponentType<{ className?: string }>;
  color: AccentColor;
  children: React.ReactNode;
}

// Soft pill in the sidebar header: icon and text in the card's accent.
// Matches the header's round icon buttons, so it reads over a cover as well.
const HeaderChip = ({ icon: Icon, color, children }: Props) => (
  <span className="inline-flex h-9 min-w-0 max-w-full items-center gap-1.5 rounded-full bg-surface/70 px-3 text-base font-semibold backdrop-blur">
    {Icon && (
      <Icon
        className={twMerge(
          "h-4 w-4 shrink-0 transition-colors duration-300",
          COLOR_CLASSES[color].text,
        )}
      />
    )}
    <span className={twMerge("truncate", COLOR_CLASSES[color].text)}>
      {children}
    </span>
  </span>
);

export default HeaderChip;
