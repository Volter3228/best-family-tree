import { http } from "@/libs/http";
import { toApiError } from "./ApiError";

export interface SuggestionChange {
  field: string;
  value: string | null;
}

export interface PendingSuggestion {
  field: string;
  toValue: string | null;
  fromValue: string | null;
  createdAt: string;
}

const send = async <T>(
  endpoint: string,
  init: RequestInit,
  isFormData = false,
): Promise<T> => {
  const res = await http(endpoint, init, isFormData);
  if (!res.ok) throw await toApiError(res);
  return res.json();
};

const photoBody = (field: string, file: File) => {
  const body = new FormData();
  body.append(field, file);
  return body;
};

export const uploadMyPhoto = (file: File) =>
  send<{ photo: string }>(
    "/me/photo",
    { method: "PUT", body: photoBody("photo", file) },
    true,
  );

export const uploadTeamPhoto = (teamId: string, file: File) =>
  send<{ photoUrl: string }>(
    `/teams/${teamId}/photo`,
    { method: "PUT", body: photoBody("icon", file) },
    true,
  );

const postChanges = (endpoint: string, changes: SuggestionChange[]) =>
  send<{ batchId: string; count: number }>(endpoint, {
    method: "POST",
    body: JSON.stringify({ changes }),
  });

export const suggestMemberChanges = (
  memberId: string,
  changes: SuggestionChange[],
) => postChanges(`/members/${memberId}/suggestions`, changes);

export const suggestTeamChanges = (
  teamId: string,
  changes: SuggestionChange[],
) => postChanges(`/teams/${teamId}/suggestions`, changes);

export const fetchMyMemberSuggestions = (memberId: string) =>
  send<PendingSuggestion[]>(`/members/${memberId}/suggestions/mine`, {});

export const fetchMyTeamSuggestions = (teamId: string) =>
  send<PendingSuggestion[]>(`/teams/${teamId}/suggestions/mine`, {});

export const removeMyPhoto = async () => {
  const res = await http("/me/photo", { method: "DELETE" });
  if (!res.ok) throw await toApiError(res);
};

export const suggestMemberPhoto = (memberId: string, file: File) =>
  send<{ batchId: string; count: number }>(
    `/members/${memberId}/suggestions/photo`,
    { method: "POST", body: photoBody("photo", file) },
    true,
  );

export const suggestTeamPhoto = (teamId: string, file: File) =>
  send<{ batchId: string; count: number }>(
    `/teams/${teamId}/suggestions/photo`,
    { method: "POST", body: photoBody("photo", file) },
    true,
  );
