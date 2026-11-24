import { useEffect, useState } from "react";
import { Assets, Texture } from "pixi.js";
import { requestCanvasRender } from "@/utils/membersTree/renderDemand";

interface Options {
  // Mipmaps keep heavily minified images (avatars at overview zoom) smooth and
  // cheap to sample.
  mipmaps?: boolean;
  // Free the texture once no node has used it for a while. For the large
  // avatars: kept forever, panning a zoomed-in tree fills the GPU memory.
  release?: boolean;
}

// Unused for this long before it is freed: zooming out and back in again
// reuses the textures instead of decoding and uploading them again.
const RELEASE_DELAY_MS = 30_000;
// A failed URL is tried again after this long, or when the device is back
// online, but only a few times (a broken link stays broken).
const RETRY_DELAY_MS = 30_000;
const MAX_FAILURES = 3;

const users = new Map<string, number>();
const releaseTimers = new Map<string, ReturnType<typeof setTimeout>>();

const retain = (src: string) => {
  users.set(src, (users.get(src) ?? 0) + 1);
  clearTimeout(releaseTimers.get(src));
  releaseTimers.delete(src);
};

const releaseLater = (src: string) => {
  const left = (users.get(src) ?? 1) - 1;
  if (left > 0) {
    users.set(src, left);
    return;
  }
  users.delete(src);
  releaseTimers.set(
    src,
    setTimeout(() => {
      releaseTimers.delete(src);
      if (!users.has(src) && Assets.cache.has(src)) void Assets.unload(src);
    }, RELEASE_DELAY_MS),
  );
};

const failures = new Map<string, number>();
const blocked = new Set<string>();
const retryListeners = new Set<() => void>();
let retryTimer: ReturnType<typeof setTimeout> | undefined;

const retryFailed = () => {
  clearTimeout(retryTimer);
  retryTimer = undefined;
  blocked.forEach((src) => {
    if ((failures.get(src) ?? 0) < MAX_FAILURES) blocked.delete(src);
  });
  [...retryListeners].forEach((listener) => listener());
};

const markFailed = (src: string) => {
  failures.set(src, (failures.get(src) ?? 0) + 1);
  blocked.add(src);
  retryTimer ??= setTimeout(retryFailed, RETRY_DELAY_MS);
};

if (typeof window !== "undefined") {
  window.addEventListener("online", () => {
    failures.clear();
    retryFailed();
  });
}

export const useTexture = (
  src: string | null,
  { mipmaps = false, release = false }: Options = {},
): Texture | null => {
  const [loaded, setLoaded] = useState<{
    src: string;
    texture: Texture;
  } | null>(null);
  const [attempt, setAttempt] = useState(0);

  useEffect(() => {
    if (!src) return;
    if (release) retain(src);
    const cleanup = () => {
      if (release) releaseLater(src);
    };

    if (Assets.cache.has(src)) return cleanup;

    const retry = () => setAttempt((n) => n + 1);
    if (blocked.has(src)) {
      retryListeners.add(retry);
      return () => {
        retryListeners.delete(retry);
        cleanup();
      };
    }

    let mounted = true;
    Assets.load<Texture>(
      mipmaps ? { src, data: { autoGenerateMipmaps: true } } : { src },
    )
      .then((texture) => {
        if (!mounted) return;
        setLoaded({ src, texture });
        requestCanvasRender();
      })
      .catch(() => {
        markFailed(src);
        if (mounted) retryListeners.add(retry);
      });

    return () => {
      mounted = false;
      retryListeners.delete(retry);
      cleanup();
    };
  }, [src, mipmaps, release, attempt]);

  if (!src) return null;
  if (Assets.cache.has(src)) return Assets.get<Texture>(src);
  // A texture of a previous `src` is never returned: it may already be freed.
  return loaded?.src === src && !loaded.texture.destroyed
    ? loaded.texture
    : null;
};
