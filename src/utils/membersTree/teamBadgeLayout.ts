import { CanvasTextMetrics, type TextStyle } from "pixi.js";
import {
  TEAM_FRAME_RADIUS,
  TEAM_TITLE_ICON_PADDING,
  TEAM_TITLE_ICON_SIZE,
  TEAM_TITLE_PADDING_X,
  TEAM_TITLE_PADDING_Y,
} from "@/constants/canvas";
import { truncateText } from "./teamTitle";

// Horizontal room the logo takes at the left of the badge.
const ICON_SLOT = TEAM_TITLE_ICON_PADDING * 2 + TEAM_TITLE_ICON_SIZE - 4;

// Size of the badge pill and where its label starts. The label is shortened so
// the pill never gets wider than the frame it sits on.
export const getTeamBadgeLayout = (
  name: string,
  frameWidth: number,
  style: TextStyle,
  hasIcon: boolean,
) => {
  const textOffset = hasIcon ? ICON_SLOT : TEAM_TITLE_PADDING_X;
  const label = truncateText(
    name,
    style,
    frameWidth - TEAM_FRAME_RADIUS * 2 - textOffset - TEAM_TITLE_PADDING_X,
  );
  const metrics = CanvasTextMetrics.measureText(label, style);
  return {
    label,
    textOffset,
    width: textOffset + metrics.width + TEAM_TITLE_PADDING_X,
    height: Math.max(
      metrics.height + TEAM_TITLE_PADDING_Y * 2,
      hasIcon ? TEAM_TITLE_ICON_SIZE + TEAM_TITLE_ICON_PADDING * 2 : 0,
    ),
  };
};
