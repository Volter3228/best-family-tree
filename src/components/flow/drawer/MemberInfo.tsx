import React from "react";
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
  UserGroupIcon,
} from "@heroicons/react/16/solid";
import Member from "@/models/Member";
import { capilizeOnlyFirstLetter } from "@/utils/strings";
import MemberInfoRow from "./MemberInfoRow";
import MemberInfoSocial from "./MemberInfoSocial";

interface Props {
  member: Member;
}

const MemberInfo = ({
  member,
  member: {
    name,
    avatar,
    photo,
    birthday,
    joinedAt,
    email,
    phoneNumber,
    status,
    mentor,
  },
}: Props) => {
  return (
    <div className="flex flex-col items-center gap-3 transition-opacity duration-300">
      <div className="relative h-48 w-48">
        {photo ? (
          <Image
            src={avatar || photo}
            alt="Avatar"
            className="rounded-full shadow-lg"
            sizes="100%"
            quality={85}
            fill
          />
        ) : (
          <div
            className="
              flex items-center justify-center w-full h-full rounded-full
              bg-primary text-accent text-center p-8 shadow-inner
            "
          >
            <LionIcon className="fill-white" />
          </div>
        )}
      </div>
      <div className="text-center mb-3">
        <h5 className="text-2xl">{name}</h5>
        <h6 className="text-lg font-light">{member.getRecruitmentSeason()}</h6>
      </div>
      <div className="flex flex-row w-full justify-center">
        <div className="flex flex-col gap-4 max-w-full">
          <MemberInfoRow
            title="Статус"
            value={capilizeOnlyFirstLetter(status)}
            icon={AcademicCapIcon}
          />
          {!!mentor && (
            <MemberInfoRow title="Ментор" value={mentor.name} icon={StarIcon} />
          )}
          {!!email && (
            <MemberInfoRow
              title="Email"
              value={email}
              icon={EnvelopeIcon}
              showCopyIcon
            />
          )}
          {!!phoneNumber && (
            <MemberInfoRow
              title="Номер"
              value={phoneNumber}
              icon={PhoneIcon}
              showCopyIcon
            />
          )}
          {!!joinedAt && (
            <MemberInfoRow
              title="Мембер з"
              value={format(joinedAt, "dd.LL.yyyy")}
              icon={UserPlusIcon}
            />
          )}
          <MemberInfoRow
            title="ДН"
            value={format(birthday, "dd.LL.yyyy")}
            icon={GiftIcon}
          />
          {member.isMentor() && (
            <MemberInfoRow
              title="Діти"
              value={`${member.getMenteesNamesString()} (${
                member.mentees.length
              })`}
              icon={UserGroupIcon}
            />
          )}
          <MemberInfoSocial member={member} />
        </div>
      </div>
    </div>
  );
};

export default MemberInfo;
