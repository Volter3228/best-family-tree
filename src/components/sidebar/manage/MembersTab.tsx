import { useMemo } from "react";
import { useMemberById, useMembersList } from "@/hooks";
import { ActivityState } from "@/types";
import {
  capitalizeOnlyFirstLetter,
  formatMemberRecruitmentSeason,
} from "@/utils";
import type { Member } from "@/models";
import AddMemberForm from "../form/AddMemberForm";
import EditMemberForm from "../form/EditMemberForm";
import MemberMiniAvatar from "../info/MemberMiniAvatar";
import ManageList from "./ManageList";
import { useEditorTitle } from "./useEditorTitle";
import { LIST_VIEW, type ManageTabProps } from "./types";

const getSubtitle = (member: Member) =>
  `${capitalizeOnlyFirstLetter(member.status)} · ${formatMemberRecruitmentSeason(member)}`;

const getSearchable = (member: Member) => [member.name, member.status];

const MembersTab = ({ view, go, onTitle, onClose, color }: ManageTabProps) => {
  const members = useMembersList();
  // Active members first, then everyone else; each group sorted by name.
  const sorted = useMemo(
    () =>
      [...members].sort((a, b) => {
        const aActive = a.activityState === ActivityState.Active;
        const bActive = b.activityState === ActivityState.Active;
        if (aActive !== bActive) return aActive ? -1 : 1;
        return a.name.localeCompare(b.name, "uk");
      }),
    [members],
  );
  const member = useMemberById(view.kind === "edit" ? view.id : "");
  useEditorTitle(
    onTitle,
    view.kind === "create"
      ? "Новий учасник"
      : (view.kind === "edit" && member?.name) || "",
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
      getTitle={(m) => m.name}
      getSubtitle={getSubtitle}
      getSearchable={getSearchable}
      renderLeading={(m) => (
        <MemberMiniAvatar member={m} size={40} color={color} />
      )}
      onOpen={(m) => go({ kind: "edit", id: m.id })}
      onCreate={() => go({ kind: "create" })}
      searchPlaceholder="Пошук учасника"
      emptyText="Учасників ще немає — створіть першого."
      color={color}
    />
  );
};

export default MembersTab;
