import { http } from "@/libs/http";
import { ENDPOINTS } from "@/constants/endpoints";
import { Member as MemberType } from "@/types";

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
    const body = await res.json().catch(() => null);
    throw new Error(body?.error || `HTTP Error! Status: ${res.status}`);
  }

  const data: MemberType = await res.json();
  return data;
}
