import { useMemo } from "react";
import { Member } from "@/models";
import { isDetachedAlumnus } from "@/utils/membersTree/layout";
import { useMembersStore } from "@/store/membersStore";
import { useMembersList, useSearchSuggestions } from "@/hooks";
import { useFiltersStore } from "@/store/filtersStore";
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
  const flatMembersList = useMembersList();
  const childrenOf = useMembersStore((s) => s.childrenOf);
  const filteredMemberIds = useFiltersStore((s) => s.filteredMemberIds);

  // Members that are currently displayed in the tree
  const items = useMemo(
    () =>
      flatMembersList.filter(
        (m) =>
          !isDetachedAlumnus(m, childrenOf) &&
          (!filteredMemberIds || filteredMemberIds.has(m.id)),
      ),
    [flatMembersList, childrenOf, filteredMemberIds],
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
