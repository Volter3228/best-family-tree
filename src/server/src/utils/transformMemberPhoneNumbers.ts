import { PhoneNumber } from "@prisma/client";

type Input = {
  phoneNumbers: PhoneNumber[];
  mentees?: any[];
  mentor?: any;
};

const transformMemberPhoneNumbers = (member: Input): any => ({
  ...member,
  // Transform to array of phone number strings
  phoneNumbers: member.phoneNumbers.map(({ phoneNumber }) => phoneNumber) || [],
  mentees: member.mentees?.map(transformMemberPhoneNumbers) || undefined,
  mentor: member.mentor
    ? transformMemberPhoneNumbers(member.mentor)
    : undefined,
});

export default transformMemberPhoneNumbers;
