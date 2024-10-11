import dagre from "@dagrejs/dagre";

// Using a larger width and height values creates more space between nodes
export const DEFAULT_NODE_WIDTH = 400;
export const DEFAULT_NODE_HEIGHT = 200;
export const DEFAULT_DIRECTION = "TB";

const dagreGraph = new dagre.graphlib.Graph();
dagreGraph.setDefaultEdgeLabel(() => ({}));
dagreGraph.setGraph({ rankdir: DEFAULT_DIRECTION });

export default dagreGraph;
