import { useMemo } from "react";
import { useMemberById, useMembersList } from "@/hooks";
import { ActivityState } from "@/types";
import { getStatusLabel, formatMemberRecruitmentSeason } from "@/utils";
import type { Member } from "@/models";
import type { Locale } from "@/i18n/locale";
import { useLocale, useT } from "@/i18n/useT";
import { searchableName } from "@/hooks/data/searchMatching";
import { useDisplayName } from "@/utils/displayName";
import AddMemberForm from "../form/AddMemberForm";
import EditMemberForm from "../form/EditMemberForm";
import MemberMiniAvatar from "../info/MemberMiniAvatar";
import ManageList from "./ManageList";
import { useEditorTitle } from "./useEditorTitle";
import { LIST_VIEW, type ManageTabProps } from "./types";

const getSubtitle = (member: Member, locale: Locale) =>
  `${getStatusLabel(member.status, locale)} · ${formatMemberRecruitmentSeason(member, false, locale)}`;

const getSearchable = (member: Member, locale: Locale) => [
  ...searchableName(member.name, locale),
  member.status,
];

const MembersTab = ({ view, go, onTitle, onClose, color }: ManageTabProps) => {
  const t = useT().manage;
  const locale = useLocale();
  const dn = useDisplayName();
  const members = useMembersList();
  // Active members first, then everyone else; each group sorted by name.
  const sorted = useMemo(
    () =>
      [...members].sort((a, b) => {
        const aActive = a.activityState === ActivityState.Active;
        const bActive = b.activityState === ActivityState.Active;
        if (aActive !== bActive) return aActive ? -1 : 1;
        return dn(a.name).localeCompare(dn(b.name), locale);
      }),
    [members, dn, locale],
  );
  const member = useMemberById(view.kind === "edit" ? view.id : "");
  useEditorTitle(
    onTitle,
    view.kind === "create"
      ? t.newMember
      : (view.kind === "edit" && member && dn(member.name)) || "",
  );

  if (view.kind === "create") {
    return <AddMemberForm color={color} onSuccess={onClose} />;
  }
  if (view.kind === "edit" && member) {
    return (
      <EditMemberForm
        key={member.id}
        member={member}
        onExit={() => go(LIST_VIEW)}
        color={color}
      />
    );
  }

  return (
    <ManageList
      items={sorted}
      getKey={(m) => m.id}
      getTitle={(m) => dn(m.name)}
      getSubtitle={(item) => getSubtitle(item, locale)}
      getSearchable={(m) => getSearchable(m, locale)}
      renderLeading={(m) => (
        <MemberMiniAvatar member={m} size={40} color={color} />
      )}
      onOpen={(m) => go({ kind: "edit", id: m.id })}
      onCreate={() => go({ kind: "create" })}
      searchPlaceholder={t.searchMembers}
      emptyText={t.noMembers}
      color={color}
    />
  );
};

export default MembersTab;
