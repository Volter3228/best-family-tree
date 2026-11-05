import {
  NODE_AVATAR_RADIUS,
  NODE_HEIGHT,
  NODE_WIDTH,
} from "@/constants/canvas";
import { FLOW_VIEWPORT_DIRECTION } from "@/libs/elk";
import { roundedPolyline } from "./edgePolyline";
import type { Direction, EdgeStyle, Point } from "@/types";

export interface EdgeGeometry {
  start: Point;
  end: Point;
  /** Bezier control points (style "bezier" only). */
  cp1?: Point;
  cp2?: Point;
  /** Waypoints between start and end (style "orthogonal" only). */
  elbows?: Point[];
}

const CENTER_X = NODE_WIDTH / 2;
const CENTER_Y = NODE_HEIGHT / 2;

// Edges touch the avatar circle, like the top/bottom points do in TB.
const endpoints = (
  source: Point,
  target: Point,
  direction: Direction,
): { start: Point; end: Point } =>
  direction === "LR"
    ? {
        start: {
          x: source.x + CENTER_X + NODE_AVATAR_RADIUS,
          y: source.y + CENTER_Y,
        },
        end: {
          x: target.x + CENTER_X - NODE_AVATAR_RADIUS,
          y: target.y + CENTER_Y,
        },
      }
    : {
        start: { x: source.x + CENTER_X, y: source.y + NODE_HEIGHT },
        end: { x: target.x + CENTER_X, y: target.y },
      };

/**
 * Edge path geometry for one node pair. `direction` picks the flow axis
 * (TB: top→down, LR: left→right); `style` picks the path shape. Bezier
 * control points sit halfway along the flow axis; orthogonal edges bend
 * at the axis midpoint.
 */
export const edgeGeometry = (
  source: Point,
  target: Point,
  direction: Direction = FLOW_VIEWPORT_DIRECTION.DESKTOP,
  style: EdgeStyle = "bezier",
): EdgeGeometry => {
  const { start, end } = endpoints(source, target, direction);

  if (style === "straight") return { start, end };

  if (style === "orthogonal") {
    const elbows =
      direction === "LR"
        ? [
            { x: (start.x + end.x) / 2, y: start.y },
            { x: (start.x + end.x) / 2, y: end.y },
          ]
        : [
            { x: start.x, y: (start.y + end.y) / 2 },
            { x: end.x, y: (start.y + end.y) / 2 },
          ];
    return { start, end, elbows };
  }

  const offset =
    direction === "LR"
      ? Math.abs(end.x - start.x) * 0.5
      : Math.abs(end.y - start.y) * 0.5;
  const [cp1, cp2] =
    direction === "LR"
      ? [
          { x: start.x + offset, y: start.y },
          { x: end.x - offset, y: end.y },
        ]
      : [
          { x: start.x, y: start.y + offset },
          { x: end.x, y: end.y - offset },
        ];
  return { start, end, cp1, cp2 };
};

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

/** Sample a cubic bezier into `samples` points (including both ends). */
export const sampleBezierCurve = (
  p0: Point,
  p1: Point,
  p2: Point,
  p3: Point,
  samples: number,
): Point[] => {
  const points: Point[] = [];
  for (let i = 0; i <= samples; i++) {
    const t = i / samples;
    points.push({
      x: bezierEval(p0.x, p1.x, p2.x, p3.x, t),
      y: bezierEval(p0.y, p1.y, p2.y, p3.y, t),
    });
  }
  return points;
};

/**
 * Sample the edge path into a polyline. Bezier curves get a dense sampling;
 * orthogonal edges get rounded elbows. Used by the animated lineage dash,
 * which can only follow sampled points.
 */
export const sampleEdgePath = (
  source: Point,
  target: Point,
  direction: Direction = FLOW_VIEWPORT_DIRECTION.DESKTOP,
  style: EdgeStyle = "bezier",
): Point[] => {
  const geo = edgeGeometry(source, target, direction, style);

  if (style === "straight") return [geo.start, geo.end];

  if (style === "orthogonal" && geo.elbows) {
    return roundedPolyline([geo.start, ...geo.elbows, geo.end]);
  }

  const { start, end, cp1, cp2 } = geo;
  return sampleBezierCurve(start, cp1!, cp2!, end, BEZIER_SAMPLES);
};
