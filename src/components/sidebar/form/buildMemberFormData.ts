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
      if (key === "phoneNumber") {
        formData.append("phoneNumbers", JSON.stringify([value]));
      } else if (key === "photo") {
        if (value instanceof File) {
          formData.append(key, value);
        } else if (typeof value === "string") {
          formData.append(key, value);
        }
      } else if (key === "positions") {
        const positions = (value as MemberFormData["positions"])
          .filter((position) => position.roleName.trim() !== "")
          .map(
            ({
              id: _id,
              isYearOnly: _isYearOnly,
              isCurrent: _isCurrent,
              ...position
            }) => position,
          );
        formData.append("positions", JSON.stringify(positions));
      } else if (typeof value === "object") {
        formData.append(key, JSON.stringify(value));
      } else {
        formData.append(key, String(value));
      }
    }
  });

  return formData;
};
