import { memo, useMemo } from "react";
import {
  NODE_CARD_HEIGHT,
  NODE_CARD_TOP,
  NODE_WIDTH,
} from "@/constants/canvas";
import type { MemberNode } from "@/types";
import { getPositionYearLabel, parseTeamNodeId } from "@/utils";
import TeamLabel from "./TeamLabel";

interface Props {
  nodes: MemberNode[];
  isZoomedOut: boolean;
}

interface TeamPositionLabel {
  id: string;
  text: string;
  x: number;
  y: number;
  placeholderColorIndex: number;
}

const getTeamLabelText = (
  position: MemberNode["data"]["member"]["positions"][number],
) => {
  const context = position.team?.name || position.team?.eventType?.name || "";
  const year = getPositionYearLabel(position);
  return [context, year && `(${year})`].filter(Boolean).join(" ");
};

const getTeamPositionLabels = (nodes: MemberNode[]): TeamPositionLabel[] => {
  const teams = new Map<
    string,
    {
      node: MemberNode;
      position: MemberNode["data"]["member"]["positions"][number];
    }[]
  >();

  for (const node of nodes) {
    const teamId = parseTeamNodeId(node.id).teamId;
    if (!teamId) continue;

    const position =
      node.data.member.positions.find(
        (candidate) =>
          candidate.teamId === teamId &&
          candidate.team &&
          candidate.role?.isLeaderPosition,
      ) ||
      node.data.member.positions.find(
        (candidate) => candidate.teamId === teamId && candidate.team,
      );
    if (!position) continue;

    const members = teams.get(teamId) || [];
    members.push({ node, position });
    teams.set(teamId, members);
  }

  return Array.from(teams.entries()).map(([teamId, members]) => {
    const anchor =
      members.find(({ position }) => position.role?.isLeaderPosition) ||
      members[0];

    return {
      id: teamId,
      text: getTeamLabelText(anchor.position),
      x: anchor.node.position.x + NODE_WIDTH / 2,
      y: anchor.node.position.y + NODE_CARD_TOP + NODE_CARD_HEIGHT + 32,
      placeholderColorIndex: anchor.node.data.placeholderColorIndex,
    };
  });
};

const TeamLabelsLayer = ({ nodes, isZoomedOut }: Props) => {
  const labels = useMemo(() => getTeamPositionLabels(nodes), [nodes]);

  return (
    <pixiContainer eventMode="none">
      {labels.map((label) => (
        <TeamLabel
          key={label.id}
          text={label.text}
          visible={!isZoomedOut}
          x={label.x}
          y={label.y}
          placeholderColorIndex={label.placeholderColorIndex}
        />
      ))}
    </pixiContainer>
  );
};

export default memo(TeamLabelsLayer);
