import { twMerge } from "tailwind-merge";
import { COLOR_CLASSES } from "@/constants/colorClasses";
import { formatYearRange } from "@/utils";
import { useT } from "@/i18n/useT";
import type { AccentColor, PositionFormRow, Team, TeamType } from "@/types";
import { TextInput, YearRangeInput } from "../../inputs";
import {
  MAX_POSITION_YEAR,
  MIN_POSITION_YEAR,
  getRowPeriod,
} from "./positionFormUtils";

interface Props {
  rowId: string;
  row: PositionFormRow;
  teams: Team[];
  teamTypes: TeamType[];
  color?: AccentColor;
  onUpdate: (patch: Partial<PositionFormRow>) => void;
}

const yearLimits = { min: MIN_POSITION_YEAR, max: MAX_POSITION_YEAR };

// Years belong to the team: an existing team already has them, a new team gets
// them here, and a position without a team keeps its own.
const PositionPeriodFields = ({
  rowId,
  row,
  teams,
  teamTypes,
  color = "blue",
  onUpdate,
}: Props) => {
  const colorClasses = COLOR_CLASSES[color];
  const t = useT().memberForm.positions;
  const period = getRowPeriod(teams, row, teamTypes);

  // The validation error explains what to do; no period fields apply.
  if (period.kind === "unavailable") return null;

  if (period.kind === "existingTeam") {
    const years = formatYearRange({
      start: period.team.startYear,
      end: period.team.endYear,
    });
    return (
      <p className={twMerge("text-sm", colorClasses.text)}>
        {t.teamPeriod(years)}
      </p>
    );
  }

  if (period.kind === "newTeam") {
    return (
      <YearRangeInput
        name={`position-team-years-${rowId}`}
        start={row.teamStartYear}
        end={row.teamEndYear}
        startLabel={t.activityStart}
        endLabel={t.activityEnd}
        onChange={(teamStartYear, teamEndYear) =>
          onUpdate({ teamStartYear, teamEndYear })
        }
        color={color}
        {...yearLimits}
      />
    );
  }

  return (
    <>
      <div>
        <TextInput
          name={`position-organization-${rowId}`}
          label={t.organization}
          value={row.organization ?? ""}
          onChange={(organization) =>
            onUpdate({ organization: organization || undefined })
          }
          placeholder={t.organizationPlaceholder}
          color={color}
        />
      </div>
      <YearRangeInput
        name={`position-years-${rowId}`}
        start={row.startYear}
        end={row.endYear}
        onChange={(startYear, endYear) => onUpdate({ startYear, endYear })}
        color={color}
        {...yearLimits}
      />
    </>
  );
};

export default PositionPeriodFields;
