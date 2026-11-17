import { useId, useMemo } from "react";
import { Member } from "@/models";
import { matchesQuery, useMembersList, useSearchSuggestions } from "@/hooks";
import { formatMemberRecruitmentSeason } from "@/utils";
import { useFiltersStore } from "@/store/filtersStore";
import SearchPanel from "./SearchPanel";
import SearchSuggestionItem from "./SearchSuggestionItem";

interface Props {
  isOpen: boolean;
  isClosing: boolean;
  onClose: () => void;
  onSearch: (memberId: string) => void;
}

const getSearchable = (member: Member) => [
  member.name,
  formatMemberRecruitmentSeason(member),
];
const compare = (a: Member, b: Member) => a.name.localeCompare(b.name, "uk");

const MemberSearch = ({ isOpen, isClosing, onClose, onSearch }: Props) => {
  const listId = useId();
  const flatMembersList = useMembersList();
  const filteredMemberIds = useFiltersStore((s) => s.filteredMemberIds);

  // Members that are currently displayed in the tree
  const items = useMemo(
    () =>
      flatMembersList.filter(
        (m) => !filteredMemberIds || filteredMemberIds.has(m.id),
      ),
    [flatMembersList, filteredMemberIds],
  );

  const {
    query,
    setQuery,
    suggestions,
    activeIndex,
    setActiveIndex,
    handleSelect,
    handleKeyDown,
  } = useSearchSuggestions({
    items,
    getSearchable,
    compare,
    onSelect: (member) => {
      onSearch(member.id);
      onClose();
    },
  });

  // Matches the filters currently keep out of the tree.
  const hiddenCount = useMemo(() => {
    if (!filteredMemberIds || !query.trim()) return 0;
    return flatMembersList.filter(
      (m) =>
        !filteredMemberIds.has(m.id) && matchesQuery(getSearchable(m), query),
    ).length;
  }, [flatMembersList, filteredMemberIds, query]);

  // First match should sit closest to the input at the bottom.
  const displayed = useMemo(() => [...suggestions].reverse(), [suggestions]);

  return (
    <SearchPanel
      isOpen={isOpen}
      isClosing={isClosing}
      query={query}
      placeholder="Пошук учасника..."
      resultCount={suggestions.length}
      listId={listId}
      activeIndex={activeIndex}
      hiddenCount={hiddenCount}
      onQueryChange={setQuery}
      onKeyDown={handleKeyDown}
      onClose={onClose}
    >
      {displayed.map((member, index) => {
        const i = suggestions.length - 1 - index;
        return (
          <SearchSuggestionItem
            key={member.id}
            id={`${listId}-${i}`}
            member={member}
            query={query}
            isActive={i === activeIndex}
            onHover={() => setActiveIndex(i)}
            onClick={() => handleSelect(member)}
          />
        );
      })}
    </SearchPanel>
  );
};

export default MemberSearch;
