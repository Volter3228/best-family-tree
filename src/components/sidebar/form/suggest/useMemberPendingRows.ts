import { useMemo } from "react";
import type { PendingSuggestion } from "@/api/selfService";
import { getStatusOptions } from "@/constants/filters";
import { useMentorsList } from "@/hooks";
import { useLocale, useT } from "@/i18n/useT";
import { useDisplayName } from "@/utils/displayName";
import { formatDay } from "../../manage/suggestionFormat";
import {
  isPositionField,
  parsePositionValue,
  summarizePosition,
} from "../../manage/positionSuggestion";
import { buildPendingRows } from "./pendingRows";

// The signed-in user's pending suggestions for a member, one line each.
export const useMemberPendingRows = (pending: PendingSuggestion[]) => {
  const t = useT().suggest;
  const tMember = useT().memberForm;
  const locale = useLocale();
  const dn = useDisplayName();
  const mentorsList = useMentorsList();

  return useMemo(() => {
    const statuses = getStatusOptions(locale);
    const labels: Record<string, string> = {
      name: t.name,
      photo: t.photo,
      birthday: tMember.birthday,
      joinedAt: tMember.joinedAt,
      status: tMember.status,
      mentorId: tMember.mentor,
      email: "Email",
      phoneNumbers: tMember.phoneNumber,
      telegramLink: "Telegram",
      instagramLink: "Instagram",
      facebookLink: "Facebook",
      linkedinLink: "LinkedIn",
      "position:add": t.positionAdd,
      "position:replace": t.positionReplace,
      "position:remove": t.positionRemove,
    };
    return buildPendingRows(
      pending,
      t,
      (field) => labels[field] ?? field,
      (field, value) => {
        if (isPositionField(field)) {
          const position = parsePositionValue(value);
          return position ? summarizePosition(position) : value;
        }
        if (field === "birthday" || field === "joinedAt")
          return formatDay(value, locale);
        if (field === "status") {
          return statuses.find((item) => item.value === value)?.label ?? value;
        }
        if (field === "mentorId") {
          const mentor = mentorsList.find(({ id }) => id === value);
          return mentor ? dn(mentor.name) : value;
        }
        return value;
      },
    );
  }, [pending, t, tMember, locale, mentorsList, dn]);
};
