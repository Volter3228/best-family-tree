import { twMerge } from "tailwind-merge";
import { COLOR_CLASSES } from "@/constants/colorClasses";
import type { AccentColor, PositionFormRow } from "@/types";
import { DateInput, FormCheckbox } from "../../inputs";
import InputLabel from "../../inputs/InputLabel";
import {
  CURRENT_DATE_LABEL,
  MAX_POSITION_DATE,
  MIN_POSITION_DATE,
  formatLocalDate,
} from "./positionFormUtils";

interface Props {
  rowId: string;
  row: PositionFormRow;
  color?: AccentColor;
  onUpdate: (patch: Partial<PositionFormRow>) => void;
}

const MIN_POSITION_YEAR = MIN_POSITION_DATE.getFullYear();
const MAX_POSITION_YEAR = MAX_POSITION_DATE.getFullYear();

const getDateYear = (date?: string) =>
  date ? Number(date.slice(0, 4)) : undefined;

const getYearDate = (year?: number) =>
  year ? `${String(year).padStart(4, "0")}-01-01` : undefined;

const getYearEndDate = (year?: number) =>
  year ? `${String(year).padStart(4, "0")}-12-31` : undefined;

const PositionDateFields = ({
  rowId,
  row,
  color = "blue",
  onUpdate,
}: Props) => {
  const colorClasses = COLOR_CLASSES[color];
  const isYearOnly = row.isYearOnly ?? false;
  const isCurrent = row.isCurrent ?? !row.endDate;

  const handleStartDate = (date: Date | null) => {
    const dateStr = date ? formatLocalDate(date) : undefined;
    const patch: Partial<PositionFormRow> = { startDate: dateStr };

    if (dateStr && row.endDate && new Date(dateStr) > new Date(row.endDate)) {
      patch.endDate = undefined;
    }

    onUpdate(patch);
  };

  const handleEndDate = (date: Date | null) => {
    const dateStr = date ? formatLocalDate(date) : undefined;
    const patch: Partial<PositionFormRow> = {
      endDate: dateStr,
      isCurrent: !date,
    };

    if (
      dateStr &&
      row.startDate &&
      new Date(row.startDate) > new Date(dateStr)
    ) {
      patch.startDate = undefined;
    }

    onUpdate(patch);
  };

  const handleStartYear = (value: string) => {
    const year = value ? Number(value) : undefined;
    const endYear = getDateYear(row.endDate);
    onUpdate({
      year,
      endDate: year && endYear && year > endYear ? undefined : row.endDate,
      isCurrent: year && endYear && year > endYear ? true : row.isCurrent,
    });
  };

  const handleEndYear = (value: string) => {
    const year = value ? Number(value) : undefined;
    onUpdate({
      endDate: getYearEndDate(year),
      isCurrent: !year,
    });
  };

  const handleCurrentChange = (checked: boolean) =>
    onUpdate({
      isCurrent: checked,
      endDate: checked ? undefined : row.endDate,
    });

  const handleYearOnlyChange = (checked: boolean) => {
    const startYear = row.year ?? getDateYear(row.startDate);
    const endYear = getDateYear(row.endDate);

    onUpdate({
      isYearOnly: checked,
      year: checked ? startYear : undefined,
      startDate: checked ? undefined : getYearDate(startYear),
      endDate: isCurrent ? undefined : getYearDate(endYear),
    });
  };

  const yearInputClassName = twMerge(
    "w-full px-3 py-2 rounded-xl shadow-inner font-light bg-surface",
    colorClasses.caret,
    "placeholder:text-placeholder focus:outline-hidden focus:ring-2",
    colorClasses.accentRing,
    "transition-all duration-200 ease-out",
    "disabled:cursor-not-allowed disabled:opacity-60",
  );

  return (
    <div>
      <div className="flex flex-row gap-2">
        <div className="flex flex-col flex-1 relative">
          {isYearOnly ? (
            <div>
              <InputLabel
                label="Початок"
                htmlFor={`position-startYear-${rowId}`}
                required={false}
                color={color}
              />
              <input
                id={`position-startYear-${rowId}`}
                name={`position-startYear-${rowId}`}
                type="number"
                min={MIN_POSITION_YEAR}
                max={MAX_POSITION_YEAR}
                value={row.year ?? ""}
                placeholder={CURRENT_DATE_LABEL.slice(-4)}
                onChange={(event) => handleStartYear(event.target.value)}
                className={yearInputClassName}
              />
            </div>
          ) : (
            <DateInput
              name={`position-startDate-${rowId}`}
              label="Початок"
              selected={row.startDate ? new Date(row.startDate) : null}
              minDate={MIN_POSITION_DATE}
              maxDate={row.endDate ? new Date(row.endDate) : MAX_POSITION_DATE}
              placeholder="01.01.2002"
              onChange={handleStartDate}
              color={color}
            />
          )}
        </div>
        <div className="flex flex-col flex-1 relative">
          {isYearOnly ? (
            <div>
              <InputLabel
                label="Кінець"
                htmlFor={`position-endYear-${rowId}`}
                required={false}
                color={color}
              />
              <input
                id={`position-endYear-${rowId}`}
                name={`position-endYear-${rowId}`}
                type="number"
                min={row.year ?? MIN_POSITION_YEAR}
                max={MAX_POSITION_YEAR}
                value={getDateYear(row.endDate) ?? ""}
                placeholder={CURRENT_DATE_LABEL.slice(-4)}
                disabled={isCurrent}
                onChange={(event) => handleEndYear(event.target.value)}
                className={yearInputClassName}
              />
            </div>
          ) : (
            <DateInput
              key={`position-endDate-${rowId}-${isCurrent}`}
              name={`position-endDate-${rowId}`}
              label="Кінець"
              selected={
                isCurrent || !row.endDate ? null : new Date(row.endDate)
              }
              minDate={
                row.startDate ? new Date(row.startDate) : MIN_POSITION_DATE
              }
              maxDate={MAX_POSITION_DATE}
              placeholder={CURRENT_DATE_LABEL}
              disabled={isCurrent}
              onChange={handleEndDate}
              color={color}
            />
          )}
        </div>
      </div>
      <div className="mt-2 flex items-center gap-3">
        <FormCheckbox
          checked={isYearOnly}
          label="Лише рік"
          color={color}
          onChange={handleYearOnlyChange}
        />
        <FormCheckbox
          checked={isCurrent}
          label="Зараз"
          color={color}
          onChange={handleCurrentChange}
        />
      </div>
    </div>
  );
};

export default PositionDateFields;
