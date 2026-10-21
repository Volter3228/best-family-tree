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

// Whether the small avatar texture would be upscaled on screen.
export const needsSharpAvatars = (scale: number) =>
  NODE_AVATAR_SIZE * scale * getRenderResolution() > AVATAR_LOW_RES_SIZE;

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
