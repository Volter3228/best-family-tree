"use client";

import { createContext, Dispatch, SetStateAction } from "react";
import { type Viewport } from "pixi-viewport";

export interface IViewportContext {
  scale: number;
  setScale: Dispatch<SetStateAction<number>>;
  viewport: Viewport | null;
  setViewport: Dispatch<SetStateAction<Viewport | null>>;
}

export const ViewportContext = createContext<IViewportContext | undefined>(
  undefined,
);
