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

export type Point = { x: number; y: number };

export interface TreeNode {
  id: string;
  type?: string;
  position: Point;
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

export interface SegmentData {
  points: Point[];
  arcLengths: number[];
  totalLen: number;
}

export interface PathData {
  chain: string[];
  segments: SegmentData[];
  offsets: number[];
  totalLen: number;
}

export type MemberNode = TreeNode & { data: { member: Member } };

export type NodePositions = Map<string, Point>;
