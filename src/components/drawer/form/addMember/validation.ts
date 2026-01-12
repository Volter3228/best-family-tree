import {
  MAX_DATE_BIRTHDAY,
  MIN_DATE_BIRTHDAY,
  MIN_DATE_JOIN,
} from "@/constants/form";
import { MEMBER_STATUSES } from "@/constants/member";
import { AddMemberForm, MentorsListItem } from "@/types";

const REQUIRED_MESSAGE = "Обов'язкове поле.";
const INVALID_LINK_MESSAGE = "Некоректне посилання.";
const TELEGRAM_LINK_REGEX = /^((https?:\/\/)?(www\.)?t\.me\/)?(\w{5,})$/;
const INSTAGRAM_LINK_REGEX =
  /^(https?:\/\/(www\.)?instagram\.com\/|instagram\.com\/)?([a-zA-Z0-9._]{1,30})$/;
const FACEBOOK_LINK_REGEX =
  /^(https?:\/\/)?(www\.)?(facebook\.com|fb\.com)(\/.*)?$/;
const LINKEDIN_LINK_REGEX =
  /^(https?:\/\/)?(www\.)?linkedin\.com\/in\/[a-zA-Z0-9][a-zA-Z0-9_-]{1,98}[a-zA-Z0-9]$/;

type Links = {
  telegramLink: string;
  instagramLink: string;
  facebookLink: string;
  linkedinLink: string;
};

const validateLinks = ({
  telegramLink,
  facebookLink,
  instagramLink,
  linkedinLink,
}: Links) => {
  const errors: Partial<Links> = {};
  if (!telegramLink || !TELEGRAM_LINK_REGEX.exec(telegramLink)) {
    errors.telegramLink = INVALID_LINK_MESSAGE;
  }
  if (!instagramLink || !INSTAGRAM_LINK_REGEX.exec(instagramLink)) {
    errors.instagramLink = INVALID_LINK_MESSAGE;
  }
  if (!facebookLink || !FACEBOOK_LINK_REGEX.exec(facebookLink)) {
    errors.facebookLink = INVALID_LINK_MESSAGE;
  }
  if (!linkedinLink || !LINKEDIN_LINK_REGEX.exec(linkedinLink)) {
    errors.linkedinLink = INVALID_LINK_MESSAGE;
  }

  return errors;
};

const validateForm = (
  form: AddMemberForm,
  mentorsList: MentorsListItem[]
): Partial<Record<keyof AddMemberForm, string>> => {
  let errors: Partial<Record<keyof AddMemberForm, string>> = {};
  const {
    firstName,
    lastName,
    birthday,
    joinedAt,
    status,
    mentorId,
    phoneNumber,
    email,
    telegramLink,
    instagramLink,
    facebookLink,
    linkedinLink,
  } = form;

  if (!firstName) {
    errors.firstName = REQUIRED_MESSAGE;
  }

  if (!lastName) {
    errors.lastName = REQUIRED_MESSAGE;
  }

  if (!birthday) {
    errors.birthday = REQUIRED_MESSAGE;
  } else if (birthday < MIN_DATE_BIRTHDAY || birthday > MAX_DATE_BIRTHDAY) {
    errors.birthday = "День народження некоректний.";
  }

  if (!joinedAt) {
    errors.joinedAt = REQUIRED_MESSAGE;
  } else if (joinedAt < MIN_DATE_JOIN) {
    errors.joinedAt = "День вступу некоректний.";
  }

  if (!status) {
    errors.status = REQUIRED_MESSAGE;
  } else if (!MEMBER_STATUSES.includes(status)) {
    errors.mentorId = "Некоректний ментор.";
  }

  if (!mentorId) {
    errors.mentorId = REQUIRED_MESSAGE;
  } else if (!mentorsList.find(({ id }) => id === mentorId)) {
    errors.mentorId = "Некоректний ментор.";
  }

  if (!email) {
    errors.email = REQUIRED_MESSAGE;
  } else if (!/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
    errors.email = "Некоректний email.";
  }

  if (!phoneNumber) {
    errors.phoneNumber = REQUIRED_MESSAGE;
  } else if (!/^(\+380|380|0)\d{9}$/.test(phoneNumber)) {
    errors.email = "Некоректний номер.";
  }

  errors = {
    ...errors,
    ...validateLinks({
      telegramLink,
      instagramLink,
      facebookLink,
      linkedinLink,
    }),
  };

  return errors;
};

export default validateForm;
