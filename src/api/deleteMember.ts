import { http } from "@/libs/http";
import { toApiError } from "./ApiError";
import { ENDPOINTS } from "@/constants/endpoints";

export default async function deleteMember(id: string) {
  const res = await http(ENDPOINTS.editMember(id), { method: "DELETE" });

  if (!res.ok) {
    throw await toApiError(res);
  }
}
