import InputLabel from "./InputLabel";
import { useDropdown } from "@/hooks";
import { DropdownOption } from "@/types";
import { ChevronDownIcon } from "@heroicons/react/16/solid";

interface Props {
  name: string;
  placeholder?: string;
  label?: string;
  required?: boolean;
  options: DropdownOption[];
  autoComplete?: boolean;
  onSelect: (value: string) => void;
  initialValue?: string;
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

  return (
    <div ref={dropdownRef} className="relative">
      <InputLabel
        onClick={handleInputFocus}
        label={label}
        htmlFor={name}
        required={required}
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
        className={`
          block w-full px-3 py-2 rounded-xl shadow-inner border-accent
          bg-purple-50 placeholder:text-placeholder font-light focus:outline-hidden focus:ring-2 focus:ring-accent
          caret-accent transition-all duration-200 ease-out
          ${!autoComplete ? "cursor-pointer select-none caret-transparent" : ""}
        `}
      />
      {isOpen && !!filteredOptions.length && (
        <ul
          className={`
            absolute z-10 mt-2 max-h-60 w-full overflow-y-auto
            rounded-xl bg-white shadow-lg transition-all transform scale-95
            scroll-smooth animate-fade-slide-${isClosing ? "up" : "down"}
          `}
        >
          {filteredOptions.map((opt, index) => (
            <li
              key={opt.value}
              role="option"
              aria-selected={opt.value === inputValue ? "true" : "false"}
              tabIndex={index}
              onClick={handleOptionClick(opt)}
              onKeyDown={handleOptionKeyDown(opt)}
              className={`
                px-3 py-2 cursor-pointer ${
                  index === activeOptionIndex
                    ? "bg-accent text-white"
                    : "hover:bg-accent hover:text-white"
                }
              `}
            >
              {opt.text}
            </li>
          ))}
        </ul>
      )}
      {!autoComplete && (
        <div className="relative">
          <div className="absolute -top-9 h-8 w-8 text-accent right-0 pr-2 flex items-center pointer-events-none">
            <ChevronDownIcon />
          </div>
        </div>
      )}
    </div>
  );
};

export default DropdownSelectInput;
