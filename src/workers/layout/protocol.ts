import type { MemberPosition, Point, TeamFrame } from "@/types";

export interface ElkLayoutInput {
  nodeIds: string[];
  edges: { id: string; source: string; target: string }[];
}

// What the team layout needs from a team-view node: its id and the member's
// positions in that node's team. Plain data, so it can cross to a Worker.
export interface TeamLayoutInput {
  id: string;
  positions: MemberPosition[];
}

export interface TeamLayoutResult {
  positions: Map<string, Point>;
  frames: TeamFrame[];
}

export interface LayoutRequests {
  elk: ElkLayoutInput;
  team: TeamLayoutInput[];
}

export interface LayoutResults {
  // Position per `nodeIds` entry, in the same order.
  elk: Point[];
  team: TeamLayoutResult;
}

export type LayoutKind = keyof LayoutRequests;

export interface LayoutMessage<K extends LayoutKind = LayoutKind> {
  id: number;
  kind: K;
  payload: LayoutRequests[K];
}

export type LayoutResponse =
  | { id: number; result: LayoutResults[LayoutKind] }
  | { id: number; error: string };
