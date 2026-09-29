import { useEffect, useRef, useState } from "react";
import { useDropdownPosition } from "@/hooks";
import type { AccentColor, DropdownOption } from "@/types";
import DropdownMenu from "@/components/common/DropdownMenu";
import BadgeInputField from "./BadgeInputField";
import { useBadgeInputState } from "./useBadgeInputState";

interface Props {
  selected: string[];
  options: DropdownOption[];
  onChange: (values: string[]) => void;
  placeholder?: string;
  color?: AccentColor;
  allowFreeText?: boolean;
}

const BadgeInput = ({
  selected,
  options,
  onChange,
  placeholder = "Введіть роль...",
  color = "green",
  allowFreeText = false,
}: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLUListElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const {
    dropUp,
    position: dropdownPos,
    update: updateDropdownPosition,
  } = useDropdownPosition({ isOpen, anchorRef: containerRef, threshold: 250 });
  const {
    inputValue,
    isClosing,
    setIsClosing,
    activeIndex,
    filteredOptions,
    selectedBadges,
    close,
    addBadge,
    removeBadge,
    removeAllBadges,
    handleInputChange,
    handleKeyDown,
  } = useBadgeInputState(
    selected,
    options,
    onChange,
    allowFreeText,
    isOpen,
    setIsOpen,
    dropUp,
  );

  const handleInputFocus = () => {
    updateDropdownPosition();
    setIsOpen(true);
    setIsClosing(false);
  };

  useEffect(() => {
    if (!isOpen) return;
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node) &&
        !menuRef.current?.contains(event.target as Node)
      ) {
        close();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen, close]);

  // Keep the keyboard-focused option inside the menu's scroll window
  useEffect(() => {
    if (!isOpen) return;
    menuRef.current
      ?.querySelector("[data-active]")
      ?.scrollIntoView({ block: "nearest", behavior: "instant" });
  }, [activeIndex, isOpen]);

  return (
    <div ref={containerRef} className="relative">
      <BadgeInputField
        selectedBadges={selectedBadges}
        inputValue={inputValue}
        placeholder={placeholder}
        inputRef={inputRef}
        color={color}
        onContainerClick={() => inputRef.current?.focus()}
        onInputChange={handleInputChange}
        onInputFocus={handleInputFocus}
        onInputKeyDown={handleKeyDown}
        onRemoveBadge={removeBadge}
        onRemoveAll={removeAllBadges}
      />
      {(isOpen || isClosing) && (
        <DropdownMenu
          options={filteredOptions}
          activeIndex={activeIndex}
          dropUp={dropUp}
          isClosing={isClosing}
          position={dropdownPos}
          menuRef={menuRef}
          color={color}
          optionClassName="text-sm"
          onSelect={(option) => addBadge(option.value)}
        />
      )}
    </div>
  );
};

export default BadgeInput;
