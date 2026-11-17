import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/16/solid";
import type { AccentColor, MemberFormData } from "@/types";
import { TextInput } from "../inputs";
import FormField from "./FormField";
import SectionHeading from "./SectionHeading";

interface Props {
  form: MemberFormData;
  setForm: React.Dispatch<React.SetStateAction<MemberFormData>>;
  errors: Partial<Record<keyof MemberFormData, string>>;
  color: AccentColor;
}

const MemberContactsSection = ({ form, setForm, errors, color }: Props) => (
  <section className="flex flex-col gap-3">
    <SectionHeading title="Контакти" color={color} />
    <FormField error={errors.email} color={color}>
      <TextInput
        name="email"
        label="Email"
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
        label="Номер телефону"
        value={form.phoneNumber}
        onChange={(phoneNumber) => setForm({ ...form, phoneNumber })}
        placeholder="+380674947207"
        icon={PhoneIcon}
        color={color}
      />
    </FormField>
  </section>
);

export default MemberContactsSection;
