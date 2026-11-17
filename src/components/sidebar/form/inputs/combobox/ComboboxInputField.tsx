import { ChangeEvent, KeyboardEvent, RefObject } from "react";
import { ChevronDownIcon } from "@heroicons/react/16/solid";
import { twMerge } from "tailwind-merge";
import { COLOR_CLASSES } from "@/constants/colorClasses";
import type { AccentColor } from "@/types";
import InputLabel from "../InputLabel";
import { formInputClasses } from "../inputClasses";

interface Props {
  name: string;
  label?: string;
  value: string;
  placeholder: string;
  required: boolean;
  inputRef: RefObject<HTMLInputElement | null>;
  dropdownActive: boolean;
  color?: AccentColor;
  onFocus: () => void;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onKeyDown: (event: KeyboardEvent<HTMLInputElement>) => void;
}

const ComboboxInputField = ({
  name,
  label = "",
  value,
  placeholder,
  required,
  inputRef,
  dropdownActive,
  color = "blue",
  onFocus,
  onChange,
  onKeyDown,
}: Props) => {
  const colorClasses = COLOR_CLASSES[color];

  return (
    <>
      <InputLabel
        onClick={onFocus}
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
          value={value}
          placeholder={placeholder}
          required={required}
          onChange={onChange}
          onFocus={onFocus}
          onKeyDown={onKeyDown}
          autoComplete="off"
          className={formInputClasses(color, "pr-7")}
        />
        <div
          className={twMerge(
            "absolute top-1/2 -translate-y-1/2 right-2 h-5 w-5 flex items-center pointer-events-none transition-transform duration-200",
            colorClasses.text,
            dropdownActive && "rotate-180",
          )}
        >
          <ChevronDownIcon />
        </div>
      </div>
    </>
  );
};

export default ComboboxInputField;
