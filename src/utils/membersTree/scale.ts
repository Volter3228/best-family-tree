import { MINIMIZED_VIEW_SCALE } from "@/constants/canvas";

export const getIsMinimized = (scale: number) => scale < MINIMIZED_VIEW_SCALE;
