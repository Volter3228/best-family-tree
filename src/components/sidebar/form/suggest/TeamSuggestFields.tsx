import { useT } from "@/i18n/useT";
import type { AccentColor, DropdownOption } from "@/types";
import type { SuggestTeamForm } from "@/utils/suggestChanges";
import {
  DropdownSelectInput,
  TextAreaInput,
  TextInput,
  YearRangeInput,
} from "../inputs";
import FormField from "../fields/FormField";

export type TeamSuggestErrorKey =
  "name" | "description" | "years" | "teamTypeId";

interface Props {
  form: SuggestTeamForm;
  setForm: React.Dispatch<React.SetStateAction<SuggestTeamForm>>;
  errors: Partial<Record<TeamSuggestErrorKey, string>>;
  teamTypeOptions: DropdownOption[];
  typeRequired: boolean;
  color: AccentColor;
}

const TeamSuggestFields = ({
  form,
  setForm,
  errors,
  teamTypeOptions,
  typeRequired,
  color,
}: Props) => {
  const tCommon = useT().formCommon;
  const tTeam = useT().teamForm;

  return (
    <div className="flex flex-col gap-3">
      <FormField error={errors.name} color={color}>
        <TextInput
          name="teamName"
          label={tCommon.name}
          value={form.name}
          onChange={(name) => setForm((prev) => ({ ...prev, name }))}
          required
          color={color}
        />
      </FormField>
      <FormField error={errors.teamTypeId} color={color}>
        <DropdownSelectInput
          name="teamType"
          label={tCommon.teamType}
          autoComplete
          options={teamTypeOptions}
          onSelect={(value) =>
            setForm((prev) => ({ ...prev, teamTypeId: value || undefined }))
          }
          placeholder={tTeam.chooseType}
          initialValue={form.teamTypeId}
          required={typeRequired}
          color={color}
        />
      </FormField>
      <FormField error={errors.description} color={color}>
        <TextAreaInput
          name="teamDescription"
          label={tCommon.description}
          value={form.description}
          onChange={(description) =>
            setForm((prev) => ({ ...prev, description }))
          }
          color={color}
        />
      </FormField>
      <FormField error={errors.years} color={color}>
        <YearRangeInput
          name="teamYears"
          start={form.startYear}
          end={form.endYear}
          ongoing={form.isOngoing}
          onOngoingChange={(isOngoing) =>
            setForm((prev) => ({
              ...prev,
              isOngoing,
              endYear: isOngoing ? undefined : prev.endYear,
            }))
          }
          onChange={(startYear, endYear) =>
            setForm((prev) => ({ ...prev, startYear, endYear }))
          }
          color={color}
        />
      </FormField>
    </div>
  );
};

export default TeamSuggestFields;
