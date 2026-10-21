import { useRef } from "react";
import { useTick } from "@pixi/react";
import { useTreeStore } from "@/store/treeStore";
import { needsSharpAvatars } from "@/utils";
import { NODE_HEIGHT, NODE_WIDTH } from "@/constants/canvas";
import type { NodePositions } from "@/types";

const CHECK_INTERVAL_MS = 120;
// Nodes this far (share of the screen) outside the viewport are prepared too.
const PREFETCH_MARGIN = 0.25;

// Renders nothing: tells the nodes which of them should load the full-size
// avatar (visible or about to be, and only when zoomed in far enough).
const SharpAvatarTracker = () => {
  const elapsedRef = useRef(0);
  const lastRef = useRef<{
    x: number;
    y: number;
    scale: number;
    positions: NodePositions | null;
  } | null>(null);

  useTick((ticker) => {
    elapsedRef.current += ticker.deltaMS;
    if (elapsedRef.current < CHECK_INTERVAL_MS) return;
    elapsedRef.current = 0;

    const { viewport, nodePositions, setSharpNodeIds } =
      useTreeStore.getState();
    if (!viewport || viewport.destroyed) return;

    const { x, y } = viewport;
    const scale = viewport.scale.x;
    const last = lastRef.current;
    if (
      last &&
      last.x === x &&
      last.y === y &&
      last.scale === scale &&
      last.positions === nodePositions
    ) {
      return;
    }
    lastRef.current = { x, y, scale, positions: nodePositions };

    const ids = new Set<string>();
    if (needsSharpAvatars(scale)) {
      const bounds = viewport.getVisibleBounds();
      const marginX = bounds.width * PREFETCH_MARGIN;
      const marginY = bounds.height * PREFETCH_MARGIN;
      const left = bounds.x - marginX;
      const top = bounds.y - marginY;
      const right = bounds.x + bounds.width + marginX;
      const bottom = bounds.y + bounds.height + marginY;
      nodePositions.forEach((pos, id) => {
        if (
          pos.x < right &&
          pos.x + NODE_WIDTH > left &&
          pos.y < bottom &&
          pos.y + NODE_HEIGHT > top
        ) {
          ids.add(id);
        }
      });
    }
    setSharpNodeIds(ids);
  });

  return null;
};

export default SharpAvatarTracker;
