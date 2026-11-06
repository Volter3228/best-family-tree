import { useCallback, useEffect, useRef, memo } from "react";
import { Graphics } from "pixi.js";
import { useApplication } from "@pixi/react";
import gsap from "gsap";
import { useCanvasTheme } from "@/hooks";
import {
  edgeGeometry,
  sampleEdgePath,
} from "@/utils/membersTree/edgeGeometry";
import { alignPolylines, lerpPoints } from "@/utils/membersTree/edgePolyline";
import { FIXED_EDGE_WIDTH } from "@/constants/canvas";
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

const EdgesLayer = ({
  edges,
  nodePositions,
  pixelLine,
  direction,
  edgeStyle,
}: Props) => {
  const { edgeColor, edgeAlpha } = useCanvasTheme();
  const { app } = useApplication();
  const graphicsRef = useRef<Graphics | null>(null);
  const prevStyleRef = useRef(edgeStyle);
  const morphRef = useRef<{
    t: number;
    pairs: ({ from: Point[]; to: Point[] } | null)[];
  } | null>(null);

  const drawEdges = useCallback(
    (g: Graphics) => {
      graphicsRef.current = g;
      g.clear();

      g.setStrokeStyle({
        pixelLine,
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
          const points = lerpPoints(pair.from, pair.to, morph.t);
          g.moveTo(points[0].x, points[0].y);
          for (let i = 1; i < points.length; i++) {
            g.lineTo(points[i].x, points[i].y);
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
    },
    [
      edges,
      nodePositions,
      pixelLine,
      direction,
      edgeStyle,
      edgeColor,
      edgeAlpha,
    ],
  );

  // Morph the drawn routes when the line style changes instead of popping.
  useEffect(() => {
    const prevStyle = prevStyleRef.current;
    if (prevStyle === edgeStyle) return;
    prevStyleRef.current = edgeStyle;
    const ticker = app?.ticker;
    if (!ticker) return;

    if (edges.length > MAX_MORPH_EDGES) return;

    morphRef.current = {
      t: 0,
      pairs: edges.map((edge) => {
        const sourcePos = nodePositions.get(edge.source);
        const targetPos = nodePositions.get(edge.target);
        if (!sourcePos || !targetPos) return null;
        const [from, to] = alignPolylines(
          sampleEdgePath(sourcePos, targetPos, direction, prevStyle),
          sampleEdgePath(sourcePos, targetPos, direction, edgeStyle),
        );
        return { from, to };
      }),
    };

    const redraw = () => {
      const g = graphicsRef.current;
      if (g && !g.destroyed) drawEdges(g);
    };
    const tween = gsap.to(morphRef.current, {
      t: 1,
      duration: MORPH_SECONDS,
      ease: "power2.inOut",
      onComplete: () => {
        morphRef.current = null;
        ticker.remove(redraw);
        redraw();
      },
    });
    ticker.add(redraw);
    return () => {
      tween.kill();
      ticker.remove(redraw);
      morphRef.current = null;
    };
  }, [edgeStyle, edges, nodePositions, direction, app, drawEdges]);

  return <pixiGraphics draw={drawEdges} eventMode="none" />;
};

export default memo(EdgesLayer);
