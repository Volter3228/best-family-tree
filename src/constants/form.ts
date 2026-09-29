import { endOfYear, subYears } from "date-fns";
import type { MemberFormData } from "@/types";

/* Date Input */
export const MAX_DATE_BIRTHDAY = endOfYear(subYears(new Date(), 16));
export const MIN_DATE_BIRTHDAY = new Date(1980, 0, 1);
export const MIN_DATE_JOIN = new Date(2002, 0, 1);

export const MEMBER_FORM_DEFAULTS: MemberFormData = {
  firstName: "",
  lastName: "",
  birthday: null,
  joinedAt: null,
  mentorId: "",
  status: null,
  phoneNumber: "",
  email: "",
  photo: null,
  telegramLink: "",
  instagramLink: "",
  facebookLink: "",
  linkedinLink: "",
  positions: [],
};
