import { useMemo } from "react";
import { useMembers, useTeams } from "@/hooks";
import type { useTeamInfoSidebar } from "@/hooks";
import { getTeamRoster } from "@/utils";
import Sidebar from "../sidebar";
import TeamForm from "../sidebar/form/team/TeamForm";
import TeamInfo from "../sidebar/info/TeamInfo";

interface Props {
  state: ReturnType<typeof useTeamInfoSidebar>;
  canFocusMemberInTeam: (teamId: string, memberId: string) => boolean;
  onFocusMemberInTeam: (teamId: string, memberId: string) => void;
  // Grid/family view: a roster row always selects the member (if present on
  // the canvas), regardless of the layout type.
  canSelectMember: (memberId: string) => boolean;
  onSelectMember: (memberId: string) => void;
  // Fits the team in view (clicking its name).
  onTitleClick: () => void;
}

// Info / edit sidebar of the team picked through its badge or square.
const TeamInfoSidebar = ({
  state,
  canFocusMemberInTeam,
  onFocusMemberInTeam,
  canSelectMember,
  onSelectMember,
  onTitleClick,
}: Props) => {
  const { teamId, isOpen, mode } = state;
  const [teams] = useTeams();
  const { flatMembersList } = useMembers();

  const team = useMemo(
    () => teams.find((item) => item.id === teamId) ?? null,
    [teams, teamId],
  );
  const roster = useMemo(
    () => (isOpen && teamId ? getTeamRoster(flatMembersList, teamId) : []),
    [isOpen, teamId, flatMembersList],
  );

  return (
    <Sidebar
      id="team-sidebar"
      headerTitle={mode === "info" ? "Команда" : "Редагувати"}
      mode={mode}
      isOpen={isOpen}
      onClose={state.close}
      onEditClick={state.startEdit}
      onBackClick={state.backToInfo}
      className="z-10"
    >
      {team &&
        teamId &&
        (mode === "info" ? (
          <TeamInfo
            team={team}
            roster={roster}
            canClickMember={(memberId) =>
              canFocusMemberInTeam(teamId, memberId) ||
              canSelectMember(memberId)
            }
            onMemberClick={(memberId) => {
              if (canFocusMemberInTeam(teamId, memberId)) {
                onFocusMemberInTeam(teamId, memberId);
              } else {
                onSelectMember(memberId);
              }
            }}
            onTitleClick={onTitleClick}
          />
        ) : (
          <TeamForm
            teamId={teamId}
            onSaved={state.backToInfo}
            onDeleted={state.close}
          />
        ))}
    </Sidebar>
  );
};

export default TeamInfoSidebar;
