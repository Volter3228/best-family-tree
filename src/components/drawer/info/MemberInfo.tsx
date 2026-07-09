import Image from "next/image";
import { format } from "date-fns";
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
import MemberInfoRow from "./MemberInfoRow";
import MemberInfoSocial from "./MemberInfoSocial";
import MemberInfoActionIcon from "./MemberInfoActionIcon";
import MentorMenteesDropdown from "./MentorMenteesDropdown";

interface Props {
  member: Member;
  onMemberNameClick?: (memberId: string) => void;
  filteredMemberIds?: Set<string> | null;
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
}: Props) => {
  const isVisible = (id: string) =>
    !filteredMemberIds || filteredMemberIds.has(id);
  const avatar = getMemberAvatar(member);

  return (
    <div className="flex flex-col items-center gap-3 transition-opacity duration-300">
      <div className="relative h-48 w-48">
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
            className="
              flex items-center justify-center w-full h-full rounded-full
              bg-avatar-gradient text-accent text-center p-8 shadow-inner
            "
          >
            <LionIcon className="fill-white" />
          </div>
        )}
      </div>
      <div className="text-center mb-3">
        <h5
          className="text-2xl text- cursor-pointer hover:text-accent transition-colors duration-200"
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
          />
          {!!mentor && (
            <MemberInfoRow
              title="Ментор"
              value={
                isVisible(mentor.id) ? (
                  <span
                    className="cursor-pointer hover:text-accent transition-colors duration-200"
                    onClick={() => onMemberNameClick?.(mentor.id)}
                  >
                    {mentor.name}
                  </span>
                ) : (
                  <span>{mentor.name}</span>
                )
              }
              icon={StarIcon}
            />
          )}
          {!!email && (
            <MemberInfoRow
              title="Email"
              value={email}
              icon={EnvelopeIcon}
              showCopyIcon
            />
          )}
          {!!phoneNumbers.length && (
            <MemberInfoRow
              title="Номер"
              value={phoneNumbers[0]}
              icon={PhoneIcon}
              actionIcon={
                <MemberInfoActionIcon
                  href={`tel: ${phoneNumbers[0]}`}
                  icon={PhoneArrowUpRightIcon}
                  hint="Зателефонувати"
                />
              }
              showCopyIcon
            />
          )}
          <MemberInfoRow
            title="Член з"
            value={format(joinedAt, "dd.LL.yyyy")}
            icon={UserPlusIcon}
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
                />
              }
            />
          )}
          {member.mentees?.length > 0 && (
            <MentorMenteesDropdown
              mentees={member.mentees}
              onMemberNameClick={onMemberNameClick}
              isVisible={isVisible}
            />
          )}
          <MemberInfoSocial member={member} />
        </div>
      </div>
    </div>
  );
};

export default MemberInfo;
