import { CSSProperties, RefObject } from "react";
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
  listClassName,
  optionClassName,
  onSelect,
}: Props) => {
  const colorClasses = COLOR_CLASSES[color];
  if (options.length === 0) return null;

  return (
    <DropdownPortal>
      <ul
        ref={menuRef}
        className={twMerge(
          // Positioned via inline styles from useDropdownPosition.
          "fixed z-50 overflow-y-auto",
          dropUp && "flex flex-col-reverse",
          "rounded-xl bg-surface/80 backdrop-blur-lg shadow-lg transition-all transform scale-95 scroll-smooth",
          isClosing ? "animate-fade-slide-up" : "animate-fade-slide-down",
          listClassName,
        )}
        style={{
          ...position,
          scrollbarWidth: "thin",
          scrollbarColor: `var(--accent-${color}) transparent`,
        }}
        tabIndex={-1}
      >
        {options.map((option, index) => {
          const displayIndex = dropUp ? options.length - 1 - index : index;
          const isActive = displayIndex === activeIndex;
          return (
            <li
              key={option.value}
              role="option"
              aria-selected={
                selectedValue
                  ? option.value === selectedValue
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
                "px-3 py-2 cursor-pointer",
                isActive
                  ? `${colorClasses.accentBg} text-white`
                  : colorClasses.hoverAccentBg,
                optionClassName,
              )}
            >
              {option.text}
            </li>
          );
        })}
      </ul>
    </DropdownPortal>
  );
};

export default DropdownMenu;
