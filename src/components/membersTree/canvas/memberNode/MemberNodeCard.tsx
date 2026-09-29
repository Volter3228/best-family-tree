import { memo, useCallback, useMemo } from "react";
import { CanvasTextMetrics, Graphics, TextStyle } from "pixi.js";
import { Member } from "@/models";
import { formatMemberRecruitmentSeason } from "@/utils";
import { useCanvasTheme } from "@/hooks";
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

const MemberNodeCard = ({
  member,
  isSelected,
  placeholderColorIndex,
  teamRole,
}: Props) => {
  const centerX = NODE_WIDTH / 2;
  const {
    primaryGradientToTopRight,
    surfaceAccentColors,
    textStyles,
    cardStroke,
    cardStrokeAlpha,
  } = useCanvasTheme();

  const titleStyle = useMemo(
    () => new TextStyle(textStyles.title),
    [textStyles],
  );
  const subtitleStyle = useMemo(
    () => new TextStyle(textStyles.subtitle),
    [textStyles],
  );

  const titleMetrics = useMemo(
    () => CanvasTextMetrics.measureText(member.name, titleStyle),
    [member.name, titleStyle],
  );

  const subtitleText = useMemo(
    () => teamRole || formatMemberRecruitmentSeason(member),
    [member, teamRole],
  );

  const subtitleY = titleMetrics.height / 2 + 12;

  const drawCardBackground = useCallback(
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

      if (isSelected) {
        g.stroke({ fill: primaryGradientToTopRight, width: 3 });
      } else {
        g.stroke({
          color: cardStroke,
          width: 3,
          alpha: cardStrokeAlpha,
        });
      }
    },
    [
      isSelected,
      placeholderColorIndex,
      surfaceAccentColors,
      primaryGradientToTopRight,
      cardStroke,
      cardStrokeAlpha,
    ],
  );

  return (
    <pixiContainer>
      <pixiGraphics draw={drawCardBackground} />
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
