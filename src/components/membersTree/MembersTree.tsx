"use client";

import { useEffect } from "react";
import { MembersTreeProvider } from "@/context/membersTree/MembersTreeProvider";
import { registerPixiPlugins } from "@/libs";
import { type Member as MemberType } from "@/types";
import MembersTreeContent from "./MembersTreeContent";

let didRegisterPixiPlugins = false;

interface Props {
  members: MemberType[];
}

const MembersTree = ({ members }: Props) => {
  useEffect(() => {
    if (!didRegisterPixiPlugins) {
      didRegisterPixiPlugins = true;
      registerPixiPlugins();
    }
  }, []);

  return (
    <MembersTreeProvider>
      <MembersTreeContent members={members} />
    </MembersTreeProvider>
  );
};

export default MembersTree;
