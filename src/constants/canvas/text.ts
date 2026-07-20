import { TextStyleOptions } from "pixi.js";

const FONT_FAMILY = ["Nunito", "Arial", "Helvetica", "sans-serif"];

export const NODE_TITLE_STYLE: TextStyleOptions = {
  fontFamily: FONT_FAMILY,
  fontSize: 16,
  fontWeight: "600",
  align: "center",
  wordWrap: true,
  wordWrapWidth: 200,
};

export const NODE_SUBTITLE_STYLE: TextStyleOptions = {
  fontFamily: FONT_FAMILY,
  fontSize: 14,
  fontWeight: "300",
  align: "center",
};

export const NODE_TOOLTIP_TEXT_STYLE: TextStyleOptions = {
  fontFamily: FONT_FAMILY,
  fontSize: 14,
  fontWeight: "600",
};

export const TEXT_RESOLUTION = 2.5;
