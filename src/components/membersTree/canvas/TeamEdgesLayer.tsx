import { useCallback, useEffect, useRef, memo } from "react";
import { Graphics } from "pixi.js";
import gsap from "gsap";
import { useCanvasTheme } from "@/hooks";
import { lerpPoints } from "@/utils/membersTree/edgePolyline";
import { teamEdgePath } from "@/utils/membersTree/teamEdgePath";
import {
  teamMorphPairs,
  type MorphPair,
} from "@/utils/membersTree/teamMorph";
import { FIXED_EDGE_WIDTH } from "@/constants/canvas";
import type { Direction, EdgeStyle, Point, TeamFrame } from "@/types";

interface Props {
  frames: TeamFrame[];
  pixelLine: boolean;
  direction: Direction;
  edgeStyle: EdgeStyle;
}

const MORPH_SECONDS = 0.35;
// Beyond this many edges the morph is skipped, to keep weak devices smooth.
const MAX_MORPH_EDGES = 2500;

const drawPolyline = (g: Graphics, points: Point[]) => {
  g.moveTo(points[0].x, points[0].y);
  for (let i = 1; i < points.length; i++) g.lineTo(points[i].x, points[i].y);
};

// Leader-to-member edges of every team, drawn from the layout's geometry.
const TeamEdgesLayer = ({ frames, pixelLine, direction, edgeStyle }: Props) => {
  const { edgeColor, edgeAlpha } = useCanvasTheme();
  const graphicsRef = useRef<Graphics | null>(null);
  const drawRef = useRef<((g: Graphics) => void) | null>(null);
  const lastStyleRef = useRef(edgeStyle);
  const tweenRef = useRef<gsap.core.Tween | null>(null);
  const morphRef = useRef<{ t: number; pairs: MorphPair[] } | null>(null);

  const draw = useCallback(
    (g: Graphics) => {
      graphicsRef.current = g;

      // The morph starts from the first draw with a new style, so it cannot
      // be missed by effect timing.
      const prevStyle = lastStyleRef.current;
      if (prevStyle !== edgeStyle) {
        lastStyleRef.current = edgeStyle;
        morphRef.current = null;
        tweenRef.current?.kill();
      }
      if (
        prevStyle !== edgeStyle &&
        frames.reduce((n, f) => n + f.edges.length, 0) <= MAX_MORPH_EDGES
      ) {
        const morph = {
          t: 0,
          pairs: frames.flatMap(({ edges }) =>
            teamMorphPairs(edges, direction, prevStyle, edgeStyle),
          ),
        };
        morphRef.current = morph;
        tweenRef.current?.kill();
        const redraw = () => {
          const target = graphicsRef.current;
          if (target && !target.destroyed) drawRef.current?.(target);
        };
        tweenRef.current = gsap.to(morph, {
          t: 1,
          duration: MORPH_SECONDS,
          ease: "power2.inOut",
          onUpdate: redraw,
          onComplete: () => {
            morphRef.current = null;
            redraw();
          },
        });
      }

      g.clear();
      const stroke = {
        pixelLine,
        width: FIXED_EDGE_WIDTH,
        color: edgeColor,
        // Orthogonal routes are built from non-overlapping pieces.
        cap: (edgeStyle === "orthogonal" || morphRef.current
          ? "butt"
          : "round") as "butt" | "round",
        join: "round" as const,
      };

      const morph = morphRef.current;
      if (morph) {
        g.setStrokeStyle({ ...stroke, alpha: edgeAlpha });
        for (const { from, to } of morph.pairs) {
          drawPolyline(g, lerpPoints(from, to, morph.t));
        }
        g.stroke();
        return;
      }

      g.setStrokeStyle({ ...stroke, alpha: edgeAlpha });
      for (const { edges } of frames) {
        for (const edge of edges) {
          // Blocks may carry several style variants of the same edge at once.
          if (edge.styles && !edge.styles.includes(edgeStyle)) continue;
          drawPolyline(g, teamEdgePath(edge, direction, edgeStyle));
        }
      }
      g.stroke();
    },
    [frames, pixelLine, direction, edgeStyle, edgeColor, edgeAlpha],
  );

  useEffect(() => {
    drawRef.current = draw;
  }, [draw]);

  useEffect(
    () => () => {
      tweenRef.current?.kill();
    },
    [],
  );

  return <pixiGraphics draw={draw} eventMode="none" />;
};

export default memo(TeamEdgesLayer);
