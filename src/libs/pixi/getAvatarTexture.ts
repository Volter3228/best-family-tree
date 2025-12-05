import { Assets } from "pixi.js";

const LION_ICON_PATH = "/images/lion-white.svg";

const getAvatarTexture = async (imageSource?: string | null) => {
  try {
    if (imageSource) {
      const texture = await Assets.load(imageSource);
      return texture;
    }

    const texture = await Assets.load(LION_ICON_PATH);
    return texture;
  } catch (err) {
    console.error("Failed to load Pixi texture:", imageSource, err);

    if (imageSource) {
      try {
        const fallbackTexture = await Assets.load(LION_ICON_PATH);
        return fallbackTexture;
      } catch (e) {
        console.error("Failed to load fallback texture", e);
      }
    }
  }
};

export default getAvatarTexture;
