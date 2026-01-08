"use client";

import { ReactNode, useRef, useEffect, useImperativeHandle, type Ref } from "react";
import { useApplication } from "@pixi/react";
import { Viewport as BaseViewport } from "pixi-viewport";
import { debounce } from "lodash";
import { getIsMinimized } from "@/libs/pixi";

interface Props {
  ref: Ref<BaseViewport>;
  children: ReactNode;
  width: number;
  height: number;
  onScaleChange: (scale: number) => void;
}

const PixiViewport = ({
  ref,
  children,
  width,
  height,
  onScaleChange,
}: Props) => {
  const { app } = useApplication();
  const viewportRef = useRef<BaseViewport>(null);
  const wasMinimizedRef = useRef(false);

  useImperativeHandle(ref, () => viewportRef.current!);

  useEffect(() => {
    const viewport = viewportRef.current;
    if (!viewport) return;

    if (!viewport.plugins.get("drag")) {
      viewport
        .drag({ mouseButtons: "left" })
        .pinch()
        .wheel({ smooth: 8, percent: 0.03, interrupt: true })
        .decelerate({ friction: 0.95, bounce: 0.7 })
        .clampZoom({ minScale: 0.025, maxScale: 3 });
    }

    viewport.resize(width, height);
    viewport.cursor = "grab";

    wasMinimizedRef.current = getIsMinimized(viewport.scale.x);

    const handleDragStart = () => (viewport.cursor = "grabbing");
    const handleDragEnd = () => (viewport.cursor = "grab");

    const handleZoomed = debounce(() => {
      onScaleChange(viewport.scale.x);
    }, 100);

    const handleWheel = () => {
      const currentScale = viewport.scale.x;
      const isMinimized = getIsMinimized(currentScale);
      if (isMinimized !== wasMinimizedRef.current) {
        onScaleChange(currentScale);
        wasMinimizedRef.current = isMinimized;
      }
    }

    viewport.on("drag-start", handleDragStart);
    viewport.on("drag-end", handleDragEnd);
    viewport.on("wheel", handleWheel);
    viewport.on("zoomed", handleZoomed);

    return () => {
      viewport.off("drag-start", handleDragStart);
      viewport.off("drag-end", handleDragEnd);
      viewport.off("zoomed", handleZoomed);
      handleZoomed.cancel();
    };
  }, [app, width, height, onScaleChange]);

  return (
    <pixiViewport
      ref={viewportRef}
      screenWidth={width}
      screenHeight={height}
      worldWidth={width}
      worldHeight={height}
      events={app.renderer?.events}
      ticker={app?.ticker}
    >
      {children}
    </pixiViewport>
  );
};

export default PixiViewport;
