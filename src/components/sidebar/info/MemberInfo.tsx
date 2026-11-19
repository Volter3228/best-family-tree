import { twMerge } from "tailwind-merge";
import { LionIcon } from "@/components/icons";
import { getMemberAvatar, getStatusLabel } from "@/utils";
import { Member } from "@/models";
import { useLocale } from "@/i18n/useT";
import { useDisplayName } from "@/utils/displayName";
import PhotoOpenButton, {
  useIsPhotoOpen,
} from "@/components/photoViewer/PhotoOpenButton";
import {
  getPhotoUrlForViewer,
  getPhotoUrlForViewerPreview,
} from "@/libs/cloudinary";
import { isReducedView, useSessionStore } from "@/store/sessionStore";
import { useMemberById, useMentees } from "@/hooks";
import type { AccentColor, MemberPosition } from "@/types";
import { COLOR_CLASSES } from "@/constants/colorClasses";
import { STATUS_ICONS } from "@/constants/memberStatusIcons";
import MemberAvatarImage from "./MemberAvatarImage";
import MemberActivityPill from "./MemberActivityPill";
import MemberInfoActions from "./MemberInfoActions";
import MemberInfoCover from "./MemberInfoCover";
import MemberInfoFacts from "./MemberInfoFacts";
import NameBadge from "./NameBadge";
import MemberPositions from "./MemberPositions";
import MenteesGrid from "./MenteesGrid";

interface Props {
  member: Member;
  onMemberNameClick?: (memberId: string) => void;
  filteredMemberIds?: Set<string> | null;
  // Team view: children are shown as plain cards, badges jump to their team.
  menteesClickable?: boolean;
  onPositionClick?: (position: MemberPosition) => void;
  canClickPosition?: (position: MemberPosition) => boolean;
  color?: AccentColor;
}

const MemberInfo = ({
  member,
  member: { name, photo, status, activityState },
  onMemberNameClick,
  filteredMemberIds,
  menteesClickable = true,
  onPositionClick,
  canClickPosition,
  color = "blue",
}: Props) => {
  const dn = useDisplayName();
  const locale = useLocale();
  const reduced = useSessionStore((s) => isReducedView(s.session));
  const mentor = useMemberById(member.mentorId);
  const mentees = useMentees(member.id);
  const isVisible = (id: string) =>
    !filteredMemberIds || filteredMemberIds.has(id);
  const avatar = getMemberAvatar(member);
  const colorClasses = COLOR_CLASSES[color];
  const StatusIcon = STATUS_ICONS[status];
  const photoOpen = useIsPhotoOpen(member.id);

  return (
    <div className="flex flex-col transition-opacity duration-300">
      <MemberInfoCover member={member} color={color} />
      <div className="-mt-16 flex flex-col items-center gap-3">
        <div
          className={twMerge(
            "member-info-avatar relative h-44 w-44 lg:w-52 lg:h-52 p-1",
            "drop-shadow-2xl/30 rounded-full",
            colorClasses.accentBg,
            colorClasses.dropShadow,
            // `invisible`, not opacity: the sidebar switch animation leaves
            // an inline opacity on this element.
            photoOpen && "invisible",
          )}
        >
          <div className="relative h-full w-full rounded-full ring-4 ring-surface">
            {photo ? (
              <PhotoOpenButton
                id={member.id}
                src={getPhotoUrlForViewer(photo)}
                previewSrc={getPhotoUrlForViewerPreview(photo)}
                alt={dn(name)}
                roundedClassName="rounded-full"
                className="block h-full w-full"
              >
                <MemberAvatarImage src={avatar || photo} />
              </PhotoOpenButton>
            ) : (
              <div
                className={twMerge(
                  "flex h-full w-full items-center justify-center rounded-full p-8 shadow-inner",
                  colorClasses.accentBg,
                )}
              >
                <LionIcon className="fill-surface" />
              </div>
            )}
          </div>
        </div>
        <div className="member-info-header flex flex-col items-center gap-2 text-center">
          <h5
            className={twMerge(
              "cursor-pointer text-2xl font-bold transition-colors duration-200",
              colorClasses.hoverTextAccent,
            )}
            onClick={() => onMemberNameClick?.(member.id)}
          >
            {dn(name)}
            <NameBadge member={member} />
          </h5>
          <div className="flex flex-wrap items-center justify-center gap-2">
            <span
              className={twMerge(
                "inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-sm font-medium text-white",
                colorClasses.accentBg,
              )}
            >
              <StatusIcon className="h-4 w-4" />
              {getStatusLabel(status, locale)}
            </span>
            <MemberActivityPill state={activityState} color={color} />
          </div>
        </div>
      </div>
      <div className="mt-5 flex flex-col gap-6">
        <MemberInfoActions member={member} hideSocial={reduced} color={color} />
        <MemberInfoFacts
          member={member}
          mentor={mentor}
          mentorClickable={!!mentor && isVisible(mentor.id)}
          onMemberNameClick={onMemberNameClick}
          color={color}
        />
        {member.positions.length > 0 && (
          <MemberPositions
            positions={member.positions}
            featuredPositionId={member.featuredPositionId}
            onPositionClick={onPositionClick}
            canClickPosition={canClickPosition}
            color={color}
          />
        )}
        {mentees.length > 0 && (
          <MenteesGrid
            mentees={mentees}
            clickable={menteesClickable}
            onMemberNameClick={onMemberNameClick}
            isVisible={isVisible}
            color={color}
          />
        )}
      </div>
    </div>
  );
};

export default MemberInfo;
