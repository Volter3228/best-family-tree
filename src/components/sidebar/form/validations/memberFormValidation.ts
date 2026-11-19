import {
  MAX_DATE_BIRTHDAY,
  MIN_DATE_BIRTHDAY,
  MIN_DATE_JOIN,
} from "@/constants/form";
import { MEMBER_STATUSES } from "@/constants/member";
import { messages, type Messages } from "@/i18n/messages";
import type { Member } from "@/models";
import { normalizePhone } from "@/utils/phone";
import { getRowPeriod } from "../fields/position/positionFormUtils";
import type {
  MemberFormData,
  MentorsListItem,
  PositionFormRow,
  Team,
  TeamType,
} from "@/types";

type ValidationMessages = Messages["memberForm"]["validation"];

const TELEGRAM_LINK_REGEX = /^((https?:\/\/)?(www\.)?t\.me\/\S+|@?\w{5,})$/;
const INSTAGRAM_LINK_REGEX =
  /^((https?:\/\/)?(www\.)?instagram\.com\/\S+|@?[a-zA-Z0-9._]{1,30})$/;
const FACEBOOK_LINK_REGEX =
  /^((https?:\/\/)?(www\.)?(facebook\.com|fb\.com)(\/\S*)?|@?[\w.]{1,50})$/;
const LINKEDIN_LINK_REGEX =
  /^((https?:\/\/)?(www\.)?linkedin\.com\/in\/\S+|@?[a-zA-Z0-9][a-zA-Z0-9_-]{1,98}[a-zA-Z0-9])$/;

type Links = {
  telegramLink: string;
  instagramLink: string;
  facebookLink: string;
  linkedinLink: string;
};

const validateLinks = (
  { telegramLink, facebookLink, instagramLink, linkedinLink }: Links,
  INVALID_LINK_MESSAGE: string,
) => {
  const errors: Partial<Links> = {};
  if (telegramLink && !TELEGRAM_LINK_REGEX.exec(telegramLink)) {
    errors.telegramLink = INVALID_LINK_MESSAGE;
  }
  if (instagramLink && !INSTAGRAM_LINK_REGEX.exec(instagramLink)) {
    errors.instagramLink = INVALID_LINK_MESSAGE;
  }
  if (facebookLink && !FACEBOOK_LINK_REGEX.exec(facebookLink)) {
    errors.facebookLink = INVALID_LINK_MESSAGE;
  }
  if (linkedinLink && !LINKEDIN_LINK_REGEX.exec(linkedinLink)) {
    errors.linkedinLink = INVALID_LINK_MESSAGE;
  }

  return errors;
};

// Events without a team name are named "<type> <start year>", so they need it.
// New teams exist only as editions of an event type (the server enforces it).
const validatePositions = (
  positions: PositionFormRow[],
  teamTypes: TeamType[],
  teams: Team[],
  t: ValidationMessages,
): string | undefined => {
  for (const position of positions) {
    if (!position.roleName.trim()) continue;

    if (getRowPeriod(teams, position, teamTypes).kind === "unavailable") {
      return t.noSuchTeam;
    }
    if (position.teamName?.trim()) continue;

    const teamType = teamTypes.find(({ id }) => id === position.teamTypeId);

    if (teamType?.isEvent && !position.teamStartYear) {
      return t.startYearRequired(teamType.name);
    }
  }
};

// What the stored member already has (edit mode). A stored value can be
// replaced but never emptied, while a field the record never had stays
// optional, so old records with gaps can be completed bit by bit.
export type StoredMemberValues = Pick<
  Member,
  "name" | "birthday" | "joinedAt" | "mentorId" | "email" | "phoneNumbers"
>;

type CheckedField =
  | "firstName"
  | "lastName"
  | "birthday"
  | "joinedAt"
  | "mentorId"
  | "email"
  | "phoneNumber";

// The API delivers dates as ISO strings although the model types them as Date.
const toTime = (value: Date | string | null | undefined): number | null =>
  value ? new Date(value).getTime() : null;

