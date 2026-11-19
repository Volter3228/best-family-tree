import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/16/solid";
import { useT } from "@/i18n/useT";
import type { AccentColor, MemberFormData } from "@/types";
import { TextInput } from "../inputs";
import FormField from "./FormField";
import SectionHeading from "./SectionHeading";

interface Props {
  form: MemberFormData;
  setForm: React.Dispatch<React.SetStateAction<MemberFormData>>;
  errors: Partial<Record<keyof MemberFormData, string>>;
  color: AccentColor;
  // Adding a full record demands both; editing only what is already stored.
  required?: boolean;
}

const MemberContactsSection = ({
  form,
  setForm,
  errors,
  color,
  required = false,
}: Props) => {
  const t = useT().memberForm;
  return (
    <section className="flex flex-col gap-3">
      <SectionHeading title={t.contacts} color={color} />
      <FormField error={errors.email} color={color}>
        <TextInput
          name="email"
          label="Email"
          required={required}
          value={form.email}
          onChange={(email) => setForm({ ...form, email })}
          placeholder="kak.pukiv.worst@ukr.net"
          icon={EnvelopeIcon}
          color={color}
        />
      </FormField>
      <FormField error={errors.phoneNumber} color={color}>
        <TextInput
          name="phoneNumber"
          label={t.phoneNumber}
          required={required}
          value={form.phoneNumber}
          onChange={(phoneNumber) => setForm({ ...form, phoneNumber })}
          placeholder="+380674947207"
          icon={PhoneIcon}
          color={color}
        />
      </FormField>
    </section>
  );
};

export default MemberContactsSection;
