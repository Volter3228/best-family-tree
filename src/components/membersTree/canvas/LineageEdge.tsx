import { useCallback, memo } from "react";
import { Member } from "@/models";
import { buildPath } from "@/utils";
import { useCanvasTheme, useDashedPathAnimation } from "@/hooks";
import { FIXED_EDGE_WIDTH } from "@/constants/canvas";
import type { MembersMap, NodePositions } from "@/types";

interface Props {
  selectedMember: Member | null;
  membersMap: MembersMap;
  nodePositions: NodePositions;
  pixelLine: boolean;
}

const LineageEdge = ({
  selectedMember,
  membersMap,
  nodePositions,
  pixelLine,
}: Props) => {
  const { accentColors } = useCanvasTheme();

  const buildMemberPath = useCallback(
    (id: string) => buildPath(id, membersMap, nodePositions),
    [membersMap, nodePositions],
  );

  const initDraw = useDashedPathAnimation({
    targetId: selectedMember?.id ?? null,
    buildPath: buildMemberPath,
    pixelLine,
    colors: accentColors,
    width: FIXED_EDGE_WIDTH + 2,
  });

  return <pixiGraphics draw={initDraw} />;
};

export default memo(LineageEdge);
