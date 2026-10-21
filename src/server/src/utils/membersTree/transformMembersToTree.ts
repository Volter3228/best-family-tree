import sortMembersBalanced from "./sortMembersBalanced.js";
import type {
  Member as MemberType,
  MembersByMentorId,
  TreeCache,
  TreeNode,
} from "@/types";

type Cache = { size: TreeCache; depth: TreeCache };

// Recursively build the tree
const buildTree = (
  membersByMentorId: MembersByMentorId,
  members: MemberType[],
  cache: Cache,
): TreeNode[] => {
  const nodes = members.map(
    (member): TreeNode => ({
      member,
      children: buildTree(membersByMentorId, membersByMentorId[member.id] ?? [], cache),
    }),
  );

  // Order current level mentees to ensure optimal arrangament of the nodes
  return sortMembersBalanced(nodes, cache);
};

// Pre-order walk: mentors come before their mentees, siblings keep the order
// chosen by the balanced sort. The client rebuilds the tree from this order.
const flattenTree = (nodes: TreeNode[], result: MemberType[] = []) => {
  for (const { member, children } of nodes) {
    result.push(member);
    flattenTree(children, result);
  }
  return result;
};

/**
 * Orders members for the family tree and returns them as a flat list, each
 * member once, with no nested mentees or embedded mentor. Members whose
 * mentor is missing from the list count as roots.
 */
const transformMembersToTree = (members: MemberType[]): MemberType[] => {
  // Request-scoped cache — no shared mutable state between concurrent calls
  const cache: Cache = { size: new Map(), depth: new Map() };

  // O(1) lookup set instead of O(n) members.some() per member
  const memberIds = new Set(members.map((m) => m.id));

  // Create a dictionary where key is mentorId and value is an array of related mentees
  const membersByMentorId: MembersByMentorId = {};
  const rootMembers: MemberType[] = [];
  for (const member of members) {
    const { mentorId } = member;
    if (!mentorId || !memberIds.has(mentorId)) {
      // Root members are founders of the organisation
      rootMembers.push(member);
      continue;
    }
    (membersByMentorId[mentorId] ??= []).push(member);
  }

  return flattenTree(buildTree(membersByMentorId, rootMembers, cache));
};

export default transformMembersToTree;
