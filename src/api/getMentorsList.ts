import { ENDPOINTS } from "@/constants/endpoints";
import http from "../libs/http";
import type { MentorsListItem } from "@/types/members";

export default async function getMentorsList() {
  const res = await http(ENDPOINTS.getMentorsList);

  if (!res.ok) {
    throw new Error(`HTTP Error! Status: ${res.status}`);
  }

  const data: MentorsListItem[] = await res.json();

  return data;
}
