import type { LayoutOptions } from "elkjs/lib/elk.bundled.js";
import {
  NODE_CARD_HEIGHT,
  NODE_CARD_TOP,
  NODE_HEIGHT,
  NODE_WIDTH,
} from "@/constants/canvas";
import type { Direction, Point } from "@/types";
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

// Sibling gap along the spread axis (was 80) and layer padding (was 240):
// trees are about a quarter tighter than before.
const NODE_SPACING = 56;
const layoutOptions = (direction: Direction): LayoutOptions => ({
  "elk.algorithm": "mrtree",
  "elk.direction": direction === "LR" ? "RIGHT" : "DOWN",
  "elk.separateConnectedComponents": "true",
  // Spacing
  "elk.spacing.nodeNode": String(NODE_SPACING),
  "elk.spacing.componentComponent": "1200",
});

// The node's visual footprint along the spread axis (avatar + card) and the
// padding that separates hierarchy layers along the flow axis. LR trees
// read better with tighter horizontal spacing (~40% less than TB's).
const NODE_EXTENT = NODE_CARD_TOP + NODE_CARD_HEIGHT;
const LAYER_SPACE = 180;
const LAYER_SPACE_LR = Math.round(LAYER_SPACE * 0.6);

const elkNodeSize = (direction: Direction) =>
  direction === "LR"
    ? { width: NODE_HEIGHT + LAYER_SPACE_LR, height: NODE_EXTENT }
    : { width: NODE_WIDTH, height: NODE_HEIGHT + LAYER_SPACE };

// Isolated nodes (no mentor links) form one-node components that ELK places
// beside the tree, stretching the canvas. They are moved to the edge of the
// layout instead, along the axis the tree already grows on:
// - TB: a row below all trees, left to right (wrapping at the trees' width);
// - LR: a column right of all trees, top to bottom (wrapping at their height).
const ISOLATED_EDGE_GAP = 240;
const ISOLATED_NODE_GAP = 60;

export const stackIsolatedNodes = (
  nodeIds: string[],
  edges: ElkLayoutInput["edges"],
  positions: Point[],
  direction: Direction,
): void => {
  const linked = new Set<string>();
  for (const { source, target } of edges) {
    linked.add(source);
    linked.add(target);
  }
  if (linked.size === nodeIds.length) return;

  const size = elkNodeSize(direction);
  const bounds = { minX: 0, maxX: 0, minY: 0, maxY: 0 };
  if (linked.size > 0) {
    bounds.minX = bounds.minY = Infinity;
    bounds.maxX = bounds.maxY = -Infinity;
    positions.forEach((p, i) => {
      if (!linked.has(nodeIds[i])) return;
      bounds.minX = Math.min(bounds.minX, p.x);
      bounds.maxX = Math.max(bounds.maxX, p.x + size.width);
      bounds.minY = Math.min(bounds.minY, p.y);
      bounds.maxY = Math.max(bounds.maxY, p.y + size.height);
    });
  }
  const hasTree = linked.size > 0;
  const isolated = nodeIds.filter((id) => !linked.has(id));
  const index = new Map(isolated.map((id, n) => [id, n]));

  // Packs isolated nodes along `main` (pitch `mainPitch`, `perLine` per line)
  // and starts a new line every `perLine` nodes, `crossPitch` further out.
  const place = (
    perLine: number,
    mainPitch: number,
    crossPitch: number,
    at: (main: number, cross: number) => Point,
  ) =>
    positions.forEach((_, i) => {
      const n = index.get(nodeIds[i]);
      if (n === undefined) return;
      positions[i] = at(
        (n % perLine) * mainPitch,
        Math.floor(n / perLine) * crossPitch,
      );
    });

  if (direction === "LR") {
    const pitch = NODE_EXTENT + ISOLATED_NODE_GAP;
    const perColumn = hasTree
      ? Math.max(
          1,
          Math.floor((bounds.maxY - bounds.minY + ISOLATED_NODE_GAP) / pitch),
        )
      : isolated.length;
    const startX = hasTree ? bounds.maxX + ISOLATED_EDGE_GAP : 0;
    place(perColumn, pitch, size.width + ISOLATED_NODE_GAP, (main, cross) => ({
      x: startX + cross,
      y: bounds.minY + main,
    }));
    return;
  }

  const pitch = NODE_WIDTH + ISOLATED_NODE_GAP;
  const perRow = hasTree
    ? Math.max(
        1,
        Math.floor((bounds.maxX - bounds.minX + ISOLATED_NODE_GAP) / pitch),
      )
    : isolated.length;
  const startY = hasTree ? bounds.maxY + ISOLATED_EDGE_GAP : 0;
  place(perRow, pitch, NODE_EXTENT + ISOLATED_NODE_GAP, (main, cross) => ({
    x: bounds.minX + main,
    y: startY + cross,
  }));
};

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
  stackIsolatedNodes(nodeIds, edges, positions, direction);
  lastLayout = { key, positions };
  return positions;
};
