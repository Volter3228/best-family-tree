import {
  Dispatch,
  SetStateAction,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import type { DropdownOption } from "@/types";

export const useBadgeInputState = (
  selected: string[],
  options: DropdownOption[],
  onChange: (values: string[]) => void,
  allowFreeText: boolean,
  isOpen: boolean,
  setIsOpen: Dispatch<SetStateAction<boolean>>,
  dropUp: boolean,
) => {
  const [inputValue, setInputValue] = useState("");
  const [isClosing, setIsClosing] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const closeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(
    () => () => {
      if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
    },
    [],
  );

  const selectedSet = useMemo(() => new Set(selected), [selected]);
  const availableOptions = useMemo(
    () => options.filter((option) => !selectedSet.has(option.value)),
    [options, selectedSet],
  );
  const filteredOptions = useMemo(
    () =>
      inputValue.trim()
        ? availableOptions.filter((option) =>
          option.text.toLowerCase().includes(inputValue.toLowerCase()),
        )
        : availableOptions,
    [availableOptions, inputValue],
  );
  const selectedBadges = useMemo(
    () =>
      selected.map((value) => ({
        value,
        text: options.find((option) => option.value === value)?.text || value,
      })),
    [selected, options],
  );

  const close = useCallback(() => {
    setIsClosing(true);
    closeTimeoutRef.current = setTimeout(() => {
      setIsOpen(false);
      setIsClosing(false);
    }, 200);
  }, [setIsOpen]);

  const addBadge = useCallback(
    (value: string) => {
      if (!value || selectedSet.has(value)) return;
      onChange([...selected, value]);
      setInputValue("");
      setActiveIndex(dropUp ? filteredOptions.length - 1 : 0);
    },
    [selected, selectedSet, onChange, dropUp, filteredOptions.length],
  );

  const addBadgeByText = useCallback(
    (text: string) => {
      const trimmed = text.trim();
      if (!trimmed) return;
      const match = options.find(
        (option) => option.text.toLowerCase() === trimmed.toLowerCase(),
      );
      if (match) addBadge(match.value);
      else if (allowFreeText) addBadge(trimmed);
    },
    [options, addBadge, allowFreeText],
  );

  const removeBadge = useCallback(
    (value: string) => onChange(selected.filter((item) => item !== value)),
    [selected, onChange],
  );

  const removeAllBadges = useCallback(() => {
    onChange([]);
    setInputValue("");
    close();
  }, [onChange, close]);

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ): void => {
    setInputValue(event.target.value);
    setIsOpen(true);
    setIsClosing(false);
    setActiveIndex(dropUp ? filteredOptions.length - 1 : 0);
  };

  const handleKeyDown = (
    event: React.KeyboardEvent<HTMLInputElement>,
  ): void => {
    if (event.key === "Enter") {
      event.preventDefault();
      if (isOpen && filteredOptions.length > 0 && activeIndex >= 0) {
        const optionIndex = dropUp
          ? filteredOptions.length - 1 - activeIndex
          : activeIndex;
        addBadge(filteredOptions[optionIndex].value);
      } else if (inputValue.trim()) {
        addBadgeByText(inputValue);
      }
      return;
    }
    if (event.key === "Backspace" && !inputValue && selected.length > 0) {
      removeBadge(selected[selected.length - 1]);
      return;
    }
    if (event.key === "Escape") {
      setInputValue("");
      close();
      return;
    }
    if (!isOpen || filteredOptions.length === 0) return;

    if (event.key === "ArrowDown") {
      event.preventDefault();
      setActiveIndex((current) => (current + 1) % filteredOptions.length);
    } else if (event.key === "ArrowUp") {
      event.preventDefault();
      setActiveIndex((current) =>
        current === 0 ? filteredOptions.length - 1 : current - 1,
      );
    }
  };

  useEffect(() => {
    setActiveIndex(dropUp ? filteredOptions.length - 1 : 0);
  }, [dropUp, filteredOptions.length]);

  return {
    inputValue,
    setInputValue,
    isClosing,
    setIsClosing,
    activeIndex,
    filteredOptions,
    selectedBadges,
    close,
    addBadge,
    addBadgeByText,
    removeBadge,
    removeAllBadges,
    handleInputChange,
    handleKeyDown,
  };
};
