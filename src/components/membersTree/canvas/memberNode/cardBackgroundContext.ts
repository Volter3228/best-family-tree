import { GraphicsContext } from "pixi.js";
import {
  NODE_WIDTH,
  NODE_CARD_TOP,
  NODE_CARD_HEIGHT,
  NODE_CARD_RADIUS,
} from "@/constants/canvas";

const CARD_STROKE_WIDTH = 3;

// One tessellation per fill and stroke, shared by every card. There are only a
// few of them (accent colours times themes), so they are never destroyed.
const contexts = new Map<string, GraphicsContext>();

export const getCardBackgroundContext = (
  fill: string,
  stroke: string,
  strokeAlpha: number,
): GraphicsContext => {
  const key = `${fill}|${stroke}|${strokeAlpha}`;
  let context = contexts.get(key);
  if (!context) {
    context = new GraphicsContext()
      .roundRect(
        0,
        NODE_CARD_TOP,
        NODE_WIDTH,
        NODE_CARD_HEIGHT,
        NODE_CARD_RADIUS,
      )
      .fill({ color: fill })
      .stroke({ color: stroke, width: CARD_STROKE_WIDTH, alpha: strokeAlpha });
    contexts.set(key, context);
  }
  return context;
};
