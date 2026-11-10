import { http } from "@/libs/http";
import { ENDPOINTS } from "@/constants/endpoints";
import { toApiError } from "./ApiError";
import type { Member as MemberType } from "@/types";

export default async function addMember(formData: FormData) {
  const res = await http(
    ENDPOINTS.addMember,
    {
      method: "POST",
      body: formData,
    },
    true,
  );

  if (!res.ok) {
    throw await toApiError(res);
  }

  const data: MemberType = await res.json();
  return data;
}
