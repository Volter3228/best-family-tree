"use client";

import { createContext, Dispatch, SetStateAction } from "react";
import { type Viewport } from "pixi-viewport";

export interface IViewportContext {
  scale: number;
  setScale: Dispatch<SetStateAction<number>>;
  viewport: Viewport | null;
  setViewport: Dispatch<SetStateAction<Viewport | null>>;
  isFitViewAnimating: boolean;
  setIsFitViewAnimating: Dispatch<SetStateAction<boolean>>;
  fitViewTargetScale: number | null;
  setFitViewTargetScale: Dispatch<SetStateAction<number | null>>;
}

export const ViewportContext = createContext<IViewportContext | undefined>(
  undefined,
);
