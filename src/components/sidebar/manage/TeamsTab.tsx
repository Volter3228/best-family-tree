import { useMemo } from "react";
import { useTransientMessage } from "@/hooks/forms/useTransientMessage";
import { useTeams, useTeamTypes } from "@/hooks";
import type { Team, TeamType } from "@/types";
import TeamForm from "../form/team/TeamForm";
import TeamTile from "../form/team/TeamTile";
import ManageList from "./ManageList";
import ManageNotice from "./ManageNotice";
import { useEditorTitle } from "./useEditorTitle";
import { useJustCreated } from "./useJustCreated";
import { LIST_VIEW, type ManageTabProps } from "./types";

const resolveType = (team: Team, teamTypes: TeamType[]) =>
  team.teamType ?? teamTypes.find(({ id }) => id === team.teamTypeId) ?? null;

// Running event teams first, then other running teams, then the rest.
const groupRank = (team: Team, type: TeamType | null) =>
  team.isOngoing ? (type?.isEvent ? 0 : 1) : 2;

// Newest period first (start, then end); the type never groups the list.
const byPeriodDesc = (a: Team, b: Team) =>
  (b.startYear ?? 0) - (a.startYear ?? 0) ||
  (b.endYear ?? 0) - (a.endYear ?? 0) ||
  a.name.localeCompare(b.name, "uk");

// "2020 – 2021", "2021 – …", a single year alone.
const formatTeamYears = ({
  start,
  end,
  ongoing,
}: {
  start?: number | null;
  end?: number | null;
  ongoing?: boolean;
}) => {
  if (start && ongoing) return `${start} – …`;
  if (start && end && start !== end) return `${start} – ${end}`;
  return String(start ?? end ?? "");
};

const TeamsTab = ({ view, go, onTitle, color }: ManageTabProps) => {
  const [teams] = useTeams();
  const [teamTypes] = useTeamTypes();
  const [notice, showNotice] = useTransientMessage();
  // The team just created: its editor opens with a "Створено" bubble.
  const { markCreated, messageFor } = useJustCreated(view);

  const typeOf = (team: Team) => resolveType(team, teamTypes);

  const sorted = useMemo(
    () =>
      [...teams].sort(
        (a, b) =>
          groupRank(a, resolveType(a, teamTypes)) -
            groupRank(b, resolveType(b, teamTypes)) || byPeriodDesc(a, b),
      ),
    [teams, teamTypes],
  );

  const editedName =
    view.kind === "edit"
      ? teams.find((t) => t.id === view.id)?.name
      : undefined;
  useEditorTitle(
    onTitle,
    view.kind === "list"
      ? ""
      : view.kind === "create"
        ? "Нова команда"
        : (editedName ?? ""),
  );

  if (view.kind === "create") {
    return (
      <TeamForm
        color={color}
        onCancel={() => go(LIST_VIEW)}
        onCreated={(id) => {
          markCreated(id);
          go({ kind: "edit", id });
        }}
      />
    );
  }
  if (view.kind === "edit") {
    return (
      <TeamForm
        key={view.id}
        teamId={view.id}
        color={color}
        initialMessage={messageFor(view.id)}
        onCancel={() => go(LIST_VIEW)}
        onDeleted={() => {
          showNotice("Видалено");
          go(LIST_VIEW);
        }}
      />
    );
  }

  return (
    <div className="flex flex-col">
      <ManageNotice message={notice} />
      <ManageList
        items={sorted}
        getKey={(t) => t.id}
        getTitle={(t) => t.name}
        getSubtitle={(t) =>
          [
            typeOf(t)?.name,
            formatTeamYears({
              start: t.startYear,
              end: t.endYear,
              ongoing: t.isOngoing,
            }),
          ]
            .filter(Boolean)
            .join(" · ") || undefined
        }
        getSearchable={(t) => [t.name, typeOf(t)?.name ?? ""]}
        renderLeading={(t) => (
          <TeamTile
            name={t.name}
            photoUrl={t.photoUrl}
            iconUrl={typeOf(t)?.iconUrl}
            typeColor={typeOf(t)?.color}
            color={color}
            className="h-10 w-10"
          />
        )}
        onOpen={(t) => go({ kind: "edit", id: t.id })}
        onCreate={() => go({ kind: "create" })}
        searchPlaceholder="Пошук команди"
        emptyText="Команд ще немає — створіть першу."
        color={color}
      />
    </div>
  );
};

export default TeamsTab;
