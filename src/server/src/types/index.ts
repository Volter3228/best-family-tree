import { Member } from "@prisma/client";

enum MENTOR_STATUSES {
  ALUMNI = "ALUMNI",
  FULL = "FULL",
}

type Mentor = Omit<Member, "status"> & {
  status: MENTOR_STATUSES;
  mentees: (Mentor | Member)[];
};

export type { Member, Mentor };
