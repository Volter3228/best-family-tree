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

  // Existing matches come first (the first one is focused by default); the
  // "create" option is last, so it is only focused when nothing else matches.
  const allOptions = useMemo(() => {
    if (inputValue.trim() && !isExistingOption) {
      return [
        ...filteredOptions,
        { value: NEW_OPTION_VALUE, text: `Створити: "${inputValue}"` },
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
      // Clearing a field that had a value clears the value as well.
      if (initialValue) onSelect("", "");
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
  }, [inputValue, initialValue, allOptions, onSelect, close, selectOption]);

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

    // activeIndex is always the logical option index. A menu opening upwards is
    // laid out in reverse (first option next to the input), so the arrows
    // move the other way there.
    const step = (direction: 1 | -1) =>
      setActiveIndex(
        (current) =>
          (current + direction * (dropUp ? -1 : 1) + allOptions.length) %
          allOptions.length,
      );

    switch (event.key) {
      case "ArrowDown":
        step(1);
        break;
      case "ArrowUp":
        step(-1);
        break;
      case "Enter":
        if (activeIndex >= 0 && activeIndex < allOptions.length) {
          selectOption(allOptions[activeIndex]);
        }
        break;
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
  }, [allOptions.length, inputValue]);

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
