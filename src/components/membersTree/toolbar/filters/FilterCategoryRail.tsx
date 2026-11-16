import { useRef, type KeyboardEvent } from "react";
import { twMerge } from "tailwind-merge";
import {
  BriefcaseIcon,
  CalendarDaysIcon,
  UserGroupIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import type { FilterCategoryKey, FilterState } from "@/types";
import { FILTER_CATEGORY_KEYS, isCategoryActive } from "@/utils/filters";
import { FILTER_CATEGORY_LABELS } from "./panes/FilterCategoryPane";

const ICON_CLASS = "h-5 w-5";

const CATEGORY_ICONS: Record<FilterCategoryKey, React.ReactNode> = {
  dates: <CalendarDaysIcon className={ICON_CLASS} />,
  member: <UserIcon className={ICON_CLASS} />,
  teams: <UserGroupIcon className={ICON_CLASS} />,
  roles: <BriefcaseIcon className={ICON_CLASS} />,
};

interface RailButtonProps {
  label: string;
  icon: React.ReactNode;
  selected: boolean;
  hasCriteria: boolean;
  tabIndex: number;
  buttonRef: (el: HTMLButtonElement | null) => void;
  onSelect: () => void;
  onKeyDown: (e: KeyboardEvent<HTMLButtonElement>) => void;
}

const RailButton = ({
  label,
  icon,
  selected,
  hasCriteria,
  tabIndex,
  buttonRef,
  onSelect,
  onKeyDown,
}: RailButtonProps) => (
  <button
    ref={buttonRef}
    type="button"
    role="tab"
    aria-selected={selected}
    tabIndex={tabIndex}
    onClick={onSelect}
    onKeyDown={onKeyDown}
    className={twMerge(
      "relative flex w-14 shrink-0 touch-manipulation flex-col items-center gap-1 rounded-2xl py-2 transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-green/60",
      selected
        ? "bg-accent-green text-white"
        : "text-accent-green hover:bg-accent-green/10",
    )}
  >
    {icon}
    <span className="text-[11px] font-medium leading-tight">{label}</span>
    {hasCriteria && (
      <span
        aria-hidden
        className={twMerge(
          "absolute top-2 right-2.5 h-2 w-2 rounded-full ring-2 ring-surface",
          selected ? "bg-white ring-accent-green" : "bg-accent-green",
        )}
      />
    )}
  </button>
);

interface Props {
  active: FilterCategoryKey;
  filters: FilterState;
  onSelect: (key: FilterCategoryKey) => void;
}

// Vertical tab list of the filter categories. Arrow keys move the selection.
const FilterCategoryRail = ({ active, filters, onSelect }: Props) => {
  const refs = useRef<Partial<Record<FilterCategoryKey, HTMLButtonElement | null>>>({});

  const handleKeyDown = (key: FilterCategoryKey) => (e: KeyboardEvent<HTMLButtonElement>) => {
    const index = FILTER_CATEGORY_KEYS.indexOf(key);
    let next: number | null = null;
    if (e.key === "ArrowDown") next = (index + 1) % FILTER_CATEGORY_KEYS.length;
    if (e.key === "ArrowUp")
      next = (index - 1 + FILTER_CATEGORY_KEYS.length) % FILTER_CATEGORY_KEYS.length;
    if (next === null) return;
    e.preventDefault();
    const nextKey = FILTER_CATEGORY_KEYS[next];
    onSelect(nextKey);
    refs.current[nextKey]?.focus();
  };

  return (
    <div
      role="tablist"
      aria-orientation="vertical"
      className="flex shrink-0 flex-col gap-2 py-1"
    >
      {FILTER_CATEGORY_KEYS.map((key) => {
        const selected = key === active;
        return (
          <RailButton
            key={key}
            label={FILTER_CATEGORY_LABELS[key]}
            icon={CATEGORY_ICONS[key]}
            selected={selected}
            hasCriteria={isCategoryActive(filters, key)}
            tabIndex={selected ? 0 : -1}
            buttonRef={(el) => {
              refs.current[key] = el;
            }}
            onSelect={() => onSelect(key)}
            onKeyDown={handleKeyDown(key)}
          />
        );
      })}
    </div>
  );
};

export default FilterCategoryRail;
