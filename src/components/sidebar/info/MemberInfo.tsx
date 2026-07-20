import Image from "next/image";
import { format } from "date-fns";
import { twMerge } from "tailwind-merge";
import { LionIcon } from "@/components/icons";
import {
  EnvelopeIcon,
  PhoneIcon,
  AcademicCapIcon,
  GiftIcon,
  UserPlusIcon,
  StarIcon,
  PhoneArrowUpRightIcon,
  CalendarDateRangeIcon,
} from "@heroicons/react/16/solid";
import {
  capitalizeOnlyFirstLetter,
  generateGoogleCalendarLink,
  formatMemberRecruitmentSeason,
  getMemberAvatar,
} from "@/utils";
import { Member } from "@/models";
import type { AccentColor } from "@/types";
import { COLOR_CLASSES } from "@/constants/colorClasses";
import MemberInfoRow from "./MemberInfoRow";
import MemberInfoSocial from "./MemberInfoSocial";
import MemberInfoActionIcon from "./MemberInfoActionIcon";
import MentorMenteesDropdown from "./MentorMenteesDropdown";

interface Props {
  member: Member;
  onMemberNameClick?: (memberId: string) => void;
  filteredMemberIds?: Set<string> | null;
  color?: AccentColor;
}

const MemberInfo = ({
  member,
  member: {
    name,
    photo,
    birthday,
    joinedAt,
    email,
    phoneNumbers,
    status,
    mentor,
  },
  onMemberNameClick,
  filteredMemberIds,
  color = "blue",
}: Props) => {
  const isVisible = (id: string) =>
    !filteredMemberIds || filteredMemberIds.has(id);
  const avatar = getMemberAvatar(member);
  const colorClasses = COLOR_CLASSES[color];

  return (
    <div className="flex flex-col items-center gap-3 transition-opacity duration-300">
      <div
        className={`member-info-avatar relative h-48 w-48 ${colorClasses.dropShadow} drop-shadow-2xl/30`}
      >
        {photo ? (
          <Image
            src={avatar || photo}
            alt="Avatar"
            className="rounded-full shadow-lg"
            sizes="100%"
            quality={75}
            priority
            fill
          />
        ) : (
          <div
            className={twMerge(
              "flex items-center justify-center w-full h-full rounded-full text-center p-8 shadow-inner",
              colorClasses.accentBg,
            )}
          >
            <LionIcon className="fill-surface" />
          </div>
        )}
      </div>
      <div className="member-info-header text-center mb-3">
        <h5
          className={twMerge(
            "text-2xl cursor-pointer transition-colors duration-200",
            colorClasses.hoverTextAccent,
          )}
          onClick={() => onMemberNameClick?.(member.id)}
        >
          {name}
        </h5>
        <h6 className="text-lg font-light">
          {formatMemberRecruitmentSeason(member, true)}
        </h6>
      </div>
      <div className="flex flex-row w-full justify-center">
        <div className="flex flex-col gap-4 max-w-full">
          <MemberInfoRow
            title="Статус"
            value={capitalizeOnlyFirstLetter(status)}
            icon={AcademicCapIcon}
            color={color}
          />
          {!!mentor && (
            <MemberInfoRow
              title="Ментор"
              value={
                isVisible(mentor.id) ? (
                  <span
                    className={twMerge(
                      "cursor-pointer transition-colors duration-200",
                      colorClasses.hoverTextAccent,
                    )}
                    onClick={() => onMemberNameClick?.(mentor.id)}
                  >
                    {mentor.name}
                  </span>
                ) : (
                  <span>{mentor.name}</span>
                )
              }
              icon={StarIcon}
              color={color}
            />
          )}
          {!!email && (
            <MemberInfoRow
              title="Email"
              value={email}
              icon={EnvelopeIcon}
              showCopyIcon
              color={color}
            />
          )}
          {phoneNumbers.length > 0 && (
            <MemberInfoRow
              title="Номер"
              value={phoneNumbers[0]}
              icon={PhoneIcon}
              actionIcon={
                <MemberInfoActionIcon
                  href={`tel: ${phoneNumbers[0]}`}
                  icon={PhoneArrowUpRightIcon}
                  hint="Зателефонувати"
                  color={color}
                />
              }
              showCopyIcon
              color={color}
            />
          )}
          <MemberInfoRow
            title="Член з"
            value={format(joinedAt, "dd.LL.yyyy")}
            icon={UserPlusIcon}
            color={color}
          />
          {!!birthday && (
            <MemberInfoRow
              title="ДН"
              value={format(birthday, "dd.LL.yyyy")}
              icon={GiftIcon}
              actionIcon={
                <MemberInfoActionIcon
                  href={generateGoogleCalendarLink(member)}
                  icon={CalendarDateRangeIcon}
                  hint="Додати до календаря"
                  target="_blank"
                  rel="noopener noreferrer"
                  color={color}
                />
              }
              color={color}
            />
          )}
          {member.mentees?.length > 0 && (
            <MentorMenteesDropdown
              mentees={member.mentees}
              onMemberNameClick={onMemberNameClick}
              isVisible={isVisible}
              color={color}
            />
          )}
          <MemberInfoSocial member={member} color={color} />
        </div>
      </div>
    </div>
  );
};

export default MemberInfo;
