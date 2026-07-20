import { useState, useMemo, useRef, useEffect, useCallback } from "react";
import { twMerge } from "tailwind-merge";
import { MagnifyingGlassIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { useMembers } from "@/hooks";
import { normalize } from "@/utils";
import { Member } from "@/models";

const MAX_SUGGESTIONS = 6;

interface Props {
  selectedMemberId: string | null;
  onSelect: (memberId: string) => void;
  onClear: () => void;
}

const LineageMemberSearch = ({
  selectedMemberId,
  onSelect,
  onClear,
}: Props) => {
  const { flatMembersList, getMemberById } = useMembers();
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const selectedMember = useMemo(
    () => (selectedMemberId ? getMemberById(selectedMemberId) : null),
    [selectedMemberId, getMemberById],
  );

  const filtered = useMemo(() => {
    const q = normalize(query);
    if (!q) return [];
    const parts = q.split(/\s+/);
    return flatMembersList
      .filter((m) => {
        const tokens = normalize(m.name).split(/\s+/);
        return parts.every((p) => tokens.some((t) => t.includes(p)));
      })
      .slice(0, MAX_SUGGESTIONS);
  }, [flatMembersList, query]);

  useEffect(() => {
    setActiveIndex(0);
  }, [query]);

  const handleSelect = useCallback(
    (member: Member) => {
      onSelect(member.id);
      setQuery("");
      setIsOpen(false);
    },
    [onSelect],
  );

  // Auto-select member if their name was entered exactly
  const tryAutoSelect = useCallback(() => {
    if (!query) return;
    const q = normalize(query);
    const exactMatch = flatMembersList.find((m) => normalize(m.name) === q);
    if (exactMatch) {
      handleSelect(exactMatch);
    } else {
      setQuery("");
      setIsOpen(false);
    }
  }, [query, flatMembersList, handleSelect]);

  // Click-outside-to-close
  useEffect(() => {
    if (!isOpen) return;
    const handleClickOutside = (e: MouseEvent) => {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(e.target as Node)
      ) {
        tryAutoSelect();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen, tryAutoSelect]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    switch (e.key) {
      case "ArrowDown":
        e.preventDefault();
        if (filtered.length) setActiveIndex((i) => (i + 1) % filtered.length);
        break;
      case "ArrowUp":
        e.preventDefault();
        if (filtered.length)
          setActiveIndex((i) => (i === 0 ? filtered.length - 1 : i - 1));
        break;
      case "Enter":
        e.preventDefault();
        if (filtered.length) handleSelect(filtered[activeIndex] || filtered[0]);
        break;
      case "Escape":
        e.preventDefault();
        tryAutoSelect();
        break;
    }
  };

  const handleClear = () => {
    onClear();
    setQuery("");
    setIsOpen(false);
  };

  const showDropdown = isOpen && filtered.length > 0 && !selectedMember;

  return (
    <div ref={wrapperRef} className="relative">
      <div className="flex items-center gap-2 bg-surface-green/40 rounded-lg px-2 py-1.5">
        <MagnifyingGlassIcon className="h-4 w-4 shrink-0 stroke-foreground/80" />
        {selectedMember ? (
          <span className="text-sm text-foreground truncate flex-1">
            {selectedMember.name}
          </span>
        ) : (
          <input
            type="text"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setIsOpen(true);
            }}
            onFocus={() => setIsOpen(true)}
            onKeyDown={handleKeyDown}
            placeholder="Обрати учасника..."
            autoComplete="off"
            className="flex-1 bg-transparent text-sm text-foreground placeholder:text-placeholder focus:outline-none"
          />
        )}
        {selectedMember && (
          <button
            type="button"
            onClick={handleClear}
            className="p-0.5 rounded-full hover:bg-foreground/10 transition-colors"
          >
            <XMarkIcon className="h-4 w-4 stroke-foreground/80" />
          </button>
        )}
      </div>
      <ul
        className={twMerge(
          "fixed w-[calc(100%-24px)] z-50 max-h-48 overflow-y-auto rounded-lg bg-surface/80 backdrop-blur-lg shadow-lg transition-all duration-200 ease-in-out origin-bottom bottom-[90px]",
          showDropdown
            ? "opacity-100 translate-y-0 scale-y-100"
            : "opacity-0 translate-y-1 scale-y-95 pointer-events-none",
        )}
        style={{
          scrollbarWidth: "thin",
          scrollbarColor: "var(--accent-green) transparent",
        }}
      >
        {filtered.map((member, index) => (
          <li
            key={member.id}
            onMouseDown={() => handleSelect(member)}
            className={twMerge(
              "px-3 py-1.5 text-sm cursor-pointer transition-colors",
              index === activeIndex
                ? "bg-accent-green text-white"
                : "text-foreground hover:bg-accent-green/15",
            )}
          >
            {member.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LineageMemberSearch;
