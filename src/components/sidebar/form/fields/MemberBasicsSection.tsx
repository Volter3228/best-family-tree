import { MAX_DATE_BIRTHDAY, MIN_DATE_BIRTHDAY } from "@/constants/form";
import { useT } from "@/i18n/useT";
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

const MemberBasicsSection = ({
  form,
  setForm,
  errors,
  color,
  minimal,
}: Props) => {
  const t = useT().memberForm;
  return (
    <section className="flex flex-col gap-3">
      <SectionHeading title={t.basics} color={color} />
      <div className="grid grid-cols-1 gap-3 @[22rem]:grid-cols-2">
        <FormField error={errors.firstName} color={color}>
          <TextInput
            name="firstName"
            label={t.firstName}
            value={form.firstName}
            onChange={(firstName) => setForm({ ...form, firstName })}
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
            onChange={(lastName) => setForm({ ...form, lastName })}
            placeholder={t.lastNamePlaceholder}
            required={!minimal}
            color={color}
          />
        </FormField>
      </div>
      <div className="grid grid-cols-1 gap-3 @[22rem]:grid-cols-2">
        <FormField error={errors.birthday} color={color}>
          <DateInput
            name="birthday"
            label={t.birthday}
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
};

export default MemberBasicsSection;
