import { Member } from "@/models";
import type { EdgeStyle } from "./settings";

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

export type MemberNode = TreeNode & {
  data: { member: Member; placeholderColorIndex: number };
};

export type NodePositions = Map<string, Point>;

// S-curve from `start` to `end`; with `bendY` it ends its curve there and
// continues straight down to `end` (used to pass between upper-row nodes).
// `fanStart` / `fanEnd` make the curve leave / reach its point at an angle
// instead of vertically, so edges sharing one point do not overlap.
export interface TeamEdge {
  start: Point;
  end: Point;
  bendY?: number;
  fanStart?: boolean;
  fanEnd?: boolean;
  // `end` is the top of a member's avatar circle (TB); draw up to the outline.
  endsOnAvatar?: boolean;
  // Pairs a fan edge with the orthogonal route that replaces it, so a style
  // switch can morph one into the other.
  morphKey?: string;
  // Vertex indices of `points` drawn with rounded corners (others are sharp).
  round?: number[];
  // Explicit polyline route (spine + stubs in LR orthogonal mode); when set,
  // the curve fields above are ignored and the edge is drawn corner by corner.
  points?: Point[];
  // Which edge styles this edge belongs to (LR blocks carry both fan and
  // spine variants); edges without it are drawn in every style.
  styles?: EdgeStyle[];
}

export interface TeamFrame {
  teamId: string;
  x: number;
  y: number;
  width: number;
  height: number;
  name: string;
  teamTypeName: string;
  color: string | null;
  iconUrl: string | null;
  teamTypeId: string | null;
  nodeIds: string[];
  edges: TeamEdge[];
}
