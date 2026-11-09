const cache = new Map<string, Promise<number>>();

/** Loads `src` (use a tiny version) and resolves with width / height; 1 on failure. */
export const loadImageAspect = (src: string): Promise<number> => {
  let cached = cache.get(src);
  if (!cached) {
    cached = new Promise<number>((resolve) => {
      const img = new Image();
      img.onload = () =>
        resolve(
          img.naturalWidth && img.naturalHeight
            ? img.naturalWidth / img.naturalHeight
            : 1,
        );
      img.onerror = () => resolve(1);
      img.src = src;
    });
    cache.set(src, cached);
  }
  return cached;
};
