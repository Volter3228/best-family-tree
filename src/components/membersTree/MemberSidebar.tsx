import type { useSidebar } from "@/hooks";
import { formatMemberRecruitmentSeason } from "@/utils";
import { Member } from "@/models";
import type { AccentColor } from "@/types";
import Sidebar, { MemberSidebarContent } from "../sidebar";
import SidebarMinimizedSummary from "../sidebar/SidebarMinimizedSummary";

interface Props {
  state: ReturnType<typeof useSidebar>;
  member: Member | null;
  color: AccentColor;
  isTeamView: boolean;
  canFocusMemberInTeam: (teamId: string, memberId: string) => boolean;
  onFocusMemberInTeam: (teamId: string, memberId: string) => void;
  onOpenTeamInfo: (teamId: string) => void;
}

// Info / edit sidebar of the selected member.
const MemberSidebar = ({
  state,
  member,
  color,
  isTeamView,
  canFocusMemberInTeam,
  onFocusMemberInTeam,
  onOpenTeamInfo,
}: Props) => (
  <Sidebar
    id="member-sidebar"
    headerTitle={state.sidebarMode === "info" ? "Інфо" : "Редагувати"}
    mode={state.sidebarMode}
    isOpen={state.isSidebarOpen}
    onClose={state.onClose}
    onEditClick={state.onEditClick}
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

export default MemberSidebar;
