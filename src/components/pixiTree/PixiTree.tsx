"use client";

import { useEffect } from "react";
import { TreeProvider } from "@/context/pixi/TreeContext";
import { registerPlugins } from "@/libs";
import type { Member as MemberType } from "@/types";
import PixiTreeContent from "./PixiTreeContent";

let didRegisterPixiPlugins = false;

interface Props {
  members: MemberType[];
}

const PixiTree = ({ members }: Props) => {
  useEffect(() => {
    if (!didRegisterPixiPlugins) {
      didRegisterPixiPlugins = true;
      registerPlugins();
    }
  }, []);

  return (
    <TreeProvider>
      <PixiTreeContent members={members} />
    </TreeProvider>
  );
};

export default PixiTree;
