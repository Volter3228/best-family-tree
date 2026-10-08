import { useState, useCallback, useMemo, useEffect } from "react";
import { normalize } from "@/utils";

const MAX_SUGGESTIONS = 8;

// Every query word must be a prefix-or-substring of some searchable word.
export const matchesQuery = (searchable: string[], query: string): boolean => {
  const normalizedQuery = normalize(query);
  if (!normalizedQuery) return false;

  const tokens = searchable.flatMap((text) => normalize(text).split(/\s+/));
  return normalizedQuery
    .split(/\s+/)
    .every((part) => tokens.some((token) => token.includes(part)));
};

interface Options<T> {
  items: T[];
  getSearchable: (item: T) => string[];
  compare: (a: T, b: T) => number;
  onSelect: (item: T) => void;
}

/**
 * Query state + keyboard navigation for a search box whose suggestions are
 * listed bottom-up (best match closest to the input, so ArrowUp goes forward).
 */
export const useSearchSuggestions = <T>({
  items,
  getSearchable,
  compare,
  onSelect,
}: Options<T>) => {
  const [query, setQuery] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);

  const suggestions = useMemo(() => {
    if (!query.trim()) return [];
    return items
      .filter((item) => matchesQuery(getSearchable(item), query))
      .sort(compare)
      .slice(0, MAX_SUGGESTIONS);
  }, [items, query, getSearchable, compare]);

  useEffect(() => {
    setActiveIndex(0);
  }, [suggestions.length]);

  const handleSelect = useCallback(
    (item: T) => {
      onSelect(item);
      setQuery("");
      setActiveIndex(0);
    },
    [onSelect],
  );

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      const count = suggestions.length;
      switch (e.key) {
        case "ArrowDown":
          e.preventDefault();
          if (count > 0) setActiveIndex((prev) => (prev === 0 ? count - 1 : prev - 1));
          break;
        case "ArrowUp":
          e.preventDefault();
          if (count > 0) setActiveIndex((prev) => (prev + 1) % count);
          break;
        case "Enter":
          e.preventDefault();
          if (count > 0) handleSelect(suggestions[activeIndex] || suggestions[0]);
          break;
        case "Escape":
          e.preventDefault();
          setQuery("");
          break;
      }
    },
    [suggestions, activeIndex, handleSelect],
  );

  return {
    query,
    setQuery,
    suggestions,
    activeIndex,
    handleSelect,
    handleKeyDown,
  };
};
