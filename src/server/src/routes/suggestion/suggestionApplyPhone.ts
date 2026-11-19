import { ConflictError } from "../../utils/httpErrors.js";
import { PHONE_REMOVE, PHONE_REPLACE } from "../../utils/suggestions.js";
import type { MemberTransaction } from "../member/memberQueries.js";
import type { EditSuggestion } from "../../db/prisma/generated/client.js";

type Suggestion = EditSuggestion;

export const applyPhone = async (
  tx: MemberTransaction,
  memberId: string,
  row: Suggestion,
) => {
  if (row.field === PHONE_REMOVE) {
    await tx.phoneNumber.deleteMany({
      where: { ownerId: memberId, phoneNumber: row.fromValue! },
    });
    return;
  }
  const existing = await tx.phoneNumber.findUnique({
    where: { phoneNumber: row.toValue! },
  });
  if (existing?.ownerId === memberId) {
    if (row.field === PHONE_REPLACE) {
      await tx.phoneNumber.deleteMany({
        where: { ownerId: memberId, phoneNumber: row.fromValue! },
      });
    }
    return;
  }
  if (existing) {
    throw new ConflictError(
      "This phone number belongs to another member",
      "phoneNumbers",
      {
        code: "contact_taken",
        params: { platform: "phone" },
      },
    );
  }
  if (row.field === PHONE_REPLACE) {
    const { count } = await tx.phoneNumber.updateMany({
      where: { ownerId: memberId, phoneNumber: row.fromValue! },
      data: { phoneNumber: row.toValue! },
    });
    // The old number is already gone (a forced stale approve): add the new one.
    if (count > 0) return;
  }
  await tx.phoneNumber.create({
    data: { phoneNumber: row.toValue!, ownerId: memberId },
  });
};
