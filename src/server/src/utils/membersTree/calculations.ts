import type { TreeNode, TreeCache, MemberMetrics } from "@/types";

// Function to calculate the total number of descendants (subtree size)
// Answers the following question: "Including this member, how many total descendants are in its entire branch?"
const calculateSubtreeSize = (node: TreeNode, cache: TreeCache): number => {
  const cached = cache.get(node.member.id);
  if (cached !== undefined) return cached;

  // 1 for the member themself plus the sum of all mentees subtrees
  const size = node.children.reduce(
    (sum, child) => sum + calculateSubtreeSize(child, cache),
    1,
  );

  cache.set(node.member.id, size);
  return size;
};

// Function to calculate the maximum depth of a subtree
// Answers the following question: "What is the longest path of descendants from this member down to the bottom of the tree?"
const calculateSubtreeDepth = (node: TreeNode, cache: TreeCache): number => {
  const cached = cache.get(node.member.id);
  if (cached !== undefined) return cached;

  // The longest path down to the bottom of the tree from current member
  const depth = node.children.reduce(
    (max, child) => Math.max(max, calculateSubtreeDepth(child, cache) + 1),
    1,
  );

  cache.set(node.member.id, depth);
  return depth;
};

// Bundle all the metrics together to single object
// Calculate weight, primary value for sorting
export const calculateMemberMetrics = (
  node: TreeNode,
  cache: { size: TreeCache; depth: TreeCache },
): MemberMetrics => {
  const size = calculateSubtreeSize(node, cache.size);
  const depth = calculateSubtreeDepth(node, cache.depth);

  return {
    node,
    size,
    depth,
    weight: size * 100 + depth, // "size*100" because size is more important then depth
    hasChildren: node.children.length > 0,
  };
};

// Called if there is only 1 subtree.
// Places single subtree exactly in the middle and leaves to the right and left
export const centerSingleSubtree = (
  largeSubtree: MemberMetrics,
  smallItems: MemberMetrics[],
  totalLength: number,
): TreeNode[] => {
  const arrangement: (TreeNode | null)[] = new Array(totalLength).fill(null);
  const centerIndex = Math.floor(totalLength / 2);

  arrangement[centerIndex] = largeSubtree.node;

  // Fill alternately left and right from center
  let leftIndex = centerIndex - 1;
  let rightIndex = centerIndex + 1;
  let itemIndex = 0;

  while (itemIndex < smallItems.length) {
    if (leftIndex >= 0 && itemIndex < smallItems.length) {
      arrangement[leftIndex--] = smallItems[itemIndex++].node;
    }
    if (rightIndex < totalLength && itemIndex < smallItems.length) {
      arrangement[rightIndex++] = smallItems[itemIndex++].node;
    }
  }

  return arrangement.filter((node) => node !== null);
};
