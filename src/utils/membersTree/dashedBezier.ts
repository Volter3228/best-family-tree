import { Graphics } from "pixi.js";
import { sampleEdgePath } from "./edgeGeometry";
import {
  alignPolylines,
  cumulativeLengths,
  lerpPoints,
  pointAtLength,
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

/**
 * Draw dashes along a pre-computed segment, cycling through `colors` per dash.
 * dashOffset controls animation position.
 * Color is position-based so it flows smoothly as dashes animate.
 */
export const drawDashes = (
  g: Graphics,
  seg: SegmentData,
  dashLen: number,
  gapLen: number,
  dashOffset: number,
  maxDist: number = seg.totalLen,
  colors: readonly string[] = [],
  strokeOptions: DashStrokeOptions = { width: 1 },
): void => {
  const { points, arcLengths, totalLen } = seg;
  const clampLen = Math.min(totalLen, maxDist);
  if (clampLen <= 0 || colors.length === 0) return;

  const patternLen = dashLen + gapLen;
  let pos = -(dashOffset % patternLen);
  if (pos > 0) pos -= patternLen;

  let groupIdx = Math.round((dashOffset + pos) / patternLen);

  while (pos < clampLen) {
    const ds = Math.max(pos, 0);
    const de = Math.min(pos + dashLen, clampLen);
    if (de > ds) {
      const colorIdx =
        ((groupIdx % colors.length) + colors.length) % colors.length;

      g.beginPath();
      const startPt = pointAtLength(points, arcLengths, ds);
      g.moveTo(startPt.x, startPt.y);

      let i = 0;
      while (i < arcLengths.length && arcLengths[i] <= ds) i++;
      for (; i < arcLengths.length && arcLengths[i] < de; i++) {
        g.lineTo(points[i].x, points[i].y);
      }

      const endPt = pointAtLength(points, arcLengths, de);
      g.lineTo(endPt.x, endPt.y);

      g.setStrokeStyle({ ...strokeOptions, color: colors[colorIdx] });
      g.stroke();
    }
    pos += patternLen;
    groupIdx++;
  }
};
