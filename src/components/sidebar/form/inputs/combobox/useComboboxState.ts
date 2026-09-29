import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import type { DropdownOption } from "@/types";

const NEW_OPTION_VALUE = "__new__";

export const useComboboxState = (
  options: DropdownOption[],
  initialValue: string,
  onSelect: (value: string, text: string) => void,
) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);
  const closeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(
    () => () => {
      if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
    },
    [],
  );

  useEffect(() => {
    const option = options.find((item) => item.value === initialValue);
    setInputValue(option?.text || initialValue);
  }, [initialValue, options]);

  const filteredOptions = useMemo(
    () =>
      options.filter((option) =>
        option.text.toLowerCase().includes(inputValue.toLowerCase()),
      ),
    [options, inputValue],
  );

  const isExistingOption = useMemo(
    () =>
      options.some(
        (option) => option.text.toLowerCase() === inputValue.toLowerCase(),
      ),
    [options, inputValue],
  );

  const allOptions = useMemo(() => {
    if (inputValue.trim() && !isExistingOption) {
      return [
        { value: NEW_OPTION_VALUE, text: `Створити: "${inputValue}"` },
        ...filteredOptions,
      ];
    }
    return filteredOptions;
  }, [filteredOptions, inputValue, isExistingOption]);

  const close = useCallback(() => {
    setIsClosing(true);
    closeTimeoutRef.current = setTimeout(() => {
      setIsOpen(false);
      setIsClosing(false);
    }, 200);
  }, []);

  const selectOption = useCallback(
    (option: DropdownOption) => {
      if (option.value === NEW_OPTION_VALUE) {
        onSelect("", inputValue);
      } else {
        onSelect(option.value, option.text);
        setInputValue(option.text);
      }
      close();
    },
    [inputValue, onSelect, close],
  );

  const tryAutoSelect = useCallback(() => {
    if (!inputValue.trim()) {
      close();
      return;
    }

    const exactMatch = allOptions.find(
      (option) =>
        option.value !== NEW_OPTION_VALUE &&
        option.text.toLowerCase() === inputValue.toLowerCase(),
    );

    if (exactMatch) selectOption(exactMatch);
    else {
      onSelect("", inputValue);
      close();
    }
  }, [inputValue, allOptions, onSelect, close, selectOption]);

  const handleKeyDown = (
    event: React.KeyboardEvent<HTMLInputElement>,
    dropUp: boolean,
  ) => {
    if (!isOpen && (event.key === "ArrowDown" || event.key === "Enter")) {
      setIsOpen(true);
      return;
    }
    if (!isOpen || allOptions.length === 0) return;

    if (["ArrowDown", "ArrowUp", "Enter", "Escape"].includes(event.key)) {
      event.preventDefault();
    }

    switch (event.key) {
      case "ArrowDown":
        setActiveIndex((current) => (current + 1) % allOptions.length);
        break;
      case "ArrowUp":
        setActiveIndex((current) =>
          current === 0 ? allOptions.length - 1 : current - 1,
        );
        break;
      case "Enter": {
        const optionIndex = dropUp
          ? allOptions.length - 1 - activeIndex
          : activeIndex;
        if (optionIndex >= 0 && optionIndex < allOptions.length) {
          selectOption(allOptions[optionIndex]);
        }
        break;
      }
      case "Escape":
        close();
        break;
      case "Tab":
        tryAutoSelect();
        break;
    }
  };

  useEffect(() => {
    if (!isOpen) setActiveIndex(0);
  }, [isOpen]);

  useEffect(() => {
    setActiveIndex(0);
  }, [allOptions.length]);

  return {
    isOpen,
    setIsOpen,
    isClosing,
    inputValue,
    setInputValue,
    activeIndex,
    allOptions,
    close,
    selectOption,
    tryAutoSelect,
    handleKeyDown,
  };
};
