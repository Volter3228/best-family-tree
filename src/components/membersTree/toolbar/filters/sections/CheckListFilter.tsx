import { useMemo, useState } from "react";
import { twMerge } from "tailwind-merge";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { useLocale, useT } from "@/i18n/useT";
import type { Locale } from "@/i18n/locale";
import CheckRow from "./CheckRow";
import SearchField from "./SearchField";

const SEARCH_THRESHOLD = 8;

export interface CheckOption {
  value: string;
  label: string;
}

interface Props {
  options: CheckOption[];
  // Stored values of the ticked options.
  selected: string[];
  onChange: (next: string[]) => void;
  noun: {
    searchPlaceholder: string;
    moreLabel: (hidden: number) => string;
  };
  // Id of the search input, so a FilterSection title can label it.
  inputId?: string;
  // Rows shown before the "N more" toggle.
  collapsedCount?: number;
  // Show every row in a list that scrolls under the search field, filling the
  // remaining height. Replaces the "N more" toggle.
  scrollable?: boolean;
}

const byLabel = (locale: Locale) => (a: CheckOption, b: CheckOption) =>
  a.label.localeCompare(b.label, locale);

// Checked rows first, then the rest alphabetically. Computed from the options
// on mount so rows do not jump while the user ticks them; options that show up
// later are appended in alphabetical order.
const useStableOrder = (options: CheckOption[], selected: string[]) => {
  const locale = useLocale();
  const [order] = useState(() => {
    const checked = new Set(selected);
    return [...options]
      .sort(byLabel(locale))
      .sort(
        (a, b) => Number(checked.has(b.value)) - Number(checked.has(a.value)),
      )
      .map((o) => o.value);
  });

  // Labels come from the current options, so a locale switch relabels rows.
  return useMemo(() => {
    const byValue = new Map(options.map((o) => [o.value, o]));
    const known = new Set(order);
    const ordered = order.flatMap((value) => byValue.get(value) ?? []);
    const extra = options
      .filter((o) => !known.has(o.value))
      .sort(byLabel(locale));
    return extra.length ? [...ordered, ...extra] : ordered;
  }, [order, options, locale]);
};

const CheckListFilter = ({
  options,
  selected,
  onChange,
  noun,
  inputId,
  collapsedCount = 6,
  scrollable = false,
}: Props) => {
  const t = useT().filters.list;
  const orderedOptions = useStableOrder(options, selected);
  const [query, setQuery] = useState("");
  const [expanded, setExpanded] = useState(false);

  const isSearchable = options.length > SEARCH_THRESHOLD;
  const trimmed = query.trim().toLowerCase();
  const isSearching = trimmed.length > 0;

  const visible = useMemo(() => {
    if (isSearching) {
      return orderedOptions.filter((o) =>
        o.label.toLowerCase().includes(trimmed),
      );
    }
    return expanded || scrollable
      ? orderedOptions
      : orderedOptions.slice(0, collapsedCount);
  }, [
    isSearching,
    trimmed,
    orderedOptions,
    expanded,
    scrollable,
    collapsedCount,
  ]);

  const hiddenCount = orderedOptions.length - collapsedCount;
  const showToggle = !scrollable && !isSearching && hiddenCount > 0;

  const toggleOption = (value: string) => {
    onChange(
      selected.includes(value)
        ? selected.filter((v) => v !== value)
        : [...selected, value],
    );
  };

  const rows = (
    <>
      {visible.length === 0 && (
        <p className="py-2 text-sm text-foreground/60">{t.nothingFound}</p>
      )}
      <div className="flex flex-col gap-1">
        {visible.map((option) => (
          <CheckRow
            key={option.value}
            label={option.label}
            checked={selected.includes(option.value)}
            onToggle={() => toggleOption(option.value)}
          />
        ))}
      </div>
    </>
  );

  return (
    <div
      className={twMerge("flex flex-col gap-1", scrollable && "min-h-0 flex-1")}
    >
      {isSearchable && (
        <SearchField
          id={inputId}
          value={query}
          onChange={setQuery}
          placeholder={noun.searchPlaceholder}
          // Ends where the rows' text ends, left of the list's scrollbar.
          className={scrollable ? "mr-1.5" : undefined}
        />
      )}

      {scrollable ? (
        // Reaches into the pane's right padding, so the scrollbar sits at the
        // pane's edge where the other panes keep theirs; pr-2.5 keeps a gap.
        <div
          className="-mr-2.5 flex min-h-0 flex-1 flex-col gap-1 overflow-y-auto overscroll-contain pr-2.5 [scrollbar-gutter:stable]"
          style={
            { "--scroll-color": "var(--accent-green)" } as React.CSSProperties
          }
        >
          {rows}
        </div>
      ) : (
        rows
      )}

      {showToggle && (
        <button
          type="button"
          onClick={() => setExpanded((v) => !v)}
          className="flex h-9 items-center gap-1 rounded-xl px-2 text-left text-sm font-medium text-accent-green transition-colors duration-150 hover:bg-accent-green/10 focus:outline-none focus-visible:ring-1 focus-visible:ring-accent-green"
        >
          {expanded ? t.collapse : noun.moreLabel(hiddenCount)}
          <ChevronDownIcon
            className={twMerge(
              "h-4 w-4 transition-transform duration-200 motion-reduce:transition-none",
              expanded && "rotate-180",
            )}
          />
        </button>
      )}
    </div>
  );
};

export default CheckListFilter;
