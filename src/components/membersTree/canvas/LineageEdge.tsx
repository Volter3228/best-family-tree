import { useCallback, memo } from "react";
import { useMembersStore } from "@/store/membersStore";
import { buildPath } from "@/utils";
import { useCanvasTheme, useDashedPathAnimation } from "@/hooks";
import { FIXED_EDGE_WIDTH } from "@/constants/canvas";
import type { NodePositions } from "@/types";

interface Props {
  selectedId: string | null;
  nodePositions: NodePositions;
  pixelLine: boolean;
}

const LineageEdge = ({ selectedId, nodePositions, pixelLine }: Props) => {
  const { accentColors } = useCanvasTheme();

  // The mentor chain only changes with the tree structure, which always
  // comes with new node positions, so the members are read on demand.
  const buildMemberPath = useCallback(
    (id: string) =>
      buildPath(id, useMembersStore.getState().byId, nodePositions),
    [nodePositions],
  );

  const initDraw = useDashedPathAnimation({
    targetId: selectedId,
    buildPath: buildMemberPath,
    pixelLine,
    colors: accentColors,
    width: FIXED_EDGE_WIDTH + 2,
  });

  return <pixiGraphics draw={initDraw} eventMode="none" />;
};

export default memo(LineageEdge);
