import { http } from "@/libs/http";
import { ENDPOINTS } from "@/constants/endpoints";
import type { TeamType, Role, Team } from "@/types";

// Shared reference-data APIs used by forms and filters.
export async function fetchTeamTypes(): Promise<TeamType[]> {
  const res = await http(ENDPOINTS.getTeamTypes);
  if (!res.ok) {
    throw new Error(`HTTP Error! Status: ${res.status}`);
  }
  return res.json();
}

export async function createTeamType(formData: FormData): Promise<TeamType> {
  const res = await http(
    ENDPOINTS.createTeamType,
    { method: "POST", body: formData },
    true,
  );
  if (!res.ok) {
    const body = await res.json().catch(() => null);
    throw new Error(body?.error || `HTTP Error! Status: ${res.status}`);
  }
  return res.json();
}

export async function updateTeamType(
  id: string,
  formData: FormData,
): Promise<TeamType> {
  const res = await http(
    ENDPOINTS.updateTeamType(id),
    { method: "PUT", body: formData },
    true,
  );
  if (!res.ok) {
    const body = await res.json().catch(() => null);
    throw new Error(body?.error || `HTTP Error! Status: ${res.status}`);
  }
  return res.json();
}

export async function fetchRoles(): Promise<Role[]> {
  const res = await http(ENDPOINTS.getRoles);
  if (!res.ok) {
    throw new Error(`HTTP Error! Status: ${res.status}`);
  }
  return res.json();
}

export async function createRole(data: {
  name: string;
  isLeaderPosition?: boolean;
}): Promise<Role> {
  const res = await http(ENDPOINTS.createRole, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (!res.ok) {
    const body = await res.json().catch(() => null);
    throw new Error(body?.error || `HTTP Error! Status: ${res.status}`);
  }
  return res.json();
}

export async function fetchTeams(teamTypeId?: string): Promise<Team[]> {
  const url = teamTypeId
    ? `${ENDPOINTS.getTeams}?teamTypeId=${teamTypeId}`
    : ENDPOINTS.getTeams;
  const res = await http(url);
  if (!res.ok) {
    throw new Error(`HTTP Error! Status: ${res.status}`);
  }
  return res.json();
}
