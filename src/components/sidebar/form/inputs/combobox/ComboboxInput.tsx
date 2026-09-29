import { useEffect, useRef } from "react";
import { useDropdownPosition } from "@/hooks";
import type { AccentColor, DropdownOption } from "@/types";
import DropdownMenu from "@/components/common/DropdownMenu";
import ComboboxInputField from "./ComboboxInputField";
import { useComboboxState } from "./useComboboxState";

interface Props {
  name: string;
  placeholder?: string;
  label?: string;
  required?: boolean;
  options: DropdownOption[];
  onSelect: (value: string, text: string) => void;
  initialValue?: string;
  color?: AccentColor;
}

const ComboboxInput = ({
  label = "",
  name,
  options,
  placeholder = "Select or type",
  required = false,
  onSelect,
  initialValue = "",
  color = "blue",
}: Props) => {
  const dropdownRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLUListElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const {
    isOpen,
    setIsOpen,
    isClosing,
    inputValue,
    setInputValue,
    activeIndex,
    allOptions,
    selectOption,
    tryAutoSelect,
    handleKeyDown,
  } = useComboboxState(options, initialValue, onSelect);
  const {
    dropUp,
    position: dropdownPos,
    update: updateDropdownPosition,
  } = useDropdownPosition({ isOpen, anchorRef: inputRef });

  const handleFocus = () => {
    updateDropdownPosition();
    setIsOpen(true);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
    setIsOpen(true);
  };

  useEffect(() => {
    if (!isOpen) return;
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        !menuRef.current?.contains(event.target as Node)
      ) {
        tryAutoSelect();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen, tryAutoSelect]);

  // Keep the keyboard-focused option inside the menu's scroll window
  useEffect(() => {
    if (!isOpen) return;
    menuRef.current
      ?.querySelector("[data-active]")
      ?.scrollIntoView({ block: "nearest", behavior: "instant" });
  }, [activeIndex, isOpen]);

  return (
    <div ref={dropdownRef} className="relative">
      <ComboboxInputField
        name={name}
        label={label}
        value={inputValue}
        placeholder={placeholder}
        required={required}
        inputRef={inputRef}
        dropdownActive={isOpen || isClosing}
        color={color}
        onFocus={handleFocus}
        onChange={handleInputChange}
        onKeyDown={(event) => handleKeyDown(event, dropUp)}
      />
      {(isOpen || isClosing) && (
        <DropdownMenu
          options={allOptions}
          activeIndex={activeIndex}
          dropUp={dropUp}
          isClosing={isClosing}
          position={dropdownPos}
          menuRef={menuRef}
          color={color}
          onSelect={selectOption}
        />
      )}
    </div>
  );
};

export default ComboboxInput;
