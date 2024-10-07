import { ENDPOINTS } from "@/constants/endpoints";
import { Member, Mentor } from "@/types";
import http from "./http";

export default async function getFamilyTree() {
  const res = await http(ENDPOINTS.getFamilyTree, { cache: "no-cache" });

  if (!res.ok) {
    throw new Error(`HTTP Error! Status: ${res.status}`);
  }

  const data: (Member | Mentor)[] = await res.json();

  return data;
}
