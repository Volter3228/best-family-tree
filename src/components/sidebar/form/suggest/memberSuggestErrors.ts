import type { SuggestionChange } from "@/api/selfService";
import type { Messages } from "@/i18n/messages";
import type { Member } from "@/models";
import type {
  MemberFormData,
  MemberFormErrors,
  MentorsListItem,
  Team,
  TeamType,
} from "@/types";
import validateMemberForm from "../validations/memberFormValidation";

// Suggest field -> the form fields it covers.
const FORM_KEYS: Record<string, (keyof MemberFormData)[]> = {
  name: ["firstName", "lastName"],
  phoneNumbers: ["phoneNumber"],
};

interface Context {
  member: Member;
  changes: SuggestionChange[];
  mentorsList: MentorsListItem[];
  teams: Team[];
  teamTypes: TeamType[];
  t: Messages["memberForm"]["validation"];
  cannotEmpty: string;
}

// Emptying a stored field is refused; a format error counts only for a
// field the suggestion actually changes. Position rows are always checked.
export const collectSuggestErrors = (
  form: MemberFormData,
  { member, changes, mentorsList, teams, teamTypes, t, cannotEmpty }: Context,
): MemberFormErrors => {
  const changed = new Set(
    changes.flatMap(({ field }) => FORM_KEYS[field] ?? [field]),
  );
  const all = validateMemberForm(form, mentorsList, teamTypes, member, {
    teams,
    t,
  });
  const result: MemberFormErrors = {};
  if (all.positionErrors) result.positionErrors = all.positionErrors;
  for (const [key, message] of Object.entries(all)) {
    if (typeof message !== "string") continue;
    const name = key as keyof MemberFormData;
    if (name === "positions") result.positions = message;
    else if (!form[name]) result[name] = cannotEmpty;
    else if (changed.has(name)) result[name] = message;
  }
  return result;
};
