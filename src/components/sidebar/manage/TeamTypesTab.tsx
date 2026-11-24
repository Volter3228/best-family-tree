import { useMemo } from "react";
import { useTeamTypes } from "@/hooks";
import { teamTypeTeamCount } from "@/hooks/forms/useTeamTypeForm";
import { useLocale, useT } from "@/i18n/useT";
import { formatCount } from "@/i18n/plural";
import TeamTypeForm from "../form/teamType/TeamTypeForm";
import TeamTypeMark from "../form/teamType/TeamTypeMark";
import ManageList from "./ManageList";
import { LIST_VIEW, type ManageTabProps } from "./types";
import { useEditorTitle } from "./useEditorTitle";

const TeamTypesTab = ({ view, go, onTitle, color }: ManageTabProps) => {
  const t = useT().manage;
  const locale = useLocale();
  const [teamTypes] = useTeamTypes();

  const sorted = useMemo(
    () =>
      // Most teams first.
      [...teamTypes].sort(
        (a, b) =>
          (b._count?.teams ?? 0) - (a._count?.teams ?? 0) ||
          a.name.localeCompare(b.name, locale),
      ),
    [teamTypes, locale],
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
        ? t.newTeamType
        : editedName,
  );

  if (view.kind !== "list") {
    return (
      <TeamTypeForm
        teamTypeId={view.kind === "edit" ? view.id : undefined}
        color={color}
        onCreated={(id) => go({ kind: "edit", id })}
        onDeleted={() => {
          go(LIST_VIEW);
        }}
        onCancel={() => go(LIST_VIEW)}
      />
    );
  }

  return (
    <ManageList
      items={sorted}
      getKey={(teamType) => teamType.id}
      getTitle={(teamType) => teamType.name}
      getSearchable={(teamType) => [teamType.name]}
      getSubtitle={(teamType) =>
        `${teamType.isEvent ? t.event : t.other}, ${formatCount(locale, teamTypeTeamCount(teamType), t.teamForms)}`
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
      searchPlaceholder={t.searchTeamTypes}
      emptyText={t.noTeamTypes}
      color={color}
    />
  );
};

export default TeamTypesTab;
