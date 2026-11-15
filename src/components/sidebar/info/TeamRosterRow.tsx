import { StarIcon } from "@heroicons/react/16/solid";
import { twMerge } from "tailwind-merge";
import { COLOR_CLASSES } from "@/constants/colorClasses";
import type { TeamRosterEntry } from "@/utils";
import type { AccentColor } from "@/types";
import MemberMiniAvatar from "./MemberMiniAvatar";

interface Props {
  entry: TeamRosterEntry;
  isClickable: boolean;
  onClick: () => void;
  color: AccentColor;
}

// One member of a team: avatar, name, their roles; a star after the name marks
// leaders (there can be several).
const TeamRosterRow = ({ entry, isClickable, onClick, color }: Props) => {
  const colorClasses = COLOR_CLASSES[color];

  return (
    <button
      type="button"
      disabled={!isClickable}
      onClick={onClick}
      className={twMerge(
        "flex w-full min-w-0 items-center gap-3 rounded-xl p-1.5 text-left transition-colors duration-200",
        isClickable ? twMerge("cursor-pointer", colorClasses.hoverSurfaceBg) : "cursor-default",
      )}
    >
      <MemberMiniAvatar member={entry.member} size={36} color={color} />
      <span className="flex min-w-0 flex-1 flex-col">
        <span className="flex min-w-0 items-center gap-1.5">
          <span className="truncate font-medium">{entry.member.name}</span>
          {entry.isLeader && (
            <StarIcon
              aria-label="Лідер команди"
              className={twMerge("h-3.5 w-3.5 shrink-0", colorClasses.text)}
            />
          )}
        </span>
        <span className="truncate text-sm text-foreground/60">{entry.roles}</span>
      </span>
    </button>
  );
};

export default TeamRosterRow;
