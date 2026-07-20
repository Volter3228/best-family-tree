import { Assets, Texture } from "pixi.js";

export const getAvatarImage = async (
  imageSource?: string | null,
): Promise<Texture | null> => {
  if (!imageSource) return null;
  try {
    return await Assets.load({ src: imageSource });
  } catch (err) {
    console.error("Failed to load Pixi texture:", imageSource, err);
    return null;
  }
};
