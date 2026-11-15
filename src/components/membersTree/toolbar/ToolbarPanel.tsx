import { twMerge } from "tailwind-merge";
import type { ReactNode } from "react";

interface Props {
  isClosing: boolean;
  // Per-panel layout extras, e.g. "flex flex-col max-h-[60vh]" or padding.
  className?: string;
  children: ReactNode;
}

// Floating panel above the toolbar dock. One element carries the position,
// slide animation and the sidebar's surface, so every panel looks the same.
const ToolbarPanel = ({ isClosing, className, children }: Props) => (
  <div
    className={twMerge(
      "fixed bottom-24 left-1/2 -translate-x-1/2 z-40 w-[calc(100%-2rem)] max-w-80",
      "rounded-2xl bg-surface/80 shadow-2xl backdrop-blur-xl",
      isClosing ? "animate-sidebar-slide-out" : "animate-sidebar-slide-in",
      className,
    )}
  >
    {children}
  </div>
);

export default ToolbarPanel;
