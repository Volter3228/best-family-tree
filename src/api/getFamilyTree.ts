import { ENDPOINTS } from "@/constants/endpoints";
import { Member as MemberType } from "@/types";
import http from "../libs/http";

export default async function getFamilyTree() {
  try {
    const res = await http(ENDPOINTS.getFamilyTree, {
      cache: "no-cache",
    });

    if (!res.ok) {
      throw new Error(`HTTP Error! Status: ${res.status}`);
    }

    const data: MemberType[] = await res.json();

    return data;
  } catch (error) {
    console.log(error);
  }
}
