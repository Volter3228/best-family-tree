import { twMerge } from "tailwind-merge";
import { COLOR_CLASSES } from "@/constants/colorClasses";
import type { AccentColor } from "@/types";

interface Props {
  tintRef: (el: HTMLDivElement | null) => void;
  color: AccentColor;
}

// The cover's tint, painted in the card rather than inside the scroller:
// content cannot paint under the scrollbar gutter, which left a seam at the
// right edge. The Sidebar moves it with the scroll, like the content.
const SidebarCoverTint = ({ tintRef, color }: Props) => (
  <div
    ref={tintRef}
    aria-hidden
    className={twMerge(
      "pointer-events-none absolute inset-x-0 top-0 h-[calc(var(--sidebar-header-height,3.5rem)+4.5rem)] bg-linear-to-b from-current/20 to-transparent [mask-image:linear-gradient(to_bottom,black_60%,transparent)]",
      COLOR_CLASSES[color].text,
    )}
  />
);

export default SidebarCoverTint;
