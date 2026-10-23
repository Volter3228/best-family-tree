import { useRef } from "react";
import { useTick } from "@pixi/react";
import { useTreeStore } from "@/store/treeStore";
import { needsSharpAvatars } from "@/utils";
import { NODE_HEIGHT, NODE_WIDTH } from "@/constants/canvas";
import type { NodePositions } from "@/types";

const EMPTY_IDS: ReadonlySet<string> = new Set();

const CHECK_INTERVAL_MS = 120;
// Nodes this far (share of the screen) outside the viewport are prepared too.
const PREFETCH_MARGIN = 0.25;
// Every upgrade downloads, decodes and uploads a full-size texture, so they
// are handed out in small batches (closest to the screen center first).
const MAX_NEW_SHARP_PER_CHECK = 10;

interface View {
  x: number;
  y: number;
  scale: number;
  positions: NodePositions | null;
}

// Renders nothing: tells the nodes which of them should load the full-size
// avatar (visible or about to be, and only when zoomed in far enough). Nothing
// is upgraded while the camera is moving: textures uploaded mid-drag or
// mid-zoom are what makes panning stutter, and the small avatar is enough for
// a moving image.
const SharpAvatarTracker = () => {
  const elapsedRef = useRef(0);
  const lastSeenRef = useRef<View | null>(null);
  const isSettledRef = useRef(false);

  useTick((ticker) => {
    elapsedRef.current += ticker.deltaMS;
    if (elapsedRef.current < CHECK_INTERVAL_MS) return;
    elapsedRef.current = 0;

    const { viewport, nodePositions, sharpNodeIds, setSharpNodeIds } =
      useTreeStore.getState();
    if (!viewport || viewport.destroyed) return;

    const { x, y } = viewport;
    const scale = viewport.scale.x;
    const last = lastSeenRef.current;
    const isSameView =
      !!last &&
      last.x === x &&
      last.y === y &&
      last.scale === scale &&
      last.positions === nodePositions;
    lastSeenRef.current = { x, y, scale, positions: nodePositions };

    // Camera still moving: wait for it to stop.
    if (!isSameView) {
      isSettledRef.current = false;
      return;
    }

    if (!needsSharpAvatars(scale)) {
      isSettledRef.current = true;
      setSharpNodeIds(EMPTY_IDS);
      return;
    }
    // Everything visible is already upgraded.
    if (isSettledRef.current) return;

    const bounds = viewport.getVisibleBounds();
    const marginX = bounds.width * PREFETCH_MARGIN;
    const marginY = bounds.height * PREFETCH_MARGIN;
    const left = bounds.x - marginX;
    const top = bounds.y - marginY;
    const right = bounds.x + bounds.width + marginX;
    const bottom = bounds.y + bounds.height + marginY;
    const centerX = bounds.x + bounds.width / 2;
    const centerY = bounds.y + bounds.height / 2;

    const next = new Set<string>();
    const missing: { id: string; distance: number }[] = [];
    nodePositions.forEach((pos, id) => {
      if (
        pos.x < right &&
        pos.x + NODE_WIDTH > left &&
        pos.y < bottom &&
        pos.y + NODE_HEIGHT > top
      ) {
        if (sharpNodeIds.has(id)) {
          next.add(id);
        } else {
          missing.push({
            id,
            distance: Math.hypot(
              pos.x + NODE_WIDTH / 2 - centerX,
              pos.y + NODE_HEIGHT / 2 - centerY,
            ),
          });
        }
      }
    });

    missing.sort((a, b) => a.distance - b.distance);
    missing
      .slice(0, MAX_NEW_SHARP_PER_CHECK)
      .forEach(({ id }) => next.add(id));
    isSettledRef.current = missing.length <= MAX_NEW_SHARP_PER_CHECK;
    setSharpNodeIds(next);
  });

  return null;
};

export default SharpAvatarTracker;
