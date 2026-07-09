import { memo, useCallback, useMemo } from "react";
import { CanvasTextMetrics, Graphics, TextStyle } from "pixi.js";
import { Member } from "@/models";
import { formatMemberRecruitmentSeason } from "@/utils";
import {
  NODE_AVATAR_SIZE,
  NODE_SUBTITLE_STYLE,
  NODE_TITLE_STYLE,
  NODE_WIDTH,
  PRIMARY_GRADIENT,
  SLATE_LIGHT_COLOR,
  NODE_CARD_TOP,
  NODE_CARD_HEIGHT,
  NODE_CARD_RADIUS,
} from "@/constants/canvas";

interface Props {
  member: Member;
  isSelected: boolean;
}

const titleStyle = new TextStyle(NODE_TITLE_STYLE);
const subtitleStyle = new TextStyle(NODE_SUBTITLE_STYLE);

const TEXT_Y = NODE_AVATAR_SIZE + 17;

const MemberNodeCard = ({ member, isSelected }: Props) => {
  const centerX = NODE_WIDTH / 2;

  const titleMetrics = useMemo(
    () => CanvasTextMetrics.measureText(member.name, titleStyle),
    [member.name],
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
      g.fill({ color: SLATE_LIGHT_COLOR });

      if (isSelected) {
        g.stroke({ fill: PRIMARY_GRADIENT, width: 2 });
      } else {
        g.stroke({
          color: SLATE_LIGHT_COLOR,
          width: 3,
          alpha: 0.25,
        });
      }
    },
    [isSelected],
  );

  return (
    <pixiContainer>
      <pixiGraphics draw={drawCardBackground} />
      <pixiContainer x={centerX} y={TEXT_Y}>
        <pixiBitmapText text={member.name} style={titleStyle} anchor={0.5} />
        <pixiBitmapText
          text={formatMemberRecruitmentSeason(member)}
          anchor={0.5}
          y={subtitleY}
          style={subtitleStyle}
        />
      </pixiContainer>
    </pixiContainer>
  );
};

export default memo(MemberNodeCard);
