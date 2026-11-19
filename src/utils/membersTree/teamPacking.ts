import { TEAM_FRAME_GAP, TEAM_PACK_ASPECT } from "@/constants/canvas";
import type { Direction } from "@/types";

interface Size {
  width: number;
  height: number;
}

interface Placement extends Size {
  x: number;
  y: number;
}

// Shelf packing in reading order: frames go left to right and wrap at the
// given width. Lanes follow each other in the same rows (a lane does not start
// a new row); an extra gap (the same size again) marks where a new lane begins.
const shelfPack = (
  lanes: Size[][],
  maxWidth: number,
  gap: number,
): Placement[] => {
  const placed: Placement[] = [];
  let x = 0;
  let y = 0;
  let rowHeight = 0;

  lanes.forEach((lane, laneIndex) => {
    if (laneIndex > 0 && x > 0) x += gap;
    for (const { width, height } of lane) {
      if (x > 0 && x + width > maxWidth) {
        y += rowHeight + gap;
        x = 0;
        rowHeight = 0;
      }
      placed.push({ x, y, width, height });
      x += width + gap;
      rowHeight = Math.max(rowHeight, height);
    }
  });
  return placed;
};

// Bounding area, penalised the further it is from a screen-like aspect.
const scorePacking = (placed: Placement[]) => {
  const width = Math.max(...placed.map((p) => p.x + p.width));
  const height = Math.max(...placed.map((p) => p.y + p.height));
  const aspect = width / height;
  return (
    width *
    height *
    Math.max(aspect / TEAM_PACK_ASPECT, TEAM_PACK_ASPECT / aspect)
  );
};

const computePacking = (
  lanes: Size[][],
  gap: number,
): { x: number; y: number }[] => {
  const sizes = lanes.flat();
  const area = sizes.reduce(
    (sum, s) => sum + (s.width + gap) * (s.height + gap),
    0,
  );
  const maxFrameWidth = Math.max(...sizes.map((s) => s.width));

  let best: Placement[] = [];
  let bestScore = Infinity;
  for (const factor of [0.7, 0.85, 1, 1.15, 1.3, 1.5]) {
    const maxWidth = Math.max(
      maxFrameWidth,
      Math.sqrt(area * TEAM_PACK_ASPECT) * factor,
    );
    const placed = shelfPack(lanes, maxWidth, gap);
    const score = scorePacking(placed);
    if (score < bestScore) {
      bestScore = score;
      best = placed;
    }
  }
  return best.map(({ x, y }) => ({ x, y }));
};

// Left-to-right trees flow top to bottom: pack the transposed frames (columns
// become rows), then swap the axes of the result back.
const computeDirectedPacking = (
  lanes: Size[][],
  direction: Direction,
  gap: number,
): { x: number; y: number }[] => {
  if (direction === "TB") return computePacking(lanes, gap);
  const transposed = lanes.map((lane) =>
    lane.map(({ width, height }) => ({ width: height, height: width })),
  );
  return computePacking(transposed, gap).map(({ x, y }) => ({ x: y, y: x }));
};

let lastPacking: { key: string; positions: { x: number; y: number }[] } | null =
  null;

/**
 * Place frames lane by lane in reading order, keeping the given order inside a
 * lane (so teams stay in chronological order). Positions are returned for the lanes'
 * frames in flattened order. In "TB" frames go left to right and wrap into rows;
 * in "LR" they go top to bottom and wrap into columns. The wrap size is picked
 * so the whole layout is close to a screen-like aspect.
 */
export const packLanes = (
  lanes: Size[][],
  direction: Direction = "TB",
): { x: number; y: number }[] => {
  // Relayouts (member edits, filter changes) usually keep every frame size, so
  // the previous packing is reused instead of searching again.
  const key =
    direction +
    ":" +
    lanes
      .map((lane) => lane.map((s) => s.width + "x" + s.height).join(","))
      .join("|");
  if (lastPacking?.key === key) return lastPacking.positions;
  const positions = computeDirectedPacking(lanes, direction, TEAM_FRAME_GAP);
  lastPacking = { key, positions };
  return positions;
};

/**
 * Pack boxes in the given order with the same screen-like aspect search as
 * `packLanes` (one lane, no cache). Returns each box's top-left corner.
 */
export const packBoxes = (
  sizes: Size[],
  direction: Direction,
  gap: number,
): { x: number; y: number }[] =>
  sizes.length === 0 ? [] : computeDirectedPacking([sizes], direction, gap);
