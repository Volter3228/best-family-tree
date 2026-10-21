import prisma from "../../db/prisma/clientInstance.js";
import { transformMemberPhoneNumbers } from "../../utils/index.js";
import type { MemberWithPhoneNumberRecords } from "../../utils/index.js";

export type MemberTransaction = Parameters<
  Parameters<(typeof prisma)["$transaction"]>[0]
>[0];

export const MEMBER_INCLUDE = {
  phoneNumbers: true as const,
  positions: {
    include: {
      role: true,
      team: { include: { teamType: true } },
    },
  },
};

export const serializeMember = (member: MemberWithPhoneNumberRecords) =>
  transformMemberPhoneNumbers(member);
