import { Member as MemberType } from "@/types";

export type MemberMetrics = {
  member: MemberType;
  size: number;
  depth: number;
  weight: number;
  hasChildren: boolean;
};

export type TreeCache = Map<string, number>;
