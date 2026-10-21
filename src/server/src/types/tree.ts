import { Member as MemberType } from "@/types";

// A member together with the subtrees of their mentees, used only while
// ordering the family tree.
export type TreeNode = {
  member: MemberType;
  children: TreeNode[];
};

export type MemberMetrics = {
  node: TreeNode;
  size: number;
  depth: number;
  weight: number;
  hasChildren: boolean;
};

export type TreeCache = Map<string, number>;
