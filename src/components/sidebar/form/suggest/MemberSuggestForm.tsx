import { FormEvent, useEffect, useId, useMemo, useState } from "react";
import { useTransientMessage } from "@/hooks/forms/useTransientMessage";
import {
  useMembersActions,
  useMentorsList,
  useTeams,
  useTeamTypes,
} from "@/hooks";
import {
  fetchMyMemberSuggestions,
  removeMyPhoto,
  suggestMemberChanges,
  suggestMemberPhoto,
  uploadMyPhoto,
} from "@/api/selfService";
import { getMemberAvatar } from "@/utils";
import {
  buildMemberChanges,
  buildPositionsChange,
  toDay,
} from "@/utils/suggestChanges";
import { useT } from "@/i18n/useT";
import { useSessionStore } from "@/store/sessionStore";
import InfoBubble from "@/components/ui/InfoBubble";
import { Member } from "@/models";
import type { AccentColor, MemberFormData, MemberFormErrors } from "@/types";
import { ClearButton, SubmitButton } from "../buttons";
import { AvatarFileInput } from "../inputs";
import { getInitialFormData } from "../editMemberFormData";
import PositionFormFields from "../fields/position/PositionFormFields";
import FormError from "../FormError";
import FormFooter from "../FormFooter";
import MemberSuggestFields from "./MemberSuggestFields";
import PendingBlock from "./PendingBlock";
import { collectSuggestErrors } from "./memberSuggestErrors";
import { useMemberPendingRows } from "./useMemberPendingRows";
import { useSuggestions, withoutPending } from "./useSuggestions";

interface Props {
  member: Member;
  onExit: () => void;
  color?: AccentColor;
}

const MemberSuggestForm = ({ member, onExit, color = "blue" }: Props) => {
  const t = useT().suggest;
  const tMember = useT().memberForm;
  const tCommon = useT().formCommon;
  const formId = useId();
  const session = useSessionStore((s) => s.session);
  const mentorsList = useMentorsList();
  const [teams] = useTeams();
  const [teamTypes] = useTeamTypes();
  const { updateMember, getMentorsList } = useMembersActions();

  const [form, setForm] = useState<MemberFormData>(() =>
    getInitialFormData(member),
  );
  const [errors, setErrors] = useState<MemberFormErrors>({});
  const [success, showSuccess] = useTransientMessage();
  // A newly picked photo, saved together with the suggestions on submit.
  const [photoFile, setPhotoFile] = useState<File | null>(null);
  // Removing one's own saved photo is allowed (privacy).
  const [removePhoto, setRemovePhoto] = useState(false);

  const { pending, isSubmitting, error, run, refresh } = useSuggestions({
    targetId: member.id,
    fetchMine: fetchMyMemberSuggestions,
  });

  useEffect(() => {
    if (!mentorsList.length) getMentorsList();
  }, [mentorsList, getMentorsList]);

  const isOwn = !!session && session.memberId === member.id;
  // Own photo is saved directly; someone else's is suggested.
  const savesDirectly = isOwn && !session.demo;
  const showPicker = savesDirectly || !isOwn;

  const changes = useMemo(() => {
    const fields = withoutPending(buildMemberChanges(member, form), pending);
    const positions = buildPositionsChange(
      getInitialFormData(member).positions,
      form.positions,
    );
    return positions ? [...fields, positions] : fields;
  }, [member, form, pending]);

  const pendingRows = useMemberPendingRows(pending);

  const collectErrors = () =>
    collectSuggestErrors(form, {
      member,
      changes,
      mentorsList,
      teams,
      teamTypes,
      t: tMember.validation,
      cannotEmpty: t.cannotEmpty,
    });
  const hasErrors = Object.keys(collectErrors()).length > 0;
  const photoChanged = !!photoFile || removePhoto;
  const hasChanges = changes.length > 0 || photoChanged;

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors = collectErrors();
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0 || !hasChanges) return;

    let withdrawn = false;
    const ok = await run(async () => {
      if (changes.length > 0) {
        const { count } = await suggestMemberChanges(member.id, changes);
        withdrawn = count === 0;
      }
      if (photoFile && !savesDirectly) {
        await suggestMemberPhoto(member.id, photoFile);
      } else if (photoFile) {
        const { photo } = await uploadMyPhoto(photoFile);
        updateMember(member.clone({ photo }));
      } else if (removePhoto) {
        await removeMyPhoto();
        updateMember(member.clone({ photo: null }));
      }
      // Inside the action so the button stays busy until the form is settled.
      await refresh();
    });
    if (!ok) return;
    setPhotoFile(null);
    setRemovePhoto(false);
    if (savesDirectly && photoChanged && (changes.length === 0 || withdrawn)) {
      showSuccess(tCommon.saved);
    } else showSuccess(withdrawn ? t.withdrawn : t.done);
  };

  return (
    <form
      id={formId}
      className="flex w-full flex-col gap-4"
      onSubmit={handleSubmit}
      noValidate
    >
      {showPicker && (
        <div className="relative mx-auto w-fit">
          <AvatarFileInput
            keepInitial
            onImageSelect={(file) => {
              setPhotoFile(file);
              if (file) setRemovePhoto(false);
            }}
            onRemoveSaved={
              savesDirectly ? () => setRemovePhoto(true) : undefined
            }
            image={photoFile ?? (removePhoto ? null : member.photo)}
            initialImage={getMemberAvatar(member)}
            color={color}
          />
          <InfoBubble className="absolute left-full top-1 ml-2">
            {savesDirectly ? t.photoHint : t.photoReviewHint}
          </InfoBubble>
        </div>
      )}
      <PendingBlock rows={pendingRows} color={color} />
      <MemberSuggestFields
        form={form}
        setForm={setForm}
        errors={errors}
        memberId={member.id}
        stored={{
          lastName: !!getInitialFormData(member).lastName,
          birthday: !!toDay(member.birthday),
          mentor: !!member.mentorId,
        }}
        color={color}
      />
      <PositionFormFields
        error={errors.positions}
        rowErrors={errors.positionErrors}
        positions={form.positions}
        onChange={(positions) => setForm((prev) => ({ ...prev, positions }))}
        color={color}
      />
      <FormError message={error} color={color} />
      <FormFooter>
        <InfoBubble className="shrink-0">{t.reviewHint}</InfoBubble>
        <ClearButton isSubmitting={isSubmitting} onClick={onExit} color={color}>
          {tCommon.cancel}
        </ClearButton>
        <SubmitButton
          isSubmitting={isSubmitting}
          form={formId}
          color={color}
          disabled={!hasChanges && !hasErrors}
          message={success}
        >
          {isSubmitting ? t.submitting : t.submit}
        </SubmitButton>
      </FormFooter>
    </form>
  );
};

export default MemberSuggestForm;
