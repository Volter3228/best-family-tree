"use client";

import { useCallback, useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import {
  ArrowsPointingInIcon,
  MagnifyingGlassMinusIcon,
  MagnifyingGlassPlusIcon,
  XMarkIcon,
} from "@heroicons/react/16/solid";
import DropdownPortal from "@/components/common/DropdownPortal";
import { useMediaQuery } from "@/hooks/ui";
import {
  usePhotoViewerStore,
  type ViewerPhoto,
} from "@/store/photoViewerStore";
import {
  FULL_CLIP,
  coverMorph,
  viewerFitRect,
  type Rect,
  type Size,
} from "./photoViewerMath";
import { usePhotoGestures } from "./usePhotoGestures";

const PADDING = 16;
// Theme tokens: dark glass on dark themes, light glass with dark text on light ones.
const GLASS =
  "bg-surface/75 backdrop-blur-xl ring-1 ring-foreground/15 text-foreground shadow-lg shadow-black/20";
const BUTTON =
  "flex h-9 w-9 items-center justify-center rounded-full transition-colors hover:bg-foreground/10 focus-visible:outline-2 focus-visible:outline-foreground/60 cursor-pointer";

const viewportRect = (size: Size): Rect => ({
  left: (window.innerWidth - size.w) / 2,
  top: (window.innerHeight - size.h) / 2,
  ...size,
});

const Viewer = ({ photo }: { photo: ViewerPhoto }) => {
  const closeStore = usePhotoViewerStore((s) => s.close);
  const reduced = useMediaQuery("(prefers-reduced-motion: reduce)");
  const rootRef = useRef<HTMLDivElement>(null);
  const backdropRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const boxRef = useRef<HTMLDivElement>(null);
  const fullRef = useRef<HTMLImageElement>(null);
  const toolbarRef = useRef<HTMLDivElement>(null);
  const closeBtnRef = useRef<HTMLButtonElement>(null);
  const sizeRef = useRef<Size>({ w: 0, h: 0 });
  const closing = useRef(false);
  const [scale, setScale] = useState(1);
  const [ready, setReady] = useState(false);

  const setBoxSize = (size: Size) => {
    sizeRef.current = size;
    gsap.set(boxRef.current, { width: size.w, height: size.h });
  };

  // Open: morph out of the clicked thumbnail.
  useLayoutEffect(() => {
    setBoxSize(
      viewerFitRect(
        { w: photo.aspect, h: 1 },
        { w: window.innerWidth, h: window.innerHeight },
        PADDING,
      ),
    );
    const root = rootRef.current;
    const ui = [backdropRef.current, toolbarRef.current];
    const toolbarEls = toolbarRef.current?.children ?? [];
    if (reduced) {
      gsap.set(boxRef.current, { clipPath: FULL_CLIP });
      gsap.fromTo(root, { opacity: 0 }, { opacity: 1, duration: 0.15 });
    } else {
      const from = coverMorph(
        photo.originEl.getBoundingClientRect(),
        viewportRect(sizeRef.current),
        photo.fit,
      );
      const tl = gsap.timeline();
      tl.fromTo(
        boxRef.current,
        { x: from.x, y: from.y, scale: from.scale, clipPath: from.clipPath },
        {
          x: 0,
          y: 0,
          scale: 1,
          clipPath: FULL_CLIP,
          duration: 0.45,
          ease: "expo.out",
        },
        0,
      )
        .fromTo(
          backdropRef.current,
          { opacity: 0 },
          { opacity: 1, duration: 0.45, ease: "power2.out" },
          0,
        )
        .fromTo(
          [...toolbarEls],
          { opacity: 0, y: 8 },
          {
            opacity: 1,
            y: 0,
            duration: 0.35,
            ease: "power2.out",
            stagger: 0.04,
          },
          0.1,
        );
    }
    closeBtnRef.current?.focus({ preventScroll: true });
    const killTarget = boxRef.current;
    return () => {
      gsap.killTweensOf([killTarget, root, ...ui, ...toolbarEls]);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const requestClose = useCallback(() => {
    if (closing.current) return;
    closing.current = true;
    const finish = () => {
      closeStore();
      if (photo.originEl.isConnected)
        photo.originEl.focus({ preventScroll: true });
    };
    if (reduced || !photo.originEl.isConnected) {
      gsap.to(rootRef.current, {
        opacity: 0,
        duration: 0.15,
        onComplete: finish,
      });
      return;
    }
    const to = coverMorph(
      photo.originEl.getBoundingClientRect(),
      viewportRect(sizeRef.current),
      photo.fit,
    );
    gsap.fromTo(
      boxRef.current,
      { clipPath: FULL_CLIP },
      { clipPath: to.clipPath, duration: 0.32, ease: "power3.inOut" },
    );
    gsap.to(boxRef.current, {
      x: to.x,
      y: to.y,
      scale: to.scale,
      duration: 0.32,
      ease: "power3.inOut",
      overwrite: "auto",
      onComplete: finish,
    });
    gsap.to(backdropRef.current, {
      opacity: 0,
      duration: 0.32,
      ease: "power2.in",
    });
    gsap.to(toolbarRef.current?.children ?? [], { opacity: 0, duration: 0.15 });
  }, [closeStore, photo.originEl, reduced]);

  const { stepZoom, reset } = usePhotoGestures({
    stageRef,
    boxRef,
    backdropRef,
    sizeRef,
    enabled: true,
    onRequestClose: requestClose,
    onScaleChange: setScale,
  });

  // Full image loaded: grow the square placeholder into the real aspect ratio.
  const onFullLoad = () => {
    const img = fullRef.current;
    if (!img?.naturalWidth) return;
    const target = viewerFitRect(
      { w: img.naturalWidth, h: img.naturalHeight },
      { w: window.innerWidth, h: window.innerHeight },
      PADDING,
    );
    const size = { ...sizeRef.current };
    gsap.to(size, {
      w: target.w,
      h: target.h,
      duration: reduced ? 0 : 0.25,
      ease: "power2.out",
      onUpdate: () => setBoxSize({ w: size.w, h: size.h }),
    });
    setReady(true);
  };

  const zoomed = scale > 1.001;
  const scaled = Math.abs(scale - 1) > 0.001;

  return (
    <div
      ref={rootRef}
      className="fixed inset-0 z-[100] select-none"
      role="dialog"
      aria-modal="true"
      aria-label={photo.alt}
    >
      <div
        ref={backdropRef}
        className="absolute inset-0 bg-black/80 backdrop-blur-md"
      />
      <div
        ref={stageRef}
        className={`absolute inset-0 flex items-center justify-center overscroll-contain touch-none ${zoomed ? "cursor-grab active:cursor-grabbing" : ""}`}
      >
        <div ref={boxRef} className="relative will-change-transform">
          {/* eslint-disable @next/next/no-img-element */}
          <img
            src={photo.placeholderSrc}
            alt=""
            draggable={false}
            className={`absolute inset-0 h-full w-full object-cover ${ready ? "hidden" : ""}`}
          />
          <img
            ref={fullRef}
            src={photo.src}
            alt={photo.alt}
            draggable={false}
            onLoad={onFullLoad}
            className={`absolute inset-0 h-full w-full object-cover ${ready ? "" : "opacity-0"}`}
          />
          {/* eslint-enable @next/next/no-img-element */}
        </div>
      </div>
      <div className="pointer-events-none absolute inset-x-0 top-0 flex items-start justify-between p-4 pt-[max(1rem,env(safe-area-inset-top))]">
        <span className={`rounded-full px-3 py-1.5 text-sm ${GLASS}`}>
          {photo.alt}
        </span>
        <div className="pointer-events-auto">
          <button
            ref={closeBtnRef}
            type="button"
            aria-label="Закрити"
            onClick={requestClose}
            className={`${BUTTON} ${GLASS}`}
          >
            <XMarkIcon className="h-5 w-5" />
          </button>
        </div>
      </div>
      <div
        ref={toolbarRef}
        className="pointer-events-none absolute inset-x-0 bottom-[max(1.5rem,env(safe-area-inset-bottom))] flex justify-center"
      >
        <div
          className={`pointer-events-auto flex items-center gap-1 rounded-full p-1 ${GLASS}`}
        >
          <button
            type="button"
            aria-label="Зменшити"
            onClick={() => stepZoom(-1)}
            className={BUTTON}
          >
            <MagnifyingGlassMinusIcon className="h-5 w-5" />
          </button>
          <span className="min-w-12 text-center text-sm tabular-nums">
            {Math.round(scale * 100)}%
          </span>
          <button
            type="button"
            aria-label="Збільшити"
            onClick={() => stepZoom(1)}
            className={BUTTON}
          >
            <MagnifyingGlassPlusIcon className="h-5 w-5" />
          </button>
          {scaled && (
            <button
              type="button"
              aria-label="Скинути масштаб"
              onClick={reset}
              className={BUTTON}
            >
              <ArrowsPointingInIcon className="h-5 w-5" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

const PhotoViewer = () => {
  const photo = usePhotoViewerStore((s) => s.photo);
  if (!photo) return null;
  return (
    <DropdownPortal>
      <Viewer photo={photo} />
    </DropdownPortal>
  );
};

export default PhotoViewer;
