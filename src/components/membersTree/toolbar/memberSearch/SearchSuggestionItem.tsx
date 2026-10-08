import { useMemo } from "react";
import { twMerge } from "tailwind-merge";
import { LionIcon } from "@/components/icons";
import { Member } from "@/models";
import { formatMemberRecruitmentSeason, getMemberAvatar } from "@/utils";
import SearchSuggestionRow from "./SearchSuggestionRow";

interface Props {
  member: Member;
  isActive: boolean;
  onClick: () => void;
}

const SearchSuggestionItem = ({ member, isActive, onClick }: Props) => {
  const avatarUrl = useMemo(
    () => getMemberAvatar(member, { width: 32, height: 32 }),
    [member.photo],
  );

  return (
    <SearchSuggestionRow
      isActive={isActive}
      onClick={onClick}
      title={member.name}
      subtitle={formatMemberRecruitmentSeason(member)}
      avatar={
        avatarUrl ? (
          <img
            src={avatarUrl}
            alt={member.name}
            className="h-full w-full object-cover"
          />
        ) : (
          <div
            className={twMerge(
              "flex items-center justify-center w-full h-full p-1.5 transition-colors duration-150",
              isActive ? "bg-white" : "bg-accent-blue",
            )}
          >
            <LionIcon
              className={twMerge(
                "transition-colors duration-150",
                isActive ? "fill-accent-blue" : "fill-white",
              )}
            />
          </div>
        )
      }
    />
  );
};

export default SearchSuggestionItem;
