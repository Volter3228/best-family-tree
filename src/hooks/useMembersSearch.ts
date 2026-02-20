import { useState, useCallback, useMemo, useEffect } from "react";
import { Member } from "@/models";
import { normalize } from "@/utils";

const MAX_SUGGESTIONS = 8;

const matchesMember = (member: Member, query: string): boolean => {
  const normalizedQuery = normalize(query);
  if (!normalizedQuery) return false;

  const searchTokens = [
    ...normalize(member.name).split(/\s+/),
    normalize(member.status),
  ];
  const queryParts = normalizedQuery.split(/\s+/);

  return queryParts.every((qp) =>
    searchTokens.some((token) => token.includes(qp)),
  );
};

interface Props {
  members: Member[];
  onSelect: (memberId: string) => void;
}

export const useMembersSearch = ({ members, onSelect }: Props) => {
  const [query, setQuery] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);

  const filteredMembers = useMemo(() => {
    if (!query.trim()) return [];
    return members
      .filter((m) => matchesMember(m, query))
      .slice(0, MAX_SUGGESTIONS);
  }, [members, query]);

  useEffect(() => {
    setActiveIndex(0);
  }, [filteredMembers.length]);

  const handleSelect = useCallback(
    (member: Member) => {
      onSelect(member.id);
      setQuery("");
      setActiveIndex(0);
    },
    [onSelect],
  );

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      switch (e.key) {
        case "ArrowDown":
          e.preventDefault();
          if (filteredMembers.length > 0) {
            setActiveIndex((prev) => (prev + 1) % filteredMembers.length);
          }
          break;
        case "ArrowUp":
          e.preventDefault();
          if (filteredMembers.length > 0) {
            setActiveIndex((prev) =>
              prev === 0 ? filteredMembers.length - 1 : prev - 1,
            );
          }
          break;
        case "Enter":
          e.preventDefault();
          if (filteredMembers.length > 0) {
            const member = filteredMembers[activeIndex] || filteredMembers[0];
            handleSelect(member);
          }
          break;
        case "Escape":
          e.preventDefault();
          setQuery("");
          break;
        default:
          break;
      }
    },
    [filteredMembers, activeIndex, handleSelect],
  );

  return {
    query,
    setQuery,
    filteredMembers,
    activeIndex,
    handleSelect,
    handleKeyDown,
  };
};
