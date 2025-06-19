import { Member as MemberType } from "@/types";

type MembersByMentorId = {
  [mentorId: string]: MemberType[];
};

const getTree = (membersByMentorId: MembersByMentorId, mentorId: string) => {
  return (membersByMentorId[mentorId] || []).map(
    (member): MemberType => ({
      ...member,
      mentees: member.mentees?.length
        ? getTree(membersByMentorId, member.id)
        : [],
    })
  );
};

export default function transformMembersToTree(members: MemberType[]) {
  const membersByMentorId = members.reduce<MembersByMentorId>((acc, member) => {
    const mentorId = member.mentorId;
    if (!mentorId) return acc;

    acc[mentorId] = acc[mentorId] || [];
    acc[mentorId].push(member);

    return acc;
  }, {});

  return members
    .filter((member) => member.mentorId === null)
    .map(
      (member): MemberType => ({
        ...member,
        mentees: member.mentees?.length
          ? getTree(membersByMentorId, member.id)
          : [],
      })
    );
}
