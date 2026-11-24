import { useMemo, useState } from "react";
import { PlusIcon } from "@heroicons/react/16/solid";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { twMerge } from "tailwind-merge";
import { COLOR_CLASSES } from "@/constants/colorClasses";
import { matchesQuery } from "@/hooks/data/useSearchSuggestions";
import type { AccentColor } from "@/types";
import { useLocale, useT } from "@/i18n/useT";
import { formInputClasses } from "../form/inputs/inputClasses";
import ManageListGroups, { type ManageGroup } from "./ManageListGroups";
import ManageListRow from "./ManageListRow";

interface Props<T> {
  items: readonly T[];
  getKey: (item: T) => string;
  getTitle: (item: T) => string;
  getSubtitle?: (item: T) => string | undefined;
  // Small marker right after the title (e.g. a star).
  renderTitleSuffix?: (item: T) => React.ReactNode;
  renderLeading?: (item: T) => React.ReactNode;
  // Words the search looks in. Defaults to the title.
  getSearchable?: (item: T) => string[];
  onOpen: (item: T) => void;
  onCreate: () => void;
  searchPlaceholder: string;
  // Shown when there is nothing at all.
  emptyText: string;
  // Rendered rows are capped; the rest is reached through the search.
  limit?: number;
  // Splits the list into collapsible groups (no row cap then).
  groupBy?: (item: T) => ManageGroup;
  color: AccentColor;
}

// Searchable list with a "create" button: the first screen of every tab.
const ManageList = <T,>({
  items,
  getKey,
  getTitle,
  getSubtitle,
  renderTitleSuffix,
  renderLeading,
  getSearchable,
  onOpen,
  onCreate,
  searchPlaceholder,
  emptyText,
  limit = 50,
  groupBy,
  color,
}: Props<T>) => {
  const t = useT().manage;
  const locale = useLocale();
  const [query, setQuery] = useState("");
  const colorClasses = COLOR_CLASSES[color];

  const matches = useMemo(() => {
    if (!query.trim()) return items;
    return items.filter((item) => {
      const texts = getSearchable ? getSearchable(item) : [getTitle(item)];
      return matchesQuery(texts, query);
    });
  }, [items, query, getSearchable, getTitle]);

  const shown = groupBy ? matches : matches.slice(0, limit);

  const renderRow = (item: T) => (
    <ManageListRow
      title={getTitle(item)}
      subtitle={getSubtitle?.(item)}
      leading={renderLeading?.(item)}
      titleSuffix={renderTitleSuffix?.(item)}
      onOpen={() => onOpen(item)}
      color={color}
    />
  );

  return (
    <div className="flex h-[calc(var(--sidebar-content-max)-1.75rem)] flex-col gap-2">
      <div className="flex shrink-0 items-center gap-2">
        <div className="relative min-w-0 flex-1">
          <MagnifyingGlassIcon className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 stroke-foreground/60" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={t.search}
            aria-label={searchPlaceholder}
            autoComplete="off"
            className={formInputClasses(color, "pl-9")}
          />
        </div>
        <button
          type="button"
          onClick={onCreate}
          aria-label={t.create}
          className={twMerge(
            "flex h-10 w-10 shrink-0 touch-manipulation items-center justify-center gap-1 whitespace-nowrap rounded-full text-sm font-semibold text-white shadow-sm transition-[box-shadow,scale] duration-200 hover:shadow-md active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-surface sm:w-auto sm:px-4",
            colorClasses.accentBg,
            colorClasses.focusVisibleRing,
          )}
        >
          <PlusIcon className="h-5 w-5 sm:h-4 sm:w-4" />
          <span className="hidden sm:inline">{t.create}</span>
        </button>
      </div>

      <div
        data-manage-content
        className="-mr-5 min-h-0 flex-1 overflow-y-auto overscroll-contain pr-5 [scrollbar-gutter:stable]"
        style={
          { "--scroll-color": `var(--accent-${color})` } as React.CSSProperties
        }
      >
        {items.length === 0 ? (
          <p className="px-2 py-6 text-center text-sm text-foreground/60">
            {emptyText}
          </p>
        ) : matches.length === 0 ? (
          <p className="px-2 py-6 text-center text-sm text-foreground/60">
            {t.nothingFound(query.trim())}
          </p>
        ) : groupBy ? (
          <ManageListGroups
            items={matches}
            groupOf={groupBy}
            renderItem={renderRow}
            getKey={getKey}
            searching={query.trim() !== ""}
            locale={locale}
            color={color}
          />
        ) : (
          <ul className="flex flex-col">
            {shown.map((item) => (
              <li key={getKey(item)}>{renderRow(item)}</li>
            ))}
          </ul>
        )}

        {matches.length > shown.length && (
          <p className="px-2 pt-1 text-center text-xs text-foreground/60">
            {t.showing(shown.length, matches.length)}
          </p>
        )}
      </div>
    </div>
  );
};

export default ManageList;
