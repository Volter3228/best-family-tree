import InputLabel from "./InputLabel";
import { twMerge } from "tailwind-merge";
import { useDropdown } from "@/hooks";
import { ChevronDownIcon } from "@heroicons/react/16/solid";
import { COLOR_CLASSES } from "@/constants/colorClasses";
import type { AccentColor, DropdownOption } from "@/types";

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
  } = useDropdown(options, onSelect, initialValue, autoComplete);

  const handleInputFocus = () => setIsOpen(true);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    setIsOpen(true);
  };

  const handleOptionClick = (opt: DropdownOption) => () => {
    handleSelect(opt);
    handleClose();
  };

  const handleOptionKeyDown =
    (opt: DropdownOption) => (e: React.KeyboardEvent<HTMLLIElement>) => {
      if (e.key === "Enter") {
        e.preventDefault();
        handleOptionClick(opt)();
      }
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
      <input
        id={name}
        type="text"
        value={inputValue}
        placeholder={placeholder}
        required={required}
        readOnly={!autoComplete}
        onChange={handleInputChange}
        onFocus={handleInputFocus}
        onKeyDown={handleKeyDown}
        autoComplete="off"
        className={twMerge(
          "block w-full px-3 py-2 rounded-xl shadow-inner font-light bg-surface",
          colorClasses.border,
          "placeholder:text-placeholder",
          "focus:outline-hidden focus:ring-2",
          colorClasses.accentRing,
          colorClasses.caret,
          "transition-all duration-200 ease-out",
          !autoComplete ? "cursor-pointer select-none caret-transparent" : "",
        )}
      />
      {(isOpen || isClosing) && !!filteredOptions.length && (
        <ul
          className={twMerge(
            "absolute z-10 mt-2 max-h-80 w-full overflow-y-auto",
            "rounded-xl bg-surface/80 backdrop-blur-lg shadow-lg transition-all transform scale-95 scroll-smooth",
            isClosing ? "animate-fade-slide-up" : "animate-fade-slide-down",
          )}
          style={{
            scrollbarWidth: "thin",
            scrollbarColor: `var(--accent-${color}) transparent`,
          }}
          tabIndex={-1}
        >
          {filteredOptions.map((opt, index) => (
            <li
              key={opt.value}
              role="option"
              aria-selected={opt.value === inputValue ? "true" : "false"}
              tabIndex={-1}
              onClick={handleOptionClick(opt)}
              onKeyDown={handleOptionKeyDown(opt)}
              className={twMerge(
                "px-3 py-2 cursor-pointer",
                index === activeOptionIndex
                  ? `${colorClasses.accentBg} text-white`
                  : `${colorClasses.hoverAccentBg} hover:text-white`,
              )}
            >
              {opt.text}
            </li>
          ))}
        </ul>
      )}
      {!autoComplete && (
        <div className="relative">
          <div
            className={twMerge(
              "absolute -top-9 h-8 w-8 right-0 pr-2 flex items-center pointer-events-none",
              COLOR_CLASSES[color].text,
            )}
          >
            <ChevronDownIcon />
          </div>
        </div>
      )}
    </div>
  );
};

export default DropdownSelectInput;
