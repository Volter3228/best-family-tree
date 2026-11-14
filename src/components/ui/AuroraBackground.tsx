"use client";

import { useRef } from "react";
import { useBakedAurora } from "@/hooks/ui/useBakedAurora";

const AuroraBackground = () => {
  const ref = useRef<HTMLDivElement>(null);
  useBakedAurora(ref);

  return (
    <div ref={ref} className="aurora-bg" aria-hidden="true">
      <div className="aurora-bloom aurora-bloom-1" />
      <div className="aurora-bloom aurora-bloom-2" />
      <div className="aurora-bloom aurora-bloom-3" />
      <div className="aurora-bloom aurora-bloom-4" />
      <div className="aurora-bloom aurora-bloom-5" />
      <div className="aurora-bloom aurora-bloom-6" />
    </div>
  );
};

export default AuroraBackground;
