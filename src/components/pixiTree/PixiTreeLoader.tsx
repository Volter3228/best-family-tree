"use client";

import dynamic from "next/dynamic";
import Spinner from "@/components/utils/Spinner";

const PixiTreeLoader = dynamic(() => import("@/components/pixiTree/PixiTree"), {
  ssr: false,
  loading: () => (
    <Spinner className="text-fuchsia-400 md:group-hover:text-purple-800" />
  ),
});

export default PixiTreeLoader;
