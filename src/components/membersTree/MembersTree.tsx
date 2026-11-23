"use client";

import { useEffect, useState } from "react";
import { registerPixiPlugins } from "@/libs";
import type { Member as MemberType } from "@/types";
import MembersTreeContent from "./MembersTreeContent";

let didRegisterPixiPlugins = false;

interface Props {
  members: MemberType[];
  showToolbar: boolean;
}

const MembersTree = ({ members, showToolbar }: Props) => {
  const [isReady, setIsReady] = useState(didRegisterPixiPlugins);

  useEffect(() => {
    if (!didRegisterPixiPlugins) {
      didRegisterPixiPlugins = true;
      registerPixiPlugins().then(() => setIsReady(true));
    }
  }, []);

  if (!isReady) return null;

  return <MembersTreeContent members={members} showToolbar={showToolbar} />;
};

export default MembersTree;
