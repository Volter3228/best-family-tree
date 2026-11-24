import { useMemo } from "react";
import { useMentorsList } from "@/hooks";
import { useLocale, useT } from "@/i18n/useT";
import { useDisplayName } from "@/utils/displayName";
import { useMembersStore } from "@/store/membersStore";
import { collectDescendantIds } from "@/utils/membersTree";
import { MIN_DATE_JOIN, getMaxDateJoin } from "@/constants/form";
import { getActivityOptions, getStatusOptions } from "@/constants/filters";
import type {
  AccentColor,
  ActivityState,
  DropdownOption,
  MemberFormData,
  MemberStatus,
} from "@/types";
import InfoBubble from "@/components/ui/InfoBubble";
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

const MemberBestSection = ({
  form,
  setForm,
  errors,
  color,
  minimal,
  editedMemberId,
}: Props) => {
  const t = useT().memberForm;
  const dn = useDisplayName();
  const locale = useLocale();
  const statusOptions: DropdownOption[] = useMemo(
    () =>
      getStatusOptions(locale).map(({ value, label }) => ({
        value,
        text: label,
      })),
    [locale],
  );
  const activityOptions: DropdownOption[] = useMemo(
    () =>
      getActivityOptions(locale).map(({ value, label }) => ({
        value,
        text: label,
      })),
    [locale],
  );
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
      .map(({ id, name }) => ({ text: dn(name), value: id }));
  }, [mentorsList, editedMemberId, childrenOf, dn]);

  return (
    <section className="flex flex-col gap-3">
      <SectionHeading title="BEST" color={color} />
      <div className="grid grid-cols-1 gap-3 @[26rem]:grid-cols-2">
        <FormField error={errors.joinedAt} color={color}>
          <DateInput
            name="joinedAt"
            label={t.joinedAt}
            selected={form.joinedAt}
            onChange={(date) => date && setForm({ ...form, joinedAt: date })}
            placeholder="22.10.2017"
            minDate={MIN_DATE_JOIN}
            maxDate={getMaxDateJoin()}
            required
            color={color}
            hint={
              <InfoBubble className="[&_svg]:h-4 [&_svg]:w-4">
                {t.joinedAtHint}
              </InfoBubble>
            }
          />
        </FormField>
        <FormField error={errors.mentorId} color={color}>
          <DropdownSelectInput
            name="mentor"
            label={t.mentor}
            options={mentorOptions}
            onSelect={(mentorId) => setForm({ ...form, mentorId })}
            placeholder={t.mentorPlaceholder}
            autoComplete
            required={!minimal}
            initialValue={form.mentorId || undefined}
            color={color}
          />
        </FormField>
        <FormField error={errors.status} color={color}>
          <DropdownSelectInput
            name="status"
            label={t.status}
            options={statusOptions}
            onSelect={(status) =>
              setForm({ ...form, status: status as MemberStatus })
            }
            placeholder={t.status}
            initialValue={form.status || undefined}
            required
            color={color}
          />
        </FormField>
        <FormField error={errors.activityState} color={color}>
          <DropdownSelectInput
            name="activityState"
            label={t.activityState}
            options={activityOptions}
            onSelect={(activityState) =>
              setForm({
                ...form,
                activityState: activityState as ActivityState,
              })
            }
            placeholder={t.activityState}
            initialValue={form.activityState}
            required
            color={color}
          />
        </FormField>
      </div>
    </section>
  );
};

export default MemberBestSection;
