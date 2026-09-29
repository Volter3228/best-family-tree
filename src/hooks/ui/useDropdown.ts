import {
  useState,
  useEffect,
  useCallback,
  useRef,
  useMemo,
  type RefObject,
} from "react";
import type { DropdownOption } from "@/types";

export const useDropdown = (
  options: DropdownOption[],
  onSelect: (optValue: string) => void,
  initialValue: string = "",
  autoComplete: boolean = false,
  menuRef?: RefObject<HTMLUListElement | null>,
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
  const closeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => () => {
    if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
  }, []);


  useEffect(() => {
    setInputValue(getInitialText());
  }, [initialValue, options]);

  const filteredOptions = useMemo(
    () =>
      autoComplete
        ? options.filter((opt) =>
          opt.text.toLowerCase().includes(inputValue.toLowerCase()),
        )
        : options,
    [autoComplete, options, inputValue],
  );

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
    closeTimeoutRef.current = setTimeout(() => {
      setIsOpen(false);
      setIsClosing(false);
      // Prevent dropdown options vanish before animation end
    }, 200);
  }, []);

  const handleClickOutside = useCallback(
    (event: MouseEvent) => {
      const isInsideMenu = menuRef?.current?.contains(event.target as Node);
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        !isInsideMenu
      ) {
        handleSelect();
        handleClose();
      }
    },
    [handleClose, handleSelect, menuRef],
  );

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>, dropUp: boolean = false) => {
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
        case "Enter": {
          // Active index is a display index; invert it for reversed (drop-up) menus.
          const optionIndex = dropUp
            ? filteredOptions.length - 1 - activeOptionIndex
            : activeOptionIndex;
          if (optionIndex >= 0 && optionIndex < filteredOptions.length) {
            handleSelect(filteredOptions[optionIndex]);
            handleClose();
          }
          break;
        }
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

  // Keep the keyboard-focused option inside the menu's scroll window
  useEffect(() => {
    if (!isOpen) return;
    menuRef?.current
      ?.querySelector("[data-active]")
      ?.scrollIntoView({ block: "nearest", behavior: "instant" });
  }, [activeOptionIndex, isOpen, menuRef]);

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
