import { http } from "@/libs/http";
import { ENDPOINTS } from "@/constants/endpoints";
import type { Team, TeamDetails } from "@/types";

const parse = async <T>(res: Response): Promise<T> => {
  if (!res.ok) {
    const body = await res.json().catch(() => null);
    throw new Error(body?.error || `HTTP Error! Status: ${res.status}`);
  }
  return res.status === 204 ? (undefined as T) : res.json();
};

export const fetchTeamDetails = async (id: string) =>
  parse<TeamDetails>(await http(ENDPOINTS.getTeam(id), { cache: "no-cache" }));

export const createTeam = async (formData: FormData) =>
  parse<Team>(
    await http(
      ENDPOINTS.createTeam,
      { method: "POST", body: formData },
      true,
    ),
  );

export const updateTeam = async (id: string, formData: FormData) =>
  parse<Team>(
    await http(
      ENDPOINTS.updateTeam(id),
      { method: "PUT", body: formData },
      true,
    ),
  );

export const deleteTeam = async (id: string) =>
  parse<void>(await http(ENDPOINTS.deleteTeam(id), { method: "DELETE" }));

export interface TeamMemberPayload {
  memberId: string;
  roleId?: string;
  roleName?: string;
}

export const setTeamMembers = async (
  id: string,
  members: TeamMemberPayload[],
) =>
  parse<TeamDetails>(
    await http(ENDPOINTS.setTeamMembers(id), {
      method: "PUT",
      body: JSON.stringify({ members }),
    }),
  );
