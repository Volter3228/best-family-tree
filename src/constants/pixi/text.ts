import { TextStyle } from "pixi.js";

export const TEXT_RESOLUTION = 2.5;
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
