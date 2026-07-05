import { http } from "@/libs/http";
import { ENDPOINTS } from "@/constants/endpoints";
import type { Member as MemberType } from "@/types";

export default async function fetchFamilyTree() {
  const res = await http(ENDPOINTS.getFamilyTree, {
    cache: "no-cache",
  });

  if (!res.ok) {
    throw new Error(`HTTP Error! Status: ${res.status}`);
  }

  const data: MemberType[] = await res.json();
  return data;
}
