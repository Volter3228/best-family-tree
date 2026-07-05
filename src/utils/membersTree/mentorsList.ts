import { MENTOR_STATUSES } from "@/constants/member";
import type { MemberStatus } from "@/types";

export const getUpdatedMentorsList = (
  mentorsList: { id: string; name: string }[],
  member: { id: string; name: string; status: MemberStatus },
  operation: "add" | "update" = "add",
) => {
  const shouldBeMentor = MENTOR_STATUSES.includes(member.status);

  if (operation === "add") {
    return shouldBeMentor
      ? [...mentorsList, { id: member.id, name: member.name }]
      : mentorsList;
  }

  const isCurrentlyMentor = mentorsList.some((m) => m.id === member.id);

  if (isCurrentlyMentor && !shouldBeMentor) {
    return mentorsList.filter((m) => m.id !== member.id);
  }

  if (!isCurrentlyMentor && shouldBeMentor) {
    return [...mentorsList, { id: member.id, name: member.name }];
  }

  return mentorsList;
};
