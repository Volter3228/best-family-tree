import type { LayoutOptions } from "elkjs/lib/elk.bundled.js";
import { NODE_HEIGHT, NODE_WIDTH } from "@/constants/canvas";
import type { Point } from "@/types";
import type { ElkLayoutInput } from "./protocol";

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

const LAYOUT_OPTIONS: LayoutOptions = {
  "elk.algorithm": "mrtree",
  "elk.direction": "DOWN",
  "elk.separateConnectedComponents": "true",
  // Spacing
  "elk.spacing.nodeNode": "80",
  "elk.spacing.componentComponent": "2000",
};

// ELK only sees ids and edges (node sizes are constant), so the same structure
// always lays out the same way. Edits that keep the tree's shape reuse the
// previous result instead of running ELK again.
let lastLayout: { key: string; positions: Point[] } | null = null;

export const layoutWithElk = async ({
  nodeIds,
  edges,
}: ElkLayoutInput): Promise<Point[]> => {
  const key =
    nodeIds.join(",") + "|" + edges.map((edge) => edge.id).join(",");
  if (lastLayout?.key === key) return lastLayout.positions;

  const elk = await (elkPromise ??= loadElk());
  const graph = await elk.layout(
    {
      id: "root",
      children: nodeIds.map((id) => ({
        id,
        width: NODE_WIDTH,
        height: NODE_HEIGHT + 240, // Additional space between node layers
      })),
      edges: edges.map(({ id, source, target }) => ({
        id,
        sources: [source],
        targets: [target],
      })),
    },
    { layoutOptions: LAYOUT_OPTIONS },
  );

  const byId = new Map(graph.children?.map((child) => [child.id, child]));
  const positions = nodeIds.map((id) => ({
    x: byId.get(id)?.x ?? 0,
    y: byId.get(id)?.y ?? 0,
  }));
  lastLayout = { key, positions };
  return positions;
};
