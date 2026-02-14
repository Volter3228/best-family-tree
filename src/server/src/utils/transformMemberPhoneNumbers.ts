import {
  Member as PrismaMember,
  PhoneNumber,
} from "../db/prisma/generated/client.js";

export type MemberWithPhoneNumberRecords = PrismaMember & {
  phoneNumbers: PhoneNumber[];
  mentees?: MemberWithPhoneNumberRecords[];
  mentor?: MemberWithPhoneNumberRecords | null;
};

export type MemberWithPhoneNumberStrings = PrismaMember & {
  phoneNumbers: string[];
  mentees: MemberWithPhoneNumberStrings[];
  mentor?: MemberWithPhoneNumberStrings;
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
});

export default transformMemberPhoneNumbers;
