import type { Dispatch, SetStateAction } from "react";
import ChipGroup from "@/components/ui/ChipGroup";
import ColorField from "@/components/ui/color/ColorField";
import { useT } from "@/i18n/useT";
import type { AccentColor, TeamType, TeamTypeFormData } from "@/types";
import { teamTypeTeamCount, type TeamTypeFormMode } from "@/hooks/forms";
import { TextInput } from "../inputs";
import { ClearButton, SubmitButton } from "../buttons";
import ConfirmDeleteControl from "../ConfirmDeleteControl";
import FormFooter from "../FormFooter";
import FormMessages from "../FormMessages";
import TeamTypeIdentityTile from "./TeamTypeIdentityTile";

interface Props {
  mode: TeamTypeFormMode;
  selectedType: TeamType | null;
  form: TeamTypeFormData;
  setForm: Dispatch<SetStateAction<TeamTypeFormData>>;
  color?: AccentColor;
  isSubmitting: boolean;
  isDeleting: boolean;
  isConfirmingDelete: boolean;
  setIsConfirmingDelete: (isConfirming: boolean) => void;
  formId: string;
  error: string | null;
  setError: Dispatch<SetStateAction<string | null>>;
  success: string | null;
  onDelete: () => void;
  onCancel: () => void;
}

const TeamTypeFormContent = ({
  mode,
  selectedType,
  form,
  setForm,
  color = "blue",
  isSubmitting,
  isDeleting,
  isConfirmingDelete,
  setIsConfirmingDelete,
  formId,
  error,
  setError,
  success,
  onDelete,
  onCancel,
}: Props) => {
  const tCommon = useT().formCommon;
  const t = useT().teamTypeForm;
  const kindOptions = [
    { value: "event", label: t.kindEvent },
    { value: "other", label: t.kindOther },
  ] as const;
  if (mode === "edit" && !selectedType) return null;

  const isEdit = mode === "edit";
  const submitLabel = isSubmitting
    ? isEdit
      ? tCommon.saving
      : tCommon.creating
    : isEdit
      ? tCommon.save
      : tCommon.create;
  // Types that teams still use cannot be deleted; say so before asking.
  const teams = selectedType ? teamTypeTeamCount(selectedType) : 0;
  const blockedReason = teams > 0 ? t.inUse(teams) : null;

  return (
    <>
      <div className="flex items-end gap-3">
        <TeamTypeIdentityTile
          name={form.name}
          color={form.color}
          icon={form.icon ?? null}
          onIconChange={(icon) => setForm((prev) => ({ ...prev, icon }))}
          onError={setError}
          accent={color}
        />
        <div className="min-w-0 flex-1">
          <TextInput
            name="teamTypeName"
            label={tCommon.name}
            value={form.name}
            onChange={(name) => setForm((prev) => ({ ...prev, name }))}
            placeholder={t.namePlaceholder}
            required
            color={color}
          />
        </div>
      </div>

      <div className="flex flex-col">
        <span className="mb-1.5 text-sm font-semibold text-foreground">
          {t.kind}
        </span>
        <ChipGroup
          label={t.kind}
          options={kindOptions}
          value={form.isEvent ? "event" : "other"}
          onChange={(kind) =>
            setForm((prev) => ({ ...prev, isEvent: kind === "event" }))
          }
          color={color}
        />
      </div>

      <ColorField
        value={form.color}
        onChange={(value) => setForm((prev) => ({ ...prev, color: value }))}
        color={color}
      />

      <FormMessages error={error} color={color} />

      <FormFooter>
        {isEdit && selectedType && (
          <ConfirmDeleteControl
            label={tCommon.delete}
            title={t.deleteTitle}
            message={t.deleteMessage(selectedType.name)}
            isConfirming={isConfirmingDelete}
            isSubmitting={isDeleting}
            blockedReason={blockedReason}
            onAsk={setIsConfirmingDelete}
            onConfirm={onDelete}
          />
        )}
        <ClearButton
          isSubmitting={isSubmitting}
          onClick={onCancel}
          color={color}
        >
          {tCommon.cancel}
        </ClearButton>
        <SubmitButton
          isSubmitting={isSubmitting}
          form={formId}
          color={color}
          message={success}
        >
          {submitLabel}
        </SubmitButton>
      </FormFooter>
    </>
  );
};

export default TeamTypeFormContent;
