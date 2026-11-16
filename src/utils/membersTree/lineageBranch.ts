import type { MembersMap } from "@/types";

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
