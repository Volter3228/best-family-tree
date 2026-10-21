import { Member } from "@/models";
import type { ChildrenMap, MembersMap } from "@/types";

export interface MembersIndex {
  // Pre-order list: mentors before their mentees, siblings in tree order.
  members: Member[];
  byId: MembersMap;
  childrenOf: ChildrenMap;
  rootIds: string[];
}

/**
 * Builds the tree structure from a flat member list. Siblings and roots keep
 * the order in which they appear in `list`. Members whose mentor is missing
 * are roots; members that can not be reached from a root (a mentor cycle)
 * are left out, like the server does.
 */
export const buildMembersIndex = (list: Member[]): MembersIndex => {
  const byId: MembersMap = new Map(list.map((member) => [member.id, member]));
  const childrenOf: ChildrenMap = new Map();
  const rootIds: string[] = [];

  for (const { id, mentorId } of list) {
    if (mentorId && byId.has(mentorId)) {
      const children = childrenOf.get(mentorId);
      if (children) children.push(id);
      else childrenOf.set(mentorId, [id]);
    } else {
      rootIds.push(id);
    }
  }

  const members: Member[] = [];
  const visited = new Set<string>();
  const stack = [...rootIds].reverse();
  while (stack.length > 0) {
    const id = stack.pop()!;
    if (visited.has(id)) continue;
    visited.add(id);
    members.push(byId.get(id)!);
    const children = childrenOf.get(id);
    if (children) {
      for (let i = children.length - 1; i >= 0; i--) stack.push(children[i]);
    }
  }

  if (members.length !== list.length) {
    for (const id of [...byId.keys()]) {
      if (visited.has(id)) continue;
      byId.delete(id);
      childrenOf.delete(id);
    }
  }

  return { members, byId, childrenOf, rootIds };
};

/** Ids of every mentee below `memberId` (cycle-safe). */
export const collectDescendantIds = (
  childrenOf: ChildrenMap,
  memberId: string,
): Set<string> => {
  const ids = new Set<string>();
  const stack = [...(childrenOf.get(memberId) ?? [])];
  while (stack.length > 0) {
    const id = stack.pop()!;
    if (ids.has(id)) continue;
    ids.add(id);
    stack.push(...(childrenOf.get(id) ?? []));
  }
  return ids;
};

/** Direct mentees of a member as members, in tree order. */
export const getMentees = (
  byId: MembersMap,
  childrenOf: ChildrenMap,
  memberId: string,
): Member[] =>
  (childrenOf.get(memberId) ?? []).flatMap((id) => byId.get(id) ?? []);
