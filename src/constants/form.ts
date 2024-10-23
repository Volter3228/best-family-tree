import { type AddMemberForm } from "@/types";
import { endOfYear, subYears } from "date-fns";

/* Date Input */
export const MAX_DATE_BIRTHDAY = endOfYear(subYears(new Date(), 16));
export const MIN_DATE_BIRTHDAY = new Date(1980, 0, 1);
export const MIN_DATE_JOIN = new Date(2002, 0, 1);

export const ADD_MEMBER_DEFAULTS: AddMemberForm = {
  firstName: "",
  lastName: "",
  birthday: null,
  joinedAt: null,
  mentorId: "",
  status: "OBSERVER",
  phoneNumber: "",
  email: "",
  photo: null,
  telegramLink: "",
  instagramLink: "",
  facebookLink: "",
  linkedinLink: "",
};
