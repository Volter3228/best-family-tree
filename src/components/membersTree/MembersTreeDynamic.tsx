"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import BrandSpinner from "@/components/ui/BrandSpinner";
import PhotoViewer from "@/components/photoViewer/PhotoViewer";
import { useTreeStore } from "@/store/treeStore";
import type { Member as MemberType } from "@/types";

const MembersTree = dynamic(() => import("@/components/membersTree/MembersTree"), {
  ssr: false,
});

interface Props {
  members: MemberType[];
}

const EXIT_DELAY_MS = 400;
const EXIT_MS = 1100;

type TreeState = ReturnType<typeof useTreeStore.getState>;

const isTreeReady = (s: TreeState) => s.layoutMode !== null || s.nodes.length > 0;

const MembersTreeDynamic = ({ members }: Props) => {
  const [phase, setPhase] = useState<"loading" | "exiting" | "done">(() =>
    members.length === 0 || isTreeReady(useTreeStore.getState()) ? "done" : "loading",
  );
  useEffect(() => {
    if (phase !== "loading") return;
    const timers: ReturnType<typeof setTimeout>[] = [];
    const exitWhenReady = () => {
      if (!isTreeReady(useTreeStore.getState())) return;
      unsubscribe();
      timers.push(setTimeout(() => setPhase("exiting"), EXIT_DELAY_MS));
      timers.push(setTimeout(() => setPhase("done"), EXIT_DELAY_MS + EXIT_MS));
    };
    const unsubscribe = useTreeStore.subscribe(exitWhenReady);
    exitWhenReady();
    return () => {
      unsubscribe();
      timers.forEach(clearTimeout);
    };
  }, [phase]);

  return (
    <>
      <MembersTree members={members} />
      <PhotoViewer />
      {phase !== "done" && (
        <div className="pointer-events-none fixed inset-0 z-50 flex items-center justify-center">
          <BrandSpinner
            exiting={phase === "exiting"}
            className="aspect-square w-[min(70vw,30rem)]"
          />
        </div>
      )}
    </>
  );
};

export default MembersTreeDynamic;
