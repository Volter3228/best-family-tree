import { useEffect, useRef } from "react";
import { twMerge } from "tailwind-merge";
import { useMembers, useMembersSearch } from "@/hooks";
import { MagnifyingGlassIcon, XMarkIcon } from "@heroicons/react/24/outline";
import SearchSuggestionItem from "./SearchSuggestionItem";

interface Props {
  isOpen: boolean;
  isClosing: boolean;
  onClose: () => void;
  onSearch: (memberId: string) => void;
}

const SearchBar = ({ isOpen, isClosing, onClose, onSearch }: Props) => {
  const { flatMembersList } = useMembers();
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleSelect = (memberId: string) => {
    onSearch(memberId);
    onClose();
  };

  const {
    query,
    setQuery,
    filteredMembers,
    activeIndex,
    handleSelect: selectMember,
    handleKeyDown: onKeyDown,
  } = useMembersSearch({
    members: flatMembersList,
    onSelect: handleSelect,
  });

  // Focus input when opened
  useEffect(() => {
    if (isOpen && !isClosing && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen, isClosing]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Escape" && !query) {
      onClose();
      return;
    }
    onKeyDown(e);
  };

  const handleQueryChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setQuery(e.target.value);
  const handleQueryClear = () => setQuery("");

  if (!isOpen) return null;

  return (
    <>
      <div
        ref={containerRef}
        className={twMerge(
          "fixed top-4 left-4 right-4 z-40",
          "md:top-6 md:left-20 md:right-auto md:w-80",
          isClosing ? "animate-search-slide-out" : "animate-search-slide-in",
        )}
      >
        <div className="bg-violet-900 rounded-xl shadow-2xl">
          <div className="flex items-center gap-2 px-3 py-2 h-10">
            <MagnifyingGlassIcon className="md:hidden h-5 w-5 shrink-0 stroke-fuchsia-400" />
            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={handleQueryChange}
              onKeyDown={handleKeyDown}
              placeholder="Пошук учасника..."
              autoComplete="off"
              className={twMerge(
                "flex-1 bg-transparent text-white text-sm",
                "placeholder:text-fuchsia-400/60",
                "focus:outline-none",
              )}
            />
            {query && (
              <button
                onClick={handleQueryClear}
                className="p-0.5 rounded-full hover:bg-violet-800 transition-colors"
              >
                <XMarkIcon className="h-4 w-4 stroke-fuchsia-400" />
              </button>
            )}
          </div>
          {filteredMembers.length > 0 && (
            <ul className="overflow-y-auto overflow-hidden rounded-b-xl">
              {filteredMembers.map((member, index) => (
                <SearchSuggestionItem
                  key={member.id}
                  member={member}
                  isActive={index === activeIndex}
                  onClick={() => selectMember(member)}
                />
              ))}
            </ul>
          )}
          {query.trim() && filteredMembers.length === 0 && (
            <div className="border-t border-violet-800 px-3 py-3 text-center text-sm text-fuchsia-400/60">
              Нічого не знайдено
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default SearchBar;
