import InputLabel from "./InputLabel";
import useDropdown from "@/hooks/useDropdown";
import { DropdownOption } from "@/types";
import { ChevronDownIcon } from "@heroicons/react/16/solid";

interface IProps {
  name: string;
  placeholder?: string;
  label?: string;
  required?: boolean;
  defaultOptionText?: string;
  options: DropdownOption[];
  autoComplete?: boolean;
  onSelect: (value: string) => void;
}

export default function DropdownSelectInput({
  label = "",
  name,
  options,
  placeholder = "Select",
  required = false,
  autoComplete = false,
  onSelect,
}: IProps) {
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
  } = useDropdown(options, onSelect, autoComplete);

  const handleInputFocus = () => setIsOpen(true);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    setIsOpen(true);
  };

  const handleOptionClick = (opt: DropdownOption) => () => {
    handleSelect(opt);
    handleClose();
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
          block w-full px-3 py-2 rounded-xl placehoder:text-slate-200 shadow-inner border-accent
          bg-purple-50 placeholder:text-placeholder font-light focus:outline-none focus:ring focus:ring-accent
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
              onClick={handleOptionClick(opt)}
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
}
