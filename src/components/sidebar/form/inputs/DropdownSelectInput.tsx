import { useRef, useState } from "react";
import InputLabel from "./InputLabel";
import { twMerge } from "tailwind-merge";
import { useDropdown, useDropdownPosition } from "@/hooks";
import { ChevronDownIcon } from "@heroicons/react/16/solid";
import { COLOR_CLASSES } from "@/constants/colorClasses";
import { formInputClasses } from "./inputClasses";
import type { AccentColor, DropdownOption } from "@/types";
import DropdownMenu from "@/components/common/DropdownMenu";

interface Props {
  name: string;
  placeholder?: string;
  label?: string;
  required?: boolean;
  options: DropdownOption[];
  autoComplete?: boolean;
  onSelect: (value: string) => void;
  initialValue?: string;
  color?: AccentColor;
}

const DropdownSelectInput = ({
  label = "",
  name,
  options,
  placeholder = "Select",
  required = false,
  autoComplete = false,
  onSelect,
  initialValue,
  color = "blue",
}: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const menuRef = useRef<HTMLUListElement>(null);
  const [showActive, setShowActive] = useState(false);

  const {
    isOpen,
    setIsOpen,
    isClosing,
    inputValue,
    setInputValue,
    dropdownRef,
    activeOptionIndex,
    filteredOptions,
    handleSelect,
    handleKeyDown,
    handleClose,
  } = useDropdown(options, onSelect, initialValue, autoComplete, menuRef);

  const {
    dropUp,
    position: dropdownPos,
    update: updateDropdownPosition,
  } = useDropdownPosition({ isOpen, anchorRef: inputRef });

  const handleInputFocus = () => {
    updateDropdownPosition();
    setShowActive(false);
    setIsOpen(true);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    setIsOpen(true);
  };

  const handleOptionSelect = (opt: DropdownOption) => {
    handleSelect(opt);
    handleClose();
  };

  const colorClasses = COLOR_CLASSES[color];

  return (
    <div ref={dropdownRef} className="relative">
      <InputLabel
        onClick={handleInputFocus}
        label={label}
        htmlFor={name}
        required={required}
        color={color}
      />
      <div className="relative">
        <input
          id={name}
          ref={inputRef}
          type="text"
          value={inputValue}
          placeholder={placeholder}
          required={required}
          readOnly={!autoComplete}
          onChange={handleInputChange}
          onFocus={handleInputFocus}
          onKeyDown={(e) => {
            if (e.key === "ArrowDown" || e.key === "ArrowUp") setShowActive(true);
            handleKeyDown(e, dropUp);
          }}
          autoComplete="off"
          className={formInputClasses(
            color,
            "pr-7",
            !autoComplete && "cursor-pointer select-none caret-transparent",
          )}
        />
        {(isOpen || isClosing) && !!filteredOptions.length && (
          <DropdownMenu
            options={filteredOptions}
            activeIndex={activeOptionIndex}
            dropUp={dropUp}
            isClosing={isClosing}
            position={dropdownPos}
            menuRef={menuRef}
            color={color}
            selectedValue={inputValue}
            showActive={showActive}
            onMouseMove={() => setShowActive(false)}
            listClassName="drop-shadow-2xl"
            onSelect={handleOptionSelect}
          />
        )}
        {!autoComplete && (
          <div
            className={twMerge(
              "absolute top-1/2 -translate-y-1/2 right-2 h-5 w-5 flex items-center pointer-events-none transition-transform duration-200",
              COLOR_CLASSES[color].text,
              (isOpen || isClosing) && "rotate-180",
            )}
          >
            <ChevronDownIcon />
          </div>
        )}
      </div>
    </div>
  );
};

export default DropdownSelectInput;
