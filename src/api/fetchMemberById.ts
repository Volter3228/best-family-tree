import { http } from "@/libs/http";
import Member from "@/models/Member";
import { ENDPOINTS } from "@/constants/endpoints";
import { Member as MemberType } from "@/types";

const fetchMemberById = async (id: string): Promise<Member | null> => {
  try {
    const res = await http(ENDPOINTS.getMemberById(id), {
      cache: "force-cache",
    });

    if (!res.ok) {
      if (res.status === 404) {
        console.warn(`Member with id ${id} not found`);
        return null;
      }
      throw new Error(`HTTP Error! Status: ${res.status}`);
    }

    const data: MemberType = await res.json();
    const member = new Member(data);
    return member;
  } catch (error) {
    console.error("Error fetching member: ", error);
    return null;
  }
};

export default fetchMemberById;
