import { useEffect, useRef, type ReactNode } from "react";
import { twMerge } from "tailwind-merge";
import { getMatchRanges } from "@/hooks";

export interface SuggestionRowProps {
  id: string;
  isActive: boolean;
  query: string;
  onHover: () => void;
  onClick: () => void;
}

interface Props extends SuggestionRowProps {
  avatar: ReactNode;
  title: string;
  subtitle: string;
}

// Title with the parts matching the query tinted.
const HighlightedTitle = ({ title, query }: { title: string; query: string }) => {
  const ranges = getMatchRanges(title, query);
  if (ranges.length === 0) return <>{title}</>;

  const parts: ReactNode[] = [];
  let cursor = 0;
  ranges.forEach(([start, end]) => {
    if (start > cursor) parts.push(title.slice(cursor, start));
    parts.push(
      <span key={start} className="text-accent-blue">
        {title.slice(start, end)}
      </span>,
    );
    cursor = end;
  });
  if (cursor < title.length) parts.push(title.slice(cursor));
  return <>{parts}</>;
};

// Shared look of one suggestion (round avatar slot + two text lines).
const SearchSuggestionRow = ({
  id,
  isActive,
  query,
  avatar,
  title,
  subtitle,
  onHover,
  onClick,
}: Props) => {
  const ref = useRef<HTMLLIElement>(null);

  useEffect(() => {
    if (isActive) ref.current?.scrollIntoView({ block: "nearest" });
  }, [isActive]);

  return (
    <li
      ref={ref}
      id={id}
      role="option"
      aria-selected={isActive}
      // mousemove, not mouseenter: arrow-key scrolling under a still pointer must not steal the highlight.
      onMouseMove={isActive ? undefined : onHover}
      onClick={onClick}
      className={twMerge(
        "flex items-center gap-3 rounded-xl px-2.5 py-2 cursor-pointer transition-colors duration-150",
        isActive && "bg-accent-blue/15",
      )}
    >
      <div className="relative h-8 w-8 shrink-0 rounded-full overflow-hidden">
        {avatar}
      </div>
      <div className="flex flex-col min-w-0">
        <span className="text-sm font-semibold text-foreground truncate">
          <HighlightedTitle title={title} query={query} />
        </span>
        <span className="text-xs text-foreground/70 truncate">{subtitle}</span>
      </div>
    </li>
  );
};

export default SearchSuggestionRow;
