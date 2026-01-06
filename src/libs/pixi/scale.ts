import { MINIMIZED_VIEW_SCALE } from "@/constants/pixi";

export const getIsMinimized = (scale: number) => scale < MINIMIZED_VIEW_SCALE;
