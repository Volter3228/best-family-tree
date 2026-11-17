import { useState, useCallback, useMemo, useEffect } from "react";
import { matchesQuery, rankMatch } from "./searchMatching";

export { matchesQuery, rankMatch, getMatchRanges } from "./searchMatching";

const MAX_SUGGESTIONS = 8;

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
      .map((item) => ({ item, rank: rankMatch(getSearchable(item), query) }))
      .sort((a, b) => a.rank - b.rank || compare(a.item, b.item))
      .map(({ item }) => item)
      .slice(0, MAX_SUGGESTIONS);
  }, [items, query, getSearchable, compare]);

  useEffect(() => {
    setActiveIndex(0);
  }, [suggestions]);

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
    setActiveIndex,
    handleSelect,
    handleKeyDown,
  };
};
