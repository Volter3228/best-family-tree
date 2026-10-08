import { useEffect, useRef } from "react";
import { useApplication } from "@pixi/react";
import { Graphics } from "pixi.js";
import gsap from "gsap";
import { findCommonLen, animDuration, drawDashes } from "@/utils";
import {
  DASH_LEN,
  GAP_LEN,
  SPEED,
  EMPTY_PATH,
  RETRACT_BASE,
  DRAW_IN_BASE,
} from "@/constants/canvas/lineageEdgePath";
import type { PathData } from "@/types";

// Smallest dash movement (world units) that is worth a redraw.
const MIN_REDRAW_OFFSET = 1.2;

interface Options {
  targetId: string | null;
  buildPath: (id: string) => PathData;
  pixelLine: boolean;
  colors: readonly string[];
  width: number;
}

/**
 * Animates a dashed path that draws in / retracts when `targetId` changes.
 * `buildPath` must change identity whenever the underlying geometry changes.
 * Returns the `draw` callback to pass to a `pixiGraphics`.
 */
export const useDashedPathAnimation = ({
  targetId,
  buildPath,
  pixelLine,
  colors,
  width,
}: Options) => {
  const { app } = useApplication();
  const graphicsRef = useRef<Graphics>(null);
  const offsetRef = useRef(0);
  const animRef = useRef({ visibleLen: 0 });
  const lastOffsetRef = useRef(0);
  const timelineRef = useRef<gsap.core.Timeline | null>(null);
  const prevIdRef = useRef<string | null>(null);
  const pathRef = useRef<PathData>(EMPTY_PATH);

  // Handle transitions between targets
  useEffect(() => {
    timelineRef.current?.kill();

    const prevId = prevIdRef.current;
    const newId = targetId;

    if (prevId === newId) return;

    const tl = gsap.timeline();
    timelineRef.current = tl;

    const oldPath = pathRef.current;
    const newPath = newId ? buildPath(newId) : EMPTY_PATH;

    const hasOld = prevId !== null && animRef.current.visibleLen > 0;
    const hasNew = newId !== null;

    if (hasOld && hasNew) {
      // A -> B: retract to common prefix, swap path, draw in
      const commonLen = findCommonLen(oldPath, newPath);
      const retractDist = animRef.current.visibleLen - commonLen;

      if (retractDist > 0) {
        tl.to(animRef.current, {
          visibleLen: commonLen,
          duration: animDuration(retractDist, oldPath.totalLen, RETRACT_BASE),
          ease: "power2.inOut",
          onComplete: () => {
            pathRef.current = newPath;
            prevIdRef.current = newId;
          },
        });
      } else {
        pathRef.current = newPath;
        prevIdRef.current = newId;
      }

      const drawInDist = newPath.totalLen - commonLen;
      if (drawInDist > 0) {
        tl.to(animRef.current, {
          visibleLen: newPath.totalLen,
          duration: animDuration(drawInDist, newPath.totalLen, DRAW_IN_BASE),
          ease: "power2.out",
        });
      }
    } else if (hasOld && !hasNew) {
      // Target -> null: retract fully
      tl.to(animRef.current, {
        visibleLen: 0,
        duration: RETRACT_BASE,
        ease: "power2.inOut",
        onComplete: () => {
          pathRef.current = EMPTY_PATH;
          prevIdRef.current = null;
        },
      });
    } else if (!hasOld && hasNew) {
      // null -> Target: draw in fully
      pathRef.current = newPath;
      prevIdRef.current = newId;
      tl.to(animRef.current, {
        visibleLen: newPath.totalLen,
        duration: DRAW_IN_BASE,
        ease: "power2.out",
      });
    }

    return () => {
      timelineRef.current?.kill();
    };
  }, [targetId, buildPath]);

  // Rebuild path data if geometry changes while idle (no active transition)
  useEffect(() => {
    const id = prevIdRef.current;
    if (!id) return;
    if (timelineRef.current?.isActive()) return;

    const path = pathRef.current;
    if (
      path.totalLen > 0 &&
      Math.abs(animRef.current.visibleLen - path.totalLen) < 1
    ) {
      const newPath = buildPath(id);
      pathRef.current = newPath;
      animRef.current.visibleLen = newPath.totalLen;
    }
  }, [buildPath]);

  // Ticker for rendering
  useEffect(() => {
    const ticker = app?.ticker;
    if (!ticker) return;

    let alive = true;

    const onTick = () => {
      const g = graphicsRef.current;
      if (!alive || !g || g.destroyed) return;

      const { visibleLen } = animRef.current;
      const { segments, offsets } = pathRef.current;

      if (visibleLen <= 0 || segments.length === 0) {
        g.clear();
        return;
      }

      offsetRef.current -= (ticker.deltaMS / 1000) * SPEED;

      // Rebuilding every dash is CPU-heavy, so the marching dashes redraw at
      // most about 30 times a second unless a transition is running.
      const offsetDelta = Math.abs(offsetRef.current - lastOffsetRef.current);
      const transitionActive = timelineRef.current?.isActive() ?? false;
      if (offsetDelta < MIN_REDRAW_OFFSET && !transitionActive) return;
      lastOffsetRef.current = offsetRef.current;

      g.clear();

      let remainingLen = visibleLen;
      for (let i = 0; i < segments.length; i++) {
        if (remainingLen <= 0) break;
        const segMaxDist = Math.min(remainingLen, segments[i].totalLen);
        drawDashes(
          g,
          segments[i],
          DASH_LEN,
          GAP_LEN,
          offsetRef.current + offsets[i],
          segMaxDist,
          colors,
          { width, cap: "round", join: "round", pixelLine },
        );
        remainingLen -= segments[i].totalLen;
      }
    };

    onTick();
    ticker.add(onTick);
    return () => {
      alive = false;
      ticker.remove(onTick);
    };
  }, [app, pixelLine, colors, width]);

  return (g: Graphics) => {
    graphicsRef.current = g;
  };
};
