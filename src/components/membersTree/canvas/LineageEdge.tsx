import { useEffect, useRef, memo } from "react";
import { useApplication } from "@pixi/react";
import { Graphics } from "pixi.js";
import gsap from "gsap";
import { Member } from "@/models";
import { buildPath, findCommonLen, animDuration, drawDashes } from "@/utils";
import { useCanvasTheme } from "@/hooks";
import { FIXED_EDGE_WIDTH } from "@/constants/canvas";
import {
  DASH_LEN,
  GAP_LEN,
  SPEED,
  EMPTY_PATH,
  RETRACT_BASE,
  DRAW_IN_BASE,
} from "@/constants/canvas/lineageEdgePath";
import type { MembersMap, NodePositions, PathData } from "@/types";

interface Props {
  selectedMember: Member | null;
  membersMap: MembersMap;
  nodePositions: NodePositions;
  pixelLine: boolean;
}

const LineageEdge = ({
  selectedMember,
  membersMap,
  nodePositions,
  pixelLine,
}: Props) => {
  const { app } = useApplication();
  const { accentColors } = useCanvasTheme();
  const graphicsRef = useRef<Graphics>(null);
  const offsetRef = useRef(0);
  const animRef = useRef({ visibleLen: 0 });
  const lastOffsetRef = useRef(0);
  const timelineRef = useRef<gsap.core.Timeline | null>(null);
  const prevMemberIdRef = useRef<string | null>(null);
  const pathRef = useRef<PathData>(EMPTY_PATH);

  // Handle transitions between member states
  useEffect(() => {
    timelineRef.current?.kill();

    const prevId = prevMemberIdRef.current;
    const newId = selectedMember?.id ?? null;

    if (prevId === newId) return;

    const tl = gsap.timeline();
    timelineRef.current = tl;

    const oldPath = pathRef.current;
    const newPath = newId
      ? buildPath(newId, membersMap, nodePositions)
      : EMPTY_PATH;

    const hasOld = prevId !== null && animRef.current.visibleLen > 0;
    const hasNew = newId !== null;

    if (hasOld && hasNew) {
      // Member A -> Member B: retract to common ancestor, swap path, draw in
      const commonLen = findCommonLen(oldPath, newPath);
      const retractDist = animRef.current.visibleLen - commonLen;

      if (retractDist > 0) {
        tl.to(animRef.current, {
          visibleLen: commonLen,
          duration: animDuration(retractDist, oldPath.totalLen, RETRACT_BASE),
          ease: "power2.inOut",
          onComplete: () => {
            pathRef.current = newPath;
            prevMemberIdRef.current = newId;
          },
        });
      } else {
        pathRef.current = newPath;
        prevMemberIdRef.current = newId;
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
      // Member -> null: retract fully
      tl.to(animRef.current, {
        visibleLen: 0,
        duration: RETRACT_BASE,
        ease: "power2.inOut",
        onComplete: () => {
          pathRef.current = EMPTY_PATH;
          prevMemberIdRef.current = null;
        },
      });
    } else if (!hasOld && hasNew) {
      // null -> Member: draw in fully
      pathRef.current = newPath;
      prevMemberIdRef.current = newId;
      tl.to(animRef.current, {
        visibleLen: newPath.totalLen,
        duration: DRAW_IN_BASE,
        ease: "power2.out",
      });
    }

    return () => {
      timelineRef.current?.kill();
    };
  }, [selectedMember, membersMap, nodePositions]);

  // Rebuild path data if positions change while idle (no active transition)
  useEffect(() => {
    const id = prevMemberIdRef.current;
    if (!id) return;
    if (timelineRef.current?.isActive()) return;

    const path = pathRef.current;
    if (
      path.totalLen > 0 &&
      Math.abs(animRef.current.visibleLen - path.totalLen) < 1
    ) {
      const newPath = buildPath(id, membersMap, nodePositions);
      pathRef.current = newPath;
      animRef.current.visibleLen = newPath.totalLen;
    }
  }, [nodePositions, membersMap]);

  // Ticker for rendering
  useEffect(() => {
    if (!app?.ticker) return;

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

      offsetRef.current -= (app.ticker.deltaMS / 1000) * SPEED;

      // Skip redraw when dash offset delta is sub-pixel and no transition is active
      const offsetDelta = Math.abs(offsetRef.current - lastOffsetRef.current);
      const transitionActive = timelineRef.current?.isActive() ?? false;
      if (offsetDelta < 0.5 && !transitionActive) {
        return;
      }
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
          accentColors,
          {
            width: FIXED_EDGE_WIDTH + 2,
            cap: "round",
            join: "round",
            pixelLine,
          },
        );
        remainingLen -= segments[i].totalLen;
      }
    };

    onTick();
    app.ticker.add(onTick);
    return () => {
      alive = false;
      app.ticker.remove(onTick);
    };
  }, [app, pixelLine, accentColors]);

  const initDraw = (g: Graphics) => {
    graphicsRef.current = g;
  };

  return <pixiGraphics draw={initDraw} />;
};

export default memo(LineageEdge);
