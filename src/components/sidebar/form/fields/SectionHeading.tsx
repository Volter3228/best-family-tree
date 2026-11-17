import { twMerge } from "tailwind-merge";
import { COLOR_CLASSES } from "@/constants/colorClasses";
import type { AccentColor } from "@/types";

interface Props {
  title: string;
  count?: number;
  color?: AccentColor;
}

// Section title in the info sidebar's style: accent text, " · N" only when N > 0.
const SectionHeading = ({ title, count, color = "blue" }: Props) => (
  <h3 className="text-base">
    <span className={twMerge("font-semibold", COLOR_CLASSES[color].text)}>{title}</span>
    {count !== undefined && count > 0 && (
      <span className="text-foreground/50"> · {count}</span>
    )}
  </h3>
);

export default SectionHeading;
