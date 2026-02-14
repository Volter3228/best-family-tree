import sortMembersBalanced from "./sortMembersBalanced.js";
import { Member as MemberType } from "@/types";
import { MembersByMentorId, TreeCache } from "./types.js";

// Recursively build the tree
const buildTree = (
  membersByMentorId: MembersByMentorId,
  mentorId: string,
  cache: { size: TreeCache; depth: TreeCache },
) => {
  const members = membersByMentorId[mentorId];
  if (!members.length) return [];

  const treeMembers = members.map(
    (member): MemberType => ({
      ...member,
      mentees: member.mentees.length
        ? buildTree(membersByMentorId, member.id, cache) // Build the tree for all direct ascendants that are mentors themselves
        : [],
    }),
  );

  // Order current level mentees to ensure optimal arrangament of the nodes
  return sortMembersBalanced(treeMembers, cache);
};

const transformMembersToTree = (members: MemberType[]) => {
  // Request-scoped cache — no shared mutable state between concurrent calls
  const cache: { size: TreeCache; depth: TreeCache } = {
    size: new Map(),
    depth: new Map(),
  };

  // O(1) lookup set instead of O(n) members.some() per member
  const memberIds = new Set(members.map((m) => m.id));
  const mentorIdsNotInMembers = new Set<string>();

  // Create a dictionary where key is mentorId and value is an array of related mentees
  const membersByMentorId = members.reduce<MembersByMentorId>((acc, member) => {
    const mentorId = member.mentorId;
    if (!mentorId || mentorIdsNotInMembers.has(mentorId)) return acc;

    if (!memberIds.has(mentorId)) {
      mentorIdsNotInMembers.add(mentorId);
      return acc;
    }

    acc[mentorId] = acc[mentorId] || [];
    acc[mentorId].push(member);

    return acc;
  }, {});

  // Root members are founders of the organisation
  const rootMembers = members
    .filter(
      (member) =>
        member.mentorId === null || mentorIdsNotInMembers.has(member.mentorId),
    )
    .map(
      (member): MemberType => ({
        ...member,
        mentees: member.mentees.length
          ? buildTree(membersByMentorId, member.id, cache)
          : [],
      }),
    );

  return sortMembersBalanced(rootMembers, cache);
};

export default transformMembersToTree;
