import type { MemberFormData, MemberFormMode, AccentColor } from "@/types";
import { useT } from "@/i18n/useT";
import InfoBubble from "@/components/ui/InfoBubble";
import { AvatarFileInput, FormCheckbox } from "../inputs";
import MemberBasicsSection from "./MemberBasicsSection";
import MemberBestSection from "./MemberBestSection";
import MemberContactsSection from "./MemberContactsSection";
import SocialMediaFields from "./SocialMediaFormFields";
import PositionFormFields from "./position/PositionFormFields";

interface Props {
  form: MemberFormData;
  setForm: React.Dispatch<React.SetStateAction<MemberFormData>>;
  errors: Partial<Record<keyof MemberFormData, string>>;
  mode?: MemberFormMode;
  initialAvatar?: string | null;
  color?: AccentColor;
  minimal?: boolean;
  // Create mode only: shows the "minimal record" checkbox under the avatar.
  onMinimalChange?: (minimal: boolean) => void;
  // Edit mode: the member being edited (excluded from the mentor options).
  editedMemberId?: string;
}

const MemberFormFields = ({
  form,
  setForm,
  errors,
  mode = "add",
  initialAvatar = null,
  color = "blue",
  minimal = false,
  onMinimalChange,
  editedMemberId,
}: Props) => {
  const t = useT().memberForm;
  return (
    <div className="@container flex w-full flex-col gap-4">
      <div className="flex w-full flex-col items-center gap-3">
        <AvatarFileInput
          onImageSelect={(photo) => setForm({ ...form, photo })}
          image={form.photo}
          initialImage={mode === "edit" ? initialAvatar : null}
          color={color}
        />
        {onMinimalChange && (
          <div className="flex items-center gap-1.5">
            <FormCheckbox
              checked={minimal}
              label={t.minimalRecord}
              color={color}
              onChange={onMinimalChange}
            />
            <InfoBubble>{t.minimalRecordHint}</InfoBubble>
          </div>
        )}
      </div>
      <MemberBasicsSection
        form={form}
        setForm={setForm}
        errors={errors}
        color={color}
        minimal={minimal}
      />
      <MemberBestSection
        form={form}
        setForm={setForm}
        errors={errors}
        color={color}
        minimal={minimal}
        editedMemberId={editedMemberId}
      />
      <MemberContactsSection
        form={form}
        setForm={setForm}
        errors={errors}
        color={color}
        required={mode === "add" && !minimal}
      />
      <SocialMediaFields
        form={form}
        onTextChange={(name) => (value) => setForm({ ...form, [name]: value })}
        errors={errors}
        color={color}
      />
      <PositionFormFields
        error={errors.positions}
        positions={form.positions}
        onChange={(positions) => setForm({ ...form, positions })}
        color={color}
      />
    </div>
  );
};

export default MemberFormFields;
