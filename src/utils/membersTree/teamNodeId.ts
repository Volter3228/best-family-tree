// Build the unique node ID for one member in one team.
export const getTeamNodeId = (teamId: string, memberId: string) =>
  `team:${teamId}:member:${memberId}`;

// Extract team and member IDs from a team-view node ID.
export const parseTeamNodeId = (nodeId: string) => {
  const [, teamId, , memberId] = nodeId.split(":");
  return { teamId, memberId };
};
