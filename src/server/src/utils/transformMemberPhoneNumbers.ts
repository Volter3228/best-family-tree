import {
  Member as PrismaMember,
  PhoneNumber,
  MemberPosition,
  Role,
  Team,
  EventType,
} from "../db/prisma/generated/client.js";

export type PositionWithRelations = MemberPosition & {
  role: Role;
  team?: (Team & { eventType?: EventType | null }) | null;
};

export type MemberWithPhoneNumberRecords = PrismaMember & {
  phoneNumbers: PhoneNumber[];
  mentees?: MemberWithPhoneNumberRecords[];
  mentor?: MemberWithPhoneNumberRecords | null;
  positions?: PositionWithRelations[];
};

export type MemberWithPhoneNumberStrings = PrismaMember & {
  phoneNumbers: string[];
  mentees: MemberWithPhoneNumberStrings[];
  mentor?: MemberWithPhoneNumberStrings;
  positions?: PositionWithRelations[];
};

const transformMemberPhoneNumbers = (
  member: MemberWithPhoneNumberRecords,
): MemberWithPhoneNumberStrings => ({
  ...member,
  phoneNumbers: member.phoneNumbers.map(({ phoneNumber }) => phoneNumber),
  mentees: (member.mentees ?? []).map(transformMemberPhoneNumbers),
  mentor: member.mentor
    ? transformMemberPhoneNumbers(member.mentor)
    : undefined,
  positions: member.positions ?? [],
});

export default transformMemberPhoneNumbers;
