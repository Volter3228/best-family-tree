import { CARD_VIEW_SCALE } from "@/constants/canvas";

export const isZoomedOut = (scale: number) => scale < CARD_VIEW_SCALE;
