import { FormEvent, useId, useMemo, useState } from "react";
import { useTransientMessage } from "@/hooks/forms/useTransientMessage";
import { useMembersActions, useTeamTypes, useTeams } from "@/hooks";
import {
  fetchMyTeamSuggestions,
  suggestTeamChanges,
  suggestTeamPhoto,
  uploadTeamPhoto,
} from "@/api/selfService";
import {
  buildTeamChanges,
  findEmptiedTeamFields,
  type SuggestTeamForm,
} from "@/utils/suggestChanges";
import { useT } from "@/i18n/useT";
import { useSessionStore } from "@/store/sessionStore";
import InfoBubble from "@/components/ui/InfoBubble";
import type { AccentColor, Team } from "@/types";
import { ClearButton, SubmitButton } from "../buttons";
import { LogoFileInput } from "../inputs";
import FormError from "../FormError";
import FormFooter from "../FormFooter";
import { getTeamTypeOptions } from "../fields/position/positionFormUtils";
import PendingBlock from "./PendingBlock";
import TeamSuggestFields, {
  type TeamSuggestErrorKey,
} from "./TeamSuggestFields";
import { buildPendingRows } from "./pendingRows";
import { useSuggestions, withoutPending } from "./useSuggestions";

interface Props {
  team: Team;
  // The viewer holds a position in this team, so they may change its logo.
  canChangeLogo: boolean;
  onExit: () => void;
  color?: AccentColor;
}

const toForm = (team: Team): SuggestTeamForm => ({
  name: team.name,
  description: team.description ?? "",
  startYear: team.startYear ?? undefined,
  endYear: team.endYear ?? undefined,
  isOngoing: team.isOngoing,
  teamTypeId: team.teamType?.id,
});

const TeamSuggestForm = ({
  team,
  canChangeLogo,
  onExit,
  color = "blue",
}: Props) => {
  const t = useT().suggest;
  const tCommon = useT().formCommon;
  const tTeam = useT().teamForm;
  const formId = useId();
  const demo = useSessionStore((s) => !!s.session?.demo);
  const [teamTypes] = useTeamTypes();
  const [, , reloadTeams] = useTeams();
  const { reloadMembers } = useMembersActions();

  const [form, setForm] = useState<SuggestTeamForm>(() => toForm(team));
  const [errors, setErrors] = useState<
    Partial<Record<TeamSuggestErrorKey, string>>
  >({});
  const [success, showSuccess] = useTransientMessage();
  // A newly picked logo, saved together with the suggestions on submit.
  const [logoFile, setLogoFile] = useState<File | null>(null);

  const { pending, isSubmitting, error, run, refresh } = useSuggestions({
    targetId: team.id,
    fetchMine: fetchMyTeamSuggestions,
  });

  const teamTypeOptions = useMemo(
    () => getTeamTypeOptions(teamTypes),
    [teamTypes],
  );
  const changes = useMemo(
    () => withoutPending(buildTeamChanges(team, form), pending),
    [team, form, pending],
  );
  const pendingRows = useMemo(() => {
    const labels: Record<string, string> = {
      name: tCommon.name,
      photo: t.logo,
      description: tCommon.description,
      startYear: tCommon.start,
      endYear: tCommon.end,
      isOngoing: tCommon.ongoingNow,
      teamTypeId: tCommon.teamType,
    };
    return buildPendingRows(
      pending,
      t,
      (field) => labels[field] ?? field,
      (field, value) => {
        if (field === "isOngoing") return value === "true" ? t.yes : t.no;
        if (field === "teamTypeId") {
          return teamTypes.find(({ id }) => id === value)?.name ?? value;
        }
        return value;
      },
    );
  }, [pending, t, tCommon, teamTypes]);

  const collectErrors = () => {
    const result: Partial<Record<TeamSuggestErrorKey, string>> = {};
    for (const field of findEmptiedTeamFields(team, form)) {
      result[field === "startYear" || field === "endYear" ? "years" : field] =
        field === "name" ? tTeam.validation.nameRequired : t.cannotEmpty;
    }
    return result;
  };
  const hasErrors = Object.keys(collectErrors()).length > 0;
  const hasChanges = changes.length > 0 || !!logoFile;
  // Members save the logo directly; everyone else suggests it.
  const savesDirectly = canChangeLogo && !demo;
  const showLogo = savesDirectly || !canChangeLogo;

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors = collectErrors();
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0 || !hasChanges) return;

    let withdrawn = false;
    const ok = await run(async () => {
      if (changes.length > 0) {
        const { count } = await suggestTeamChanges(team.id, changes);
        withdrawn = count === 0;
      }
      if (logoFile && !savesDirectly) {
        await suggestTeamPhoto(team.id, logoFile);
      } else if (logoFile) {
        await uploadTeamPhoto(team.id, logoFile);
        await Promise.all([reloadTeams(), reloadMembers()]);
      }
      // Inside the action so the button stays busy until the form is settled.
      await refresh();
    });
    if (!ok) return;
    const savedLogo = savesDirectly && !!logoFile;
    setLogoFile(null);
    if (savedLogo && (changes.length === 0 || withdrawn)) {
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
      {showLogo && (
        <div className="relative mx-auto w-fit">
          <LogoFileInput
            keepInitial
            onImageSelect={setLogoFile}
            image={logoFile ?? team.photoUrl ?? null}
            initialImage={team.photoUrl ?? null}
            color={color}
          />
          <InfoBubble className="absolute left-full top-0 ml-1">
            {savesDirectly ? t.logoHint : t.logoReviewHint}
          </InfoBubble>
        </div>
      )}
      <PendingBlock rows={pendingRows} color={color} />
      <TeamSuggestFields
        form={form}
        setForm={setForm}
        errors={errors}
        teamTypeOptions={teamTypeOptions}
        typeRequired={!!team.teamType}
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

export default TeamSuggestForm;
