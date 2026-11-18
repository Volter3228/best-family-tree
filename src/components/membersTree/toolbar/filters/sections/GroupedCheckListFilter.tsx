import { useMemo, useState } from "react";
import { twMerge } from "tailwind-merge";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import CheckBox from "@/components/ui/CheckBox";
import { useLocale, useT } from "@/i18n/useT";
import type { Locale } from "@/i18n/locale";
import CheckRow from "./CheckRow";
import SearchField from "./SearchField";

const SEARCH_THRESHOLD = 8;

export interface CheckGroup {
  key: string;
  label: string;
  options: string[];
}

interface Props {
  groups: CheckGroup[];
  selected: string[];
  onChange: (next: string[]) => void;
  searchPlaceholder: string;
  searchId?: string;
}

const byName = (locale: Locale) => (a: string, b: string) =>
  a.localeCompare(b, locale);

// Groups of checkboxes with one tri-state box per group. Groups start collapsed
// unless they hold a selection. While searching, matches show in every group.
const GroupedCheckListFilter = ({
  groups,
  selected,
  onChange,
  searchPlaceholder,
  searchId,
}: Props) => {
  const locale = useLocale();
  const t = useT().filters.list;
  const [query, setQuery] = useState("");
  // Only groups the user has toggled; the rest follow their selection.
  const [openByKey, setOpenByKey] = useState<Record<string, boolean>>({});

  const trimmed = query.trim().toLowerCase();
  const isSearching = trimmed.length > 0;
  const totalCount = groups.reduce((n, g) => n + g.options.length, 0);

  const rows = useMemo(
    () =>
      groups.map((group) => {
        const names = [...group.options].sort(byName(locale));
        const matches = isSearching
          ? names.filter((n) => n.toLowerCase().includes(trimmed))
          : names;
        const selectedCount = names.filter((n) => selected.includes(n)).length;
        return { ...group, names, matches, selectedCount };
      }),
    [groups, selected, isSearching, trimmed, locale],
  );

  const toggleOption = (option: string) => {
    onChange(
      selected.includes(option)
        ? selected.filter((v) => v !== option)
        : [...selected, option],
    );
  };

  // All selected: clear the group. Otherwise: select every name in it.
  const toggleGroup = (names: string[]) => {
    const allSelected = names.every((n) => selected.includes(n));
    onChange(
      allSelected
        ? selected.filter((v) => !names.includes(v))
        : [...selected, ...names.filter((n) => !selected.includes(n))],
    );
  };

  const visibleRows = rows.filter(
    (row) => !isSearching || row.matches.length > 0,
  );

  return (
    <div className="flex flex-col gap-1">
      {totalCount > SEARCH_THRESHOLD && (
        <SearchField
          id={searchId}
          value={query}
          onChange={setQuery}
          placeholder={searchPlaceholder}
        />
      )}

      {visibleRows.length === 0 && (
        <p className="py-2 text-sm text-foreground/60">{t.nothingFound}</p>
      )}

      {visibleRows.map(({ key, label, names, matches, selectedCount }) => {
        const allSelected = selectedCount === names.length;
        const noneSelected = selectedCount === 0;
        const open = isSearching || (openByKey[key] ?? !noneSelected);

        return (
          <div key={key} className="flex flex-col gap-1">
            <div className="flex h-8 items-center gap-2.5 px-2 text-sm">
              <button
                type="button"
                role="checkbox"
                aria-checked={
                  allSelected ? true : noneSelected ? false : "mixed"
                }
                onClick={() => toggleGroup(names)}
                className="group flex rounded focus:outline-none focus-visible:ring-1 focus-visible:ring-accent-green"
              >
                <CheckBox
                  checked={allSelected}
                  indeterminate={!allSelected && !noneSelected}
                  color="green"
                />
              </button>
              <button
                type="button"
                aria-expanded={open}
                onClick={() =>
                  setOpenByKey((prev) => ({ ...prev, [key]: !open }))
                }
                className="flex h-8 min-w-0 flex-1 items-center gap-2 rounded-lg text-left text-foreground/60 transition-colors duration-150 hover:text-foreground focus:outline-none focus-visible:ring-1 focus-visible:ring-accent-green"
              >
                <span className="min-w-0 flex-1 truncate font-medium text-foreground">
                  {label}
                </span>
                <span className="shrink-0 text-xs tabular-nums text-foreground/50">
                  {selectedCount}/{names.length}
                </span>
                <ChevronDownIcon
                  className={twMerge(
                    "h-4 w-4 transition-transform duration-200 motion-reduce:transition-none",
                    open && "rotate-180",
                  )}
                />
              </button>
            </div>

            {open && (
              // Indented 16px; the rows' px-2 puts their boxes at 24px.
              <div className="ml-4 flex flex-col gap-1">
                {matches.map((option) => (
                  <CheckRow
                    key={option}
                    label={option}
                    checked={selected.includes(option)}
                    onToggle={() => toggleOption(option)}
                  />
                ))}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default GroupedCheckListFilter;
