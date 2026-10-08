import type { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface Props {
  isActive: boolean;
  avatar: ReactNode;
  title: string;
  subtitle: string;
  onClick: () => void;
}

// Shared look of one suggestion (round avatar slot + two text lines).
const SearchSuggestionRow = ({
  isActive,
  avatar,
  title,
  subtitle,
  onClick,
}: Props) => (
  <li
    role="option"
    aria-selected={isActive}
    onClick={onClick}
    className={twMerge(
      "flex items-center gap-3 px-3 py-2 cursor-pointer transition-colors duration-150",
      isActive ? "bg-accent-blue text-white" : "hover:bg-accent-blue/15",
    )}
  >
    <div className="relative h-8 w-8 shrink-0 rounded-full overflow-hidden">
      {avatar}
    </div>
    <div className="flex flex-col min-w-0">
      <span
        className={twMerge(
          "text-sm font-medium truncate",
          isActive ? "text-white" : "text-foreground",
        )}
      >
        {title}
      </span>
      <span
        className={twMerge(
          "text-xs truncate",
          isActive ? "text-white/80" : "text-foreground/70",
        )}
      >
        {subtitle}
      </span>
    </div>
  </li>
);

export default SearchSuggestionRow;
