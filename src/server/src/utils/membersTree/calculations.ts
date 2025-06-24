import { Member as MemberType } from "@/types";
import type { TreeCache, MemberMetrics } from "./types";

// Function to calculate the total number of descendants (subtree size)
// Answers the following question: "Including this member, how many total descendants are in its entire branch?"
const calculateSubtreeSize = (member: MemberType, cache: TreeCache): number => {
  if (cache.has(member.id)) {
    return cache.get(member.id)!; // cache subtree size value
  }

  const size = member.mentees.length
    ? 1 +
      member.mentees.reduce(
        (sum, mentee) => sum + calculateSubtreeSize(mentee, cache),
        0
      ) // Sum of all mentees subtrees
    : 1; // Return 1 for member themself

  cache.set(member.id, size);
  return size;
};

// Function to calculate the maximum depth of a subtree
// Answers the following question: "What is the longest path of descendants from this member down to the bottom of the tree?"
const calculateSubtreeDepth = (
  member: MemberType,
  cache: TreeCache
): number => {
  if (cache.has(member.id)) {
    return cache.get(member.id)!; // cache subtree depth value
  }

  const depth = member.mentees.length
    ? 1 +
      Math.max(
        ...member.mentees.map((member) => calculateSubtreeDepth(member, cache))
      ) // The longest path down to the bottom of the tree from current member
    : 1; // Return 1 for member level themself

  cache.set(member.id, depth);
  return depth;
};

// Bundle all the metrics together to single object
// Calculate weight, primary value for sorting
export const calculateMemberMetrics = (
  member: MemberType,
  cache: { size: TreeCache; depth: TreeCache }
): MemberMetrics => {
  const size = calculateSubtreeSize(member, cache.size);
  const depth = calculateSubtreeDepth(member, cache.depth);

  return {
    member,
    size,
    depth,
    weight: size * 100 + depth, // "size*100" because size is more important then depth
    hasChildren: !!member.mentees.length,
  };
};

// Called if there is only 1 subtree.
// Places single subtree exactly in the middle and leaves to the right and left
export const centerSingleSubtree = (
  largeSubtree: MemberMetrics,
  smallItems: MemberMetrics[],
  totalLength: number
): MemberType[] => {
  const arrangement: (MemberType | null)[] = new Array(totalLength).fill(null);
  const centerIndex = Math.floor(totalLength / 2);

  arrangement[centerIndex] = largeSubtree.member;

  // Fill alternately left and right from center
  let leftIndex = centerIndex - 1;
  let rightIndex = centerIndex + 1;
  let itemIndex = 0;

  while (itemIndex < smallItems.length) {
    if (leftIndex >= 0 && itemIndex < smallItems.length) {
      arrangement[leftIndex--] = smallItems[itemIndex++].member;
    }
    if (rightIndex < totalLength && itemIndex < smallItems.length) {
      arrangement[rightIndex++] = smallItems[itemIndex++].member;
    }
  }

  return arrangement.filter((member) => member !== null);
};
