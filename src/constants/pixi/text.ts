import { TextStyle } from "pixi.js";
import { PRIMARY_GRADIENT } from "@/constants/pixi/colors";

const FONT_FAMILY = ["Nunito", "Arial", "Helvetica", "sans-serif"];

export const NODE_TITLE_STYLE = new TextStyle({
  fontFamily: FONT_FAMILY,
  fontSize: 16,
  fontWeight: "600",
  fill: "#000",
  align: "center",
  wordWrap: true,
  wordWrapWidth: 200,
});

export const NODE_SUBTITLE_STYLE = new TextStyle({
  fontFamily: FONT_FAMILY,
  fontSize: 14,
  fontWeight: "300",
  fill: "#666",
  align: "center",
});

export const MINIMIZED_TOOLTIP_TEXT_STYLE = new TextStyle({
  fontFamily: FONT_FAMILY,
  fontSize: 14,
  fill: PRIMARY_GRADIENT,
  fontWeight: "bold",
});

export const TEXT_RESOLUTION = 2.5;
