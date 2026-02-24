import { MemberStatus } from "@/types";

export const MENTOR_STATUSES: MemberStatus[] = [
  MemberStatus.Full,
  MemberStatus.Alumni,
];

export const MEMBER_STATUSES: MemberStatus[] = [
  MemberStatus.Observer,
  MemberStatus.Baby,
  ...MENTOR_STATUSES,
];

export const FOUNDER_JOIN_YEAR = 2002;
