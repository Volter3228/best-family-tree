import type { MemberFormData } from "@/types";

export const buildMemberFormData = (
  form: MemberFormData,
  skipKeys: Set<string> = new Set(),
): FormData => {
  const formData = new FormData();

  Object.entries(form).forEach(([key, value]) => {
    if (skipKeys.has(key)) return;

    if (value instanceof Date) {
      formData.append(key, value.toISOString());
    } else if (value !== undefined && value !== null) {
      // TODO: Make phone numbers an array with possibility to expand
      if (key === "phoneNumber") {
        formData.append("phoneNumbers", JSON.stringify([value]));
      } else if (key === "photo") {
        formData.append(key, value);
      } else if (typeof value === "object") {
        formData.append(key, JSON.stringify(value));
      } else {
        formData.append(key, String(value));
      }
    }
  });

  return formData;
};
