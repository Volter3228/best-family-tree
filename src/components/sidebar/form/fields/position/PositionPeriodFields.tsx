import { twMerge } from "tailwind-merge";
import { COLOR_CLASSES } from "@/constants/colorClasses";
import { formatYearRange } from "@/utils";
import type { AccentColor, PositionFormRow, Team } from "@/types";
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
  color = "blue",
  onUpdate,
}: Props) => {
  const colorClasses = COLOR_CLASSES[color];
  const period = getRowPeriod(teams, row);

  if (period.kind === "existingTeam") {
    const years = formatYearRange({
      start: period.team.startYear,
      end: period.team.endYear,
    });
    return (
      <p className={twMerge("text-sm", colorClasses.text)}>
        Період команди: {years || "не вказано"}
      </p>
    );
  }

  if (period.kind === "newTeam") {
    return (
      <YearRangeInput
        name={`position-team-years-${rowId}`}
        start={row.teamStartYear}
        end={row.teamEndYear}
        startLabel="Початок команди"
        endLabel="Кінець команди"
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
      <TextInput
        name={`position-organization-${rowId}`}
        label="Організація (без команди)"
        value={row.organization ?? ""}
        onChange={(organization) =>
          onUpdate({ organization: organization || undefined })
        }
        placeholder="Зовнішній проєкт"
        color={color}
      />
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
