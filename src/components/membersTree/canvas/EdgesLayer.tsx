import { useCallback, useEffect, useMemo, useRef, memo } from "react";
import { Graphics } from "pixi.js";
import { useApplication } from "@pixi/react";
import gsap from "gsap";
import { useCanvasTheme } from "@/hooks";
import { edgeGeometry, sampleEdgePath } from "@/utils/membersTree/edgeGeometry";
import { alignPolylines } from "@/utils/membersTree/edgePolyline";
import { useTreeStore } from "@/store/treeStore";
import { FIXED_EDGE_WIDTH, NODE_HEIGHT, NODE_WIDTH } from "@/constants/canvas";
import type {
  Direction,
  EdgeStyle,
  NodePositions,
  Point,
  TreeEdge,
} from "@/types";

interface Props {
  edges: TreeEdge[];
  nodePositions: NodePositions;
  pixelLine: boolean;
  direction: Direction;
  edgeStyle: EdgeStyle;
}

const MORPH_SECONDS = 0.35;
// Beyond this many edges the morph is skipped (styles switch instantly), to
// keep weak devices smooth.
const MAX_MORPH_EDGES = 2500;
// Extra room around an edge's endpoints when testing it against the screen.
const VISIBLE_MARGIN = 100;

const EdgesLayer = ({
  edges,
  nodePositions,
  pixelLine,
  direction,
  edgeStyle,
}: Props) => {
  const { edgeColor, edgeAlpha } = useCanvasTheme();
  const { app } = useApplication();
  // Both line variants are built once; the zoom threshold only toggles visibility.
  const graphicsRefs = useRef<Map<boolean, () => void>>(new Map());
  const prevStyleRef = useRef(edgeStyle);
  const pixelLineRef = useRef(pixelLine);
  const morphRef = useRef<{
    t: number;
    pairs: ({ from: Point[]; to: Point[] } | null)[];
  } | null>(null);

  const makeDraw = useCallback(
    (linePixel: boolean) => {
      const draw = (g: Graphics) => {
        graphicsRefs.current.set(linePixel, () => {
          if (!g.destroyed) draw(g);
        });
        g.clear();

        g.setStrokeStyle({
          pixelLine: linePixel,
          width: FIXED_EDGE_WIDTH,
          color: edgeColor,
          alpha: edgeAlpha,
          cap: "round",
          join: "round",
        });

        const morph = morphRef.current;
        if (morph) {
          for (const pair of morph.pairs) {
            if (!pair) continue;
            const { from, to } = pair;
            const t = morph.t;
            g.moveTo(
              from[0].x + (to[0].x - from[0].x) * t,
              from[0].y + (to[0].y - from[0].y) * t,
            );
            for (let i = 1; i < from.length; i++) {
              g.lineTo(
                from[i].x + (to[i].x - from[i].x) * t,
                from[i].y + (to[i].y - from[i].y) * t,
              );
            }
          }
          g.stroke();
          return;
        }

        edges.forEach((edge) => {
          const sourcePos = nodePositions.get(edge.source);
          const targetPos = nodePositions.get(edge.target);

          if (!sourcePos || !targetPos) return;

          if (edgeStyle === "bezier") {
            const { start, end, cp1, cp2 } = edgeGeometry(
              sourcePos,
              targetPos,
              direction,
              edgeStyle,
            );
            g.moveTo(start.x, start.y);
            g.bezierCurveTo(cp1!.x, cp1!.y, cp2!.x, cp2!.y, end.x, end.y);
          } else {
            // Straight lines and orthogonal paths with rounded corners.
            const points = sampleEdgePath(
              sourcePos,
              targetPos,
              direction,
              edgeStyle,
            );
            g.moveTo(points[0].x, points[0].y);
            for (let i = 1; i < points.length; i++) {
              g.lineTo(points[i].x, points[i].y);
            }
          }
        });

        g.stroke();
      };
      return draw;
    },
    [edges, nodePositions, direction, edgeStyle, edgeColor, edgeAlpha],
  );

  const drawSmooth = useMemo(() => makeDraw(false), [makeDraw]);
  const drawPixel = useMemo(() => makeDraw(true), [makeDraw]);

  useEffect(() => {
    pixelLineRef.current = pixelLine;
  }, [pixelLine]);

  // Morph the drawn routes when the line style changes instead of popping.
  useEffect(() => {
    const prevStyle = prevStyleRef.current;
    if (prevStyle === edgeStyle) return;
    prevStyleRef.current = edgeStyle;
    const ticker = app?.ticker;
    if (!ticker) return;

    if (edges.length > MAX_MORPH_EDGES) return;

    // Only edges on screen are morphed; the rest snap to the final shape.
    const viewport = useTreeStore.getState().viewport;
    const view =
      viewport && !viewport.destroyed ? viewport.getVisibleBounds() : null;

    morphRef.current = {
      t: 0,
      pairs: edges.map((edge) => {
        const sourcePos = nodePositions.get(edge.source);
        const targetPos = nodePositions.get(edge.target);
        if (!sourcePos || !targetPos) return null;
        if (
          view &&
          (Math.max(sourcePos.x, targetPos.x) + NODE_WIDTH + VISIBLE_MARGIN <
            view.x ||
            Math.min(sourcePos.x, targetPos.x) - VISIBLE_MARGIN > view.right ||
            Math.max(sourcePos.y, targetPos.y) + NODE_HEIGHT + VISIBLE_MARGIN <
              view.y ||
            Math.min(sourcePos.y, targetPos.y) - VISIBLE_MARGIN > view.bottom)
        ) {
          return null;
        }
        const [from, to] = alignPolylines(
          sampleEdgePath(sourcePos, targetPos, direction, prevStyle),
          sampleEdgePath(sourcePos, targetPos, direction, edgeStyle),
        );
        return { from, to };
      }),
    };

    // Mid-morph only the visible variant is redrawn; a flip of pixelLine just
    // makes the other one take over on the next frame.
    const redraw = () => graphicsRefs.current.get(pixelLineRef.current)?.();
    // The hidden variant must end up with the final static shape too.
    const redrawAll = () => graphicsRefs.current.forEach((fn) => fn());
    const tween = gsap.to(morphRef.current, {
      t: 1,
      duration: MORPH_SECONDS,
      ease: "power2.inOut",
      onComplete: () => {
        morphRef.current = null;
        ticker.remove(redraw);
        redrawAll();
      },
    });
    ticker.add(redraw);
    return () => {
      tween.kill();
      ticker.remove(redraw);
      if (morphRef.current) {
        morphRef.current = null;
        redrawAll();
      }
    };
  }, [edgeStyle, edges, nodePositions, direction, app]);

  return (
    <>
      <pixiGraphics draw={drawSmooth} eventMode="none" visible={!pixelLine} />
      <pixiGraphics draw={drawPixel} eventMode="none" visible={pixelLine} />
    </>
  );
};

export default memo(EdgesLayer);
