"use client";

import dynamic from "next/dynamic";
import Spinner from "@/components/utils/Spinner";

const PixiTreeLoader = dynamic(() => import("@/components/pixiTree/PixiTree"), {
  ssr: false,
  loading: () => (
    <div className="fixed inset-0 flex items-center justify-center">
      <Spinner className="text-fuchsia-400 md:group-hover:text-purple-800 h-16 w-16" />
    </div>
  ),
});

export default PixiTreeLoader;
