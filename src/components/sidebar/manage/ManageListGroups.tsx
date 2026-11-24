import { useMemo, useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/16/solid";
import { twMerge } from "tailwind-merge";
import { COLOR_CLASSES } from "@/constants/colorClasses";
import type { AccentColor } from "@/types";

export interface ManageGroup {
  key: string;
  title: string;
  leading?: React.ReactNode;
  // Lower ranks come first; then the bigger group, then the title.
  rank?: number;
}

interface Props<T> {
  items: readonly T[];
  groupOf: (item: T) => ManageGroup;
  renderItem: (item: T) => React.ReactNode;
  getKey: (item: T) => string;
  // While searching every group with matches is open.
  searching: boolean;
  locale: string;
  color: AccentColor;
}

// The list split into collapsible groups, all closed until tapped.
const ManageListGroups = <T,>({
  items,
  groupOf,
  renderItem,
  getKey,
  searching,
  locale,
  color,
}: Props<T>) => {
  const [open, setOpen] = useState<ReadonlySet<string>>(new Set());
  const colorClasses = COLOR_CLASSES[color];

  const groups = useMemo(() => {
    const map = new Map<string, { group: ManageGroup; items: T[] }>();
    for (const item of items) {
      const group = groupOf(item);
      const entry = map.get(group.key);
      if (entry) entry.items.push(item);
      else map.set(group.key, { group, items: [item] });
    }
    return [...map.values()].sort(
      (a, b) =>
        (a.group.rank ?? 0) - (b.group.rank ?? 0) ||
        b.items.length - a.items.length ||
        a.group.title.localeCompare(b.group.title, locale),
    );
  }, [items, groupOf, locale]);

  const toggle = (key: string) =>
    setOpen((prev) => {
      const next = new Set(prev);
      if (next.has(key)) next.delete(key);
      else next.add(key);
      return next;
    });

  return (
    <ul className="flex flex-col">
      {groups.map(({ group, items: groupItems }) => {
        const expanded = searching || open.has(group.key);
        return (
          <li key={group.key}>
            <button
              type="button"
              onClick={() => toggle(group.key)}
              disabled={searching}
              aria-expanded={expanded}
              className={twMerge(
                "flex w-full touch-manipulation items-center gap-3 rounded-xl px-2 py-2 text-left transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-inset disabled:cursor-default",
                !searching && colorClasses.hoverSurfaceBg,
                colorClasses.focusVisibleRing,
              )}
            >
              {group.leading}
              <span className="min-w-0 flex-1 truncate text-sm font-semibold text-foreground">
                {group.title}
              </span>
              <span
                className={twMerge(
                  "shrink-0 rounded-full px-2 py-0.5 text-xs font-semibold tabular-nums",
                  colorClasses.softBg,
                  colorClasses.text,
                )}
              >
                {groupItems.length}
              </span>
              <ChevronDownIcon
                className={twMerge(
                  "h-4 w-4 shrink-0 text-foreground/40 transition-transform duration-200",
                  expanded && "rotate-180",
                )}
              />
            </button>
            {expanded && (
              <ul className="mb-1 ml-4 flex flex-col border-l border-foreground/10 pl-2">
                {groupItems.map((item) => (
                  <li key={getKey(item)}>{renderItem(item)}</li>
                ))}
              </ul>
            )}
          </li>
        );
      })}
    </ul>
  );
};

export default ManageListGroups;
