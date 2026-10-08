import { http } from "@/libs/http";
import { ENDPOINTS } from "@/constants/endpoints";

export default async function deleteMember(id: string) {
  const res = await http(ENDPOINTS.editMember(id), { method: "DELETE" });

  if (!res.ok) {
    const body = await res.json().catch(() => null);
    throw new Error(body?.error || `HTTP Error! Status: ${res.status}`);
  }
}
