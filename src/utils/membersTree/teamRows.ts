import {
  NODE_WIDTH,
  TEAM_COLUMN_GAP,
  TEAM_LAYOUT_COLUMNS,
} from "@/constants/canvas";

const NODE_PITCH = NODE_WIDTH + TEAM_COLUMN_GAP;

// Node centre offsets (relative to the axis) for a row centred on it.
export const centeredCenters = (count: number) =>
  Array.from({ length: count }, (_, i) => (i - (count - 1) / 2) * NODE_PITCH);

// Nodes at +-1, +-2, ... pitches, leaving the axis itself empty.
const pairedCenters = (count: number) =>
  Array.from({ length: count }, (_, i) => {
    const step = Math.floor(i / 2) + 1;
    return i % 2 === 0 ? -step * NODE_PITCH : step * NODE_PITCH;
  }).sort((a, b) => a - b);

/**
 * Symmetric node centres for each row of members. Two-row layouts put every
 * lower node in a gap between upper nodes, so an edge can drop straight down
 * to it without crossing an avatar:
 * - odd count: rows of k and k-1 (centred rows interleave by half a pitch);
 * - even count: an even upper row and a lower row using every other gap
 *   pair, leaving the centre gap empty.
 */
export const planMemberRows = (count: number): number[][] => {
  if (count === 0) return [];
  if (count <= TEAM_LAYOUT_COLUMNS) return [centeredCenters(count)];

  if (count % 2 === 1) {
    const upper = (count + 1) / 2;
    return [centeredCenters(upper), centeredCenters(upper - 1)];
  }

  let upper = Math.ceil((count + 2) / 2);
  if (upper % 2 === 1) upper += 1;
  return [centeredCenters(upper), pairedCenters(count - upper)];
};
