import { PencilIcon, PencilSquareIcon } from "@heroicons/react/24/solid";
import { canEdit, useSessionStore } from "@/store/sessionStore";
import { useManageStore } from "@/store/manageStore";
import type { useSidebar } from "@/hooks";
import { formatMemberRecruitmentSeason, getMemberSeasonAccent } from "@/utils";
import { Member } from "@/models";
import { useLocale, useT } from "@/i18n/useT";
import { abbreviateName, useDisplayName } from "@/utils/displayName";
import { useIsMobileScreen } from "@/hooks/membersTree/useTreeDirection";
import type { AccentColor } from "@/types";
import Sidebar, { MemberSidebarContent } from "../sidebar";
import HeaderChip from "../sidebar/HeaderChip";
import SidebarMinimizedSummary from "../sidebar/SidebarMinimizedSummary";

interface Props {
  state: ReturnType<typeof useSidebar>;
  member: Member | null;
  isTeamView: boolean;
  canFocusMemberInTeam: (teamId: string, memberId: string) => boolean;
  onFocusMemberInTeam: (teamId: string, memberId: string) => void;
  onOpenTeamInfo: (teamId: string) => void;
}

// Info / edit sidebar of the selected member. The info card wears the
// member's season colour; the edit form is a utility, so it is blue.
const MemberSidebar = ({
  state,
  member,
  isTeamView,
  canFocusMemberInTeam,
  onFocusMemberInTeam,
  onOpenTeamInfo,
}: Props) => {
  const t = useT().sidebar;
  const tSuggest = useT().suggest;
  const dn = useDisplayName();
  const mobile = useIsMobileScreen();
  const fullName = member ? dn(member.name) : "";
  const headerName = mobile ? abbreviateName(fullName) : fullName;
  const locale = useLocale();
  const editable = useSessionStore((s) => canEdit(s.session, member?.id));
  const canSuggest = useSessionStore(
    (s) => !!s.session && s.session.method !== "QUESTIONS" && !editable,
  );
  const manageStack = useManageStore((s) =>
    s.isOpen ? (s.isFront ? "behind" : "front") : undefined,
  );
  const sendManageBack = useManageStore((s) => s.sendBack);
  const isInfo = state.sidebarMode === "info";
  const isSuggest = state.sidebarMode === "suggest";
  const color: AccentColor =
    isInfo && member ? getMemberSeasonAccent(member) : "blue";

  return (
    <Sidebar
      id="member-sidebar"
      // The info card's season chip sits in its cover, so it scrolls away.
      headerTitle={
        member &&
        !isInfo && (
          <HeaderChip
            icon={isSuggest ? PencilSquareIcon : PencilIcon}
            color={color}
          >
            {isSuggest
              ? tSuggest.suggesting(headerName)
              : t.editing(headerName)}
          </HeaderChip>
        )
      }
      floatingHeader={isInfo}
      // The header treats a suggestion like an edit: back arrow, no minimize.
      mode={isSuggest ? "edit" : state.sidebarMode}
      isOpen={state.isSidebarOpen}
      onClose={state.onClose}
      onEditClick={editable ? state.onEditClick : undefined}
      onSuggestClick={canSuggest ? state.onSuggestClick : undefined}
      notice={state.notice}
      onBackClick={state.onBackToInfoClick}
      isMinimized={state.isSidebarMinimized}
      onMinimizedChange={state.onMinimizedChange}
      minimizedSummary={
        member && (
          <SidebarMinimizedSummary
            title={dn(member.name)}
            subtitle={formatMemberRecruitmentSeason(member, true, locale)}
          />
        )
      }
      stack={manageStack}
      onBringForward={sendManageBack}
      className="z-10"
      color={color}
    >
      {!!member && (
        <MemberSidebarContent
          member={member}
          sidebarMode={state.sidebarMode}
          onEditExit={state.onBackToInfoClick}
          onSuggestDone={state.showNotice}
          color={color}
          isTeamView={isTeamView}
          canFocusMemberInTeam={canFocusMemberInTeam}
          onFocusMemberInTeam={onFocusMemberInTeam}
          onOpenTeamInfo={onOpenTeamInfo}
          onDeleted={state.onClose}
        />
      )}
    </Sidebar>
  );
};

export default MemberSidebar;
