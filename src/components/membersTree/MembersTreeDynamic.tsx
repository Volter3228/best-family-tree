"use client";

import dynamic from "next/dynamic";
import Spinner from "@/components/ui/Spinner";

const MembersTreeDynamic = dynamic(
  () => import("@/components/membersTree/MembersTree"),
  {
    ssr: false,
    loading: () => (
      <div className="fixed inset-0 flex items-center justify-center">
        <Spinner className="text-fuchsia-400 h-16 w-16" />
      </div>
    ),
  },
);

export default MembersTreeDynamic;
