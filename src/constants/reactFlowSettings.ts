import type { CSSProperties } from "react";
import type { DefaultEdgeOptions, NodeTypes } from "@xyflow/react";
import MemberNode from "@/components/flow/MemberNode";

export const CONNECTION_LINE_STYLE: CSSProperties = {
  stroke: "rgb(241, 245, 249)",
  strokeWidth: 3,
};

export const DEFAULT_EDGE_OPTIONS: DefaultEdgeOptions = {
  // style: CONNECTION_LINE_STYLE,
};

export const NODE_TYPES: NodeTypes = {
  member: MemberNode,
};
