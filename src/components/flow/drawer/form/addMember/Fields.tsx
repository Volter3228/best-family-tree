import { useEffect } from "react";
import { useMembers } from "@/hooks/useMembers";
import {
  MAX_DATE_BIRTHDAY,
  MIN_DATE_BIRTHDAY,
  MIN_DATE_JOIN,
} from "@/constants/form";
import { MEMBER_STATUSES } from "@/constants/member";
import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/16/solid";
import {
  AvatarFileInput,
  TextInput,
  DateInput,
  DropdownSelectInput,
} from "../inputs";
import SocialMediaFields from "./SocialMediaFields";
import { AddMemberForm, DropdownOption } from "@/types";
import { capilizeOnlyFirstLetter } from "@/utils/strings";

interface IProps {
  form: AddMemberForm;
  setForm: React.Dispatch<React.SetStateAction<AddMemberForm>>;
}

export default function Fields({ form, setForm }: IProps) {
  const { mentorsList, getMentorsList } = useMembers();

  useEffect(() => {
    if (!mentorsList.length) {
      getMentorsList();
    }
  }, [mentorsList, getMentorsList]);

  const mentorOptions: DropdownOption[] = mentorsList.map(({ id, name }) => ({
    text: name,
    value: id,
  }));

  const statusOptions: DropdownOption[] = MEMBER_STATUSES.map((status) => ({
    value: status,
    text: capilizeOnlyFirstLetter(status),
  }));

  const handleTextChange = (name: string) => (value: string) => {
    setForm({ ...form, [name]: value });
  };

  const handleDateChange = (name: string) => (date: Date | null) => {
    if (date) {
      setForm({ ...form, [name]: date });
    }
  };

  const handleFileChange = (name: string) => (file: File | null) => {
    if (file) {
      setForm({ ...form, [name]: file });
    }
  };

  return (
    <div className="flex flex-col gap-4 items-center h-5/6 overflow-y-visible">
      <div className="flex flex-row flex-1 w-full justify-center mb-2">
        <AvatarFileInput onImageSelect={handleFileChange("photo")} />
      </div>
      <div className="flex flex-row flex-1 gap-2 w-full">
        <div className="flex flex-col flex-1">
          <TextInput
            name="firstName"
            value={form.firstName}
            onChange={handleTextChange("firstName")}
            placeholder="В'ячеслав"
            label="Ім'я"
            required
          />
        </div>
        <div className="flex flex-col flex-1">
          <TextInput
            name="lastName"
            value={form.lastName}
            onChange={handleTextChange("lastName")}
            placeholder="Українцев"
            label="Прізвище"
            required
          />
        </div>
      </div>
      <div className="flex flex-row flex-1 gap-2 w-full">
        <div className="flex flex-col flex-1">
          <DateInput
            label="День народження"
            name="birthday"
            onChange={handleDateChange("birthday")}
            selected={form.birthday}
            placeholder="18.04.2000"
            maxDate={MAX_DATE_BIRTHDAY}
            minDate={MIN_DATE_BIRTHDAY}
            required
          />
        </div>
        <div className="flex flex-col flex-1">
          <DateInput
            label="День вступу"
            name="joinedAt"
            onChange={handleDateChange("joinedAt")}
            selected={form.joinedAt}
            placeholder="22.10.2017"
            minDate={MIN_DATE_JOIN}
            required
          />
        </div>
      </div>
      <div className="flex flex-row flex-1 gap-2 w-full">
        <div className="flex flex-col flex-1">
          <DropdownSelectInput
            name="status"
            onSelect={handleTextChange("status")}
            placeholder="Excluded"
            required
            label="Статус"
            options={statusOptions}
          />
        </div>
        <div className="flex flex-col flex-1">
          <DropdownSelectInput
            name="mentor"
            onSelect={handleTextChange("mentorId")}
            placeholder="Ментор Менторовенко"
            required
            autoComplete
            label="Ментор"
            options={mentorOptions}
          />
        </div>
      </div>
      <div className="flex flex-row w-full">
        <div className="flex flex-col flex-1">
          <TextInput
            name="email"
            value={form.email}
            onChange={handleTextChange("email")}
            placeholder="kak.pukiv.worst@ukr.net"
            label="Email"
            icon={EnvelopeIcon}
          />
        </div>
      </div>
      <div className="flex flex-row w-full">
        <div className="flex flex-col flex-1">
          <TextInput
            name="phoneNumber"
            value={form.phoneNumber}
            onChange={handleTextChange("phoneNumber")}
            placeholder="+380674947207"
            label="Номер телефону"
            icon={PhoneIcon}
          />
        </div>
      </div>
      <SocialMediaFields form={form} onTextChange={handleTextChange} />
    </div>
  );
}
