import { ChevronDownIcon, XMarkIcon } from "@heroicons/react/16/solid";
import { twMerge } from "tailwind-merge";
import { COLOR_CLASSES } from "@/constants/colorClasses";
import type { AccentColor } from "@/types";

interface Props {
  summary: string;
  isExpanded: boolean;
  color?: AccentColor;
  onToggle: () => void;
  onRemove: () => void;
}

const PositionRowHeader = ({
  summary,
  isExpanded,
  color = "blue",
  onToggle,
  onRemove,
}: Props) => {
  const colorClasses = COLOR_CLASSES[color];

  return (
    <div className="flex items-center gap-2">
      <button
        type="button"
        onClick={onToggle}
        className="flex min-w-0 flex-1 items-center gap-2 text-left"
        aria-expanded={isExpanded}
      >
        <ChevronDownIcon
          className={twMerge(
            "h-4 w-4 shrink-0 transition-transform duration-200",
            colorClasses.text,
            isExpanded && "rotate-180",
          )}
        />
        <span className="truncate text-sm font-medium text-foreground">
          {summary}
        </span>
      </button>
      <button
        type="button"
        onClick={onRemove}
        className={twMerge(
          "shrink-0 rounded-lg p-1 transition-all duration-200 hover:scale-110",
          colorClasses.text,
          colorClasses.hoverAccentBg,
        )}
        aria-label="Видалити позицію"
      >
        <XMarkIcon className="h-4 w-4" />
      </button>
    </div>
  );
};

export default PositionRowHeader;
