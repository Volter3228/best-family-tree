import { useMemo } from "react";
import { useTeamTypes } from "@/hooks";
import { teamTypeTeamCount } from "@/hooks/forms/useTeamTypeForm";
import { useTransientMessage } from "@/hooks/forms/useTransientMessage";
import { formatCount, TEAM_FORMS } from "@/utils/strings";
import TeamTypeForm from "../form/teamType/TeamTypeForm";
import TeamTypeMark from "../form/teamType/TeamTypeMark";
import ManageList from "./ManageList";
import ManageNotice from "./ManageNotice";
import { LIST_VIEW, type ManageTabProps } from "./types";
import { useEditorTitle } from "./useEditorTitle";

const TeamTypesTab = ({ view, go, onTitle, color }: ManageTabProps) => {
  const [teamTypes] = useTeamTypes();
  const [notice, showNotice] = useTransientMessage();

  const sorted = useMemo(
    () => [...teamTypes].sort((a, b) => a.name.localeCompare(b.name, "uk")),
    [teamTypes],
  );

  const editedName =
    view.kind === "edit"
      ? (teamTypes.find((teamType) => teamType.id === view.id)?.name ?? "")
      : "";
  useEditorTitle(
    onTitle,
    view.kind === "list"
      ? ""
      : view.kind === "create"
        ? "Новий тип команди"
        : editedName,
  );

  if (view.kind !== "list") {
    return (
      <TeamTypeForm
        teamTypeId={view.kind === "edit" ? view.id : undefined}
        color={color}
        onCreated={(id) => go({ kind: "edit", id })}
        onDeleted={() => {
          showNotice("Видалено");
          go(LIST_VIEW);
        }}
        onCancel={() => go(LIST_VIEW)}
      />
    );
  }

  return (
    <div className="flex flex-col">
      <ManageNotice message={notice} />
      <ManageList
        items={sorted}
        getKey={(teamType) => teamType.id}
        getTitle={(teamType) => teamType.name}
        getSubtitle={(teamType) =>
          `${teamType.isEvent ? "Івент" : "Інше"}, ${formatCount(teamTypeTeamCount(teamType), TEAM_FORMS)}`
        }
        renderLeading={(teamType) => (
          <TeamTypeMark
            name={teamType.name}
            iconSrc={teamType.iconUrl || null}
            color={teamType.color || undefined}
            className="h-10 w-10 rounded-xl text-sm"
          />
        )}
        onOpen={(teamType) => go({ kind: "edit", id: teamType.id })}
        onCreate={() => go({ kind: "create" })}
        searchPlaceholder="Пошук типу"
        emptyText="Типів ще немає — створіть перший."
        color={color}
      />
    </div>
  );
};

export default TeamTypesTab;
