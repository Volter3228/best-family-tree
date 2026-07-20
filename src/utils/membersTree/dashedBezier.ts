import { Graphics } from "pixi.js";
import { NODE_WIDTH, NODE_HEIGHT } from "@/constants/canvas";
import type { Point, SegmentData } from "@/types";

const BEZIER_SAMPLES = 45;

// Evaluate a cubic bezier at parameter t.
const bezierEval = (
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  t: number,
): number => {
  const it = 1 - t;
  return (
    it * it * it * p0 +
    3 * it * it * t * p1 +
    3 * it * t * t * p2 +
    t * t * t * p3
  );
};

// Interpolate a point along a polyline at a given arc distance (binary search).
const pointAtDist = (
  points: Point[],
  arcLengths: number[],
  d: number,
): Point => {
  const totalLen = arcLengths[arcLengths.length - 1];
  if (d <= 0) return points[0];
  if (d >= totalLen) return points[points.length - 1];

  let lo = 0;
  let hi = arcLengths.length - 1;
  while (lo < hi - 1) {
    const mid = (lo + hi) >> 1;
    if (arcLengths[mid] <= d) lo = mid;
    else hi = mid;
  }
  const t =
    arcLengths[hi] - arcLengths[lo] > 0
      ? (d - arcLengths[lo]) / (arcLengths[hi] - arcLengths[lo])
      : 0;
  return {
    x: points[lo].x + (points[hi].x - points[lo].x) * t,
    y: points[lo].y + (points[hi].y - points[lo].y) * t,
  };
};

/**
 * Sample a bezier curve between two node positions into a polyline with arc lengths.
 */
export const buildSegmentFromPositions = (
  source: Point,
  target: Point,
): SegmentData => {
  const sx = source.x + NODE_WIDTH / 2;
  const sy = source.y + NODE_HEIGHT;
  const ex = target.x + NODE_WIDTH / 2;
  const ey = target.y;

  const distY = Math.abs(ey - sy);
  const controlOffset = distY * 0.5;

  const cp1x = sx;
  const cp1y = sy + controlOffset;
  const cp2x = ex;
  const cp2y = ey - controlOffset;

  const points: Point[] = [];
  for (let i = 0; i <= BEZIER_SAMPLES; i++) {
    const t = i / BEZIER_SAMPLES;
    points.push({
      x: bezierEval(sx, cp1x, cp2x, ex, t),
      y: bezierEval(sy, cp1y, cp2y, ey, t),
    });
  }

  const arcLengths: number[] = [0];
  for (let i = 1; i < points.length; i++) {
    const dx = points[i].x - points[i - 1].x;
    const dy = points[i].y - points[i - 1].y;
    arcLengths.push(arcLengths[i - 1] + Math.sqrt(dx * dx + dy * dy));
  }

  return { points, arcLengths, totalLen: arcLengths[arcLengths.length - 1] };
};

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
      const startPt = pointAtDist(points, arcLengths, ds);
      g.moveTo(startPt.x, startPt.y);

      let i = 0;
      while (i < arcLengths.length && arcLengths[i] <= ds) i++;
      for (; i < arcLengths.length && arcLengths[i] < de; i++) {
        g.lineTo(points[i].x, points[i].y);
      }

      const endPt = pointAtDist(points, arcLengths, de);
      g.lineTo(endPt.x, endPt.y);

      g.setStrokeStyle({ ...strokeOptions, color: colors[colorIdx] });
      g.stroke();
    }
    pos += patternLen;
    groupIdx++;
  }
};
