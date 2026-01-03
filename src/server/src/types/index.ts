import {
  Member as PrismaMember,
  Status as MemberStatus,
} from "../db/prisma/generated/client.js";

export enum MENTOR_STATUSES {
  ALUMNI = "ALUMNI",
  FULL = "FULL",
}

type Member = PrismaMember & {
  phoneNumbers: string[];
  mentees: Member[];
  mentor?: Member;
};

export { type Member, MemberStatus };
