"use client";

import { ReactNode, useEffect } from "react";
import { twMerge } from "tailwind-merge";
import { ArrowsPointingOutIcon } from "@heroicons/react/16/solid";
import { usePhotoViewerStore } from "@/store/photoViewerStore";
import { useT } from "@/i18n/useT";
import { loadImageAspect } from "./imageAspect";

interface Props {
  id: string;
  src: string;
  // Small version of `src`: gives the aspect ratio and the blurry first frame.
  previewSrc: string;
  alt: string;
  // Corner radius of the thumbnail and the hover overlay. The morph reads the
  // computed radius, so the photo lands on the exact thumbnail shape.
  roundedClassName: string;
  className?: string;
  children: ReactNode;
}

// True while the photo `id` is open in the viewer. A thumbnail's frame (rim,
// glow) uses it to hide with the thumbnail, so no empty slot is left behind.
export const useIsPhotoOpen = (id: string) =>
  usePhotoViewerStore((s) => s.photo?.id === id);

// Wraps a thumbnail: click opens it in the photo viewer. The thumbnail must
// fill the button (cover): the morph crops the photo to the button's rect.
// It hides while its photo is open, so the morph looks like one object moving.
const PhotoOpenButton = ({
  id,
  src,
  previewSrc,
  alt,
  roundedClassName,
  className,
  children,
}: Props) => {
  const t = useT().photoViewer;
  const open = usePhotoViewerStore((s) => s.open);
  const isOpen = useIsPhotoOpen(id);

  // Warm the aspect ratio so the viewer opens at the right shape immediately.
  useEffect(() => {
    void loadImageAspect(previewSrc);
  }, [previewSrc]);

  return (
    <button
      type="button"
      aria-label={t.open}
      className={twMerge(
        "group relative cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-blue",
        roundedClassName,
        className,
        isOpen && "opacity-0",
      )}
      onClick={async (e) => {
        const originEl = e.currentTarget;
        const aspect = await loadImageAspect(previewSrc);
        open({
          id,
          src,
          placeholderSrc: previewSrc,
          aspect,
          alt,
          originEl,
        });
      }}
    >
      {children}
      <span
        className={twMerge(
          "pointer-events-none absolute inset-0 flex items-center justify-center bg-black/0 opacity-0 transition-[opacity,background-color] duration-200 group-hover:bg-black/25 group-hover:opacity-100 group-focus-visible:bg-black/25 group-focus-visible:opacity-100",
          roundedClassName,
        )}
      >
        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-surface/75 text-foreground ring-1 ring-foreground/15 backdrop-blur-md">
          <ArrowsPointingOutIcon className="h-5 w-5" />
        </span>
      </span>
    </button>
  );
};

export default PhotoOpenButton;
