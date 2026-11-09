export interface ViewState {
  scale: number;
  x: number;
  y: number;
}

export interface Size {
  w: number;
  h: number;
}

export interface Rect extends Size {
  left: number;
  top: number;
}

export const MIN_SCALE = 0.5;
export const MAX_SCALE = 6;
export const RUBBER_RESISTANCE = 0.35;
const LARGE_SCREEN_FILL = 0.75;
const SCALE_STOPS = [0.5, 0.75, 1, 1.5, 2, 3, 4, 6];

/** Next preset zoom level above/below `scale`, for buttons and +/- keys. */
export const stepScale = (scale: number, dir: 1 | -1) => {
  const next =
    dir > 0
      ? SCALE_STOPS.find((s) => s > scale + 0.01)
      : [...SCALE_STOPS].reverse().find((s) => s < scale - 0.01);
  return next ?? clampScale(scale);
};

export const clampScale = (scale: number) =>
  Math.min(MAX_SCALE, Math.max(MIN_SCALE, scale));

/**
 * Zooms by `factor` keeping the image point under `point` fixed. `point` is
 * relative to the stage center, the same origin as `x` / `y`.
 */
export const zoomAt = (
  state: ViewState,
  point: { x: number; y: number },
  factor: number,
): ViewState => {
  const scale = clampScale(state.scale * factor);
  const ratio = scale / state.scale;
  return {
    scale,
    x: point.x - (point.x - state.x) * ratio,
    y: point.y - (point.y - state.y) * ratio,
  };
};

const clampAxis = (value: number, bound: number, resistance: number) => {
  if (Math.abs(value) <= bound) return value;
  const excess = Math.abs(value) - bound;
  return Math.sign(value) * (bound + excess * resistance);
};

/**
 * Keeps the scaled image covering the stage. `resistance` 0 is a hard clamp,
 * above 0 the overflow is only damped (rubber band).
 */
export const clampOffset = (
  state: ViewState,
  stage: Size,
  img: Size,
  resistance = 0,
) => ({
  x: clampAxis(
    state.x,
    Math.max(0, (img.w * state.scale - stage.w) / 2),
    resistance,
  ),
  y: clampAxis(
    state.y,
    Math.max(0, (img.h * state.scale - stage.h) / 2),
    resistance,
  ),
});

/** Largest rect with the natural aspect ratio that fits the viewport. */
export const fitRect = (natural: Size, viewport: Size, padding = 16): Size => {
  const maxW = Math.max(1, viewport.w - padding * 2);
  const maxH = Math.max(1, viewport.h - padding * 2);
  const k = Math.min(maxW / natural.w, maxH / natural.h);
  return { w: natural.w * k, h: natural.h * k };
};

export interface CoverMorph {
  x: number;
  y: number;
  scale: number;
  clipPath: string;
}

/**
 * Start (or end) state that makes the final rect look like the cropped
 * circular thumbnail: scaled so the short side matches the thumbnail, and
 * clipped to the centered square circle.
 */
export const coverMorph = (
  thumb: Pick<DOMRect, "left" | "top" | "width" | "height">,
  final: Rect,
  fit: "circle" | "contain" = "circle",
): CoverMorph => {
  const x = thumb.left + thumb.width / 2 - (final.left + final.w / 2);
  const y = thumb.top + thumb.height / 2 - (final.top + final.h / 2);
  if (fit === "contain") {
    const k = thumb.width / final.w;
    return {
      x,
      y,
      scale: k,
      clipPath: `inset(0px 0px 0px 0px round ${12 / k}px)`,
    };
  }
  const side = Math.min(final.w, final.h);
  const thumbSide = Math.min(thumb.width, thumb.height);
  const insetX = (final.w - side) / 2;
  const insetY = (final.h - side) / 2;
  return {
    x,
    y,
    scale: thumbSide / side,
    clipPath: `inset(${insetY}px ${insetX}px ${insetY}px ${insetX}px round ${side / 2}px)`,
  };
};

// Always four insets: gsap only interpolates strings with matching shapes, and
// browsers collapse "0px 0px" in computed values (the morph then snaps).
export const FULL_CLIP = "inset(0px 0px 0px 0px round 16px)";

/**
 * Fit rect for the viewer. On large screens "100%" stays well inside the
 * screen instead of filling it edge to edge.
 */
export const viewerFitRect = (natural: Size, viewport: Size, padding = 16) => {
  const rect = fitRect(natural, viewport, padding);
  const large = viewport.w >= 1024 && viewport.h >= 700;
  const k = large ? LARGE_SCREEN_FILL : 1;
  return { w: rect.w * k, h: rect.h * k };
};
