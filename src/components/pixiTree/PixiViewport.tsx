"use client";

import { ReactNode, useRef, useEffect, useImperativeHandle } from "react";
import { useApplication } from "@pixi/react";
import { Viewport as BaseViewport } from "pixi-viewport";
import { debounce } from "lodash";

interface Props {
  ref: React.Ref<BaseViewport>;
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

    const handleDragStart = () => (viewport.cursor = "grabbing");
    const handleDragEnd = () => (viewport.cursor = "grab");

    const handleZoomed = debounce(() => {
      onScaleChange(viewport.scale.x);
    }, 100);

    viewport.on("drag-start", handleDragStart);
    viewport.on("drag-end", handleDragEnd);
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
