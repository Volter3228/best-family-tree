import { useMemo } from "react";
import { Member } from "@/models";
import { isDetachedAlumnus } from "@/utils/membersTree/layout";
import { useMembers, useSearchSuggestions, useFilters } from "@/hooks";
import SearchPanel from "./SearchPanel";
import SearchSuggestionItem from "./SearchSuggestionItem";

interface Props {
  isOpen: boolean;
  isClosing: boolean;
  onClose: () => void;
  onSearch: (memberId: string) => void;
}

const getSearchable = (member: Member) => [member.name, member.status];
const compare = (a: Member, b: Member) => a.name.localeCompare(b.name, "uk");

const MemberSearch = ({ isOpen, isClosing, onClose, onSearch }: Props) => {
  const { flatMembersList } = useMembers();
  const { filteredMemberIds } = useFilters();

  // Members that are currently displayed in the tree
  const items = useMemo(
    () =>
      flatMembersList.filter(
        (m) =>
          !isDetachedAlumnus(m) &&
          (!filteredMemberIds || filteredMemberIds.has(m.id)),
      ),
    [flatMembersList, filteredMemberIds],
  );

  const { query, setQuery, suggestions, activeIndex, handleSelect, handleKeyDown } =
    useSearchSuggestions({
      items,
      getSearchable,
      compare,
      onSelect: (member) => {
        onSearch(member.id);
        onClose();
      },
    });

  // First match should sit closest to the input at the bottom.
  const displayed = useMemo(() => [...suggestions].reverse(), [suggestions]);

  return (
    <SearchPanel
      isOpen={isOpen}
      isClosing={isClosing}
      query={query}
      placeholder="Пошук учасника..."
      resultCount={suggestions.length}
      onQueryChange={setQuery}
      onKeyDown={handleKeyDown}
      onClose={onClose}
    >
      {displayed.map((member, index) => (
        <SearchSuggestionItem
          key={member.id}
          member={member}
          isActive={suggestions.length - 1 - index === activeIndex}
          onClick={() => handleSelect(member)}
        />
      ))}
    </SearchPanel>
  );
};

export default MemberSearch;
