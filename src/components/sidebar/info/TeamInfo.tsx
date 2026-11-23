import {
  CalendarDateRangeIcon,
  InformationCircleIcon,
} from "@heroicons/react/16/solid";
import { twMerge } from "tailwind-merge";
import { COLOR_CLASSES } from "@/constants/colorClasses";
import { formatYearRange, type TeamRosterEntry } from "@/utils";
import { ActivityState, type AccentColor, type Team } from "@/types";
import { useT } from "@/i18n/useT";
import InfoSection from "./InfoSection";
import MemberActivityPill from "./MemberActivityPill";
import MemberFactTile from "./MemberFactTile";
import TeamLogo from "./TeamLogo";
import TeamRosterRow from "./TeamRosterRow";

interface Props {
  team: Team;
  roster: TeamRosterEntry[];
  canClickMember: (memberId: string) => boolean;
  onMemberClick: (memberId: string) => void;
  // Fits the team in view, like clicking its badge or square.
  onTitleClick?: () => void;
  color?: AccentColor;
}

// Sidebar view of one team, styled like the member card: a cover under the
// floating header, the photo, name and pills, fact tiles, then the roster.
const TeamInfo = ({
  team,
  roster,
  canClickMember,
  onMemberClick,
  onTitleClick,
  color = "blue",
}: Props) => {
  const t = useT().teamInfo;
  const colorClasses = COLOR_CLASSES[color];
  const years = formatYearRange({
    start: team.startYear,
    end: team.endYear,
    ongoing: team.isOngoing,
  });

  return (
    <div className="flex flex-col transition-opacity duration-300">
      {/* Room for the floating header and its tint (painted by the Sidebar). */}
      <div
        aria-hidden
        className="-mx-4 md:-mx-6 h-[calc(var(--sidebar-header-height,3.5rem)+4.5rem)] shrink-0"
      />
      <div className="-mt-16 flex flex-col items-center gap-3">
        <TeamLogo
          photoUrl={team.photoUrl}
          iconUrl={team.teamType?.iconUrl}
          typeColor={team.teamType?.color}
          typeName={team.teamType ? team.teamType.name : undefined}
          name={team.name}
          color={color}
        />
        <div className="member-info-header flex flex-col items-center gap-2 text-center">
          <h5
            className={twMerge(
              "text-2xl font-bold transition-colors duration-200",
              onTitleClick &&
                twMerge("cursor-pointer", colorClasses.hoverTextAccent),
            )}
            onClick={onTitleClick}
          >
            {team.name}
          </h5>
          <div className="flex flex-wrap items-center justify-center gap-2">
            {!!years && (
              <span
                className={twMerge(
                  "inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-sm font-medium text-white",
                  colorClasses.accentBg,
                )}
              >
                <CalendarDateRangeIcon className="h-4 w-4" />
                {years}
              </span>
            )}
            {!!team.isOngoing && (
              <MemberActivityPill state={ActivityState.Active} color={color} />
            )}
          </div>
        </div>
      </div>
      <div className="mt-5 flex flex-col gap-6">
        {!!team.description && (
          <div className="grid grid-cols-1 gap-3">
            <MemberFactTile
              label={t.about}
              icon={InformationCircleIcon}
              color={color}
            >
              <span className="whitespace-pre-line font-normal">
                {team.description}
              </span>
            </MemberFactTile>
          </div>
        )}
        {roster.length > 0 && (
          <InfoSection
            title={t.members}
            color={color}
            visibleCount={5}
            toggle="bar"
            expandLabel={t.showAll}
            listClassName="flex flex-col gap-0.5"
            items={roster.map((entry) => (
              <TeamRosterRow
                key={entry.member.id}
                entry={entry}
                isClickable={canClickMember(entry.member.id)}
                onClick={() => onMemberClick(entry.member.id)}
                color={color}
              />
            ))}
          />
        )}
      </div>
    </div>
  );
};

export default TeamInfo;
