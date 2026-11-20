import {
  PencilIcon,
  PencilSquareIcon,
  UserGroupIcon,
} from "@heroicons/react/16/solid";
import { canEdit, useSessionStore } from "@/store/sessionStore";
import { useManageStore } from "@/store/manageStore";
import { useMemo, useRef } from "react";
import { useMembersList, useTeams, useSidebarSwitchAnimation } from "@/hooks";
import type { useTeamInfoSidebar } from "@/hooks";
import { formatYearRange, getTeamRoster } from "@/utils";
import { useLocale, useT } from "@/i18n/useT";
import Sidebar from "../sidebar";
import HeaderChip from "../sidebar/HeaderChip";
import SidebarMinimizedSummary from "../sidebar/SidebarMinimizedSummary";
import TeamSuggestForm from "../sidebar/form/suggest/TeamSuggestForm";
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
  // Fits the team in view (clicking its name). Only set in team view.
  onTitleClick?: () => void;
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
  const t = useT().sidebar;
  const tSuggest = useT().suggest;
  const locale = useLocale();
  const [teams] = useTeams();
  const flatMembersList = useMembersList();

  const team = useMemo(
    () => teams.find((item) => item.id === teamId) ?? null,
    [teams, teamId],
  );
  // Kept while the sidebar slides out, so its content (and height) stay put.
  const roster = useMemo(
    () => (teamId ? getTeamRoster(flatMembersList, teamId, locale) : []),
    [teamId, flatMembersList, locale],
  );

  const editable = useSessionStore((s) => canEdit(s.session));
  const session = useSessionStore((s) => s.session);
  const canSuggest = !!session && session.method !== "QUESTIONS" && !editable;
  const isMember =
    !!session?.memberId &&
    roster.some((entry) => entry.member.id === session.memberId);
  const isSuggest = mode === "suggest";
  const manageStack = useManageStore((s) =>
    s.isOpen ? (s.isFront ? "behind" : "front") : undefined,
  );
  const sendManageBack = useManageStore((s) => s.sendBack);
  const containerRef = useRef<HTMLDivElement>(null);
  useSidebarSwitchAnimation(containerRef, teamId ?? "", mode);

  return (
    <Sidebar
      id="team-sidebar"
      headerTitle={
        mode === "info" ? (
          <HeaderChip icon={UserGroupIcon} color="blue">
            {team?.teamType ? team.teamType.name : t.team}
          </HeaderChip>
        ) : (
          team && (
            <HeaderChip
              icon={isSuggest ? PencilSquareIcon : PencilIcon}
              color="blue"
            >
              {isSuggest
                ? tSuggest.suggesting(team.name)
                : t.editing(team.name)}
            </HeaderChip>
          )
        )
      }
      floatingHeader={mode === "info"}
      mode={isSuggest ? "edit" : mode}
      isOpen={isOpen}
      onClose={state.close}
      onEditClick={editable ? state.startEdit : undefined}
      onSuggestClick={canSuggest ? state.startSuggest : undefined}
      // Suggesting keeps the card as tall as the info view was.
      fillHeight={isSuggest}
      onBackClick={state.backToInfo}
      isMinimized={state.isMinimized}
      onMinimizedChange={state.setMinimized}
      minimizedSummary={
        team && (
          <SidebarMinimizedSummary
            title={team.name}
            subtitle={formatYearRange({
              start: team.startYear,
              end: team.endYear,
              ongoing: team.isOngoing,
            })}
          />
        )
      }
      stack={manageStack}
      onBringForward={sendManageBack}
      className="z-10"
    >
      <div ref={containerRef}>
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
          ) : isSuggest ? (
            <TeamSuggestForm
              key={teamId}
              team={team}
              canChangeLogo={isMember}
              onExit={state.backToInfo}
            />
          ) : (
            <TeamForm
              teamId={teamId}
              onSaved={state.backToInfo}
              onCancel={state.backToInfo}
              onDeleted={state.close}
            />
          ))}
      </div>
    </Sidebar>
  );
};

export default TeamInfoSidebar;
