import { useMemo } from "react";
import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/16/solid";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  TelegramIcon,
} from "@/components/icons/social";
import {
  MAX_DATE_BIRTHDAY,
  MIN_DATE_BIRTHDAY,
  MIN_DATE_JOIN,
} from "@/constants/form";
import { getStatusOptions } from "@/constants/filters";
import { useMentorsList } from "@/hooks";
import { useLocale, useT } from "@/i18n/useT";
import { useMembersStore } from "@/store/membersStore";
import { useDisplayName } from "@/utils/displayName";
import { collectDescendantIds } from "@/utils/membersTree";
import type {
  AccentColor,
  DropdownOption,
  MemberFormData,
  MemberStatus,
} from "@/types";
import SocialsHeading from "../fields/SocialsHeading";
import FormField from "../fields/FormField";
import { DateInput, DropdownSelectInput, TextInput } from "../inputs";

type Errors = Partial<Record<keyof MemberFormData, string>>;

interface Props {
  form: MemberFormData;
  setForm: React.Dispatch<React.SetStateAction<MemberFormData>>;
  errors: Errors;
  memberId: string;
  // Fields the record already has are marked required: they cannot be emptied.
  stored: { lastName: boolean; birthday: boolean; mentor: boolean };
  color: AccentColor;
}

const SOCIALS = [
  {
    key: "telegramLink",
    label: "Telegram",
    placeholder: "Vouchik",
    icon: TelegramIcon,
  },
  {
    key: "instagramLink",
    label: "Instagram",
    placeholder: "patron_dsns",
    icon: InstagramIcon,
  },
  {
    key: "facebookLink",
    label: "Facebook",
    placeholder: "BEST.Lviv",
    icon: FacebookIcon,
  },
  {
    key: "linkedinLink",
    label: "LinkedIn",
    placeholder: "bestlviv",
    icon: LinkedinIcon,
  },
] as const;

const MemberSuggestFields = ({
  form,
  setForm,
  errors,
  memberId,
  stored,
  color,
}: Props) => {
  const t = useT().memberForm;
  const dn = useDisplayName();
  const locale = useLocale();
  const mentorsList = useMentorsList();
  const childrenOf = useMembersStore((s) => s.childrenOf);

  const statusOptions: DropdownOption[] = useMemo(
    () =>
      getStatusOptions(locale).map(({ value, label }) => ({
        value,
        text: label,
      })),
    [locale],
  );
  const mentorOptions: DropdownOption[] = useMemo(() => {
    const excluded = new Set([
      memberId,
      ...collectDescendantIds(childrenOf, memberId),
    ]);
    return mentorsList
      .filter(({ id }) => !excluded.has(id))
      .map(({ id, name }) => ({ text: dn(name), value: id }));
  }, [mentorsList, memberId, childrenOf, dn]);

  const set =
    <K extends keyof MemberFormData>(key: K) =>
    (value: MemberFormData[K]) =>
      setForm((prev) => ({ ...prev, [key]: value }));

  return (
    <div className="@container flex w-full flex-col gap-3">
      <div className="flex flex-col">
        <div className="grid grid-cols-1 gap-3 @[22rem]:grid-cols-2">
          <FormField error={errors.firstName} color={color}>
            <TextInput
              name="firstName"
              label={t.firstName}
              value={form.firstName}
              onChange={set("firstName")}
              placeholder={t.firstNamePlaceholder}
              required
              color={color}
            />
          </FormField>
          <FormField error={errors.lastName} color={color}>
            <TextInput
              name="lastName"
              label={t.lastName}
              value={form.lastName}
              onChange={set("lastName")}
              placeholder={t.lastNamePlaceholder}
              required={stored.lastName}
              color={color}
            />
          </FormField>
        </div>
      </div>
      <FormField error={errors.birthday} color={color}>
        <DateInput
          name="birthday"
          label={t.birthday}
          selected={form.birthday}
          onChange={(date) => date && set("birthday")(date)}
          placeholder="18.04.2000"
          maxDate={MAX_DATE_BIRTHDAY}
          minDate={MIN_DATE_BIRTHDAY}
          required={stored.birthday}
          color={color}
        />
      </FormField>
      <div className="grid grid-cols-1 gap-3 @[22rem]:grid-cols-2">
        <FormField error={errors.joinedAt} color={color}>
          <DateInput
            name="joinedAt"
            label={t.joinedAt}
            selected={form.joinedAt}
            onChange={(date) => date && set("joinedAt")(date)}
            placeholder="22.10.2017"
            minDate={MIN_DATE_JOIN}
            required
            color={color}
          />
        </FormField>
        <FormField error={errors.status} color={color}>
          <DropdownSelectInput
            name="status"
            label={t.status}
            options={statusOptions}
            onSelect={(status) => set("status")(status as MemberStatus)}
            placeholder={t.status}
            initialValue={form.status || undefined}
            required
            color={color}
          />
        </FormField>
      </div>
      <FormField error={errors.mentorId} color={color}>
        <DropdownSelectInput
          name="mentor"
          label={t.mentor}
          options={mentorOptions}
          onSelect={set("mentorId")}
          placeholder={t.mentorPlaceholder}
          autoComplete
          required={stored.mentor}
          initialValue={form.mentorId || undefined}
          color={color}
        />
      </FormField>
      <FormField error={errors.email} color={color}>
        <TextInput
          name="email"
          label="Email"
          value={form.email}
          onChange={set("email")}
          placeholder="kak.pukiv.worst@ukr.net"
          icon={EnvelopeIcon}
          color={color}
        />
      </FormField>
      <FormField error={errors.phoneNumber} color={color}>
        <TextInput
          name="phoneNumber"
          label={t.phoneNumber}
          value={form.phoneNumber}
          onChange={set("phoneNumber")}
          placeholder="+380674947207"
          icon={PhoneIcon}
          color={color}
        />
      </FormField>
      <SocialsHeading color={color} />
      <div className="grid grid-cols-1 gap-3 @[22rem]:grid-cols-2">
        {SOCIALS.map(({ key, label, placeholder, icon }) => (
          <FormField key={key} error={errors[key]} color={color}>
            <TextInput
              name={key}
              label={label}
              value={form[key]}
              onChange={set(key)}
              placeholder={placeholder}
              icon={icon}
              color={color}
            />
          </FormField>
        ))}
      </div>
    </div>
  );
};

export default MemberSuggestFields;
