import { Assets, GraphicsContext, Texture } from "pixi.js";

const LION_ICON_PATH = "/images/lion-white.svg";

const loadLionSvg = async (): Promise<Texture | GraphicsContext | void> => {
  try {
    const avatarSvg: GraphicsContext = await Assets.load({
      alias: "lion-icon-white",
      src: LION_ICON_PATH,
      data: {
        parseAsGraphicsContext: true,
      },
    });

    return avatarSvg;
  } catch (err) {
    console.error("Failed to load lion SVG with high resolution:", err);
  }
};

export const getAvatarImage = async (imageSource?: string | null) => {
  try {
    if (imageSource) {
      const avatarTexture: Texture = await Assets.load({
        src: imageSource,
      });

      return avatarTexture;
    }

    // Use lion SVG for members without avatar
    return await loadLionSvg();
  } catch (err) {
    console.error("Failed to load Pixi texture:", imageSource, err);

    if (imageSource) {
      try {
        return await loadLionSvg();
      } catch (e) {
        console.error("Failed to load fallback texture", e);
      }
    }
  }
};
