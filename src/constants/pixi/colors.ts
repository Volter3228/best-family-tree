import { FillGradient } from "pixi.js";

// Main Colors
export const ACCENT_COLOR = "hsl(267, 100%, 60%)";
export const ACCENT_HOVER_COLOR = "hsl(267, 100%, 55%)";
export const ACCENT_DARKEN_COLOR = "hsl(267, 100%, 45%)";
export const ACCENT_DARKEN_HOVER_COLOR = "hsl(267, 100%, 40%)";
export const SLATE_LIGHT_COLOR = "hsl(210, 40%, 98%)"; // tailwind's slate-50
export const MAXIMIZED_BACKGROUND_COLOR = "hsl(210, 40%, 98%)"; // slate-50

// Gradients
export const PRIMARY_GRADIENT_START = "hsl(249, 59%, 51%)";
export const PRIMARY_GRADIENT_END = "hsl(302, 86%, 45%)";
export const AVATAR_FILL_GRADIENT = new FillGradient({
  type: "linear",
  colorStops: [
    { offset: 0, color: PRIMARY_GRADIENT_START },
    { offset: 1, color: PRIMARY_GRADIENT_END },
  ],
});

export const PRIMARY_GRADIENT = new FillGradient({
  type: "linear",
  start: {
    x: 0,
    y: 0,
  },
  end: {
    x: 1,
    y: 1,
  },
  colorStops: [
    { offset: 0, color: PRIMARY_GRADIENT_START },
    { offset: 1, color: PRIMARY_GRADIENT_END },
  ],
});
