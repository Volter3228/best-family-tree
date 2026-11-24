import { http } from "@/libs/http";
import { toApiError } from "./ApiError";
import fetchMemberById from "./fetchMemberById";
import { useMembersStore } from "@/store/membersStore";
import { useSessionStore } from "@/store/sessionStore";

const put = async (endpoint: string, body: unknown) => {
  const res = await http(endpoint, {
    method: "PUT",
    body: JSON.stringify(body),
  });
  if (!res.ok) throw await toApiError(res);
};

export const setFeaturedPosition = (positionId: string | null) =>
  put("/me/featured-position", { positionId });

export const setNameBadge = (
  badge: { teamId: string } | { icon: "LION" | "BEST" } | null,
) => put("/me/name-badge", badge ?? {});

/** Reloads the session and the member, so the sidebar shows the change at once. */
export const refreshProfile = async (memberId: string) => {
  const [, member] = await Promise.all([
    useSessionStore.getState().load(),
    fetchMemberById(memberId),
  ]);
  if (member) useMembersStore.getState().updateMember(member);
};
