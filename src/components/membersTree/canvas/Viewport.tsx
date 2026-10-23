import {
  ReactNode,
  useRef,
  useEffect,
  useImperativeHandle,
  type Ref,
} from "react";
import { Viewport as PixiViewport } from "pixi-viewport";
import { useApplication } from "@pixi/react";
import { isZoomedOut } from "@/utils";
import {
  BIRTHDAY_ANIMATION_MIN_SCALE,
  MAX_VIEWPORT_ZOOM,
  MIN_VIEWPORT_ZOOM,
} from "@/constants/canvas";

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
  const wasZoomedOutRef = useRef(false);
  const wasBirthdayVisibleRef = useRef(true);

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
      .clampZoom({ minScale: MIN_VIEWPORT_ZOOM, maxScale: MAX_VIEWPORT_ZOOM });

    viewport.cursor = "grab";
  }, [isInitialised]);

  useEffect(() => {
    const viewport = viewportRef.current;
    if (!viewport) return;

    viewport.resize(width, height);
    wasZoomedOutRef.current = isZoomedOut(viewport.scale.x);
    wasBirthdayVisibleRef.current =
      viewport.scale.x >= BIRTHDAY_ANIMATION_MIN_SCALE;

    const handleDragStart = () => (viewport.cursor = "grabbing");
    const handleDragEnd = () => (viewport.cursor = "grab");

    const handleWheel = () => {
      const decelerate = viewport.plugins.get("decelerate");
      decelerate?.reset();
    };

    const handleZoomed = () => {
      const currentScale = viewport.scale.x;
      const zoomedOut = isZoomedOut(currentScale);
      const birthdayVisible = currentScale >= BIRTHDAY_ANIMATION_MIN_SCALE;

      if (
        zoomedOut !== wasZoomedOutRef.current ||
        birthdayVisible !== wasBirthdayVisibleRef.current
      ) {
        onScaleChange(currentScale);
        wasZoomedOutRef.current = zoomedOut;
        wasBirthdayVisibleRef.current = birthdayVisible;
      }
    };

    viewport.on("drag-start", handleDragStart);
    viewport.on("drag-end", handleDragEnd);
    viewport.on("wheel", handleWheel);
    viewport.on("zoomed", handleZoomed);

    return () => {
      viewport.off("drag-start", handleDragStart);
      viewport.off("drag-end", handleDragEnd);
      viewport.off("wheel", handleWheel);
      viewport.off("zoomed", handleZoomed);
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
