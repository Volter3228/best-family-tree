import { FormEvent, useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";
import { useMembers, useEventTypes, useRoles, useTeams } from "@/hooks";
import { MEMBER_FORM_DEFAULTS } from "@/constants/form";
import { COLOR_CLASSES } from "@/constants/colorClasses";
import apiAddMember from "@/api/addMember";
import type {
  AccentColor,
  MemberFormData,
  Member as MemberType,
  FormType,
} from "@/types";
import { MemberFormFields } from "./fields";
import { SubmitButton, ClearButton } from "./buttons";
import { buildMemberFormData } from "./buildMemberFormData";
import validateMemberForm from "./validations/memberFormValidation";
import EventTypeForm from "./eventType/EventTypeForm";

interface Props {
  onSuccess?: (member: MemberType) => void;
  color?: AccentColor;
}

export default function AddMemberForm({ onSuccess, color = "blue" }: Props) {
  const [formType, setFormType] = useState<FormType>("member");
  const [form, setForm] = useState<MemberFormData>({ ...MEMBER_FORM_DEFAULTS });
  const [errors, setErrors] = useState<
    Partial<Record<keyof MemberFormData, string>>
  >({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { addMember, mentorsList, getMentorsList } = useMembers();
  const [, , reloadEventTypes] = useEventTypes();
  const [, , reloadRoles] = useRoles();
  const [, , reloadTeams] = useTeams();

  useEffect(() => {
    if (!mentorsList.length) {
      getMentorsList();
    }
  }, [mentorsList, getMentorsList]);

  const handleResetForm = () => {
    setForm({ ...MEMBER_FORM_DEFAULTS });
    setErrors({});
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setErrors({});
    const validationErrors = validateMemberForm(form, mentorsList);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);
    const formData = buildMemberFormData(form);

    try {
      const newMember = await apiAddMember(formData);
      if (newMember) {
        addMember(newMember);
        // Saving may have created new roles/teams/event types server-side.
        reloadRoles();
        reloadTeams();
        reloadEventTypes();
        handleResetForm();
        onSuccess?.(newMember);
      }
    } catch (error) {
      console.error("Form submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const submitLabel = isSubmitting ? "Додаємо..." : "Додати";
  const colorClasses = COLOR_CLASSES[color];

  return (
    <div className="flex flex-col items-center">
      <div className="flex w-full mb-6 rounded-xl bg-surface/50 p-1">
        <button
          type="button"
          onClick={() => setFormType("member")}
          className={twMerge(
            "flex-1 py-2 text-sm font-medium rounded-lg transition-all duration-200",
            formType === "member"
              ? `${colorClasses.accentBg} text-white`
              : "text-foreground/60 hover:text-foreground",
          )}
        >
          Учасник
        </button>
        <button
          type="button"
          onClick={() => setFormType("event")}
          className={twMerge(
            "flex-1 py-2 text-sm font-medium rounded-lg transition-all duration-200",
            formType === "event"
              ? `${colorClasses.accentBg} text-white`
              : "text-foreground/60 hover:text-foreground",
          )}
        >
          Івент
        </button>
      </div>
      {formType === "member" ? (
        <form
          className="flex flex-col items-center"
          onSubmit={handleSubmit}
          noValidate
        >
          <MemberFormFields
            form={form}
            setForm={setForm}
            errors={errors}
            color={color}
          />
          <div className="flex flex-row w-4/5 mt-10 justify-center gap-3">
            <ClearButton
              isSubmitting={isSubmitting}
              onClick={handleResetForm}
              color={color}
            >
              Очистити
            </ClearButton>
            <SubmitButton isSubmitting={isSubmitting} color={color}>
              {submitLabel}
            </SubmitButton>
          </div>
        </form>
      ) : (
        <EventTypeForm color={color} />
      )}
    </div>
  );
}
