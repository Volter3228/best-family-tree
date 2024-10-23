import { Member as PrismaMember, Status as MemberStatus } from "@prisma/client";

export enum MENTOR_STATUSES {
  ALUMNI = "ALUMNI",
  FULL = "FULL",
}

type Member = PrismaMember & {
  mentees: Member[];
};

export { type Member, MemberStatus };
