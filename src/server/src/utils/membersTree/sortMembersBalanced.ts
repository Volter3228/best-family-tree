import { centerSingleSubtree, calculateMemberMetrics } from "./calculations.js";

import { type Member as MemberType } from "@/types";
import { type MemberMetrics, type TreeCache } from "./types.js";

// Distribute subtrees evenly across available positions
const distributeSubtrees = (
  withChildren: MemberMetrics[],
  withoutChildren: MemberMetrics[],
  totalLength: number
): MemberType[] => {
  const arrangement: (MemberType | null)[] = new Array(totalLength).fill(null);

  if (withChildren.length === 1) {
    // Single large subtree: center it and fill around
    return centerSingleSubtree(withChildren[0], withoutChildren, totalLength);
  }

  // Multiple subtrees: distribute evenly
  // The first subtree goes at the beginning, the last goes at the end,
  // and the others are distributed between them.
  withChildren.forEach((metric, i) => {
    const position =
      withChildren.length === 1
        ? Math.floor(totalLength / 2)
        : Math.round((i * (totalLength - 1)) / (withChildren.length - 1));
    arrangement[position] = metric.member;
  });

  // Fill remaining positions in empty gaps
  let withoutChildrenIndex = 0;
  for (
    let i = 0;
    i < arrangement.length && withoutChildrenIndex < withoutChildren.length;
    i++
  ) {
    if (arrangement[i] === null) {
      arrangement[i] = withoutChildren[withoutChildrenIndex++].member;
    }
  }

  return arrangement.filter((member): member is MemberType => member !== null);
};

// This function arranges members at each level of the tree in specific order.
// The goal is to minimize empty space between nodes and create visually balanced, centered graph.
const sortMembersBalanced = (
  mentees: MemberType[],
  cache: { size: TreeCache; depth: TreeCache }
): MemberType[] => {
  if (!mentees?.length || mentees.length <= 1) {
    return mentees || [];
  }

  const metrics = mentees.map((member) =>
    calculateMemberMetrics(member, cache)
  );

  // Separate members with and without children
  const withChildren = metrics // Branches of the tree
    .filter((m) => m.hasChildren)
    .toSorted((a, b) => b.weight - a.weight);

  // If no complex subtrees, then use simple alternating placement
  if (withChildren.length === 0) {
    return mentees;
  }
  const withoutChildren = metrics // Leaves of the tree
    .filter((m) => !m.hasChildren)
    .toSorted((a, b) => b.weight - a.weight);

  // If there are 1+ subtrees
  return distributeSubtrees(withChildren, withoutChildren, mentees.length);
};

export default sortMembersBalanced;
