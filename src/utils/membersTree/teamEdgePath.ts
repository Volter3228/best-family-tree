import { sampleBezierCurve } from "./edgeGeometry";
import { roundedPolyline } from "./edgePolyline";
import { NODE_AVATAR_RADIUS } from "@/constants/canvas";
import type { Direction, EdgeStyle, Point, TeamEdge } from "@/types";

// How far (as a share of the flow-axis distance) a fanned end leans sideways.
const FAN_LEAN = 0.3;
const LOWER_ROW_START_LEAN = 0.2;
// Negative: the first-row curve's end control sits on the inner side.
const FIRST_ROW_END_LEAN = -0.4;
const BEZIER_SAMPLES = 45;
// Sunk slightly into the circle so the stroke visibly meets the outline.
const CIRCLE_INSET = 2;

// Point on the avatar circle (whose top is `top`) hit by a line coming from
// `from` and aimed at the circle's centre — so the line meets it head-on.
const circleHit = (top: Point, from: Point): Point => {
  const center = { x: top.x, y: top.y + NODE_AVATAR_RADIUS };
  const d = Math.hypot(center.x - from.x, center.y - from.y) || 1;
  const r = NODE_AVATAR_RADIUS - CIRCLE_INSET;
  return {
    x: center.x - ((center.x - from.x) / d) * r,
    y: center.y - ((center.y - from.y) / d) * r,
  };
};

/**
 * The drawn route of one team edge as a polyline under a given line style.
 * Curves are sampled densely enough to look identical to a native bezier;
 * orthogonal routes get rounded corners. Centralising the shape lets the
 * layer morph between styles by lerping two of these paths.
 */
export const teamEdgePath = (
  { start, end, bendY, fanStart, fanEnd, points, endsOnAvatar, round }: TeamEdge,
  direction: Direction,
  style: EdgeStyle,
): Point[] => {
  if (points) {
    return style === "orthogonal" ? roundedPolyline(points, round) : points;
  }

  if (style === "straight") {
    return endsOnAvatar ? [start, circleHit(end, start)] : [start, end];
  }

  const isLR = direction === "LR";
  if (style === "orthogonal") {
    if (isLR) {
      const midX = (start.x + end.x) / 2;
      return roundedPolyline([
        start,
        { x: midX, y: start.y },
        { x: midX, y: end.y },
        end,
      ]);
    }
    // Bend at the row gap when the edge has to pass through it.
    const midY = bendY ?? (start.y + end.y) / 2;
    return roundedPolyline([
      start,
      { x: start.x, y: midY },
      { x: end.x, y: midY },
      end,
    ]);
  }

  const dx = end.x - start.x;
  const dy = end.y - start.y;
  if (isLR) {
    // Sideways fan: controls offset along x, fan lean along y.
    const control = Math.abs(dx) * 0.5;
    return sampleBezierCurve(
      start,
      { x: start.x + control, y: fanStart ? start.y + dy * FAN_LEAN : start.y },
      { x: end.x - control, y: fanEnd ? end.y - dy * FAN_LEAN : end.y },
      end,
      BEZIER_SAMPLES,
    );
  }

  const curveEndY = bendY ?? end.y;
  const control = Math.abs(curveEndY - start.y) * 0.5;
  // Member fans: first-row curves lean out early and arrive from the inside,
  // lower-row curves lean less, so a lower-row curve never runs into a
  // first-row neighbour (numerically checked up to 14 members).
  const lowerRow = bendY !== undefined;
  const startLean = fanStart ? (lowerRow ? LOWER_ROW_START_LEAN : FAN_LEAN) : 0;
  const endLean = fanEnd
    ? FAN_LEAN
    : fanStart && !lowerRow
      ? FIRST_ROW_END_LEAN
      : 0;
  const cp2 = { x: end.x - dx * endLean, y: curveEndY - control };
  // Without a row-gap bend the curve ends on the circle, heading for its centre.
  const curveEnd = lowerRow || !endsOnAvatar ? { x: end.x, y: curveEndY } : circleHit(end, cp2);
  const path = sampleBezierCurve(
    start,
    { x: start.x + dx * startLean, y: start.y + control },
    cp2,
    curveEnd,
    BEZIER_SAMPLES,
  );
  if (lowerRow) path.push(end);
  return path;
};
