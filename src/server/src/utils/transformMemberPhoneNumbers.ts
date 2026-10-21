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

export type MemberWithPhoneNumberStrings = PrismaMember & {
  phoneNumbers: string[];
  positions?: PositionWithRelations[];
};

const transformMemberPhoneNumbers = (
  member: MemberWithPhoneNumberRecords,
): MemberWithPhoneNumberStrings => ({
  ...member,
  phoneNumbers: member.phoneNumbers.map(({ phoneNumber }) => phoneNumber),
  positions: member.positions ?? [],
});

export default transformMemberPhoneNumbers;
