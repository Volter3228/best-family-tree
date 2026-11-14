import {
  CONIC_LAYERS,
  cssAngleToCanvasRadians,
  getBakeFilter,
  getBakePadding,
  getBakeSize,
  getLayerStops,
} from "./bakeParams";

export interface AuroraBakeInput {
  containerWidth: number;
  containerHeight: number;
  colors: readonly [string, string, string];
  blurPx: number;
  saturate: number;
}

// Baking needs conic gradients and a canvas `filter` (Safari lacks the latter
// in older versions); without them the CSS filter stays in charge.
export const canBakeAurora = (): boolean => {
  if (typeof document === "undefined") return false;
  const ctx = document.createElement("canvas").getContext("2d");
  return !!ctx && "createConicGradient" in ctx && "filter" in ctx;
};

// One data URL per conic layer, in the order of CONIC_LAYERS.
export const bakeAuroraLayers = ({
  containerWidth,
  containerHeight,
  colors,
  blurPx,
  saturate,
}: AuroraBakeInput): string[] | null => {
  const box = getBakeSize(containerWidth, containerHeight);
  const pad = getBakePadding(blurPx);
  const width = box.width + pad * 2;
  const height = box.height + pad * 2;
  const urls: string[] = [];

  for (const spec of CONIC_LAYERS) {
    const source = document.createElement("canvas");
    source.width = width;
    source.height = height;
    const sourceCtx = source.getContext("2d");

    const target = document.createElement("canvas");
    target.width = width;
    target.height = height;
    const targetCtx = target.getContext("2d");
    if (!sourceCtx || !targetCtx) return null;

    const gradient = sourceCtx.createConicGradient(
      cssAngleToCanvasRadians(spec.fromDeg),
      pad + spec.atX * box.width,
      pad + spec.atY * box.height,
    );
    getLayerStops(spec, colors).forEach(([offset, color]) =>
      gradient.addColorStop(offset, color),
    );
    sourceCtx.fillStyle = gradient;
    sourceCtx.fillRect(pad, pad, box.width, box.height);

    targetCtx.filter = getBakeFilter(blurPx, saturate);
    targetCtx.drawImage(source, 0, 0);
    urls.push(target.toDataURL("image/png"));
  }

  return urls;
};
