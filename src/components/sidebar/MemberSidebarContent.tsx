import gsap from "gsap";
import { useCallback, useEffect, useRef } from "react";
import {
  useViewportAnimation,
  useMembers,
  useFilters,
  useMemberSwitchAnimation,
} from "@/hooks";
import { Member } from "@/models";
import type { SidebarMode, AccentColor } from "@/types";
import { EditMemberForm } from "./form";
import MemberInfo from "./info";

interface Props {
  member: Member;
  sidebarMode: SidebarMode;
  onEditExit: () => void;
  color?: AccentColor;
}

const MemberSidebarContent = ({
  member,
  sidebarMode,
  onEditExit,
  color = "blue",
}: Props) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const prevViewRef = useRef<"info" | "edit">(sidebarMode);

  const { setSelectedMember, getMemberById } = useMembers();
  const { focusNode } = useViewportAnimation();
  const { filteredMemberIds } = useFilters();

  const handleMemberNameClick = useCallback(
    (memberId: string) => {
      if (filteredMemberIds && !filteredMemberIds.has(memberId)) return;
      const targetMember = getMemberById(memberId);
      if (targetMember) {
        setSelectedMember(targetMember);
        focusNode(memberId);
      }
    },
    [getMemberById, setSelectedMember, focusNode, filteredMemberIds],
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
          color={color}
        />
      ) : (
        <EditMemberForm member={member} onExit={onEditExit} color={color} />
      )}
    </div>
  );
};

export default MemberSidebarContent;
