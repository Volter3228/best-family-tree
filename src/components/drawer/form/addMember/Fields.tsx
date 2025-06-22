import { useMembers } from "@/hooks/useMembers";
import { capilizeOnlyFirstLetter } from "@/utils/strings";
import {
  MAX_DATE_BIRTHDAY,
  MIN_DATE_BIRTHDAY,
  MIN_DATE_JOIN,
} from "@/constants/form";
import { MEMBER_STATUSES } from "@/constants/member";
import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/16/solid";
import { AddMemberForm, DropdownOption } from "@/types";
import {
  AvatarFileInput,
  TextInput,
  DateInput,
  DropdownSelectInput,
} from "../inputs";
import SocialMediaFields from "./SocialMediaFields";

interface Props {
  form: AddMemberForm;
  setForm: React.Dispatch<React.SetStateAction<AddMemberForm>>;
  errors: Partial<Record<keyof AddMemberForm, string>>;
}

const Fields = ({ form, setForm, errors }: Props) => {
  const { mentorsList } = useMembers();

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
    <div className="flex flex-col gap-6 items-center h-5/6 overflow-y-visible">
      <div className="flex flex-row flex-1 w-full justify-center mb-2">
        <AvatarFileInput onImageSelect={handleFileChange("photo")} />
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
          />
          {errors.firstName && (
            <p className="absolute left-0 -bottom-6 text-accent">
              {errors.firstName}
            </p>
          )}
        </div>
        <div className="flex flex-col flex-1 relative">
          <TextInput
            name="lastName"
            label="Прізвище"
            value={form.lastName}
            onChange={handleTextChange("lastName")}
            placeholder="Українцев"
            required
          />
          {errors.lastName && (
            <p className="absolute left-0 -bottom-6 text-accent">
              {errors.lastName}
            </p>
          )}
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
          />
          {errors.birthday && (
            <p className="absolute left-0 -bottom-6 text-accent">
              {errors.birthday}
            </p>
          )}
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
          />
          {errors.joinedAt && (
            <p className="absolute left-0 -bottom-6 text-accent">
              {errors.joinedAt}
            </p>
          )}
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
            required
          />
          {errors.status && (
            <p className="absolute left-0 -bottom-6 text-accent">
              {errors.status}
            </p>
          )}
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
          />
          {errors.mentorId && (
            <p className="absolute left-0 -bottom-6 text-accent">
              {errors.mentorId}
            </p>
          )}
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
          />
          {errors.email && (
            <p className="absolute left-0 -bottom-6 text-accent">
              {errors.email}
            </p>
          )}
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
          />
          {errors.phoneNumber && (
            <p className="absolute left-0 -bottom-6 text-accent">
              {errors.phoneNumber}
            </p>
          )}
        </div>
      </div>
      <SocialMediaFields
        form={form}
        onTextChange={handleTextChange}
        errors={{ ...errors }}
      />
    </div>
  );
};

export default Fields;
