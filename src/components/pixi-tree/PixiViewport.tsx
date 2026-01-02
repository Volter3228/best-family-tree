import {
  ReactNode,
  useRef,
  useEffect,
  useCallback,
  useState,
  forwardRef,
  useImperativeHandle,
} from "react";
import { useApplication } from "@pixi/react";
import { Container, FederatedPointerEvent, Rectangle, Graphics } from "pixi.js";

interface ViewportProps {
  children: ReactNode;
  width: number;
  height: number;
  isDragging: boolean;
  onDraggingChange: (isDragging: boolean) => void;
  onZoomChange?: (zoom: number) => void;
}

const PixiViewport = forwardRef<Container, ViewportProps>(
  (
    { children, width, height, isDragging, onDraggingChange, onZoomChange },
    ref
  ) => {
    const { app } = useApplication();
    const containerRef = useRef<Container>(null);
    const [isPointerDown, setIsPointerDown] = useState(false);
    const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
    const [startPos, setStartPos] = useState({ x: 0, y: 0 });

    useImperativeHandle(ref, () => containerRef.current!, []);

    // Update cursor based on dragging state
    useEffect(() => {
      const container = containerRef.current;
      if (!container) return;

      container.cursor = isDragging ? "grabbing" : "grab";
    }, [isDragging]);

    // Wheel zoom handler - separate effect to ensure it attaches when renderer is ready
    useEffect(() => {
      const container = containerRef.current;
      const canvas = app?.renderer?.canvas;
      if (!container || !canvas) return;

      const onWheel = (e: WheelEvent) => {
        e.preventDefault();
        const scaleChange = e.deltaY > 0 ? 0.9 : 1.1;
        const newScale = container.scale.x * scaleChange;

        // Limit zoom
        if (newScale < 0.025 || newScale > 3) return;

        const worldPos = {
          x: (e.offsetX - container.x) / container.scale.x,
          y: (e.offsetY - container.y) / container.scale.y,
        };

        container.scale.set(newScale);
        container.position.set(
          e.offsetX - worldPos.x * newScale,
          e.offsetY - worldPos.y * newScale
        );

        onZoomChange?.(newScale);
      };

      canvas.addEventListener("wheel", onWheel);
      return () => canvas.removeEventListener("wheel", onWheel);
    }, [app?.renderer?.canvas, onZoomChange]);

    const onPointerDown = (e: FederatedPointerEvent) => {
      if (e.button !== 0) return; // Only left click

      setIsPointerDown(true);
      setDragStart({ x: e.global.x, y: e.global.y });
      if (containerRef.current) {
        setStartPos({ x: containerRef.current.x, y: containerRef.current.y });
      }
    };

    const onPointerMove = (e: FederatedPointerEvent) => {
      if (!isPointerDown || !containerRef.current) return;
      onDraggingChange(true);

      const dx = e.global.x - dragStart.x;
      const dy = e.global.y - dragStart.y;

      containerRef.current.position.set(startPos.x + dx, startPos.y + dy);
    };

    const onPointerUp = () => {
      onDraggingChange(false);
      setIsPointerDown(false);
    };

    // Draw a transparent rect to ensure hit testing works
    const drawHitArea = useCallback((g: Graphics) => {
      g.clear();
      g.fillStyle = 0xffffff;
      g.alpha = 0;
      // Draw a massive rectangle to cover any possible view
      g.rect(-100000, -100000, 200000, 200000);
      g.fill();
    }, []);

    return (
      <pixiContainer
        ref={containerRef}
        width={width}
        height={height}
        onPointerDown={onPointerDown}
        hitArea={new Rectangle(-100000, -100000, 200000, 200000)}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerUpOutside={onPointerUp}
        onPointerLeave={onPointerUp}
        eventMode="static"
        sortableChildren
      >
        <pixiGraphics draw={drawHitArea} />
        {children}
      </pixiContainer>
    );
  }
);

export default PixiViewport;
