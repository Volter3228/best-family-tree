import { FillGradient } from "pixi.js";

export const MAXIMIZED_BACKGROUND_COLOR = 0xf8fafc; // slate-50
export const ACCENT_COLOR = 0x9333ea; // accent-darken
export const AVATAR_FILL_GRADIENT = new FillGradient({
  type: "linear",
  colorStops: [
    { offset: 0, color: "rgb(67,56,202)" },
    { offset: 1, color: "rgb(192,38,211)" },
  ],
});
