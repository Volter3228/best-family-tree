import type { Point } from "@/types";

const CORNER_SAMPLES = 8;
const MAX_CORNER_RADIUS = 24;
const MORPH_UNIFORM_SAMPLES = 40;
// Paths with more vertices than this are already densely sampled curves.
const MORPH_SPARSE_VERTICES = 32;

const dist = (a: Point, b: Point) => Math.hypot(a.x - b.x, a.y - b.y);

// Quadratic bezier through (t1, elbow, t2) — the rounded corner.
const quadEval = (p0: Point, p1: Point, p2: Point, t: number): Point => {
  const it = 1 - t;
  return {
    x: it * it * p0.x + 2 * it * t * p1.x + t * t * p2.x,
    y: it * it * p0.y + 2 * it * t * p1.y + t * t * p2.y,
  };
};

// Cumulative arc length at every vertex.
export const cumulativeLengths = (points: Point[]): number[] => {
  const lengths = [0];
  for (let i = 1; i < points.length; i++) {
    lengths.push(lengths[i - 1] + dist(points[i - 1], points[i]));
  }
  return lengths;
};

// Point at arc distance `d` along a polyline (binary search).
export const pointAtLength = (
  points: Point[],
  lengths: number[],
  d: number,
): Point => {
  const last = points.length - 1;
  if (d <= 0 || lengths[last] === 0) return points[0];
  if (d >= lengths[last]) return points[last];
  let lo = 0;
  let hi = last;
  while (lo < hi - 1) {
    const mid = (lo + hi) >> 1;
    if (lengths[mid] <= d) lo = mid;
    else hi = mid;
  }
  const span = lengths[hi] - lengths[lo];
  const t = span === 0 ? 0 : (d - lengths[lo]) / span;
  return {
    x: points[lo].x + (points[hi].x - points[lo].x) * t,
    y: points[lo].y + (points[hi].y - points[lo].y) * t,
  };
};

/** Evenly re-space a polyline to exactly `count` points along its length. */
export const resamplePolyline = (points: Point[], count: number): Point[] => {
  if (points.length === 0) return [];
  const lengths = cumulativeLengths(points);
  const total = lengths[lengths.length - 1];
  return Array.from({ length: count }, (_, i) =>
    pointAtLength(points, lengths, count > 1 ? (total * i) / (count - 1) : 0),
  );
};

/**
 * Re-samples two polylines at the same relative arc-length positions so they
 * can be interpolated point by point. Sparse paths (rounded orthogonal routes)
 * contribute their own vertices to the positions, so each path's corners are
 * reproduced exactly: the first and last morph frames equal the real shapes,
 * and corners round smoothly instead of popping.
 */
export const alignPolylines = (a: Point[], b: Point[]): [Point[], Point[]] => {
  const lengthsA = cumulativeLengths(a);
  const lengthsB = cumulativeLengths(b);
  const totalA = lengthsA[lengthsA.length - 1];
  const totalB = lengthsB[lengthsB.length - 1];

  // Keyed by a rounded value for de-duplication; the exact value is kept.
  const params = new Map<number, number>();
  const add = (s: number) => {
    const key = Math.round(s * 1e4);
    if (!params.has(key)) params.set(key, s);
  };
  for (let i = 0; i <= MORPH_UNIFORM_SAMPLES; i++) add(i / MORPH_UNIFORM_SAMPLES);
  const addVertices = (points: Point[], lengths: number[], total: number) => {
    if (total === 0 || points.length > MORPH_SPARSE_VERTICES) return;
    lengths.forEach((d) => add(d / total));
  };
  addVertices(a, lengthsA, totalA);
  addVertices(b, lengthsB, totalB);

  const sorted = [...params.values()].sort((x, y) => x - y);
  return [
    sorted.map((s) => pointAtLength(a, lengthsA, s * totalA)),
    sorted.map((s) => pointAtLength(b, lengthsB, s * totalB)),
  ];
};

/** Point-wise lerp between two polylines of the same length. */
export const lerpPoints = (a: Point[], b: Point[], t: number): Point[] =>
  a.map((p, i) => ({
    x: p.x + (b[i].x - p.x) * t,
    y: p.y + (b[i].y - p.y) * t,
  }));

/**
 * Polyline through the joints with each corner replaced by an arc of at most
 * MAX_CORNER_RADIUS (shrunk so it never exceeds half an adjacent segment).
 */
export const roundedPolyline = (
  joints: Point[],
  // Joint indices to round; all interior joints when omitted.
  roundAt?: readonly number[],
): Point[] => {
  const points: Point[] = [joints[0]];
  for (let i = 1; i < joints.length - 1; i++) {
    const prev = joints[i - 1];
    const elbow = joints[i];
    const next = joints[i + 1];
    if (roundAt && !roundAt.includes(i)) {
      points.push(elbow);
      continue;
    }
    const d1 = dist(prev, elbow);
    const d2 = dist(elbow, next);
    const r = Math.min(MAX_CORNER_RADIUS, d1 / 2, d2 / 2);
    if (r < 2) {
      points.push(elbow);
      continue;
    }
    const t1 = {
      x: elbow.x + ((prev.x - elbow.x) / d1) * r,
      y: elbow.y + ((prev.y - elbow.y) / d1) * r,
    };
    const t2 = {
      x: elbow.x + ((next.x - elbow.x) / d2) * r,
      y: elbow.y + ((next.y - elbow.y) / d2) * r,
    };
    points.push(t1);
    for (let s = 1; s <= CORNER_SAMPLES; s++) {
      points.push(quadEval(t1, elbow, t2, s / CORNER_SAMPLES));
    }
  }
  points.push(joints[joints.length - 1]);
  return points;
};
