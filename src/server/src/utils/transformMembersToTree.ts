import { Member, Mentor } from "@/types";
import isMentor from "./isMentor";

type MembersByMentorId = {
  [mentorId: string]: (Member | Mentor)[];
};

const getTree = (membersByMentorId: MembersByMentorId, mentorId: string) => {
  return (membersByMentorId[mentorId] || []).map((member): Member | Mentor => ({
    ...member,
    ...(isMentor(member)
      ? { mentees: getTree(membersByMentorId, member.id) }
      : {}),
  }));
};

export default function transformMembersToTree(members: (Member | Mentor)[]) {
  // Create a map of mentorId to members
  const membersByMentorId = members.reduce<MembersByMentorId>((acc, member) => {
    const mentorId = member.mentorId;

    if (!mentorId) return acc;

    if (!acc[mentorId]) acc[mentorId] = [];

    acc[mentorId].push(member);
    return acc;
  }, {});

  return members
    .filter((member) => member.mentorId === null)
    .map((member): Member | Mentor => ({
      ...member,
      ...(isMentor(member)
        ? { mentees: getTree(membersByMentorId, member.id) }
        : {}),
    }));
}
