import { useMemo } from "react";
import { twMerge } from "tailwind-merge";
import { LionIcon } from "@/components/icons";
import { Member } from "@/models";
import { getMemberAvatar } from "@/utils";
import { capitalizeOnlyFirstLetter } from "@/utils";

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
    <li
      role="option"
      aria-selected={isActive}
      onClick={onClick}
      className={twMerge(
        "flex items-center gap-3 px-3 py-2 cursor-pointer transition-colors duration-150",
        isActive ? "bg-accent text-white" : "hover:bg-accent/20",
      )}
    >
      <div className="relative h-8 w-8 shrink-0 rounded-full overflow-hidden">
        {avatarUrl ? (
          <img
            src={avatarUrl}
            alt={member.name}
            className="h-full w-full object-cover"
          />
        ) : (
          <div className="flex items-center justify-center w-full h-full bg-avatar-gradient p-1">
            <LionIcon className="fill-white" />
          </div>
        )}
      </div>
      <div className="flex flex-col min-w-0">
        <span
          className={twMerge(
            "text-sm font-medium truncate",
            isActive ? "text-white" : "text-white",
          )}
        >
          {member.name}
        </span>
        <span
          className={twMerge(
            "text-xs truncate",
            isActive ? "text-white/70" : "text-fuchsia-300/70",
          )}
        >
          {capitalizeOnlyFirstLetter(member.status)}
        </span>
      </div>
    </li>
  );
};

export default SearchSuggestionItem;
