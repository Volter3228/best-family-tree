import type { LayoutOptions } from "elkjs/lib/elk.bundled.js";
import { NODE_HEIGHT, NODE_WIDTH } from "@/constants/canvas";
import type { Direction, Point } from "@/types";
import type { ElkLayoutInput } from "./protocol";
import { arrangeComponents, NODE_EXTENT } from "./arrangeComponents";

// elk.bundled.js decides whether it is a worker script by checking for
// `document`. Inside our own worker that makes it hijack `onmessage` and skip
// its exports, so a placeholder `document` exists while it is evaluated.
const loadElk = async () => {
  const scope = globalThis as { document?: unknown };
  const needsShim = scope.document === undefined;
  if (needsShim) scope.document = {};
  try {
    const { default: ELK } = await import("elkjs/lib/elk.bundled.js");
    return new ELK();
  } finally {
    if (needsShim) delete scope.document;
  }
};

let elkPromise: ReturnType<typeof loadElk> | null = null;

// Sibling gap along the spread axis (was 80) and layer padding (was 240):
// trees are about a quarter tighter than before.
const NODE_SPACING = 56;
const layoutOptions = (direction: Direction): LayoutOptions => ({
  "elk.algorithm": "mrtree",
  "elk.direction": direction === "LR" ? "RIGHT" : "DOWN",
  // Components are packed afterwards by `arrangeComponents`.
  "elk.separateConnectedComponents": "true",
  "elk.spacing.nodeNode": String(NODE_SPACING),
});

// ELK node boxes: the node's footprint plus the padding that separates
// hierarchy layers along the flow axis. LR trees read better with tighter
// horizontal spacing (~40% less than TB's).
const LAYER_SPACE = 180;
const LAYER_SPACE_LR = Math.round(LAYER_SPACE * 0.6);

const elkNodeSize = (direction: Direction) =>
  direction === "LR"
    ? { width: NODE_HEIGHT + LAYER_SPACE_LR, height: NODE_EXTENT }
    : { width: NODE_WIDTH, height: NODE_HEIGHT + LAYER_SPACE };

// ELK only sees ids and edges (node sizes are constant), so the same structure
// always lays out the same way. Edits that keep the tree's shape reuse the
// previous result instead of running ELK again.
let lastLayout: { key: string; positions: Point[] } | null = null;

export const layoutWithElk = async ({
  nodeIds,
  edges,
  direction,
}: ElkLayoutInput): Promise<Point[]> => {
  const key =
    direction +
    "|" +
    nodeIds.join(",") +
    "|" +
    edges.map((edge) => edge.id).join(",");
  if (lastLayout?.key === key) return lastLayout.positions;

  const elk = await (elkPromise ??= loadElk());
  const graph = await elk.layout(
    {
      id: "root",
      children: nodeIds.map((id) => ({
        id,
        ...elkNodeSize(direction),
      })),
      edges: edges.map(({ id, source, target }) => ({
        id,
        sources: [source],
        targets: [target],
      })),
    },
    { layoutOptions: layoutOptions(direction) },
  );

  const byId = new Map(graph.children?.map((child) => [child.id, child]));
  const positions = nodeIds.map((id) => ({
    x: byId.get(id)?.x ?? 0,
    y: byId.get(id)?.y ?? 0,
  }));
  arrangeComponents(nodeIds, edges, positions, direction);
  lastLayout = { key, positions };
  return positions;
};
