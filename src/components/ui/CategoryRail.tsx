import { useRef, type KeyboardEvent } from "react";
import { twMerge } from "tailwind-merge";
import { COLOR_CLASSES } from "@/constants/colorClasses";
import type { AccentColor } from "@/types";

export interface RailItem<K extends string> {
  key: K;
  label: string;
  icon: React.ReactNode;
  // Small dot in the corner (e.g. "this category has criteria").
  marker?: boolean;
}

interface Props<K extends string> {
  items: readonly RailItem<K>[];
  active: K;
  onSelect: (key: K) => void;
  color?: AccentColor;
  className?: string;
}

// Vertical tab list (icon over label). Arrow keys move the selection.
const CategoryRail = <K extends string>({
  items,
  active,
  onSelect,
  color = "blue",
  className,
}: Props<K>) => {
  const refs = useRef<Partial<Record<K, HTMLButtonElement | null>>>({});
  const colorClasses = COLOR_CLASSES[color];

  const handleKeyDown = (index: number) => (e: KeyboardEvent<HTMLButtonElement>) => {
    let next: number | null = null;
    if (e.key === "ArrowDown") next = (index + 1) % items.length;
    if (e.key === "ArrowUp") next = (index - 1 + items.length) % items.length;
    if (next === null) return;
    e.preventDefault();
    const nextKey = items[next].key;
    onSelect(nextKey);
    refs.current[nextKey]?.focus();
  };

  return (
    <div
      role="tablist"
      aria-orientation="vertical"
      className={twMerge("flex shrink-0 flex-col gap-2 py-1", className)}
    >
      {items.map((item, index) => {
        const selected = item.key === active;
        return (
          <button
            key={item.key}
            ref={(el) => {
              refs.current[item.key] = el;
            }}
            type="button"
            role="tab"
            aria-selected={selected}
            tabIndex={selected ? 0 : -1}
            onClick={() => onSelect(item.key)}
            onKeyDown={handleKeyDown(index)}
            className={twMerge(
              "relative flex w-14 shrink-0 touch-manipulation flex-col items-center gap-1 rounded-2xl py-2 transition-colors duration-200 focus:outline-none focus-visible:ring-2",
              colorClasses.focusVisibleRingSoft,
              selected
                ? `${colorClasses.accentBg} text-white`
                : `${colorClasses.text} ${colorClasses.hoverSurfaceBg}`,
            )}
          >
            {item.icon}
            <span className="text-[11px] font-medium leading-tight">
              {item.label}
            </span>
            {item.marker && (
              <span
                aria-hidden
                className={twMerge(
                  "absolute top-2 right-2.5 h-2 w-2 rounded-full ring-2",
                  selected
                    ? "bg-white"
                    : `${colorClasses.accentBg} ring-surface`,
                )}
                style={
                  selected
                    ? ({ "--tw-ring-color": `var(--accent-${color})` } as React.CSSProperties)
                    : undefined
                }
              />
            )}
          </button>
        );
      })}
    </div>
  );
};

export default CategoryRail;
