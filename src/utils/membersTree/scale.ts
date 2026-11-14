import {
  AVATAR_LOW_RES_SIZE,
  CARD_VIEW_SCALE,
  MAX_RENDER_RESOLUTION,
  NODE_AVATAR_SIZE,
  TEAM_OVERVIEW_FAST_FACTOR,
  TEAM_OVERVIEW_END_SCALE,
  TEAM_OVERVIEW_START_SCALE,
} from "@/constants/canvas";

export const isZoomedOut = (scale: number) => scale < CARD_VIEW_SCALE;

export const getRenderResolution = () =>
  Math.min(window.devicePixelRatio || 1, MAX_RENDER_RESOLUTION);

// Drawn size of the avatar in device pixels.
const getAvatarScreenSize = (scale: number) =>
  NODE_AVATAR_SIZE * scale * getRenderResolution();

// Whether the small avatar texture would be upscaled on screen: the point
// where upgrading to the full-size avatar starts.
export const shouldUpgradeAvatars = (scale: number) =>
  getAvatarScreenSize(scale) > AVATAR_LOW_RES_SIZE;

// Once upgraded, the full-size avatars are kept until the avatar is drawn at
// half the small texture's size: a small texture downscaled with mipmaps still
// looks sharp, so dropping it at the upgrade point is visible for no gain.
const SHARP_AVATAR_KEEP_RATIO = 0.5;

export const shouldKeepSharpAvatars = (scale: number) =>
  getAvatarScreenSize(scale) > AVATAR_LOW_RES_SIZE * SHARP_AVATAR_KEEP_RATIO;

// 0 = full detail, 1 = team overview (continuous between the two scales).
export const getTeamOverviewProgress = (scale: number) =>
  Math.min(
    Math.max(
      (TEAM_OVERVIEW_START_SCALE - scale) /
      (TEAM_OVERVIEW_START_SCALE - TEAM_OVERVIEW_END_SCALE),
      0,
    ),
    1,
  );

// Same as the overview progress, but saturates quickly (used for fades).
export const getTeamOverviewFade = (scale: number) =>
  Math.min(getTeamOverviewProgress(scale) * TEAM_OVERVIEW_FAST_FACTOR, 1);
