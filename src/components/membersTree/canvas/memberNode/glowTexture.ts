import { Texture } from "pixi.js";
import {
  NODE_WIDTH,
  NODE_AVATAR_SIZE,
  NODE_CARD_HEIGHT,
  NODE_CARD_RADIUS,
} from "@/constants/canvas";

// Blurred white halos of the avatar and of the card, each painted once and
// shared by every node (they replace a per-node DropShadowFilter that
// re-blurred each frame).
export type GlowKind = "avatar" | "card";

export const GLOW_BLUR = 16;
// Room around the shape for the blur to fade out; a sprite sits this far
// above and left of the shape it glows around.
export const GLOW_PADDING = 40;

const SIZES: Record<GlowKind, { width: number; height: number }> = {
  avatar: { width: NODE_AVATAR_SIZE, height: NODE_AVATAR_SIZE },
  card: { width: NODE_WIDTH, height: NODE_CARD_HEIGHT },
};

const textures: Partial<Record<GlowKind, Texture>> = {};

const paint = (kind: GlowKind): Texture | null => {
  if (typeof document === "undefined") return null;
  const { width, height } = SIZES[kind];
  const canvas = document.createElement("canvas");
  canvas.width = width + GLOW_PADDING * 2;
  canvas.height = height + GLOW_PADDING * 2;
  const ctx = canvas.getContext("2d");
  if (!ctx) return null;

  // The shape is drawn this far off the canvas so only its shadow lands on it.
  const offset = canvas.width + GLOW_BLUR * 4;
  ctx.shadowColor = "#ffffff";
  ctx.shadowBlur = GLOW_BLUR;
  ctx.shadowOffsetX = offset;
  ctx.fillStyle = "#ffffff";

  const left = GLOW_PADDING - offset;
  ctx.beginPath();
  if (kind === "avatar") {
    ctx.arc(
      left + width / 2,
      GLOW_PADDING + height / 2,
      width / 2,
      0,
      Math.PI * 2,
    );
  } else {
    ctx.roundRect(left, GLOW_PADDING, width, height, NODE_CARD_RADIUS);
  }
  ctx.fill();
  return Texture.from(canvas);
};

export const getGlowTexture = (kind: GlowKind): Texture =>
  (textures[kind] ??= paint(kind) ?? Texture.EMPTY);
