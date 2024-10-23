import { FormEvent, useEffect, useState } from "react";
import { useMembers } from "@/hooks/useMembers";
import type { AddMemberForm, DropdownOption } from "@/types";
import { MEMBER_STATUSES } from "@/constants/member";
import { ADD_MEMBER_DEFAULTS } from "@/constants/form";
import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/16/solid";
import {
  TelegramIcon,
  InstagramIcon,
  FacebookIcon,
  LinkedinIcon,
} from "@/components/icons/social";
import {
  MAX_DATE_BIRTHDAY,
  MIN_DATE_BIRTHDAY,
  MIN_DATE_JOIN,
} from "@/constants/form";
import apiAddMember from "@/api/addMember";
import DateInput from "./DateInput";
import TextInput from "./TextInput";
import DropdownSelectInput from "./DropdownSelectInput";
import SubmitButton from "./SubmitButton";
import AvatarFileInput from "./AvatarFileInput";

export default function AddMemberForm() {
  const [form, setForm] = useState<AddMemberForm>({
    ...ADD_MEMBER_DEFAULTS,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { addMember, mentorsList, getMentorsList } = useMembers();

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
    text: status.charAt(0).toUpperCase() + status.toLowerCase().slice(1),
  }));

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    const formData = new FormData();

    Object.entries(form).forEach(([key, value]) => {
      if (value instanceof Date) {
        formData.append(key, value.toISOString()); // Handle Date objects
      } else if (value !== undefined && value !== null) {
        formData.append(key, value.toString()); // Convert other values to strings
      }
    });

    if (form.photo) {
      formData.append("photo", form.photo);
    }

    const newMember = await apiAddMember(formData);
    if (newMember) {
      addMember(newMember);
    }

    setIsSubmitting(false);
  };

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
    <form className="flex flex-col items-center" onSubmit={handleSubmit}>
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
        {/* Social Media */}
        <div className="flex flex-row flex-1 gap-2 w-full">
          <div className="flex flex-col flex-1">
            <TextInput
              name="telegramLink"
              value={form.telegramLink}
              onChange={handleTextChange("telegramLink")}
              placeholder="Vouchik"
              label="Telegram"
              icon={TelegramIcon}
            />
          </div>
          <div className="flex flex-col flex-1">
            <TextInput
              name="instagramLink"
              value={form.instagramLink}
              onChange={handleTextChange("instagramLink")}
              placeholder="patron_dsns"
              label="Instagram"
              icon={InstagramIcon}
            />
          </div>
        </div>
        <div className="flex flex-row flex-1 gap-2 w-full">
          <div className="flex flex-col flex-1">
            <TextInput
              name="facebookLink"
              value={form.facebookLink}
              onChange={handleTextChange("facebookLink")}
              placeholder="BEST.Lviv"
              label="Facebook"
              icon={FacebookIcon}
            />
          </div>
          <div className="flex flex-col flex-1">
            <TextInput
              name="linkedinLink"
              value={form.linkedinLink}
              onChange={handleTextChange("linkedinLink")}
              placeholder="bestlviv"
              label="LinkedIn"
              icon={LinkedinIcon}
            />
          </div>
        </div>
      </div>
      <div className="flex flex-row w-2/3 mt-10 justify-center">
        <SubmitButton isSubmitting={isSubmitting}>
          {isSubmitting ? "Додаємо..." : "Додати"}
        </SubmitButton>
      </div>
    </form>
  );
}
