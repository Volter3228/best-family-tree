import { MAX_DATE_BIRTHDAY, MIN_DATE_BIRTHDAY } from "@/constants/form";
import type { AccentColor, MemberFormData } from "@/types";
import { TextInput, DateInput } from "../inputs";
import FormField from "./FormField";
import GenderFormField from "./GenderFormField";
import SectionHeading from "./SectionHeading";

interface Props {
  form: MemberFormData;
  setForm: React.Dispatch<React.SetStateAction<MemberFormData>>;
  errors: Partial<Record<keyof MemberFormData, string>>;
  color: AccentColor;
  minimal: boolean;
}

const MemberBasicsSection = ({ form, setForm, errors, color, minimal }: Props) => (
  <section className="flex flex-col gap-3">
    <SectionHeading title="Основне" color={color} />
    <div className="grid grid-cols-1 gap-3 @[22rem]:grid-cols-2">
      <FormField error={errors.firstName} color={color}>
        <TextInput
          name="firstName"
          label="Ім'я"
          value={form.firstName}
          onChange={(firstName) => setForm({ ...form, firstName })}
          placeholder="В'ячеслав"
          required
          color={color}
        />
      </FormField>
      <FormField error={errors.lastName} color={color}>
        <TextInput
          name="lastName"
          label="Прізвище"
          value={form.lastName}
          onChange={(lastName) => setForm({ ...form, lastName })}
          placeholder="Українцев"
          required={!minimal}
          color={color}
        />
      </FormField>
    </div>
    <div className="grid grid-cols-1 gap-3 @[22rem]:grid-cols-2">
      <FormField error={errors.birthday} color={color}>
        <DateInput
          name="birthday"
          label="День народження"
          selected={form.birthday}
          onChange={(date) => date && setForm({ ...form, birthday: date })}
          placeholder="18.04.2000"
          maxDate={MAX_DATE_BIRTHDAY}
          minDate={MIN_DATE_BIRTHDAY}
          required={!minimal}
          color={color}
        />
      </FormField>
      <GenderFormField
        value={form.gender}
        onChange={(gender) => setForm({ ...form, gender })}
        color={color}
      />
    </div>
  </section>
);

export default MemberBasicsSection;
