import { useMemo } from "react";
import { useMembersTree, useSearchSuggestions } from "@/hooks";
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
  const { teamFrames } = useMembersTree();

  const { query, setQuery, suggestions, activeIndex, handleSelect, handleKeyDown } =
    useSearchSuggestions({
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
      onQueryChange={setQuery}
      onKeyDown={handleKeyDown}
      onClose={onClose}
    >
      {displayed.map((frame, index) => (
        <TeamSuggestionItem
          key={frame.teamId}
          frame={frame}
          subtitle={getSubtitle(frame)}
          isActive={suggestions.length - 1 - index === activeIndex}
          onClick={() => handleSelect(frame)}
        />
      ))}
    </SearchPanel>
  );
};

export default TeamSearch;
