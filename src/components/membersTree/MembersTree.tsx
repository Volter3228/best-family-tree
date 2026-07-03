"use client";

import { useEffect } from "react";
import { MembersTreeProvider } from "@/context/membersTree/MembersTreeProvider";
import { FiltersProvider } from "@/context/FiltersContext";
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
    <FiltersProvider>
      <MembersTreeProvider>
        <MembersTreeContent members={members} />
      </MembersTreeProvider>
    </FiltersProvider>
  );
};

export default MembersTree;
