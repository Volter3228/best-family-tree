import {
  Member as PrismaMember,
  PhoneNumber,
  MemberPosition,
  Role,
  Team,
  TeamType,
} from "../db/prisma/generated/client.js";

export type PositionWithRelations = MemberPosition & {
  role: Role;
  team?: (Team & { teamType?: TeamType | null }) | null;
};

export type MemberWithPhoneNumberRecords = PrismaMember & {
  phoneNumbers: PhoneNumber[];
  positions?: PositionWithRelations[];
};

export type NameBadge = {
  // A team badge has a teamId; a default badge has an icon instead.
  teamId: string | null;
  icon: "LION" | "BEST" | null;
  name: string;
  iconUrl: string | null;
  color: string | null;
};

export type MemberWithPhoneNumberStrings = PrismaMember & {
  phoneNumbers: string[];
  positions?: PositionWithRelations[];
  nameBadge: NameBadge | null;
};

// The badge only shows while the member still holds a position in the team.
const buildNameBadge = (
  member: MemberWithPhoneNumberRecords,
): NameBadge | null => {
  if (member.nameBadgeIcon) {
    return {
      teamId: null,
      icon: member.nameBadgeIcon,
      name: member.nameBadgeIcon === "LION" ? "Lion" : "BEST",
      iconUrl: null,
      color: null,
    };
  }
  if (!member.nameBadgeTeamId) return null;
  const team = member.positions?.find(
    (p) => p.teamId === member.nameBadgeTeamId,
  )?.team;
  const iconUrl = team?.teamType?.iconUrl ?? null;
  if (!team || !iconUrl) return null;
  return {
    teamId: team.id,
    icon: null,
    name: team.name,
    iconUrl,
    color: team.teamType?.color ?? null,
  };
};

const transformMemberPhoneNumbers = (
  member: MemberWithPhoneNumberRecords,
): MemberWithPhoneNumberStrings => ({
  ...member,
  phoneNumbers: member.phoneNumbers.map(({ phoneNumber }) => phoneNumber),
  positions: member.positions ?? [],
  nameBadge: buildNameBadge(member),
});

export default transformMemberPhoneNumbers;
