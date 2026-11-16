import { Graphics } from "pixi.js";
import { sampleEdgePath } from "./edgeGeometry";
import {
  alignPolylines,
  cumulativeLengths,
  lerpPoints,
} from "./edgePolyline";
import { FLOW_VIEWPORT_DIRECTION } from "@/libs/elk";
import type { Direction, EdgeStyle, Point, SegmentData } from "@/types";

/**
 * Sample the edge path between two node positions into a polyline with arc
 * lengths. Follows the same direction and line style as static edges —
 * orthogonal corners come out rounded, like the drawn edges.
 */
export const buildSegmentFromPositions = (
  source: Point,
  target: Point,
  direction: Direction = FLOW_VIEWPORT_DIRECTION.DESKTOP,
  style: EdgeStyle = "bezier",
): SegmentData => {
  const points = sampleEdgePath(source, target, direction, style);
  return segmentFromPoints(points);
};

const segmentFromPoints = (points: Point[]): SegmentData => {
  const arcLengths = cumulativeLengths(points);
  return { points, arcLengths, totalLen: arcLengths[arcLengths.length - 1] };
};

export interface SegmentMorph {
  from: Point[];
  to: Point[];
}

/** Aligns two routes of the same edge once, so each frame is a cheap lerp. */
export const alignSegments = (a: SegmentData, b: SegmentData): SegmentMorph => {
  const [from, to] = alignPolylines(a.points, b.points);
  return { from, to };
};

/** The route between an aligned pair at `t` in [0, 1]. */
export const lerpSegment = (morph: SegmentMorph, t: number): SegmentData =>
  segmentFromPoints(lerpPoints(morph.from, morph.to, t));

interface DashStrokeOptions {
  width: number;
  alpha?: number;
  cap?: "round" | "butt" | "square";
  join?: "round" | "miter" | "bevel";
  pixelLine?: boolean;
}

export type DashStyle = DashStrokeOptions & { color: string };

/** One stroke style per colour, built once and reused by every redraw. */
export const buildDashStyles = (
  colors: readonly string[],
  options: DashStrokeOptions,
): DashStyle[] => colors.map((color) => ({ ...options, color }));

/**
 * Draw dashes along a pre-computed segment, cycling through `styles` per dash.
 * dashOffset controls animation position. Colour is position-based so it flows
 * smoothly as dashes animate. Dashes of one colour share a single path and
 * stroke, so a redraw costs one stroke per colour instead of one per dash.
 */
export const drawDashes = (
  g: Graphics,
  seg: SegmentData,
  dashLen: number,
  gapLen: number,
  dashOffset: number,
  maxDist: number = seg.totalLen,
  styles: readonly DashStyle[] = [],
): void => {
  const { points, arcLengths, totalLen } = seg;
  const clampLen = Math.min(totalLen, maxDist);
  const n = styles.length;
  if (clampLen <= 0 || n === 0) return;

  const patternLen = dashLen + gapLen;
  let pos = -(dashOffset % patternLen);
  if (pos > 0) pos -= patternLen;

  const firstGroup = Math.round((dashOffset + pos) / patternLen);
  const lastIdx = points.length - 1;

  // Binary search for the segment holding arc distance `d`.
  const segmentAt = (d: number) => {
    let lo = 0;
    let hi = lastIdx;
    while (lo < hi - 1) {
      const mid = (lo + hi) >> 1;
      if (arcLengths[mid] <= d) lo = mid;
      else hi = mid;
    }
    return hi;
  };
  const lineToAt = (d: number, move: boolean) => {
    let x: number;
    let y: number;
    if (d <= 0 || arcLengths[lastIdx] === 0) {
      x = points[0].x;
      y = points[0].y;
    } else if (d >= arcLengths[lastIdx]) {
      x = points[lastIdx].x;
      y = points[lastIdx].y;
    } else {
      const hi = segmentAt(d);
      const lo = hi - 1;
      const span = arcLengths[hi] - arcLengths[lo];
      const t = span === 0 ? 0 : (d - arcLengths[lo]) / span;
      x = points[lo].x + (points[hi].x - points[lo].x) * t;
      y = points[lo].y + (points[hi].y - points[lo].y) * t;
    }
    if (move) g.moveTo(x, y);
    else g.lineTo(x, y);
  };

  for (let c = 0; c < n; c++) {
    // Dashes cycle through the colours, so this colour owns every n-th one.
    const firstJ = (((c - firstGroup) % n) + n) % n;
    let started = false;
    for (let p = pos + firstJ * patternLen; p < clampLen; p += patternLen * n) {
      const ds = Math.max(p, 0);
      const de = Math.min(p + dashLen, clampLen);
      if (de <= ds) continue;
      if (!started) {
        g.beginPath();
        started = true;
      }
      lineToAt(ds, true);
      let i = 0;
      while (i < arcLengths.length && arcLengths[i] <= ds) i++;
      for (; i < arcLengths.length && arcLengths[i] < de; i++) {
        g.lineTo(points[i].x, points[i].y);
      }
      lineToAt(de, false);
    }
    if (started) {
      g.setStrokeStyle(styles[c]);
      g.stroke();
    }
  }
};
