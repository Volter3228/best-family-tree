import sortMembersBalanced from "./sortMembersBalanced.js";
import { Member as MemberType } from "@/types";
import { MembersByMentorId, TreeCache } from "./types.js";

// Memoization cache for subtree calculations
const subtreeCache: { size: TreeCache; depth: TreeCache } = {
  size: new Map(),
  depth: new Map(),
};

// Preventing memory leak
const clearCaches = (): void => {
  subtreeCache.size.clear();
  subtreeCache.depth.clear();
};

// Recursively build the tree
const buildTree = (membersByMentorId: MembersByMentorId, mentorId: string) => {
  const members = membersByMentorId[mentorId];
  if (!members.length) return [];

  const treeMembers = members.map(
    (member): MemberType => ({
      ...member,
      mentees: member.mentees.length
        ? buildTree(membersByMentorId, member.id) // Build the tree for all direct ascendants that are mentors themselves
        : [],
    })
  );

  // Order current level mentees to ensure optimal arrangament of the nodes
  return sortMembersBalanced(treeMembers, subtreeCache);
};

const transformMembersToTree = (members: MemberType[]) => {
  try {
    const mentorIdsNotInMembers = new Set<string>();
    // Create a dictionary where key is mentorId and value is an array of related mentees
    const membersByMentorId = members.reduce<MembersByMentorId>(
      (acc, member) => {
        const mentorId = member.mentorId;
        if (!mentorId || mentorIdsNotInMembers.has(mentorId)) return acc;

        const isMentorInMembers = members.some(({ id }) => id === mentorId);
        if (!isMentorInMembers) {
          mentorIdsNotInMembers.add(mentorId);
          return acc;
        }

        acc[mentorId] = acc[mentorId] || [];
        acc[mentorId].push(member);

        return acc;
      },
      {}
    );

    // Root members are founders of the organisation
    const rootMembers = members
      .filter(
        (member) =>
          member.mentorId === null || mentorIdsNotInMembers.has(member.mentorId)
      )
      .map(
        (member): MemberType => ({
          ...member,
          mentees: member.mentees.length
            ? buildTree(membersByMentorId, member.id)
            : [],
        })
      );

    const result = sortMembersBalanced(rootMembers, subtreeCache);
    return result;
  } finally {
    // Clear cache even if error occurs
    clearCaches();
  }
};

export default transformMembersToTree;
