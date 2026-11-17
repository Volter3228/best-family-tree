import MemberMiniAvatar from "@/components/sidebar/info/MemberMiniAvatar";
import { Member } from "@/models";
import { formatMemberRecruitmentSeason } from "@/utils";
import SearchSuggestionRow from "./SearchSuggestionRow";

interface Props {
  member: Member;
  isActive: boolean;
  onClick: () => void;
}

const SearchSuggestionItem = ({ member, isActive, onClick }: Props) => {
  return (
    <SearchSuggestionRow
      isActive={isActive}
      onClick={onClick}
      title={member.name}
      subtitle={formatMemberRecruitmentSeason(member)}
      avatar={
        <MemberMiniAvatar
          member={member}
          size={32}
          className={isActive ? "bg-white text-accent-blue" : undefined}
        />
      }
    />
  );
};

export default SearchSuggestionItem;
