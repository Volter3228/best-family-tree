import { http } from "@/libs/http";
import { toApiError } from "./ApiError";

export interface SuggestionDto {
  id: string;
  batchId: string;
  target: {
    kind: "member" | "team";
    id: string;
    name: string;
    photo: string | null;
  };
  field: string;
  fromValue: string | null;
  toValue: string | null;
  currentValue: string | null;
  fromLabel?: string | null;
  toLabel?: string | null;
  currentLabel?: string | null;
  stale: boolean;
  locked: boolean;
  author: {
    memberId: string | null;
    name: string | null;
    email: string | null;
  };
  createdAt: string;
}

const parse = async <T>(res: Response): Promise<T> => {
  if (!res.ok) {
    throw await toApiError(res);
  }
  return res.status === 204 ? (undefined as T) : res.json();
};

export const fetchSuggestionCount = async () =>
  (
    await parse<{ count: number }>(
      await http("/suggestions/count", { cache: "no-store" }),
    )
  ).count;

export const fetchSuggestions = async () =>
  parse<SuggestionDto[]>(await http("/suggestions", { cache: "no-store" }));

export const approveSuggestion = async (id: string, force = false) =>
  parse<void>(
    await http(`/suggestions/${id}/approve`, {
      method: "POST",
      body: JSON.stringify({ force }),
    }),
  );

export const rejectSuggestion = async (id: string) =>
  parse<void>(await http(`/suggestions/${id}/reject`, { method: "POST" }));
