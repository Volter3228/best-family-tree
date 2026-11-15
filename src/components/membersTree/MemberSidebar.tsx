import { PencilIcon } from "@heroicons/react/24/solid";
import { canEdit, useSessionStore } from "@/store/sessionStore";
import type { useSidebar } from "@/hooks";
import { formatMemberRecruitmentSeason, getMemberSeasonAccent } from "@/utils";
import { Member } from "@/models";
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
  const editable = useSessionStore((s) => canEdit(s.session, member?.id));
  const isInfo = state.sidebarMode === "info";
  const color: AccentColor =
    isInfo && member ? getMemberSeasonAccent(member) : "blue";

  return (
    <Sidebar
      id="member-sidebar"
      // The info card's season chip sits in its cover, so it scrolls away.
      headerTitle={
        member &&
        !isInfo && (
          <HeaderChip icon={PencilIcon} color={color}>
            Редагувати: {member.name}
          </HeaderChip>
        )
      }
      floatingHeader={isInfo}
      mode={state.sidebarMode}
      isOpen={state.isSidebarOpen}
      onClose={state.onClose}
      onEditClick={editable ? state.onEditClick : undefined}
      onBackClick={state.onBackToInfoClick}
      isMinimized={state.isSidebarMinimized}
      onMinimizedChange={state.onMinimizedChange}
      minimizedSummary={
        member && (
          <SidebarMinimizedSummary
            title={member.name}
            subtitle={formatMemberRecruitmentSeason(member, true)}
          />
        )
      }
      className="z-10"
      color={color}
    >
      {!!member && (
        <MemberSidebarContent
          member={member}
          sidebarMode={state.sidebarMode}
          onEditExit={state.onBackToInfoClick}
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
