import { FillGradient, TextStyle } from "pixi.js";

// Node dimensions
export const NODE_WIDTH = 240;
export const NODE_HEIGHT = 176;
export const AVATAR_SIZE = 80;
export const MINIMIZED_SIZE = 192;
export const MINIMIZED_RADIUS = MINIMIZED_SIZE / 2;

// Colors
export const MAXIMIZED_BACKGROUND_COLOR = 0xf8fafc; // slate-50
export const ACCENT_COLOR = 0x9333ea; // accent-darken
export const AVATAR_FILL_GRADIENT = new FillGradient({
  type: "linear",
  colorStops: [
    { offset: 0, color: "rgb(67,56,202)" },
    { offset: 1, color: "rgb(192,38,211)" },
  ],
});

// Animations
export const HOVER_SCALE = 1.2;
export const AVATAR_SCALE = 0.7;

// Text styles
const FONT_FAMILY = ["Nunito", "Arial", "Helvetica", "sans-serif"];

export const TEXT_STYLE = new TextStyle({
  fontFamily: FONT_FAMILY,
  fontSize: 16,
  fontWeight: "600",
  fill: "#000",
  align: "center",
  wordWrap: true,
  wordWrapWidth: 200,
});

export const SUB_TEXT_STYLE = new TextStyle({
  fontFamily: FONT_FAMILY,
  fontSize: 14,
  fontWeight: "300",
  fill: "#666",
  align: "center",
});
