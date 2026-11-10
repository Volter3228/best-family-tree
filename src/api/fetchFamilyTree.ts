import { http, UnauthorizedError } from "@/libs/http";
import { ENDPOINTS } from "@/constants/endpoints";
import type { Member as MemberType } from "@/types";

// `cookie` is forwarded when called from a server component, which has no
// browser to attach the session cookie.
export default async function fetchFamilyTree(cookie?: string) {
  const res = await http(ENDPOINTS.getFamilyTree, {
    cache: "no-cache",
    headers: cookie ? { Cookie: cookie } : undefined,
  });

  if (res.status === 401) throw new UnauthorizedError();
  if (!res.ok) {
    throw new Error(`HTTP Error! Status: ${res.status}`);
  }

  const data: MemberType[] = await res.json();
  return data;
}
