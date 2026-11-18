import { useMemo } from "react";
import { StarIcon } from "@heroicons/react/16/solid";
import { BriefcaseIcon } from "@heroicons/react/24/outline";
import { twMerge } from "tailwind-merge";
import { COLOR_CLASSES } from "@/constants/colorClasses";
import { useRoles } from "@/hooks";
import type { Role } from "@/types";
import { useLocale, useT } from "@/i18n/useT";
import { formatCount } from "@/i18n/plural";
import RoleForm from "../form/role/RoleForm";
import ManageList from "./ManageList";
import { LIST_VIEW, type ManageTabProps } from "./types";
import { useEditorTitle } from "./useEditorTitle";
import { useJustCreated } from "./useJustCreated";

const RolesTab = ({ view, go, onTitle, color }: ManageTabProps) => {
  const t = useT().manage;
  const locale = useLocale();
  const [roles] = useRoles();
  const { markCreated, messageFor } = useJustCreated(view);
  const sorted = useMemo(
    () => [...roles].sort((a, b) => a.name.localeCompare(b.name, locale)),
    [roles, locale],
  );
  const colorClasses = COLOR_CLASSES[color];
  const getSubtitle = (role: Role) =>
    role.memberCount === undefined
      ? undefined
      : formatCount(locale, role.memberCount, t.memberForms);

  const editedName =
    view.kind === "edit"
      ? (roles.find((r) => r.id === view.id)?.name ?? "")
      : "";
  useEditorTitle(
    onTitle,
    view.kind === "create" ? t.newRole : view.kind === "edit" ? editedName : "",
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
          go(LIST_VIEW);
        }}
        onCancel={() => go(LIST_VIEW)}
      />
    );
  }

  return (
    <ManageList
      items={sorted}
      getKey={(r) => r.id}
      getTitle={(r) => r.name}
      getSearchable={(r) => [r.name]}
      renderTitleSuffix={(r) =>
        r.isLeaderPosition ? (
          <StarIcon
            aria-label={t.leaderRole}
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
      searchPlaceholder={t.searchRoles}
      emptyText={t.noRoles}
      color={color}
    />
  );
};

export default RolesTab;
