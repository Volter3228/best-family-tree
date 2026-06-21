import {
  ReactNode,
  useRef,
  useEffect,
  useImperativeHandle,
  type Ref,
} from "react";
import { useApplication } from "@pixi/react";
import { Viewport as PixiViewport } from "pixi-viewport";
import { getIsMinimized } from "@/utils";
import debounce from "lodash/debounce";

interface Props {
  ref: Ref<PixiViewport>;
  children: ReactNode;
  width: number;
  height: number;
  onScaleChange: (scale: number) => void;
}

const Viewport = ({ ref, children, width, height, onScaleChange }: Props) => {
  const { app, isInitialised } = useApplication();
  const viewportRef = useRef<PixiViewport>(null);
  const wasMinimizedRef = useRef(false);

  useImperativeHandle(ref, () => viewportRef.current!);

  // One-time plugins setup
  useEffect(() => {
    const viewport = viewportRef.current;
    if (!viewport || viewport.plugins.get("drag")) return;

    viewport
      .drag({ mouseButtons: "left" })
      .pinch()
      .wheel({ smooth: 8, percent: 0.03, interrupt: true })
      .decelerate({ friction: 0.95, bounce: 0.7 })
      .clampZoom({ minScale: 0.025, maxScale: 3 });

    viewport.cursor = "grab";
  }, [isInitialised]);

  useEffect(() => {
    const viewport = viewportRef.current;
    if (!viewport) return;

    viewport.resize(width, height);
    wasMinimizedRef.current = getIsMinimized(viewport.scale.x);

    const handleDragStart = () => (viewport.cursor = "grabbing");
    const handleDragEnd = () => (viewport.cursor = "grab");

    const handleWheel = () => {
      // Cancel drag deceleration when user scrolls to prevent freezes
      const decelerate = viewport.plugins.get("decelerate");
      decelerate?.reset();

      const currentScale = viewport.scale.x;
      const isMinimized = getIsMinimized(currentScale);
      if (isMinimized !== wasMinimizedRef.current) {
        onScaleChange(currentScale);
        wasMinimizedRef.current = isMinimized;
      }
    };

    const handleZoomed = debounce(() => {
      onScaleChange(viewport.scale.x);
    }, 100);

    viewport.on("drag-start", handleDragStart);
    viewport.on("drag-end", handleDragEnd);
    viewport.on("wheel", handleWheel);
    viewport.on("zoomed", handleZoomed);

    return () => {
      viewport.off("drag-start", handleDragStart);
      viewport.off("drag-end", handleDragEnd);
      viewport.off("wheel", handleWheel);
      viewport.off("zoomed", handleZoomed);
      handleZoomed.cancel();
    };
  }, [width, height, onScaleChange, isInitialised]);

  if (!isInitialised) {
    return null;
  }

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

export default Viewport;
