import Member from "@/models/Member";
import { type Node as ReactFlowNode } from "@xyflow/react";

// Need this enum cause importing it from react-flow lib creates the need of client-side rendering
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

export type MemberNode = ReactFlowNode & { data: { member: Member } };
