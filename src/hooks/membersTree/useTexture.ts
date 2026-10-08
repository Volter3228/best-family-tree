import { useEffect, useState } from "react";
import { Assets, Texture } from "pixi.js";

interface Options {
  // Mipmaps keep heavily minified images (avatars at overview zoom) smooth and
  // cheap to sample.
  mipmaps?: boolean;
}

export const useTexture = (
  src: string | null,
  { mipmaps = false }: Options = {},
): Texture | null => {
  const [texture, setTexture] = useState<Texture | null>(() =>
    src && Assets.cache.has(src) ? Assets.get(src) : null,
  );

  useEffect(() => {
    if (!src) {
      setTexture(null);
      return;
    }

    if (Assets.cache.has(src)) {
      setTexture(Assets.get(src));
      return;
    }

    let mounted = true;
    Assets.load(
      mipmaps ? { src, data: { autoGenerateMipmaps: true } } : { src },
    )
      .then((tex) => {
        if (mounted) setTexture(tex);
      })
      .catch(() => {});

    return () => {
      mounted = false;
    };
  }, [src, mipmaps]);

  return texture;
};
