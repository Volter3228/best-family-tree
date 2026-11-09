import { twMerge } from "tailwind-merge";
import type { AccentColor } from "@/types";
import { COLOR_CLASSES } from "@/constants/colorClasses";

interface Props {
  title: string;
  color: AccentColor;
  visible: boolean;
}

const ToolbarTooltip = ({ title, color, visible }: Props) => (
  <span
    className={twMerge(
      "pointer-events-none absolute -top-8 z-10 whitespace-nowrap rounded-md px-2 py-0.5 text-xs font-medium text-white transition-[opacity,translate] duration-200 ease-out will-change-[opacity,translate]",
      COLOR_CLASSES[color].accentBg,
      visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-1",
    )}
  >
    {title}
  </span>
);

export default ToolbarTooltip;
