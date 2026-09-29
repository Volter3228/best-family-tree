import {
  ElkExtendedEdge,
  ElkNode,
  LayoutOptions as ElkLayoutOptions,
} from "elkjs/lib/elk.bundled.js";
import elk, { DEFAULT_POSITION, FLOW_VIEWPORT_DIRECTION } from "../../libs/elk";
import { Member } from "@/models";
import {
  type TreeEdge,
  type Direction,
  type MemberNode,
  Position,
} from "@/types";
import { NODE_HEIGHT, NODE_WIDTH } from "@/constants/canvas";
import { hashString } from "../strings";

const PRIMARY_COLOR_COUNT = 3;

// Return ELK settings shared by all tree layouts.
const getLayoutOptions = (): ElkLayoutOptions => {
  return {
    "elk.algorithm": "mrtree",
    "elk.direction": "DOWN",
    "elk.separateConnectedComponents": "true",
    // Spacing
    "elk.spacing.nodeNode": "80",
    "elk.spacing.componentComponent": "2000",
  };
};

// Convert the mentor tree into canvas nodes and edges.
export const transformMembersToFlowValues = (
  members: Member[],
  parentRowIndex: number = 0,
): { nodes: MemberNode[]; edges: TreeEdge[] } => {
  const nodes: MemberNode[] = [];
  const edges: TreeEdge[] = [];

  const groupSeed = members[0]?.mentorId ?? "root";
  const startColorIdx = hashString(groupSeed) % PRIMARY_COLOR_COUNT;

  members.forEach((member, index) => {
    const placeholderColorIndex = (startColorIdx + index) % PRIMARY_COLOR_COUNT;
    const mentorId = member.mentorId;
    nodes.push({
      id: member.id,
      type: "member",
      data: { member, placeholderColorIndex },
      position: DEFAULT_POSITION,
      style: {} as React.CSSProperties,
    });

    if (mentorId) {
      edges.push({
        id: `E_${mentorId}->${member.id}`,
        source: mentorId,
        target: member.id,
        style: {} as React.CSSProperties,
      });
    }

    if (member.mentees.length > 0) {
      const { nodes: transformedNodes, edges: transformedEdges } =
        transformMembersToFlowValues(member.mentees, parentRowIndex + 1);

      nodes.push(...transformedNodes);
      edges.push(...transformedEdges);
    }
  });

  return {
    nodes,
    edges,
  };
};

// Build the unique node ID for one member in one team.
export const getTeamNodeId = (teamId: string, memberId: string) =>
  `team:${teamId}:member:${memberId}`;

// Extract team and member IDs from a team-view node ID.
export const parseTeamNodeId = (nodeId: string) => {
  const [, teamId, , memberId] = nodeId.split(":");
  return { teamId, memberId };
};

// Group filtered member positions by team, marking leaders separately.
const groupMembersByTeam = (
  members: Member[],
  eventTypeNames: string[] = [],
): Map<string, { leaderIds: string[]; memberIds: string[] }> => {
  const teamMap = new Map<
    string,
    { leaderIds: string[]; memberIds: string[] }
  >();

  for (const member of members) {
    for (const pos of member.positions) {
      if (
        !pos.teamId ||
        (eventTypeNames.length > 0 &&
          ![pos.team?.eventType?.name ?? "", pos.team?.eventTypeId ?? ""].some(
            (value) => eventTypeNames.includes(value),
          ))
      )
        continue;
      const teamId = pos.teamId;
      if (!teamMap.has(teamId)) {
        teamMap.set(teamId, { leaderIds: [], memberIds: [] });
      }
      const team = teamMap.get(teamId)!;

      if (pos.role?.isLeaderPosition && !team.leaderIds.includes(member.id)) {
        team.leaderIds.push(member.id);
      }
      if (!team.memberIds.includes(member.id)) {
        team.memberIds.push(member.id);
      }
    }
  }

  return teamMap;
};

// Build one disconnected team component with leader-to-member edges.
export const transformMembersToTeamTreeValues = (
  members: Member[],
  eventTypeNames: string[] = [],
): { nodes: MemberNode[]; edges: TreeEdge[] } => {
  const nodes: MemberNode[] = [];
  const edges: TreeEdge[] = [];

  const teamMap = groupMembersByTeam(members, eventTypeNames);
  const memberById = new Map(members.map((member) => [member.id, member]));

  // Build one disconnected component per team.
  let colorIdx = 0;
  for (const [teamId, team] of teamMap) {
    const { leaderIds, memberIds } = team;
    if (memberIds.length === 0) continue;

    for (const memberId of memberIds) {
      const member = memberById.get(memberId);
      if (!member) continue;

      nodes.push({
        id: getTeamNodeId(teamId, memberId),
        type: "member",
        data: {
          member,
          placeholderColorIndex: colorIdx % PRIMARY_COLOR_COUNT,
        },
        position: DEFAULT_POSITION,
        style: {} as React.CSSProperties,
      });
      colorIdx++;
    }

    for (const leaderId of leaderIds) {
      for (const memberId of memberIds) {
        if (leaderId === memberId) continue;
        edges.push({
          id: `E_team_${teamId}_${leaderId}->${memberId}`,
          source: getTeamNodeId(teamId, leaderId),
          target: getTeamNodeId(teamId, memberId),
          style: {} as React.CSSProperties,
        });
      }
    }
  }

  return { nodes, edges };
};

// Return member IDs valid for the currently selected team view.
export const getTeamTreeNodeIds = (
  members: Member[],
  eventTypeNames: string[] = [],
): Set<string> => {
  const nodeIds = new Set<string>();

  for (const [, team] of groupMembersByTeam(members, eventTypeNames)) {
    if (team.memberIds.length === 0) continue;
    for (const id of team.leaderIds) nodeIds.add(id);
    for (const id of team.memberIds) nodeIds.add(id);
  }

  return nodeIds;
};

// Adapt internal nodes and edges to the graph shape expected by ELK.
const getElkGraph = (nodes: MemberNode[], edges: TreeEdge[]): ElkNode => {
  const elkNodes: ElkNode[] = nodes.map((node) => ({
    ...node,
    width: NODE_WIDTH,
    height: NODE_HEIGHT + 240, // Additional space between node layers
  }));

  const elkEdges: ElkExtendedEdge[] = edges.map((edge) => ({
    ...edge,
    sources: [edge.source],
    targets: [edge.target],
  }));

  return {
    id: "root",
    children: elkNodes,
    edges: elkEdges,
  };
};

// Run ELK and map computed coordinates back onto member nodes.
export const getLayoutedElements = async (
  nodes: MemberNode[],
  edges: TreeEdge[],
  direction: Direction = FLOW_VIEWPORT_DIRECTION.DESKTOP,
) => {
  // Convert to ELK format
  const elkGraph = getElkGraph(nodes, edges);

  // TODO: Get layout options based on direction for mobile view
  const layoutOptions = getLayoutOptions();

  // Perform layout
  const layoutedGraph = await elk.layout(elkGraph, {
    layoutOptions,
  });

  const [targetPosition, sourcePosition] =
    direction === FLOW_VIEWPORT_DIRECTION.DESKTOP
      ? [Position.Top, Position.Bottom]
      : [Position.Left, Position.Right];

  const layoutedNodes = nodes.map((node, index) => {
    const elkNode = layoutedGraph.children?.[index];
    return {
      ...node,
      targetPosition,
      sourcePosition,
      position: {
        x: elkNode?.x ?? 0,
        y: elkNode?.y ?? 0,
      },
    };
  });

  // Convert back to React Flow format
  return { layoutedNodes, layoutedEdges: edges };
};
