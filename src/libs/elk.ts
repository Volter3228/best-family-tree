import ELK from "elkjs/lib/elk.bundled.js";
import { FlowViewportDirection } from "@/types/tree";

// Using a larger width and height values creates more space between nodes
export const DEFAULT_NODE_WIDTH = 220;
export const DEFAULT_NODE_HEIGHT = 200;
export const DEFAULT_POSITION = { x: 0, y: 0 };
export const FLOW_VIEWPORT_DIRECTION: FlowViewportDirection = {
  DESKTOP: "TB",
  MOBILE: "LR",
};

const elk = new ELK();

export default elk;
