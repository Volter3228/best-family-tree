import gsap from "gsap";
import { useCallback, useEffect, useRef } from "react";
import {
  useViewportAnimation,
  useMembersActions,
  useMemberSwitchAnimation,
} from "@/hooks";
import { Member } from "@/models";
import { getMemberById } from "@/store/membersStore";
import { useFiltersStore } from "@/store/filtersStore";
import type { SidebarMode, AccentColor } from "@/types";
import { EditMemberForm } from "./form";
import MemberInfo from "./info";

interface Props {
  member: Member;
  sidebarMode: SidebarMode;
  onEditExit: () => void;
  onDeleted?: () => void;
  color?: AccentColor;
  isTeamView?: boolean;
  canFocusMemberInTeam?: (teamId: string, memberId: string) => boolean;
  onFocusMemberInTeam?: (teamId: string, memberId: string) => void;
  // Opens the team info sidebar for a position's team. Used in grid/family
  // view, where the badge cannot focus the member inside their team.
  onOpenTeamInfo?: (teamId: string) => void;
}

const MemberSidebarContent = ({
  member,
  sidebarMode,
  onEditExit,
  onDeleted,
  color = "blue",
  isTeamView = false,
  canFocusMemberInTeam,
  onFocusMemberInTeam,
  onOpenTeamInfo,
}: Props) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const prevViewRef = useRef<"info" | "edit">(sidebarMode);

  const { selectMember } = useMembersActions();
  const { focusNode } = useViewportAnimation();
  const filteredMemberIds = useFiltersStore((s) => s.filteredMemberIds);

  const handleMemberNameClick = useCallback(
    (memberId: string) => {
      if (filteredMemberIds && !filteredMemberIds.has(memberId)) return;
      if (getMemberById(memberId)) {
        selectMember(memberId);
        focusNode(memberId);
      }
    },
    [selectMember, focusNode, filteredMemberIds],
  );

  // Animate sidebar mode change
  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const children = container.children;

    if (prevViewRef.current !== sidebarMode && children.length > 0) {
      const activeChild = children[0] as HTMLElement;

      gsap.fromTo(
        activeChild,
        {
          opacity: 0,
          x: sidebarMode === "edit" ? 20 : -20,
        },
        {
          opacity: 1,
          x: 0,
          duration: 0.6,
          ease: "power2.out",
        },
      );
    }

    prevViewRef.current = sidebarMode;
  }, [sidebarMode]);

  useMemberSwitchAnimation(containerRef, member.id, sidebarMode);

  return (
    <div ref={containerRef}>
      {sidebarMode === "info" ? (
        <MemberInfo
          member={member}
          onMemberNameClick={handleMemberNameClick}
          filteredMemberIds={filteredMemberIds}
          menteesClickable={!isTeamView}
          onPositionClick={
            isTeamView
              ? (position) =>
                position.teamId &&
                onFocusMemberInTeam?.(position.teamId, member.id)
              : (position) =>
                position.teamId && onOpenTeamInfo?.(position.teamId)
          }
          canClickPosition={(position) =>
            !!position.teamId &&
            (isTeamView
              ? !!canFocusMemberInTeam?.(position.teamId, member.id)
              : !!onOpenTeamInfo)
          }
          color={color}
        />
      ) : (
        <EditMemberForm
          member={member}
          onExit={onEditExit}
          onDeleted={onDeleted}
          color={color}
        />
      )}
    </div>
  );
};

export default MemberSidebarContent;
