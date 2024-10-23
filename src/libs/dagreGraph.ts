import { FlowDirection } from "@/types/reactFlow";
import dagre from "@dagrejs/dagre";

// Using a larger width and height values creates more space between nodes
export const DEFAULT_NODE_WIDTH = 288;
export const DEFAULT_NODE_HEIGHT = 96;
export const FLOW_DIRECTION: FlowDirection = {
  DESKTOP: "TB",
  MOBILE: "LR",
};

const dagreGraph = new dagre.graphlib.Graph({});
dagreGraph.setDefaultEdgeLabel(() => ({}));
dagreGraph.setDefaultNodeLabel(() => ({}));

export default dagreGraph;
