import { http } from "@/libs/http";
import { ENDPOINTS } from "@/constants/endpoints";
import type { EventType, Role, Team } from "@/types";

// Shared reference-data APIs used by forms and filters.
export async function fetchEventTypes(): Promise<EventType[]> {
  const res = await http(ENDPOINTS.getEventTypes);
  if (!res.ok) {
    throw new Error(`HTTP Error! Status: ${res.status}`);
  }
  return res.json();
}

export async function createEventType(formData: FormData): Promise<EventType> {
  const res = await http(
    ENDPOINTS.createEventType,
    { method: "POST", body: formData },
    true,
  );
  if (!res.ok) {
    const body = await res.json().catch(() => null);
    throw new Error(body?.error || `HTTP Error! Status: ${res.status}`);
  }
  return res.json();
}

export async function updateEventType(
  id: string,
  formData: FormData,
): Promise<EventType> {
  const res = await http(
    ENDPOINTS.updateEventType(id),
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

export async function fetchTeams(eventTypeId?: string): Promise<Team[]> {
  const url = eventTypeId
    ? `${ENDPOINTS.getTeams}?eventTypeId=${eventTypeId}`
    : ENDPOINTS.getTeams;
  const res = await http(url);
  if (!res.ok) {
    throw new Error(`HTTP Error! Status: ${res.status}`);
  }
  return res.json();
}
