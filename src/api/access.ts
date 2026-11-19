import { http } from "@/libs/http";
import { toApiError } from "./ApiError";

export type GrantLevel = "EDITOR" | "ADMIN";

export interface AccessGrant {
  memberId: string;
  name: string;
  photo: string | null;
  level: GrantLevel;
  activityState?: string;
}

const parse = async <T>(res: Response): Promise<T> => {
  if (!res.ok) {
    throw await toApiError(res);
  }
  return res.status === 204 ? (undefined as T) : res.json();
};

export const fetchGrants = async () =>
  parse<AccessGrant[]>(await http("/access/grants", { cache: "no-store" }));

export const setGrant = async (memberId: string, level: GrantLevel) =>
  parse<AccessGrant>(
    await http(`/access/grants/${memberId}`, {
      method: "PUT",
      body: JSON.stringify({ level }),
    }),
  );

export const removeGrant = async (memberId: string) =>
  parse<void>(await http(`/access/grants/${memberId}`, { method: "DELETE" }));
