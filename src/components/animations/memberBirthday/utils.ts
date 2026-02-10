import { Texture } from "pixi.js";
import { NODE_WIDTH, AVATAR_SIZE } from "@/constants/pixi";

export const MIN_DISTANCE_FROM_CENTER = AVATAR_SIZE / 2 + 10;

export const createEmojiTexture = (emoji: string): Texture => {
  const canvas = document.createElement("canvas");
  // Use high resolution for crisp text on high DPI screens
  const fontSize = 80;
  const size = 88;
  canvas.width = size;
  canvas.height = size;

  const ctx = canvas.getContext("2d");
  if (!ctx) return Texture.EMPTY;

  ctx.font = `${fontSize}px Arial, "Segoe UI Emoji", "Apple Color Emoji", "Noto Color Emoji"`;
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText(emoji, size / 2, size / 2 + 5); // +5 for visual centering adjustment

  return Texture.from(canvas);
};

export const generateRandomPosition = (fixedSide?: number) => {
  const minY = -40;
  const maxY = 40;
  // Total width of the particle generation area
  const totalWidth = NODE_WIDTH + 40;
  const halfWidth = totalWidth / 2;

  // 1. Pick a random Y within the strip
  const y = minY + Math.random() * (maxY - minY);

  // 2. Calculate the "forbidden" width at this Y
  // We need |x| >= x_min such that x^2 + y^2 >= R^2
  // So x_min = sqrt(R^2 - y^2) if |y| < R, else 0
  const minDistSq = MIN_DISTANCE_FROM_CENTER * MIN_DISTANCE_FROM_CENTER;
  const ySq = y * y;

  // If y is outside the circle vertical range, the whole width is valid (xMin = 0)
  // If y is inside, we must exclude the central segment
  const minAbsX = ySq < minDistSq ? Math.sqrt(minDistSq - ySq) : 0;

  // 3. Generate X in the valid geometric areas: [-halfWidth, -minAbsX] U [minAbsX, halfWidth]
  // Total length of valid X segments
  const validSpan = halfWidth - minAbsX;

  if (validSpan <= 0) {
    // Should generally not happen given our constants, but fallback just in case
    return { x: halfWidth, y };
  }

  // Generate a random offset from the inner edge (minAbsX)
  const xOffset = Math.random() * validSpan;

  // Use fixedSide if provided, otherwise random
  const sign =
    fixedSide !== undefined
      ? Math.sign(fixedSide)
      : Math.random() < 0.5
        ? -1
        : 1;
  const x = sign * (minAbsX + xOffset);

  return { x, y };
};
