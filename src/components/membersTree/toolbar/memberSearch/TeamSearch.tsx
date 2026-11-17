import { useId, useMemo } from "react";
import { useSearchSuggestions } from "@/hooks";
import { useTreeStore } from "@/store/treeStore";
import { PARTICIPANT_FORMS, formatCount } from "@/utils";
import type { TeamFrame } from "@/types";
import SearchPanel from "./SearchPanel";
import TeamSuggestionItem from "./TeamSuggestionItem";

interface Props {
  isOpen: boolean;
  isClosing: boolean;
  onClose: () => void;
  onSearch: (frame: TeamFrame) => void;
}

const getSearchable = (frame: TeamFrame) => [frame.name, frame.teamTypeName];

const compare = (a: TeamFrame, b: TeamFrame) =>
  a.name.localeCompare(b.name, "uk");

const getSubtitle = (frame: TeamFrame) =>
  formatCount(frame.nodeIds.length, PARTICIPANT_FORMS);

// Team view lists each member once per team, so searching by member is
// ambiguous; the search box finds team frames instead.
const TeamSearch = ({ isOpen, isClosing, onClose, onSearch }: Props) => {
  const listId = useId();
  const teamFrames = useTreeStore((s) => s.teamFrames);

  const {
    query,
    setQuery,
    suggestions,
    activeIndex,
    setActiveIndex,
    handleSelect,
    handleKeyDown,
  } = useSearchSuggestions({
    items: teamFrames,
    getSearchable,
    compare,
    onSelect: (frame) => {
      onSearch(frame);
      onClose();
    },
  });

  const displayed = useMemo(() => [...suggestions].reverse(), [suggestions]);

  return (
    <SearchPanel
      isOpen={isOpen}
      isClosing={isClosing}
      query={query}
      placeholder="Пошук команди..."
      resultCount={suggestions.length}
      listId={listId}
      activeIndex={activeIndex}
      onQueryChange={setQuery}
      onKeyDown={handleKeyDown}
      onClose={onClose}
    >
      {displayed.map((frame, index) => {
        const i = suggestions.length - 1 - index;
        return (
          <TeamSuggestionItem
            key={frame.teamId}
            id={`${listId}-${i}`}
            frame={frame}
            subtitle={getSubtitle(frame)}
            query={query}
            isActive={i === activeIndex}
            onHover={() => setActiveIndex(i)}
            onClick={() => handleSelect(frame)}
          />
        );
      })}
    </SearchPanel>
  );
};

export default TeamSearch;
