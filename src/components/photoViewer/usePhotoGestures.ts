import { RefObject, useCallback, useEffect, useRef } from "react";
import gsap from "gsap";
import {
  RUBBER_RESISTANCE,
  clampOffset,
  clampScale,
  stepScale,
  zoomAt,
  type Size,
  type ViewState,
} from "./photoViewerMath";

const DISMISS_DISTANCE = 120;
const DISMISS_VELOCITY = 0.8; // px/ms
const DOUBLE_TAP_MS = 300;
const DOUBLE_TAP_ZOOM = 2.5;
const MOVE_THRESHOLD = 6;

interface Options {
  stageRef: RefObject<HTMLDivElement | null>;
  boxRef: RefObject<HTMLDivElement | null>;
  backdropRef: RefObject<HTMLDivElement | null>;
  sizeRef: RefObject<Size>;
  enabled: boolean;
  onRequestClose: () => void;
  onScaleChange: (scale: number) => void;
}

const IDENTITY: ViewState = { scale: 1, x: 0, y: 0 };

export const usePhotoGestures = ({
  stageRef,
  boxRef,
  backdropRef,
  sizeRef,
  enabled,
  onRequestClose,
  onScaleChange,
}: Options) => {
  // Logical (unconstrained) target state; the element eases towards it.
  const state = useRef<ViewState>({ ...IDENTITY });
  const callbacks = useRef({ onRequestClose, onScaleChange });
  useEffect(() => {
    callbacks.current = { onRequestClose, onScaleChange };
  });

  const stageSize = (): Size => {
    const r = stageRef.current!.getBoundingClientRect();
    return { w: r.width, h: r.height };
  };

  const apply = useCallback(
    (next: ViewState, duration = 0.25, resistance = 0, ease = "power3.out") => {
      state.current = next;
      const { x, y } = clampOffset(
        next,
        stageSize(),
        sizeRef.current,
        resistance,
      );
      gsap.to(boxRef.current, {
        scale: next.scale,
        x,
        y,
        duration,
        ease,
        overwrite: "auto",
      });
      callbacks.current.onScaleChange(next.scale);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );

  const settle = useCallback(
    (extra: Partial<ViewState> = {}) => {
      const next = { ...state.current, ...extra };
      const hard = clampOffset(next, stageSize(), sizeRef.current);
      apply({ ...next, ...hard });
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [apply],
  );

  const zoomBy = useCallback(
    (factor: number, point = { x: 0, y: 0 }) => {
      const next = zoomAt(state.current, point, factor);
      apply({ ...next, ...clampOffset(next, stageSize(), sizeRef.current) });
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [apply],
  );

  const stepZoom = useCallback(
    (dir: 1 | -1) =>
      zoomBy(stepScale(state.current.scale, dir) / state.current.scale),
    [zoomBy],
  );

  const reset = useCallback(() => apply({ ...IDENTITY }, 0.35), [apply]);

  useEffect(() => {
    const stage = stageRef.current;
    if (!stage || !enabled) return;

    const center = () => {
      const r = stage.getBoundingClientRect();
      return { x: r.left + r.width / 2, y: r.top + r.height / 2 };
    };
    const rel = (clientX: number, clientY: number) => {
      const c = center();
      return { x: clientX - c.x, y: clientY - c.y };
    };

    const pointers = new Map<number, { x: number; y: number }>();
    let mode: "none" | "pan" | "dismiss" | "pinch" = "none";
    let moved = false;
    let downOnImage = false;
    let startPt = { x: 0, y: 0 };
    let startState = { ...IDENTITY };
    let last = { x: 0, y: 0, t: 0 };
    let velocity = { x: 0, y: 0 };
    let lastPinch = { dist: 0, mid: { x: 0, y: 0 } };
    let lastTap = { t: 0, x: 0, y: 0 };

    const pinchMetrics = () => {
      const [a, b] = [...pointers.values()];
      return {
        dist: Math.hypot(a.x - b.x, a.y - b.y) || 1,
        mid: rel((a.x + b.x) / 2, (a.y + b.y) / 2),
      };
    };

    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      const delta = e.deltaMode === 1 ? e.deltaY * 16 : e.deltaY;
      const k = e.ctrlKey ? 0.01 : 0.0015;
      zoomBy(Math.exp(-delta * k), rel(e.clientX, e.clientY));
    };

    const onDown = (e: PointerEvent) => {
      stage.setPointerCapture(e.pointerId);
      pointers.set(e.pointerId, { x: e.clientX, y: e.clientY });
      if (pointers.size === 1) {
        moved = false;
        downOnImage = !!boxRef.current?.contains(e.target as Node);
        startPt = { x: e.clientX, y: e.clientY };
        startState = { ...state.current };
        last = { x: e.clientX, y: e.clientY, t: e.timeStamp };
        velocity = { x: 0, y: 0 };
        mode = state.current.scale > 1.001 ? "pan" : "dismiss";
        gsap.killTweensOf(boxRef.current, "x,y,scale");
      } else if (pointers.size === 2) {
        mode = "pinch";
        moved = true;
        lastPinch = pinchMetrics();
      }
    };

    const onMove = (e: PointerEvent) => {
      if (!pointers.has(e.pointerId)) return;
      pointers.set(e.pointerId, { x: e.clientX, y: e.clientY });
      const box = boxRef.current;

      if (mode === "pinch" && pointers.size >= 2) {
        const m = pinchMetrics();
        let next = zoomAt(
          state.current,
          lastPinch.mid,
          m.dist / lastPinch.dist,
        );
        next = {
          ...next,
          x: next.x + (m.mid.x - lastPinch.mid.x),
          y: next.y + (m.mid.y - lastPinch.mid.y),
        };
        lastPinch = m;
        state.current = next;
        const o = clampOffset(
          next,
          stageSize(),
          sizeRef.current,
          RUBBER_RESISTANCE,
        );
        gsap.set(box, { scale: next.scale, ...o });
        callbacks.current.onScaleChange(next.scale);
        return;
      }
      if (mode === "none") return;

      const dx = e.clientX - startPt.x;
      const dy = e.clientY - startPt.y;
      if (!moved && Math.hypot(dx, dy) < MOVE_THRESHOLD) return;
      moved = true;

      const dt = Math.max(1, e.timeStamp - last.t);
      velocity = {
        x: (e.clientX - last.x) / dt,
        y: (e.clientY - last.y) / dt,
      };
      last = { x: e.clientX, y: e.clientY, t: e.timeStamp };

      if (mode === "dismiss") {
        gsap.set(box, { x: 0, y: dy });
        gsap.set(backdropRef.current, {
          opacity: Math.max(0.2, 1 - Math.abs(dy) / 320),
        });
        return;
      }
      const next = {
        ...state.current,
        x: startState.x + dx,
        y: startState.y + dy,
      };
      state.current = next;
      const o = clampOffset(
        next,
        stageSize(),
        sizeRef.current,
        RUBBER_RESISTANCE,
      );
      gsap.set(box, o);
    };

    const onUp = (e: PointerEvent) => {
      if (!pointers.has(e.pointerId)) return;
      pointers.delete(e.pointerId);
      if (mode === "pinch") {
        if (pointers.size < 2) {
          mode = "none";
          pointers.clear();
          settle({ scale: clampScale(state.current.scale) });
        }
        return;
      }
      const wasMode = mode;
      mode = "none";

      if (!moved) {
        if (!downOnImage) return callbacks.current.onRequestClose();
        const tapDist = Math.hypot(
          e.clientX - lastTap.x,
          e.clientY - lastTap.y,
        );
        if (e.timeStamp - lastTap.t < DOUBLE_TAP_MS && tapDist < 30) {
          lastTap = { t: 0, x: 0, y: 0 };
          const zoomed = Math.abs(state.current.scale - 1) > 0.001;
          if (zoomed) reset();
          else zoomBy(DOUBLE_TAP_ZOOM, rel(e.clientX, e.clientY));
        } else {
          lastTap = { t: e.timeStamp, x: e.clientX, y: e.clientY };
        }
        return;
      }

      if (wasMode === "dismiss") {
        const dy = e.clientY - startPt.y;
        if (
          Math.abs(dy) > DISMISS_DISTANCE ||
          Math.abs(velocity.y) > DISMISS_VELOCITY
        ) {
          callbacks.current.onRequestClose();
        } else {
          gsap.to(boxRef.current, {
            y: 0,
            duration: 0.45,
            ease: "back.out(1.6)",
          });
          gsap.to(backdropRef.current, { opacity: 1, duration: 0.3 });
        }
        return;
      }
      // Pan release: short glide, then clamp back inside the bounds.
      settle({
        x: state.current.x + velocity.x * 150,
        y: state.current.y + velocity.y * 150,
      });
    };

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") callbacks.current.onRequestClose();
      else if (e.key === "+" || e.key === "=") stepZoom(1);
      else if (e.key === "-" || e.key === "_") stepZoom(-1);
      else if (e.key === "0") reset();
    };

    stage.addEventListener("wheel", onWheel, { passive: false });
    stage.addEventListener("pointerdown", onDown);
    stage.addEventListener("pointermove", onMove);
    stage.addEventListener("pointerup", onUp);
    stage.addEventListener("pointercancel", onUp);
    window.addEventListener("keydown", onKey);
    return () => {
      stage.removeEventListener("wheel", onWheel);
      stage.removeEventListener("pointerdown", onDown);
      stage.removeEventListener("pointermove", onMove);
      stage.removeEventListener("pointerup", onUp);
      stage.removeEventListener("pointercancel", onUp);
      window.removeEventListener("keydown", onKey);
    };
  }, [
    enabled,
    stageRef,
    boxRef,
    backdropRef,
    sizeRef,
    zoomBy,
    stepZoom,
    reset,
    settle,
  ]);

  return { zoomBy, stepZoom, reset };
};
