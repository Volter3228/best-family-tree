import { buildAncestorChain, buildSegmentFromPositions } from "@/utils";
import { MIN_ANIM_DURATION } from "@/constants/canvas/lineageEdgePath";
import type { MembersMap, NodePositions, SegmentData, PathData } from "@/types";

/**
 * Build path data (segments + cumulative offsets) for a member's ancestor chain.
 */
export const buildPath = (
  memberId: string,
  membersMap: MembersMap,
  nodePositions: NodePositions,
): PathData => {
  const fullChain = buildAncestorChain(memberId, membersMap);
  // Keep only nodes visible in the current view (filtered trees may hide ancestors)
  const chain = fullChain.filter((id) => nodePositions.has(id));
  const segments: SegmentData[] = [];
  for (let i = 0; i < chain.length - 1; i++) {
    const s = nodePositions.get(chain[i]);
    const t = nodePositions.get(chain[i + 1]);
    if (!s || !t) continue;
    segments.push(buildSegmentFromPositions(s, t));
  }
  const offsets: number[] = [0];
  for (let i = 0; i < segments.length; i++) {
    offsets.push(offsets[i] + segments[i].totalLen);
  }
  return {
    chain,
    segments,
    offsets,
    totalLen: offsets[offsets.length - 1] ?? 0,
  };
};

/**
 * Find the arc-length at which two chains diverge.
 */
export const findCommonLen = (a: PathData, b: PathData): number => {
  const minLen = Math.min(a.chain.length, b.chain.length);
  let shared = 0;
  for (let i = 0; i < minLen; i++) {
    if (a.chain[i] !== b.chain[i]) break;
    shared = i;
  }
  return a.offsets[shared] ?? 0;
};

/**
 * Scale base duration proportionally to distance, clamped to MIN_ANIM_DURATION.
 */
export const animDuration = (dist: number, totalLen: number, base: number) =>
  totalLen > 0
    ? Math.max(MIN_ANIM_DURATION, base * (dist / totalLen))
    : MIN_ANIM_DURATION;
