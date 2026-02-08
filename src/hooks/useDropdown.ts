import { useState, useEffect, useCallback, useRef } from "react";
import { DropdownOption } from "@/types";

export const useDropdown = (
  options: DropdownOption[],
  onSelect: (optValue: string) => void,
  initialValue: string = "",
  autoComplete: boolean = false,
) => {
  const getInitialText = () => {
    if (!initialValue) return "";
    const option = options.find((opt) => opt.value === initialValue);
    return option?.text || "";
  };

  const [isOpen, setIsOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [activeOptionIndex, setActiveOptionIndex] = useState<number>(0);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setInputValue(getInitialText());
  }, [initialValue, options]);

  const filteredOptions = autoComplete
    ? options.filter((opt) =>
        opt.text.toLowerCase().includes(inputValue.toLowerCase()),
      )
    : options;

  const handleSelect = useCallback(
    (opt?: DropdownOption) => {
      if (opt) {
        onSelect(opt.value);
        setInputValue(opt.text);
      } else if (
        filteredOptions.length === 1 &&
        filteredOptions[0].text.toLowerCase() === inputValue.toLowerCase()
      ) {
        const { value, text } = filteredOptions[0];
        onSelect(value);
        setInputValue(text);
      }
    },
    [onSelect, filteredOptions, inputValue],
  );

  const handleClose = useCallback(() => {
    setIsClosing(true);
    setTimeout(() => {
      setIsOpen(false);
      setIsClosing(false);
      // Prevent dropdown options vanish before animation end
    }, 200);
  }, []);

  const handleClickOutside = useCallback(
    (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        handleSelect();
        handleClose();
      }
    },
    [handleClose, handleSelect],
  );

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (!isOpen || filteredOptions.length === 0) return;

      if (["ArrowDown", "ArrowUp", "Enter", "Escape"].includes(e.key)) {
        e.preventDefault();
      }

      switch (e.key) {
        case "ArrowDown":
          setActiveOptionIndex((prev) => (prev + 1) % filteredOptions.length);
          break;
        case "ArrowUp":
          setActiveOptionIndex((prev) =>
            prev === 0 ? filteredOptions.length - 1 : prev - 1,
          );
          break;
        case "Enter":
          if (
            activeOptionIndex >= 0 &&
            activeOptionIndex < filteredOptions.length
          ) {
            handleSelect(filteredOptions[activeOptionIndex]);
            handleClose();
          }
          break;
        case "Escape":
        case "Tab":
          handleSelect();
          handleClose();
          break;
        default:
          break;
      }
    },
    [activeOptionIndex, isOpen, filteredOptions, handleSelect, handleClose],
  );

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, handleClickOutside]);

  // Reset active index on dropdown close
  useEffect(() => {
    if (!isOpen) setActiveOptionIndex(0);
  }, [isOpen]);

  // Reset active index after filtering options
  useEffect(() => {
    setActiveOptionIndex(0);
  }, [filteredOptions.length]);

  return {
    isOpen,
    isClosing,
    setIsOpen,
    dropdownRef,
    filteredOptions,
    activeOptionIndex,
    inputValue,
    setInputValue,
    handleSelect,
    handleKeyDown,
    handleClose,
  };
};
