import { useMemo } from "react";
import { useMembers } from "@/hooks";
import { capitalizeOnlyFirstLetter } from "@/utils";
import {
  MAX_DATE_BIRTHDAY,
  MIN_DATE_BIRTHDAY,
  MIN_DATE_JOIN,
} from "@/constants/form";
import { MEMBER_STATUSES } from "@/constants/member";
import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/16/solid";
import type {
  MemberFormData,
  MemberFormMode,
  DropdownOption,
  AccentColor,
} from "@/types";
import {
  AvatarFileInput,
  TextInput,
  DateInput,
  DropdownSelectInput,
} from "../inputs";
import SocialMediaFields from "./SocialMediaFormFields";
import FieldError from "./FieldError";

interface Props {
  form: MemberFormData;
  setForm: React.Dispatch<React.SetStateAction<MemberFormData>>;
  errors: Partial<Record<keyof MemberFormData, string>>;
  mode?: MemberFormMode;
  initialAvatar?: string | null;
  color?: AccentColor;
}

const MemberFormFields = ({
  form,
  setForm,
  errors,
  mode = "add",
  initialAvatar = null,
  color = "blue",
}: Props) => {
  const { mentorsList, selectedMember } = useMembers();

  const mentorOptions: DropdownOption[] = useMemo(() => {
    const excludedIds = selectedMember
      ? new Set([selectedMember.id, ...selectedMember.getDescendantIds()])
      : new Set<string>();

    return mentorsList
      .filter(({ id }) => !excludedIds.has(id))
      .map(({ id, name }) => ({
        text: name,
        value: id,
      }));
  }, [mentorsList, selectedMember]);

  const statusOptions: DropdownOption[] = useMemo(
    () =>
      MEMBER_STATUSES.map((status) => ({
        value: status,
        text: capitalizeOnlyFirstLetter(status),
      })),
    [],
  );

  const handleTextChange = (name: string) => (value: string) => {
    setForm({ ...form, [name]: value });
  };

  const handleDateChange = (name: string) => (date: Date | null) => {
    if (date) {
      setForm({ ...form, [name]: date });
    }
  };

  const handleFileChange = (name: string) => (file: File | null) => {
    setForm({ ...form, [name]: file });
  };

  return (
    <div className="flex flex-col gap-6 items-center h-5/6 overflow-y-visible">
      <div className="flex flex-row flex-1 w-full justify-center mb-2">
        <AvatarFileInput
          onImageSelect={handleFileChange("photo")}
          image={form.photo}
          initialImage={mode === "edit" ? initialAvatar : null}
          color={color}
        />
      </div>
      <div className="flex flex-row flex-1 gap-2 w-full">
        <div className="flex flex-col flex-1 relative">
          <TextInput
            name="firstName"
            label="Ім'я"
            value={form.firstName}
            onChange={handleTextChange("firstName")}
            placeholder="В'ячеслав"
            required
            color={color}
          />
          <FieldError message={errors.firstName} color={color} />
        </div>
        <div className="flex flex-col flex-1 relative">
          <TextInput
            name="lastName"
            label="Прізвище"
            value={form.lastName}
            onChange={handleTextChange("lastName")}
            placeholder="Українцев"
            required
            color={color}
          />
          <FieldError message={errors.lastName} color={color} />
        </div>
      </div>
      <div className="flex flex-row flex-1 gap-2 w-full">
        <div className="flex flex-col flex-1 relative">
          <DateInput
            name="birthday"
            label="День народження"
            selected={form.birthday}
            onChange={handleDateChange("birthday")}
            placeholder="18.04.2000"
            maxDate={MAX_DATE_BIRTHDAY}
            minDate={MIN_DATE_BIRTHDAY}
            required
            color={color}
          />
          <FieldError message={errors.birthday} color={color} />
        </div>
        <div className="flex flex-col flex-1 relative">
          <DateInput
            name="joinedAt"
            label="День вступу"
            selected={form.joinedAt}
            onChange={handleDateChange("joinedAt")}
            placeholder="22.10.2017"
            minDate={MIN_DATE_JOIN}
            required
            color={color}
          />
          <FieldError message={errors.joinedAt} color={color} />
        </div>
      </div>
      <div className="flex flex-row flex-1 gap-2 w-full">
        <div className="flex flex-col flex-1 relative">
          <DropdownSelectInput
            name="status"
            label="Статус"
            options={statusOptions}
            onSelect={handleTextChange("status")}
            placeholder="Excluded"
            initialValue={form.status || undefined}
            required
            color={color}
          />
          <FieldError message={errors.status} color={color} />
        </div>
        <div className="flex flex-col flex-1 relative">
          <DropdownSelectInput
            name="mentor"
            label="Ментор"
            options={mentorOptions}
            onSelect={handleTextChange("mentorId")}
            placeholder="Ментор Менторовенко"
            autoComplete
            required
            initialValue={form.mentorId || undefined}
            color={color}
          />
          <FieldError message={errors.mentorId} color={color} />
        </div>
      </div>
      <div className="flex flex-row w-full">
        <div className="flex flex-col flex-1 relative">
          <TextInput
            name="email"
            label="Email"
            value={form.email}
            onChange={handleTextChange("email")}
            placeholder="kak.pukiv.worst@ukr.net"
            icon={EnvelopeIcon}
            color={color}
          />
          <FieldError message={errors.email} color={color} />
        </div>
      </div>
      <div className="flex flex-row w-full">
        <div className="flex flex-col flex-1 relative">
          <TextInput
            name="phoneNumber"
            label="Номер телефону"
            value={form.phoneNumber}
            onChange={handleTextChange("phoneNumber")}
            placeholder="+380674947207"
            icon={PhoneIcon}
            color={color}
          />
          <FieldError message={errors.phoneNumber} color={color} />
        </div>
      </div>
      <SocialMediaFields
        form={form}
        onTextChange={handleTextChange}
        errors={errors}
        color={color}
      />
    </div>
  );
};

export default MemberFormFields;
