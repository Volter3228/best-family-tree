import {
  ACCIDENTAL_DRAG_MAX_DISTANCE,
  ACCIDENTAL_DRAG_MAX_MS,
  TAP_MOVE_TOLERANCE,
} from "@/constants/canvas";

/**
 * Whether a press-and-release on a canvas item counts as a click. A press that
 * barely moved is a click; one that moved a little but was over quickly is most
 * likely a click that slipped. Anything longer or further is a pan.
 */
export const isTapGesture = (distancePx: number, durationMs: number) =>
  distancePx <= TAP_MOVE_TOLERANCE ||
  (distancePx <= ACCIDENTAL_DRAG_MAX_DISTANCE &&
    durationMs <= ACCIDENTAL_DRAG_MAX_MS);
