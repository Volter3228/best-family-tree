import { useFilters } from "@/hooks";
import type { TeamFrame } from "@/types";
import MemberSearch from "./MemberSearch";
import TeamSearch from "./TeamSearch";

interface Props {
  isOpen: boolean;
  isClosing: boolean;
  onClose: () => void;
  onSearch: (memberId: string) => void;
  onTeamSearch: (frame: TeamFrame) => void;
}

// Searches members, or teams while the team layout is selected.
const SearchBar = ({ onSearch, onTeamSearch, ...panelProps }: Props) => {
  const { appliedFilters } = useFilters();

  return appliedFilters.treeMode === "team" ? (
    <TeamSearch {...panelProps} onSearch={onTeamSearch} />
  ) : (
    <MemberSearch {...panelProps} onSearch={onSearch} />
  );
};

export default SearchBar;
