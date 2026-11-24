import { ChevronRightIcon } from "@heroicons/react/16/solid";
import { twMerge } from "tailwind-merge";
import { COLOR_CLASSES } from "@/constants/colorClasses";
import type { AccentColor } from "@/types";

interface Props {
  title: string;
  subtitle?: string;
  leading?: React.ReactNode;
  titleSuffix?: React.ReactNode;
  onOpen: () => void;
  color: AccentColor;
}

// One openable row of a manage list.
const ManageListRow = ({
  title,
  subtitle,
  leading,
  titleSuffix,
  onOpen,
  color,
}: Props) => {
  const colorClasses = COLOR_CLASSES[color];
  return (
    <button
      type="button"
      onClick={onOpen}
      className={twMerge(
        "flex w-full touch-manipulation items-center gap-3 rounded-xl px-2 py-2 text-left transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-inset",
        colorClasses.hoverSurfaceBg,
        colorClasses.focusVisibleRing,
      )}
    >
      {leading}
      <span className="flex min-w-0 flex-1 flex-col">
        <span className="flex min-w-0 items-center gap-1.5">
          <span className="truncate text-sm font-semibold text-foreground">
            {title}
          </span>
          {titleSuffix}
        </span>
        {subtitle && (
          <span className="truncate text-xs text-foreground/60">
            {subtitle}
          </span>
        )}
      </span>
      <ChevronRightIcon className="h-4 w-4 shrink-0 text-foreground/30" />
    </button>
  );
};

export default ManageListRow;
