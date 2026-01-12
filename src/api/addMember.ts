import { http } from "@/libs";
import { ENDPOINTS } from "@/constants/endpoints";
import { Member as MemberType } from "@/types";

export default async function addMember(formData: FormData) {
  try {
    const res = await http(
      ENDPOINTS.addMember,
      {
        method: "POST",
        body: formData,
      },
      true
    );

    if (!res.ok) {
      throw new Error(`HTTP Error! Status: ${res.status}`);
    }

    const data: MemberType = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}
