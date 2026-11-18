import MemberMiniAvatar from "@/components/sidebar/info/MemberMiniAvatar";
import { Member } from "@/models";
import { useLocale } from "@/i18n/useT";
import { displayName } from "@/utils/displayName";
import { formatMemberRecruitmentSeason } from "@/utils";
import SearchSuggestionRow, {
  type SuggestionRowProps,
} from "./SearchSuggestionRow";

interface Props extends SuggestionRowProps {
  member: Member;
}

const SearchSuggestionItem = ({ member, ...rowProps }: Props) => {
  const locale = useLocale();
  return (
    <SearchSuggestionRow
      {...rowProps}
      title={displayName(member.name, locale)}
      subtitle={formatMemberRecruitmentSeason(member, false, locale)}
      avatar={<MemberMiniAvatar member={member} size={32} />}
    />
  );
};

export default SearchSuggestionItem;
