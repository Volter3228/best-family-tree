"use client";

import { PixiTreeProvider } from "@/context/PixiTreeContext";
import PixiTreeContent from "./PixiTreeContent";
import type { Member as MemberType } from "@/types";
import { registerPlugins } from "@/libs";

registerPlugins();

interface Props {
  members: MemberType[];
}

const PixiTree = ({ members }: Props) => {
  return (
    <PixiTreeProvider>
      <PixiTreeContent members={members} />
    </PixiTreeProvider>
  );
};

export default PixiTree;
