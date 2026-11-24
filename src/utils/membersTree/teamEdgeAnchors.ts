import {
  NODE_AVATAR_RADIUS,
  NODE_HEIGHT,
  NODE_WIDTH,
} from "@/constants/canvas";
import type { Point } from "@/types";

export const AVATAR_CENTER_X = NODE_WIDTH / 2;
export const AVATAR_CENTER_Y = NODE_HEIGHT / 2;
// Edges start this far inside the avatar outline, so no gap shows.
export const START_INSET = 2;

export interface TeamMember {
  point: Point;
  row: number;
}

// Half-chord of the avatar circle at `offset` from its centre line.
export const arc = (offset: number) =>
  Math.sqrt(Math.max(0, NODE_AVATAR_RADIUS ** 2 - offset ** 2));

// Morph key of the member fan edge nearest to `value` along the trunk.
export const nearestKey = (value: number, positions: number[]) => {
  let best = 0;
  positions.forEach((p, i) => {
    if (Math.abs(p - value) < Math.abs(positions[best] - value)) best = i;
  });
  return `m${best}`;
};
