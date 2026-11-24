"use client";

import dynamic from "next/dynamic";
import { useEffect } from "react";
import PhotoViewer from "@/components/photoViewer/PhotoViewer";
import { useSessionStore } from "@/store/sessionStore";
import { useTreeLoadingStore } from "@/store/treeLoadingStore";
import type { Member as MemberType } from "@/types";

const MembersTree = dynamic(
  () => import("@/components/membersTree/MembersTree"),
  {
    ssr: false,
  },
);

interface Props {
  members: MemberType[];
}

const MembersTreeDynamic = ({ members }: Props) => {
  useEffect(() => {
    void useSessionStore.getState().load();
  }, []);
  const phase = useTreeLoadingStore((s) => s.phase);
  const isEmpty = members.length === 0;
  // An empty tree draws nothing to wait for.
  useEffect(() => {
    if (isEmpty) useTreeLoadingStore.getState().setPhase("done");
  }, [isEmpty]);

  return (
    <>
      <MembersTree members={members} showToolbar={phase !== "loading"} />
      <PhotoViewer />
    </>
  );
};

export default MembersTreeDynamic;
