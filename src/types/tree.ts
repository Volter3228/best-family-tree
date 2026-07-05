import { Member } from "@/models";

export enum Position {
  Left = "left",
  Top = "top",
  Right = "right",
  Bottom = "bottom",
}

export type Direction = "TB" | "LR";
export type FlowViewportDirection = {
  DESKTOP: Direction;
  MOBILE: Direction;
};

export interface TreeNode {
  id: string;
  type?: string;
  position: { x: number; y: number };
  data: Record<string, unknown>;
  style?: React.CSSProperties;
  targetPosition?: Position;
  sourcePosition?: Position;
}

export interface TreeEdge {
  id: string;
  source: string;
  target: string;
  style?: React.CSSProperties;
}

export type MemberNode = TreeNode & { data: { member: Member } };

export type NodePositions = Map<string, { x: number; y: number }>;
