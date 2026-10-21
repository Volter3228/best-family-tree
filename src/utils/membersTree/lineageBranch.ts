import type { ChildrenMap, MembersMap } from "@/types";
import { collectDescendantIds } from "./membersIndex";

/**
 * Build ordered ancestor chain [root, ..., memberId] by walking mentorId up.
 */
export const buildAncestorChain = (
  memberId: string,
  membersMap: MembersMap,
): string[] => {
  const chain: string[] = [];
  const seen = new Set<string>();
  let currentId: string | null = memberId;

  while (currentId && !seen.has(currentId)) {
    seen.add(currentId);
    chain.push(currentId);
    const member = membersMap.get(currentId);
    currentId = member?.mentorId ?? null;
  }

  chain.reverse();
  return chain;
};

/**
 * Collect direct ancestors (mentors) up the chain
 */
const collectAllAncestorIds = (
  membersMap: MembersMap,
  startId: string,
): Set<string> => {
  const ids = new Set<string>();
  let currentId: string | null = startId;

  while (currentId) {
    const member = membersMap.get(currentId);
    if (!member?.mentorId || ids.has(member.mentorId)) break;
    ids.add(member.mentorId);
    currentId = member.mentorId;
  }

  return ids;
};

const collectSiblingIds = (
  membersMap: MembersMap,
  childrenOf: ChildrenMap,
  memberId: string,
): Set<string> => {
  const ids = new Set<string>();
  const member = membersMap.get(memberId);
  if (!member?.mentorId) return ids;

  for (const id of childrenOf.get(member.mentorId) ?? []) {
    if (id !== memberId) ids.add(id);
  }
  return ids;
};

export const computeLineageBranchIds = (
  membersMap: MembersMap,
  childrenOf: ChildrenMap,
  memberId: string,
): Set<string> => {
  const member = membersMap.get(memberId);
  if (!member) return new Set();

  const ids = new Set<string>([memberId]);

  if (member.mentorId) {
    // Mentor
    ids.add(member.mentorId);

    // Mentor's siblings (without their descendants)
    collectSiblingIds(membersMap, childrenOf, member.mentorId).forEach((id) =>
      ids.add(id),
    );

    // All direct ancestors above mentor
    collectAllAncestorIds(membersMap, member.mentorId).forEach((id) =>
      ids.add(id),
    );
  }

  // Member's siblings
  const siblingIds = collectSiblingIds(membersMap, childrenOf, memberId);
  siblingIds.forEach((id) => ids.add(id));

  // Descendants of member and their siblings (recursively)
  collectDescendantIds(childrenOf, memberId).forEach((id) => ids.add(id));
  for (const siblingId of siblingIds) {
    collectDescendantIds(childrenOf, siblingId).forEach((id) => ids.add(id));
  }

  return ids;
};
