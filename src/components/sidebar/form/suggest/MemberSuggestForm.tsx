import { FormEvent, useEffect, useId, useMemo, useState } from "react";
import { useMembersActions, useMentorsList } from "@/hooks";
import {
  fetchMyMemberSuggestions,
  removeMyPhoto,
  suggestMemberChanges,
  suggestMemberPhoto,
  uploadMyPhoto,
} from "@/api/selfService";
import { getMemberAvatar } from "@/utils";
import { buildMemberChanges, toDay } from "@/utils/suggestChanges";
import { getStatusOptions } from "@/constants/filters";
import { useLocale, useT } from "@/i18n/useT";
import { formatDay } from "../../manage/suggestionFormat";
import { useDisplayName } from "@/utils/displayName";
import { useSessionStore } from "@/store/sessionStore";
import InfoBubble from "@/components/ui/InfoBubble";
import { Member } from "@/models";
import type { AccentColor, MemberFormData } from "@/types";
import { ClearButton, SubmitButton } from "../buttons";
import { AvatarFileInput } from "../inputs";
import { getInitialFormData } from "../editMemberFormData";
import validateMemberForm from "../validations/memberFormValidation";
import FormError from "../FormError";
import FormFooter from "../FormFooter";
import MemberSuggestFields from "./MemberSuggestFields";
import PendingBlock from "./PendingBlock";
import { buildPendingRows } from "./pendingRows";
import { useSuggestions, withoutPending } from "./useSuggestions";

interface Props {
  member: Member;
  onExit: () => void;
  // The suggestion went through; the sidebar returns to the info view.
  onDone: (message: string) => void;
  color?: AccentColor;
}

type Errors = Partial<Record<keyof MemberFormData, string>>;

// Suggest field -> the form fields it covers.
const FORM_KEYS: Record<string, (keyof MemberFormData)[]> = {
  name: ["firstName", "lastName"],
  phoneNumbers: ["phoneNumber"],
};

const MemberSuggestForm = ({
  member,
  onExit,
  onDone,
  color = "blue",
}: Props) => {
  const t = useT().suggest;
  const tMember = useT().memberForm;
  const tCommon = useT().formCommon;
  const locale = useLocale();
  const dn = useDisplayName();
  const formId = useId();
  const session = useSessionStore((s) => s.session);
  const mentorsList = useMentorsList();
  const { updateMember, getMentorsList } = useMembersActions();

  const [form, setForm] = useState<MemberFormData>(() =>
    getInitialFormData(member),
  );
  const [errors, setErrors] = useState<Errors>({});
  // A newly picked photo, saved together with the suggestions on submit.
  const [photoFile, setPhotoFile] = useState<File | null>(null);
  // Removing one's own saved photo is allowed (privacy).
  const [removePhoto, setRemovePhoto] = useState(false);

  const { pending, isSubmitting, error, run } = useSuggestions({
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

  const changes = useMemo(
    () =>
      withoutPending(buildMemberChanges(member, form), pending),
    [member, form, pending],
  );

  const pendingRows = useMemo(() => {
    const statuses = getStatusOptions(locale);
    const labels: Record<string, string> = {
      name: t.name,
      photo: t.photo,
      birthday: tMember.birthday,
      joinedAt: tMember.joinedAt,
      status: tMember.status,
      mentorId: tMember.mentor,
      email: "Email",
      phoneNumbers: tMember.phoneNumber,
      telegramLink: "Telegram",
      instagramLink: "Instagram",
      facebookLink: "Facebook",
      linkedinLink: "LinkedIn",
    };
    return buildPendingRows(
      pending,
      t,
      (field) => labels[field] ?? field,
      (field, value) => {
        if (field === "birthday" || field === "joinedAt")
          return formatDay(value, locale);
        if (field === "status") {
          return statuses.find((item) => item.value === value)?.label ?? value;
        }
        if (field === "mentorId") {
          const mentor = mentorsList.find(({ id }) => id === value);
          return mentor ? dn(mentor.name) : value;
        }
        return value;
      },
    );
  }, [pending, t, tMember, locale, mentorsList, dn]);

  // Emptying a stored field is refused; a format error counts only for a
  // field the suggestion actually changes.
  const collectErrors = (): Errors => {
    const changed = new Set(
      changes.flatMap(({ field }) => FORM_KEYS[field] ?? [field]),
    );
    const all = validateMemberForm(
      { ...form, positions: [] },
      mentorsList,
      [],
      member,
      { t: tMember.validation },
    );
    const result: Errors = {};
    for (const [key, message] of Object.entries(all)) {
      const name = key as keyof MemberFormData;
      if (!form[name]) result[name] = t.cannotEmpty;
      else if (changed.has(name)) result[name] = message;
    }
    return result;
  };
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
    });
    if (!ok) return;
    if (savesDirectly && photoChanged && (changes.length === 0 || withdrawn)) {
      onDone(tCommon.saved);
    } else onDone(withdrawn ? t.withdrawn : t.done);
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
        >
          {isSubmitting ? t.submitting : t.submit}
        </SubmitButton>
      </FormFooter>
    </form>
  );
};

export default MemberSuggestForm;
