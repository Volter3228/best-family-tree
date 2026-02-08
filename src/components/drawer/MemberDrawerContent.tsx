"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import type Member from "@/models/Member";
import { MemberInfo, EditMemberForm } from ".";
import { DrawerMode } from "@/types/forms";

interface Props {
  member: Member;
  drawerMode: DrawerMode;
  onEditExit: () => void;
}

const MemberDrawerContent = ({ member, drawerMode, onEditExit }: Props) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const prevViewRef = useRef<"info" | "edit">(drawerMode);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const children = container.children;

    if (prevViewRef.current !== drawerMode && children.length > 0) {
      const activeChild = children[0] as HTMLElement;

      gsap.fromTo(
        activeChild,
        {
          opacity: 0,
          x: drawerMode === "edit" ? 20 : -20,
        },
        {
          opacity: 1,
          x: 0,
          duration: 0.6,
          ease: "power2.out",
        },
      );
    }

    prevViewRef.current = drawerMode;
  }, [drawerMode]);

  return (
    <div ref={containerRef}>
      {drawerMode === "info" ? (
        <MemberInfo member={member} />
      ) : (
        <EditMemberForm member={member} onExit={onEditExit} />
      )}
    </div>
  );
};

export default MemberDrawerContent;
