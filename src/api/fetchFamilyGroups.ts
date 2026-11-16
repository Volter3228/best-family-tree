import { http } from "@/libs/http";
import { ENDPOINTS } from "@/constants/endpoints";

export type FamilyGroupOption = { id: string; name: string };

const fetchFamilyGroups = async (): Promise<FamilyGroupOption[]> => {
  const res = await http(ENDPOINTS.getFamilyGroups);

  if (!res.ok) {
    throw new Error(`HTTP Error! Status: ${res.status}`);
  }

  const data: FamilyGroupOption[] = await res.json();

  return data;
};

export default fetchFamilyGroups;
