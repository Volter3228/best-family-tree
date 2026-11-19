import { useEffect, useRef, type KeyboardEvent, type ReactNode } from "react";
import CloseButton from "@/components/ui/CloseButton";
import { twMerge } from "tailwind-merge";
import { MagnifyingGlassIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { removeBadgeClasses } from "@/components/sidebar/form/inputs/inputClasses";
import { useT } from "@/i18n/useT";
import ToolbarPanel from "../ToolbarPanel";

interface Props {
  isOpen: boolean;
  isClosing: boolean;
  query: string;
  placeholder: string;
  resultCount: number;
  // Id of the listbox; rows are `${listId}-${suggestionIndex}`.
  listId: string;
  activeIndex: number;
  // Matches hidden by the current filters (members only).
  hiddenCount?: number;
  onQueryChange: (query: string) => void;
  onKeyDown: (e: KeyboardEvent<HTMLInputElement>) => void;
  onClose: () => void;
  // Suggestion rows, already ordered bottom-up (best match last).
  children: ReactNode;
}

// Floating search box: input at the bottom, suggestions growing upwards.
const SearchPanel = ({
  isOpen,
  isClosing,
  query,
  placeholder,
  resultCount,
  listId,
  activeIndex,
  hiddenCount = 0,
  onQueryChange,
  onKeyDown,
  onClose,
  children,
}: Props) => {
  const t = useT().search;
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen && !isClosing) inputRef.current?.focus();
  }, [isOpen, isClosing]);

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Escape" && !query) {
      onClose();
      return;
    }
    onKeyDown(e);
  };

  const clear = () => {
    onQueryChange("");
    inputRef.current?.focus();
  };

  if (!isOpen) return null;

  const hasResults = resultCount > 0;
  const isEmpty = query.trim() !== "" && !hasResults;

  return (
    <ToolbarPanel isClosing={isClosing} className="flex flex-col-reverse">
      <div
        className={twMerge(
          "flex h-12 items-center gap-2 px-3",
          (hasResults || isEmpty) && "border-t border-foreground/10",
        )}
      >
        <MagnifyingGlassIcon className="pointer-events-none h-5 w-5 shrink-0 stroke-accent-blue" />
        <input
          ref={inputRef}
          data-search-input
          type="text"
          role="combobox"
          aria-label={placeholder}
          aria-expanded={hasResults}
          aria-controls={listId}
          aria-activedescendant={
            hasResults ? `${listId}-${activeIndex}` : undefined
          }
          aria-autocomplete="list"
          value={query}
          onChange={(e) => onQueryChange(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
          autoComplete="off"
          className={twMerge(
            "min-w-0 flex-1 bg-transparent text-base font-medium text-foreground",
            "placeholder:font-normal placeholder:text-placeholder caret-accent-blue",
            "focus:outline-none",
          )}
        />
        {query && (
          <CloseButton
            label={t.clear}
            onMouseDown={(e) => e.preventDefault()}
            onClick={clear}
            iconClassName="h-3.5 w-3.5 stroke-2"
            className={removeBadgeClasses("blue", "h-6 w-6 shrink-0")}
          />
        )}
      </div>
      {hiddenCount > 0 && (
        <p className="px-4 pb-2 text-xs text-foreground/60">
          {t.hiddenByFilters(hiddenCount)}
        </p>
      )}
      {/* Reveal animates grid rows on the wrapper, so the scrolling ul is never
          shorter than its content and no scrollbar flashes. */}
      <div
        className={twMerge(
          "grid origin-bottom transition-[grid-template-rows,opacity,transform] duration-200 ease-in-out",
          hasResults
            ? "grid-rows-[1fr] opacity-100 translate-y-0 scale-y-100"
            : "grid-rows-[0fr] opacity-0 translate-y-1 scale-y-95 pointer-events-none",
        )}
      >
        <div className="min-h-0 overflow-hidden">
          <ul
            id={listId}
            role="listbox"
            aria-label={placeholder}
            className="flex max-h-[min(28rem,50dvh)] flex-col gap-0.5 overflow-y-auto overscroll-contain p-1.5"
            style={
              { "--scroll-color": "var(--accent-blue)" } as React.CSSProperties
            }
          >
            {children}
          </ul>
        </div>
      </div>
      {isEmpty && (
        <div className="px-3 py-3 text-center text-sm text-foreground/80">
          {t.nothingFound}
        </div>
      )}
    </ToolbarPanel>
  );
};

export default SearchPanel;
