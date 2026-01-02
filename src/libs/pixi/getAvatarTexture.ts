import { Assets, Texture } from "pixi.js";

const LION_ICON_PATH = "/images/lion-white.svg";

let lionTextureCache: Texture | null = null;

const loadLionSvgHighRes = async (): Promise<Texture | null> => {
  if (lionTextureCache) {
    return lionTextureCache;
  }

  try {
    // Load SVG with high resolution parsing options
    const texture = await Assets.load<Texture>({
      src: LION_ICON_PATH,
      data: {
        resolution: 4, // 4x resolution for crisp display when zoomed
        width: 400,
        height: 400,
      },
    });
    lionTextureCache = texture;
    return texture;
  } catch (err) {
    console.error("Failed to load lion SVG with high resolution:", err);
    // Fallback to regular load
    const texture = await Assets.load(LION_ICON_PATH);
    lionTextureCache = texture;
    return texture;
  }
};

const getAvatarTexture = async (imageSource?: string | null) => {
  try {
    if (imageSource) {
      const texture = await Assets.load(imageSource);
      return texture;
    }

    // Use high-resolution lion SVG for fallback
    return await loadLionSvgHighRes();
  } catch (err) {
    console.error("Failed to load Pixi texture:", imageSource, err);

    if (imageSource) {
      try {
        return await loadLionSvgHighRes();
      } catch (e) {
        console.error("Failed to load fallback texture", e);
      }
    }
  }
};

export default getAvatarTexture;
