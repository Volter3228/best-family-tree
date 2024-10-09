import dagre from "@dagrejs/dagre";

export const DEFAULT_NODE_WIDTH = 172;
export const DEFAULT_NODE_HEIGHT = 36;
export const DEFAULT_DIRECTION = "TB";

const dagreGraph = new dagre.graphlib.Graph();
dagreGraph.setDefaultEdgeLabel(() => ({}));
dagreGraph.setGraph({ rankdir: DEFAULT_DIRECTION });

export default dagreGraph;
