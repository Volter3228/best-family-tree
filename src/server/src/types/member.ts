import type { Member as MemberType } from "@/types";

export type MembersByMentorId = {
  [mentorId: string]: MemberType[];
};
