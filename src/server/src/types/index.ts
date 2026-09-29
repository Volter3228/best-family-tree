import {
  Member as PrismaMember,
  Status as MemberStatus,
} from "../db/prisma/generated/client.js";
import type { PositionWithRelations } from "../utils/transformMemberPhoneNumbers.js";

export enum MENTOR_STATUSES {
  ALUMNI = "ALUMNI",
  FULL = "FULL",
}

export type MemberPositionWithRelations = PositionWithRelations;

type Member = PrismaMember & {
  phoneNumbers: string[];
  mentees: Member[];
  mentor?: Member;
  positions: MemberPositionWithRelations[];
};

export { type Member, MemberStatus };
export * from "./member.js";
export * from "./tree.js";
