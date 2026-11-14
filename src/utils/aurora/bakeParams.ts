// The aurora's conic layers are blurred by a huge CSS filter that the GPU
// re-runs every frame while they drift. The blur only produces a very smooth
// image, so it is drawn once into a small canvas instead (scaled down by
// BAKE_SCALE, blur radius scaled with it) and the layers just move that image.

export const BAKE_SCALE = 8;
const MIN_BAKE_SIDE = 16;

// Both layers are `inset: -50%`: twice the container in each direction.
export const LAYER_SIZE_FACTOR = 2;

export interface ConicLayerSpec {
  // CSS `from <angle>`.
  fromDeg: number;
  // CSS `at <x> <y>`, as fractions of the layer.
  atX: number;
  atY: number;
  // Indexes into the three conic colors, in gradient order (the last stop
  // repeats the first).
  colorOrder: readonly [number, number, number];
}

// Mirrors `.aurora-bg::before` and `::after` in background.css.
export const CONIC_LAYERS: readonly ConicLayerSpec[] = [
  { fromDeg: 0, atX: 0.5, atY: 0.5, colorOrder: [0, 1, 2] },
  { fromDeg: 180, atX: 0.4, atY: 0.6, colorOrder: [1, 2, 0] },
];

export const getBakeSize = (containerWidth: number, containerHeight: number) => ({
  width: Math.max(
    MIN_BAKE_SIDE,
    Math.round((containerWidth * LAYER_SIZE_FACTOR) / BAKE_SCALE),
  ),
  height: Math.max(
    MIN_BAKE_SIDE,
    Math.round((containerHeight * LAYER_SIZE_FACTOR) / BAKE_SCALE),
  ),
});

// A CSS blur paints beyond the element's box (about three standard deviations).
// The baked image keeps that margin so the drifting layer shows no hard corners.
export const BLUR_SPREAD = 3;

// Margin around the layer, in full-size CSS px (applied to the layer's inset).
export const getBlurPaddingPx = (blurPx: number) =>
  Math.ceil(blurPx * BLUR_SPREAD);

// The same margin in baked-image pixels.
export const getBakePadding = (blurPx: number) =>
  Math.ceil(getBlurPaddingPx(blurPx) / BAKE_SCALE);

export const getBakeFilter = (blurPx: number, saturate: number) =>
  `blur(${blurPx / BAKE_SCALE}px) saturate(${saturate})`;

// Canvas conic gradients start at 3 o'clock; CSS ones at 12 o'clock.
export const cssAngleToCanvasRadians = (deg: number) =>
  ((deg - 90) * Math.PI) / 180;

// Gradient stop colors for a layer, closing the loop on the first color.
export const getLayerStops = (
  spec: ConicLayerSpec,
  colors: readonly [string, string, string],
): [number, string][] => {
  const [a, b, c] = spec.colorOrder.map((index) => colors[index]);
  return [
    [0, a],
    [1 / 3, b],
    [2 / 3, c],
    [1, a],
  ];
};
