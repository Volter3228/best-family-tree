import { http } from "@/libs/http";
import { ENDPOINTS } from "@/constants/endpoints";
import type { MentorsListItem } from "@/types/members";

const fetchMentorsList = async () => {
  const res = await http(ENDPOINTS.getMentorsList);

  if (!res.ok) {
    throw new Error(`HTTP Error! Status: ${res.status}`);
  }

  const data: MentorsListItem[] = await res.json();

  return data;
};

export default fetchMentorsList;
