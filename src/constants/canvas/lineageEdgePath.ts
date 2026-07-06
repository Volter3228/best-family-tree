import { PathData } from "@/types";

// Dash pattern constants
export const DASH_LEN = 30;
export const GAP_LEN = 20;
export const PATTERN_LEN = DASH_LEN + GAP_LEN;

// Dash animation speed (world units per second)
export const SPEED = 50;

// Transition animation durations (seconds, for full-path)
export const DRAW_IN_BASE = 0.6;
export const RETRACT_BASE = 0.4;
export const MIN_ANIM_DURATION = 0.3;

export const EMPTY_PATH: PathData = {
  chain: [],
  segments: [],
  offsets: [0],
  totalLen: 0,
};
