import {
  CalendarDateRangeIcon,
  StarIcon,
  UserGroupIcon,
} from "@heroicons/react/16/solid";
import { twMerge } from "tailwind-merge";
import { COLOR_CLASSES } from "@/constants/colorClasses";
import { formatYearRange, getMemberAvatar, type TeamRosterEntry } from "@/utils";
import type { AccentColor, Team } from "@/types";
import MemberInfoRow from "./MemberInfoRow";
import TeamLogo from "./TeamLogo";

interface Props {
  team: Team;
  roster: TeamRosterEntry[];
  canClickMember: (memberId: string) => boolean;
  onMemberClick: (memberId: string) => void;
  // Fits the team in view, like clicking its badge or square.
  onTitleClick?: () => void;
  color?: AccentColor;
}

const RosterRow = ({
  entry,
  isClickable,
  onClick,
  color,
}: {
  entry: TeamRosterEntry;
  isClickable: boolean;
  onClick: () => void;
  color: AccentColor;
}) => {
  const colorClasses = COLOR_CLASSES[color];
  const avatar = getMemberAvatar(entry.member, { width: 72, height: 72 });

  return (
    <button
      type="button"
      disabled={!isClickable}
      onClick={onClick}
      className={twMerge(
        "flex w-full items-center gap-3 rounded-xl p-1.5 text-left transition-colors duration-200",
        isClickable ? colorClasses.hoverSurfaceBg : "cursor-default",
      )}
    >
      {avatar ? (
        <img
          src={avatar}
          alt="team-avatar"
          className="h-9 w-9 shrink-0 rounded-full object-cover"
        />
      ) : (
        <span
          className={twMerge(
            "flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-sm font-semibold text-white",
            colorClasses.accentBg,
          )}
        >
          {entry.member.name.slice(0, 1)}
        </span>
      )}
      <span className="flex min-w-0 flex-1 flex-col">
        <span className="truncate font-medium">{entry.member.name}</span>
        <span className="truncate text-sm font-light text-foreground/70">
          {entry.roles}
        </span>
      </span>
      {entry.isLeader && (
        <StarIcon className={twMerge("h-4 w-4 shrink-0", colorClasses.text)} />
      )}
    </button>
  );
};

// Sidebar view of one team: logo, description, period, leaders and members.
const TeamInfo = ({
  team,
  roster,
  canClickMember,
  onMemberClick,
  onTitleClick,
  color = "blue",
}: Props) => {
  const colorClasses = COLOR_CLASSES[color];
  const years = formatYearRange({
    start: team.startYear,
    end: team.endYear,
    ongoing: team.isOngoing,
  });
  const logoUrl = team.iconUrl ?? team.teamType?.iconUrl;

  return (
    <div className="flex flex-col items-center gap-3">
      <TeamLogo
        url={logoUrl}
        name={team.name}
        color={color}
        className={twMerge(
          "min-w-48 max-w-64 min-h-48 max-h-64 drop-shadow-xl rounded-xl",
          !logoUrl && `${colorClasses.dropShadow} w-48 h-48`,
        )}
      />
      <div className="mb-3 text-center">
        <h5
          className={twMerge(
            "cursor-pointer text-2xl transition-colors duration-200",
            colorClasses.hoverTextAccent,
          )}
          onClick={onTitleClick}
        >
          {team.name}
        </h5>
      </div>
      <div className="flex max-w-full flex-col gap-4">
        {!!years && (
          <MemberInfoRow
            title="Період"
            value={years}
            icon={CalendarDateRangeIcon}
            color={color}
          />
        )}
        {roster.length > 0 && (
          <MemberInfoRow
            title="Учасників"
            value={roster.length}
            icon={UserGroupIcon}
            color={color}
          />
        )}
      </div>
      {!!team.description && (
        <p className="w-full whitespace-pre-line text-center font-light">
          {team.description}
        </p>
      )}
      {roster.length > 0 && (
        <div className="flex w-full flex-col gap-0.5 border-t border-foreground/10 pt-3">
          {roster.map((entry) => (
            <RosterRow
              key={entry.member.id}
              entry={entry}
              isClickable={canClickMember(entry.member.id)}
              onClick={() => onMemberClick(entry.member.id)}
              color={color}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default TeamInfo;
