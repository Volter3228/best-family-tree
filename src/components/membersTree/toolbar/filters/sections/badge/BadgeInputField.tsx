import { ChangeEvent, KeyboardEvent, RefObject } from "react";
import { XMarkIcon } from "@heroicons/react/16/solid";
import { twMerge } from "tailwind-merge";
import { COLOR_CLASSES } from "@/constants/colorClasses";
import type { AccentColor, DropdownOption } from "@/types";

interface Props {
  selectedBadges: DropdownOption[];
  inputValue: string;
  placeholder: string;
  inputRef: RefObject<HTMLInputElement | null>;
  color?: AccentColor;
  onContainerClick: () => void;
  onInputChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onInputFocus: () => void;
  onInputKeyDown: (event: KeyboardEvent<HTMLInputElement>) => void;
  onRemoveBadge: (value: string) => void;
  onRemoveAll: () => void;
}

const BadgeInputField = ({
  selectedBadges,
  inputValue,
  placeholder,
  inputRef,
  color = "green",
  onContainerClick,
  onInputChange,
  onInputFocus,
  onInputKeyDown,
  onRemoveBadge,
  onRemoveAll,
}: Props) => {
  const colorClasses = COLOR_CLASSES[color];

  return (
    <div
      className="relative flex flex-wrap items-center gap-1.5 min-h-[2.25rem] w-full rounded-lg bg-surface-green/40 px-2 py-1.5 pr-9"
      onClick={onContainerClick}
    >
      {selectedBadges.map((badge) => (
        <span
          key={badge.value}
          className={twMerge(
            "inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-xs font-medium text-white",
            colorClasses.accentBg,
          )}
        >
          {badge.text}
          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              onRemoveBadge(badge.value);
            }}
            className="hover:scale-125 transition-transform duration-150"
            aria-label={`Видалити ${badge.text}`}
          >
            <XMarkIcon className="h-3 w-3" />
          </button>
        </span>
      ))}
      <div className="flex min-w-0 flex-1 items-center">
        <input
          ref={inputRef}
          type="text"
          value={inputValue}
          onChange={onInputChange}
          onFocus={onInputFocus}
          onKeyDown={onInputKeyDown}
          placeholder={selectedBadges.length === 0 ? placeholder : ""}
          autoComplete="off"
          className={twMerge(
            "min-w-0 flex-1 bg-transparent text-sm text-foreground placeholder:text-placeholder focus:outline-none",
            colorClasses.caret,
          )}
        />
      </div>
      {selectedBadges.length > 0 && (
        <button
          type="button"
          onClick={(event) => {
            event.stopPropagation();
            onRemoveAll();
          }}
          className={twMerge(
            "absolute right-1 top-1.5 flex h-6 w-6 items-center justify-center",
            "rounded-full text-foreground/40 transition-colors duration-150 hover:bg-surface-border/50 hover:text-foreground",
          )}
          aria-label="Видалити всі"
        >
          <XMarkIcon className="h-4 w-4" />
        </button>
      )}
    </div>
  );
};

export default BadgeInputField;
