import { Member } from "@/models";
import type { MembersMap } from "@/types";

/**
 * Build ordered ancestor chain [root, ..., memberId] by walking mentorId up.
 */
export const buildAncestorChain = (
  memberId: string,
  membersMap: MembersMap,
): string[] => {
  const chain: string[] = [];
  let currentId: string | null = memberId;

  while (currentId) {
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
    if (!member || !member.mentorId) break;
    ids.add(member.mentorId);
    currentId = member.mentorId;
  }

  return ids;
};

const collectAllDescendantIds = (
  member: Member,
  ids: Set<string> = new Set(),
): Set<string> => {
  for (const mentee of member.mentees) {
    ids.add(mentee.id);
    collectAllDescendantIds(mentee, ids);
  }
  return ids;
};

const collectSiblingIds = (
  membersMap: MembersMap,
  memberId: string,
): Set<string> => {
  const ids = new Set<string>();
  const member = membersMap.get(memberId);
  if (!member || !member.mentorId) return ids;

  const mentor = membersMap.get(member.mentorId);
  if (!mentor) return ids;

  for (const mentee of mentor.mentees) {
    if (mentee.id !== memberId) {
      ids.add(mentee.id);
    }
  }
  return ids;
};

export const computeLineageBranchIds = (
  membersMap: MembersMap,
  memberId: string,
): Set<string> => {
  const member = membersMap.get(memberId);
  if (!member) return new Set();

  const ids = new Set<string>([memberId]);

  if (member.mentorId) {
    // Mentor
    ids.add(member.mentorId);

    // Mentor's siblings (without their descendants)
    collectSiblingIds(membersMap, member.mentorId).forEach((id) => ids.add(id));

    // All direct ancestors above mentor
    collectAllAncestorIds(membersMap, member.mentorId).forEach((id) =>
      ids.add(id),
    );
  }

  // Member's siblings
  const siblingIds = collectSiblingIds(membersMap, memberId);
  siblingIds.forEach((id) => ids.add(id));

  // Descendants of member and their siblings (recursively)
  collectAllDescendantIds(member, ids);
  for (const siblingId of siblingIds) {
    const sibling = membersMap.get(siblingId);
    if (sibling) {
      collectAllDescendantIds(sibling, ids);
    }
  }

  return ids;
};
