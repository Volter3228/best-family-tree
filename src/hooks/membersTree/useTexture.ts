import { useEffect, useState } from "react";
import { Assets, Texture } from "pixi.js";

export const useTexture = (src: string | null): Texture | null => {
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
    Assets.load({ src })
      .then((tex) => {
        if (mounted) setTexture(tex);
      })
      .catch(() => {});

    return () => {
      mounted = false;
    };
  }, [src]);

  return texture;
};
