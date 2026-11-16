import { CSSProperties, RefObject } from "react";
import { CheckIcon } from "@heroicons/react/20/solid";
import { twMerge } from "tailwind-merge";
import { COLOR_CLASSES } from "@/constants/colorClasses";
import type { AccentColor, DropdownOption } from "@/types";
import DropdownPortal from "./DropdownPortal";

interface Props {
  options: DropdownOption[];
  activeIndex: number;
  dropUp: boolean;
  isClosing: boolean;
  position: CSSProperties;
  menuRef: RefObject<HTMLUListElement | null>;
  color?: AccentColor;
  selectedValue?: string;
  selectedValues?: string[];
  showActive?: boolean;
  onMouseMove?: () => void;
  listClassName?: string;
  optionClassName?: string;
  onSelect: (option: DropdownOption) => void;
}

const DropdownMenu = ({
  options,
  activeIndex,
  dropUp,
  isClosing,
  position,
  menuRef,
  color = "blue",
  selectedValue,
  selectedValues,
  showActive = false,
  onMouseMove,
  listClassName,
  optionClassName,
  onSelect,
}: Props) => {
  const colorClasses = COLOR_CLASSES[color];
  if (options.length === 0) return null;

  const hasSelectionProp =
    selectedValue !== undefined || selectedValues !== undefined;

  return (
    <DropdownPortal>
      <ul
        ref={menuRef}
        className={twMerge(
          // Positioned via inline styles from useDropdownPosition.
          "fixed z-50 overflow-y-auto overscroll-contain [scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
          dropUp && "flex flex-col-reverse",
          "rounded-xl bg-surface/80 backdrop-blur-lg shadow-lg transition-all transform scale-95 scroll-smooth",
          isClosing ? "animate-fade-slide-up" : "animate-fade-slide-down",
          listClassName,
        )}
        style={
          {
            ...position,
            "--scroll-color": `var(--accent-${color})`,
          } as CSSProperties
        }
        tabIndex={-1}
        onMouseMove={onMouseMove}
      >
        {options.map((option, index) => {
          const displayIndex = dropUp ? options.length - 1 - index : index;
          const isActive = displayIndex === activeIndex;
          const isSelected =
            option.value === selectedValue ||
            !!selectedValues?.includes(option.value);
          return (
            <li
              key={option.value}
              role="option"
              aria-selected={
                hasSelectionProp
                  ? isSelected
                    ? "true"
                    : "false"
                  : isActive
                    ? "true"
                    : "false"
              }
              data-active={isActive || undefined}
              tabIndex={-1}
              onMouseDown={(event) => event.stopPropagation()}
              onClick={() => onSelect(option)}
              onKeyDown={(event) => {
                if (event.key === "Enter") {
                  event.preventDefault();
                  onSelect(option);
                }
              }}
              className={twMerge(
                "flex items-center justify-between gap-2 px-3 py-2 pointer-coarse:min-h-11 cursor-pointer transition-colors duration-100",
                isSelected
                  ? `${colorClasses.selectedBg} ${colorClasses.selectedHoverBg} ${colorClasses.text} font-medium`
                  : colorClasses.rowHoverBg,
                isActive &&
                  showActive &&
                  `${colorClasses.activeBg} ring-1 ring-inset ${colorClasses.softRing}`,
                optionClassName,
              )}
            >
              <span className="min-w-0 truncate">{option.text}</span>
              {isSelected && <CheckIcon className="h-4 w-4 shrink-0" />}
            </li>
          );
        })}
      </ul>
    </DropdownPortal>
  );
};

export default DropdownMenu;
