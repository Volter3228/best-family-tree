import MemberMiniAvatar from "@/components/sidebar/info/MemberMiniAvatar";
import { Member } from "@/models";
import { formatMemberRecruitmentSeason } from "@/utils";
import SearchSuggestionRow, { type SuggestionRowProps } from "./SearchSuggestionRow";

interface Props extends SuggestionRowProps {
  member: Member;
}

const SearchSuggestionItem = ({ member, ...rowProps }: Props) => (
  <SearchSuggestionRow
    {...rowProps}
    title={member.name}
    subtitle={formatMemberRecruitmentSeason(member)}
    avatar={<MemberMiniAvatar member={member} size={32} />}
  />
);

export default SearchSuggestionItem;
