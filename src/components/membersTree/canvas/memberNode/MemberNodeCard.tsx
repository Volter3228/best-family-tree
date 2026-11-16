import { memo, useCallback, useMemo } from "react";
import { CanvasTextMetrics, Graphics } from "pixi.js";
import { Member } from "@/models";
import { formatMemberRecruitmentSeason, truncateText } from "@/utils";
import { useCanvasTheme } from "@/hooks";
import { getCardBackgroundContext } from "./cardBackgroundContext";
import {
  NODE_AVATAR_SIZE,
  NODE_WIDTH,
  NODE_CARD_TOP,
  NODE_CARD_HEIGHT,
  NODE_CARD_RADIUS,
} from "@/constants/canvas";

interface Props {
  member: Member;
  isSelected: boolean;
  placeholderColorIndex: number;
  teamRole?: string;
}

const TEXT_Y = NODE_AVATAR_SIZE + 17;
const SUBTITLE_PADDING = 16;

// The typings require `draw`; the shared context is already drawn.
const keepSharedContext = () => {};

const MemberNodeCard = ({
  member,
  isSelected,
  placeholderColorIndex,
  teamRole,
}: Props) => {
  const centerX = NODE_WIDTH / 2;
  const {
    primaryGradientToBottomRight,
    surfaceAccentColors,
    textStyleInstances,
    cardStroke,
    cardStrokeAlpha,
  } = useCanvasTheme();

  const titleStyle = textStyleInstances.title;
  const subtitleStyle = textStyleInstances.subtitle;

  const titleMetrics = useMemo(
    () => CanvasTextMetrics.measureText(member.name, titleStyle),
    [member.name, titleStyle],
  );

  // Several roles in one team are comma separated; keep them inside the card.
  const subtitleText = useMemo(
    () =>
      truncateText(
        teamRole || formatMemberRecruitmentSeason(member),
        subtitleStyle,
        NODE_WIDTH - 2 * SUBTITLE_PADDING,
      ),
    [member, teamRole, subtitleStyle],
  );

  const subtitleY = titleMetrics.height / 2 + 12;

  // Only the selected card has its own geometry (gradient stroke).
  const drawSelectedBackground = useCallback(
    (g: Graphics) => {
      g.clear();
      g.beginPath();
      g.roundRect(
        0,
        NODE_CARD_TOP,
        NODE_WIDTH,
        NODE_CARD_HEIGHT,
        NODE_CARD_RADIUS,
      );
      g.fill({
        color: surfaceAccentColors[placeholderColorIndex],
      });
      g.stroke({ fill: primaryGradientToBottomRight, width: 3 });
    },
    [placeholderColorIndex, surfaceAccentColors, primaryGradientToBottomRight],
  );

  const sharedBackground = useMemo(
    () =>
      getCardBackgroundContext(
        surfaceAccentColors[placeholderColorIndex],
        cardStroke,
        cardStrokeAlpha,
      ),
    [surfaceAccentColors, placeholderColorIndex, cardStroke, cardStrokeAlpha],
  );

  return (
    <pixiContainer>
      {/* Distinct keys remount the Graphics: draw() must never touch a shared context. */}
      {isSelected ? (
        <pixiGraphics key="selected" draw={drawSelectedBackground} />
      ) : (
        <pixiGraphics
          key="shared"
          context={sharedBackground}
          draw={keepSharedContext}
        />
      )}
      <pixiContainer x={centerX} y={TEXT_Y}>
        <pixiBitmapText text={member.name} style={titleStyle} anchor={0.5} />
        <pixiBitmapText
          text={subtitleText}
          anchor={0.5}
          y={subtitleY}
          style={subtitleStyle}
        />
      </pixiContainer>
    </pixiContainer>
  );
};

export default memo(MemberNodeCard);
