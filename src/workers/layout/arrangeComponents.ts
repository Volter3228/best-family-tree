import {
  GRID_LR_COLUMNS,
  NODE_CARD_HEIGHT,
  NODE_CARD_TOP,
  NODE_WIDTH,
} from "@/constants/canvas";
import { packBoxes } from "@/utils/membersTree/teamPacking";
import type { Direction, Point } from "@/types";
import type { ElkLayoutInput } from "./protocol";

// A node's visual footprint: card width by avatar + card height.
export const NODE_EXTENT = NODE_CARD_TOP + NODE_CARD_HEIGHT;
const COMPONENT_GAP = 240;
const NODE_GAP = 60;
const PITCH_X = NODE_WIDTH + NODE_GAP;
const PITCH_Y = NODE_EXTENT + NODE_GAP;

// Groups node indices into connected components (union-find over edges).
const findComponents = (
  nodeIds: string[],
  edges: ElkLayoutInput["edges"],
): number[][] => {
  const index = new Map(nodeIds.map((id, i) => [id, i]));
  const parent = nodeIds.map((_, i) => i);
  const find = (i: number): number => {
    while (parent[i] !== i) i = parent[i] = parent[parent[i]];
    return i;
  };
  for (const { source, target } of edges) {
    const a = index.get(source);
    const b = index.get(target);
    if (a !== undefined && b !== undefined) parent[find(a)] = find(b);
  }
  const groups = new Map<number, number[]>();
  nodeIds.forEach((_, i) => {
    const root = find(i);
    const group = groups.get(root);
    if (group) group.push(i);
    else groups.set(root, [i]);
  });
  return [...groups.values()];
};

/**
 * ELK lines connected components up in one long strip. This keeps each tree's
 * inner layout but packs the trees (largest first) into a block with a
 * screen-like aspect, and puts nodes without links in a grid after them:
 * below the trees in "TB", right of them in "LR". Mutates `positions`.
 */
export const arrangeComponents = (
  nodeIds: string[],
  edges: ElkLayoutInput["edges"],
  positions: Point[],
  direction: Direction,
): void => {
  const components = findComponents(nodeIds, edges);
  const trees = components
    .filter((c) => c.length > 1)
    .sort((a, b) => b.length - a.length);
  const isolated = components.filter((c) => c.length === 1).map((c) => c[0]);

  const boxes = trees.map((tree) => {
    const xs = tree.map((i) => positions[i].x);
    const ys = tree.map((i) => positions[i].y);
    const minX = Math.min(...xs);
    const minY = Math.min(...ys);
    return {
      minX,
      minY,
      width: Math.max(...xs) + NODE_WIDTH - minX,
      height: Math.max(...ys) + NODE_EXTENT - minY,
    };
  });
  const spots = packBoxes(boxes, direction, COMPONENT_GAP);
  let treesWidth = 0;
  let treesHeight = 0;
  trees.forEach((tree, t) => {
    const { minX, minY, width, height } = boxes[t];
    const { x, y } = spots[t];
    for (const i of tree) {
      positions[i] = {
        x: positions[i].x - minX + x,
        y: positions[i].y - minY + y,
      };
    }
    treesWidth = Math.max(treesWidth, x + width);
    treesHeight = Math.max(treesHeight, y + height);
  });

  if (isolated.length === 0) return;
  const square = Math.ceil(Math.sqrt(isolated.length));

  if (trees.length === 0) {
    const cols =
      direction === "LR" ? Math.min(square, GRID_LR_COLUMNS) : square;
    isolated.forEach((i, n) => {
      positions[i] = {
        x: (n % cols) * PITCH_X,
        y: Math.floor(n / cols) * PITCH_Y,
      };
    });
    return;
  }

  if (direction === "LR") {
    const rows = Math.max(
      Math.floor((treesHeight + NODE_GAP) / PITCH_Y),
      square,
    );
    const startX = treesWidth + COMPONENT_GAP;
    isolated.forEach((i, n) => {
      positions[i] = {
        x: startX + Math.floor(n / rows) * PITCH_X,
        y: (n % rows) * PITCH_Y,
      };
    });
    return;
  }

  const cols = Math.max(Math.floor((treesWidth + NODE_GAP) / PITCH_X), square);
  const startY = treesHeight + COMPONENT_GAP;
  isolated.forEach((i, n) => {
    positions[i] = {
      x: (n % cols) * PITCH_X,
      y: startY + Math.floor(n / cols) * PITCH_Y,
    };
  });
};
