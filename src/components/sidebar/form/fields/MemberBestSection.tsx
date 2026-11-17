import { useMemo } from "react";
import { useMentorsList } from "@/hooks";
import { useMembersStore } from "@/store/membersStore";
import { collectDescendantIds } from "@/utils/membersTree";
import { MIN_DATE_JOIN } from "@/constants/form";
import { STATUS_OPTIONS } from "@/constants/filters";
import type { AccentColor, DropdownOption, MemberFormData, MemberStatus } from "@/types";
import { DateInput, DropdownSelectInput } from "../inputs";
import FormField from "./FormField";
import SectionHeading from "./SectionHeading";

interface Props {
  form: MemberFormData;
  setForm: React.Dispatch<React.SetStateAction<MemberFormData>>;
  errors: Partial<Record<keyof MemberFormData, string>>;
  color: AccentColor;
  minimal: boolean;
  // The member being edited; undefined while creating (nobody is excluded).
  editedMemberId?: string;
}

const STATUS_DROPDOWN_OPTIONS: DropdownOption[] = STATUS_OPTIONS.map(
  ({ value, label }) => ({ value, text: label }),
);

const MemberBestSection = ({
  form,
  setForm,
  errors,
  color,
  minimal,
  editedMemberId,
}: Props) => {
  const mentorsList = useMentorsList();
  const childrenOf = useMembersStore((s) => s.childrenOf);

  // A member cannot be their own mentor or the mentor of their own ancestors.
  const mentorOptions: DropdownOption[] = useMemo(() => {
    const excludedIds = editedMemberId
      ? new Set([
          editedMemberId,
          ...collectDescendantIds(childrenOf, editedMemberId),
        ])
      : new Set<string>();

    return mentorsList
      .filter(({ id }) => !excludedIds.has(id))
      .map(({ id, name }) => ({ text: name, value: id }));
  }, [mentorsList, editedMemberId, childrenOf]);

  return (
    <section className="flex flex-col gap-3">
      <SectionHeading title="BEST" color={color} />
      <div className="grid grid-cols-1 gap-3 @[22rem]:grid-cols-2">
        <FormField error={errors.joinedAt} color={color}>
          <DateInput
            name="joinedAt"
            label="День вступу"
            selected={form.joinedAt}
            onChange={(date) => date && setForm({ ...form, joinedAt: date })}
            placeholder="22.10.2017"
            minDate={MIN_DATE_JOIN}
            required
            color={color}
          />
        </FormField>
        <FormField error={errors.status} color={color}>
          <DropdownSelectInput
            name="status"
            label="Статус"
            options={STATUS_DROPDOWN_OPTIONS}
            onSelect={(status) => setForm({ ...form, status: status as MemberStatus })}
            placeholder="Excluded"
            initialValue={form.status || undefined}
            required
            color={color}
          />
        </FormField>
      </div>
      <FormField error={errors.mentorId} color={color}>
        <DropdownSelectInput
          name="mentor"
          label="Ментор"
          options={mentorOptions}
          onSelect={(mentorId) => setForm({ ...form, mentorId })}
          placeholder="Ментор Менторовенко"
          autoComplete
          required={!minimal}
          initialValue={form.mentorId || undefined}
          color={color}
        />
      </FormField>
    </section>
  );
};

export default MemberBestSection;
