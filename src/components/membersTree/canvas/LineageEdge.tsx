import { useCallback, memo } from "react";
import { useMembersStore } from "@/store/membersStore";
import { buildPath } from "@/utils";
import { useCanvasTheme, useDashedPathAnimation } from "@/hooks";
import { FIXED_EDGE_WIDTH } from "@/constants/canvas";
import type { Direction, EdgeStyle, NodePositions } from "@/types";

interface Props {
  selectedId: string | null;
  nodePositions: NodePositions;
  pixelLine: boolean;
  direction: Direction;
  edgeStyle: EdgeStyle;
}

const LineageEdge = ({
  selectedId,
  nodePositions,
  pixelLine,
  direction,
  edgeStyle,
}: Props) => {
  const { accentColors } = useCanvasTheme();

  // The mentor chain only changes with the tree structure, which always
  // comes with new node positions, so the members are read on demand.
  const buildMemberPath = useCallback(
    (id: string) =>
      buildPath(
        id,
        useMembersStore.getState().byId,
        nodePositions,
        direction,
        edgeStyle,
      ),
    [nodePositions, direction, edgeStyle],
  );

  const initDraw = useDashedPathAnimation({
    targetId: selectedId,
    buildPath: buildMemberPath,
    pixelLine,
    colors: accentColors,
    width: FIXED_EDGE_WIDTH + 2,
  });

  // A render group of its own: the dashes rebuild ~30 times a second, and
  // that must not invalidate the instructions of the whole tree.
  return (
    <pixiContainer isRenderGroup label="lineage-edge">
      <pixiGraphics draw={initDraw} eventMode="none" />
    </pixiContainer>
  );
};

export default memo(LineageEdge);
