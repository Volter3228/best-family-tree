import { http } from "@/libs/http";
import { ENDPOINTS } from "@/constants/endpoints";
import type { Member as MemberType } from "@/types";

export default async function editMember(id: string, formData: FormData) {
  const res = await http(
    ENDPOINTS.editMember(id),
    {
      method: "PUT",
      body: formData,
    },
    true,
  );

  if (!res.ok) {
    const body = await res.json().catch(() => null);
    throw new Error(body?.error || `HTTP Error! Status: ${res.status}`);
  }

  const data: MemberType = await res.json();
  return data;
}
