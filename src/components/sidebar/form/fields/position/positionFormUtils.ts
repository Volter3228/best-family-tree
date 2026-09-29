import type { DropdownOption, EventType, PositionFormRow, Team } from "@/types";

export const MIN_POSITION_DATE = new Date(2002, 0, 1);
export const MAX_POSITION_DATE = new Date();
export const CURRENT_DATE_LABEL = new Date().toLocaleDateString("uk-UA", {
  day: "2-digit",
  month: "2-digit",
  year: "numeric",
});

const EMPTY_POSITION_ROW: Omit<PositionFormRow, "id"> = {
  eventTypeId: undefined,
  eventTypeName: undefined,
  teamName: undefined,
  roleName: "",
  roleId: undefined,
  year: undefined,
  startDate: undefined,
  endDate: undefined,
  isCurrent: true,
};

export const createEmptyPositionRow = (): PositionFormRow => ({
  ...EMPTY_POSITION_ROW,
  id: crypto.randomUUID(),
});

export const formatLocalDate = (date: Date): string => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
};

export const getEventTypeOptions = (
  eventTypes: EventType[],
): DropdownOption[] =>
  eventTypes.map((eventType) => ({
    value: eventType.id,
    text: eventType.name,
  }));

export const getRoleOptions = (
  roles: { id: string; name: string }[],
): DropdownOption[] =>
  roles.map((role) => ({ value: role.id, text: role.name }));

export const getTeamOptions = (
  teams: Team[],
  eventTypeId?: string,
): DropdownOption[] =>
  teams
    .filter(
      (team) =>
        team.name && (!eventTypeId || team.eventTypeId === eventTypeId),
    )
    .map((team) => ({ value: team.name as string, text: team.name as string }));

export const getPositionRowSummary = (
  row: PositionFormRow,
  eventTypes: EventType[],
): string => {
  const title = row.roleName.trim() || "Нова посада";
  const context =
    row.teamName?.trim() ||
    eventTypes.find((eventType) => eventType.id === row.eventTypeId)?.name ||
    row.eventTypeName;
  const start = row.isYearOnly
    ? row.year?.toString()
    : row.startDate?.slice(0, 4);
  const end = row.isCurrent ? "зараз" : row.endDate?.slice(0, 4);
  const date = start && end ? `${start}-${end}` : start || end;
  return [context, title, date].filter(Boolean).join(" · ");
};

export const getTeamDatePatch = (
  team: Team,
  isYearOnly = false,
): Partial<PositionFormRow> => {
  const patch: Partial<PositionFormRow> = {};

  if (isYearOnly) {
    if (team.startDate) {
      patch.year = new Date(team.startDate).getFullYear();
    }
    patch.startDate = undefined;
    patch.endDate = team.endDate
      ? `${new Date(team.endDate).getFullYear()}-12-31`
      : undefined;
    if (team.startDate || team.endDate) {
      patch.isCurrent = !team.endDate;
    }
    return patch;
  }

  if (team.startDate) {
    patch.startDate = formatLocalDate(new Date(team.startDate));
  }
  if (team.endDate) {
    patch.endDate = formatLocalDate(new Date(team.endDate));
  }
  if (team.startDate || team.endDate) {
    patch.year = undefined;
    patch.isCurrent = !team.endDate;
    if (!team.endDate) patch.endDate = undefined;
  }

  return patch;
};

export const findTeamForPosition = (
  teams: Team[],
  row: PositionFormRow,
  teamName: string,
): Team | undefined =>
  teams.find(
    (team) =>
      team.name === teamName &&
      (team.eventTypeId === row.eventTypeId ||
        (!team.eventTypeId && !row.eventTypeId)),
  );