const getStoredFieldValues = (
  stored: StoredMemberValues,
): Record<CheckedField, string | number | null> => {
  const [firstName = "", ...rest] = stored.name.split(" ");
  return {
    firstName,
    lastName: rest.join(" "),
    birthday: toTime(stored.birthday),
    joinedAt: toTime(stored.joinedAt),
    mentorId: stored.mentorId,
    email: stored.email,
    phoneNumber: stored.phoneNumbers[0] ?? null,
  };
};

const validateMemberForm = (
  form: MemberFormData,
  mentorsList: MentorsListItem[],
  teamTypes: TeamType[] = [],
  stored: StoredMemberValues | null = null,
  {
    minimal = false,
    teams = [],
    t = messages.uk.memberForm.validation,
  }: {
    minimal?: boolean;
    teams?: Team[];
    t?: ValidationMessages;
  } = {},
): Partial<Record<keyof MemberFormData, string>> => {
  const REQUIRED_MESSAGE = t.required;
  let errors: Partial<Record<keyof MemberFormData, string>> = {};
  const {
    firstName,
    lastName,
    birthday,
    joinedAt,
    status,
    mentorId,
    email,
    telegramLink,
    instagramLink,
    facebookLink,
    linkedinLink,
  } = form;

  const phoneNumber = normalizePhone(form.phoneNumber);
  const storedValues = stored && getStoredFieldValues(stored);
  // Adding: everything is required. Editing: only what is already stored.
  // Minimal record (old member): only the name and join date are demanded.
  const isRequired = (field: CheckedField) =>
    minimal
      ? field === "firstName" || field === "joinedAt"
      : !storedValues || !!storedValues[field];
  // A stored value the user did not touch is not judged again.
  const isUnchanged = (field: CheckedField, value: string | Date | null) =>
    !!storedValues &&
    storedValues[field] ===
      (value instanceof Date ? value.getTime() : value || null);

  if (!firstName && isRequired("firstName")) {
    errors.firstName = REQUIRED_MESSAGE;
  }

  if (!lastName && isRequired("lastName")) {
    errors.lastName = REQUIRED_MESSAGE;
  }

  if (!birthday) {
    if (isRequired("birthday")) errors.birthday = REQUIRED_MESSAGE;
  } else if (
    !isUnchanged("birthday", birthday) &&
    (birthday < MIN_DATE_BIRTHDAY || birthday > MAX_DATE_BIRTHDAY)
  ) {
    errors.birthday = t.birthdayInvalid;
  }

  if (!joinedAt) {
    if (isRequired("joinedAt")) errors.joinedAt = REQUIRED_MESSAGE;
  } else if (!isUnchanged("joinedAt", joinedAt) && joinedAt < MIN_DATE_JOIN) {
    errors.joinedAt = t.joinedAtInvalid;
  }

  if (!status) {
    errors.status = REQUIRED_MESSAGE;
  } else if (!MEMBER_STATUSES.includes(status)) {
    errors.status = t.statusInvalid;
  }

  if (!mentorId) {
    if (isRequired("mentorId")) errors.mentorId = REQUIRED_MESSAGE;
  } else if (
    !isUnchanged("mentorId", mentorId) &&
    !mentorsList.find(({ id }) => id === mentorId)
  ) {
    errors.mentorId = t.mentorInvalid;
  }

  if (!email) {
    if (isRequired("email")) errors.email = REQUIRED_MESSAGE;
  } else if (
    !isUnchanged("email", email) &&
    !/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email)
  ) {
    errors.email = t.emailInvalid;
  }

  if (!phoneNumber) {
    if (isRequired("phoneNumber")) errors.phoneNumber = REQUIRED_MESSAGE;
  } else if (
    !isUnchanged("phoneNumber", phoneNumber) &&
    !/^(\+380|380|0)\d{9}$/.test(phoneNumber)
  ) {
    errors.phoneNumber = t.phoneInvalid;
  }

  const positionsError = validatePositions(form.positions, teamTypes, teams, t);
  if (positionsError) errors.positions = positionsError;

  errors = {
    ...errors,
    ...validateLinks(
      { telegramLink, instagramLink, facebookLink, linkedinLink },
      t.invalidLink,
    ),
  };

  return errors;
};

export default validateMemberForm;
