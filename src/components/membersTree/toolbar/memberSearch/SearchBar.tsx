import { useEffect, useRef, useMemo } from "react";
import { twMerge } from "tailwind-merge";
import { Member } from "@/models";
import { useMembers, useMembersSearch, useFilters } from "@/hooks";
import { XMarkIcon } from "@heroicons/react/24/outline";
import SearchSuggestionItem from "./SearchSuggestionItem";

interface Props {
  isOpen: boolean;
  isClosing: boolean;
  onClose: () => void;
  onSearch: (memberId: string) => void;
}

const SearchBar = ({ isOpen, isClosing, onClose, onSearch }: Props) => {
  const { flatMembersList } = useMembers();
  const { filteredMemberIds } = useFilters();
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Members that are currently displayed in the tree
  const searchableMembers = useMemo(
    () =>
      filteredMemberIds
        ? flatMembersList.filter((m) => filteredMemberIds.has(m.id))
        : flatMembersList,
    [flatMembersList, filteredMemberIds],
  );

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
    members: searchableMembers,
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

  const handleSelectMember = (member: Member) => () => selectMember(member);

  if (!isOpen) return null;

  return (
    <>
      <div
        ref={containerRef}
        className={twMerge(
          "fixed bottom-24 left-1/2 -translate-x-1/2 z-40 w-[calc(100%-2rem)] max-w-80",
          "backdrop-blur-lg rounded-2xl",
          isClosing ? "animate-sidebar-slide-out" : "animate-sidebar-slide-in",
        )}
      >
        <div className="rounded-2xl bg-surface/70 shadow-2xl flex flex-col-reverse">
          <div className="flex items-center gap-2 px-3 py-2 h-10">
            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={handleQueryChange}
              onKeyDown={handleKeyDown}
              placeholder="Пошук учасника..."
              autoComplete="off"
              className={twMerge(
                "flex-1 bg-transparent text-foreground text-sm",
                "placeholder:text-foreground/80",
                "focus:outline-none",
              )}
            />
            {query && (
              <button
                onClick={handleQueryClear}
                className="p-0.5 rounded-full hover:bg-foreground/10 transition-colors"
              >
                <XMarkIcon className="h-4 w-4 stroke-foreground/80" />
              </button>
            )}
          </div>
          <ul
            className={twMerge(
              "overflow-y-auto rounded-t-2xl transition-all duration-200 ease-in-out origin-bottom",
              filteredMembers.length > 0
                ? "opacity-100 translate-y-0 scale-y-100 max-h-10/12"
                : "opacity-0 translate-y-1 scale-y-95 pointer-events-none max-h-0",
            )}
            style={{
              scrollbarWidth: "thin",
              scrollbarColor: "var(--accent-blue) transparent",
            }}
          >
            {filteredMembers.map((member, index) => (
              <SearchSuggestionItem
                key={member.id}
                member={member}
                isActive={index === activeIndex}
                onClick={handleSelectMember(member)}
              />
            ))}
          </ul>
          {query.trim() && filteredMembers.length === 0 && (
            <div className="border-b border-foreground/20 px-3 py-3 text-center text-sm text-foreground/80">
              Нима таких...
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default SearchBar;
