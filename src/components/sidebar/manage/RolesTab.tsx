import { useMemo } from "react";
import { useTransientMessage } from "@/hooks/forms/useTransientMessage";
import { StarIcon } from "@heroicons/react/16/solid";
import { BriefcaseIcon } from "@heroicons/react/24/outline";
import { twMerge } from "tailwind-merge";
import { COLOR_CLASSES } from "@/constants/colorClasses";
import { useRoles } from "@/hooks";
import type { Role } from "@/types";
import { formatCount, PARTICIPANT_FORMS } from "@/utils/strings";
import RoleForm from "../form/role/RoleForm";
import ManageList from "./ManageList";
import ManageNotice from "./ManageNotice";
import { LIST_VIEW, type ManageTabProps } from "./types";
import { useEditorTitle } from "./useEditorTitle";
import { useJustCreated } from "./useJustCreated";

const getSubtitle = (role: Role) => {
  const parts: string[] = [];
  const count = role.memberCount;
  if (count !== undefined) parts.push(formatCount(count, PARTICIPANT_FORMS));
  return parts.join(" · ") || undefined;
};

const RolesTab = ({ view, go, onTitle, color }: ManageTabProps) => {
  const [roles] = useRoles();
  const [notice, showNotice] = useTransientMessage();
  const { markCreated, messageFor } = useJustCreated(view);
  const sorted = useMemo(
    () => [...roles].sort((a, b) => a.name.localeCompare(b.name, "uk")),
    [roles],
  );
  const colorClasses = COLOR_CLASSES[color];

  const editedName =
    view.kind === "edit"
      ? (roles.find((r) => r.id === view.id)?.name ?? "")
      : "";
  useEditorTitle(
    onTitle,
    view.kind === "create"
      ? "Нова посада"
      : view.kind === "edit"
        ? editedName
        : "",
  );

  if (view.kind !== "list") {
    return (
      <RoleForm
        key={view.kind === "edit" ? view.id : "create"}
        roleId={view.kind === "edit" ? view.id : undefined}
        color={color}
        initialMessage={view.kind === "edit" ? messageFor(view.id) : undefined}
        onCreated={(role) => {
          markCreated(role.id);
          go({ kind: "edit", id: role.id });
        }}
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
        getKey={(r) => r.id}
        getTitle={(r) => r.name}
        renderTitleSuffix={(r) =>
          r.isLeaderPosition ? (
            <StarIcon
              aria-label="Лідерська посада"
              className={twMerge("h-3.5 w-3.5 shrink-0", colorClasses.text)}
            />
          ) : null
        }
        getSubtitle={getSubtitle}
        renderLeading={() => (
          <span
            className={twMerge(
              "flex h-10 w-10 shrink-0 items-center justify-center rounded-xl",
              colorClasses.softBg,
              colorClasses.text,
            )}
          >
            <BriefcaseIcon className="h-5 w-5" />
          </span>
        )}
        onOpen={(r) => go({ kind: "edit", id: r.id })}
        onCreate={() => go({ kind: "create" })}
        searchPlaceholder="Пошук посади"
        emptyText="Посад ще немає — створіть першу."
        color={color}
      />
    </div>
  );
};

export default RolesTab;
