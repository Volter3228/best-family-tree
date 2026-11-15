import { twMerge } from "tailwind-merge";
import type { RecruitmentSeason } from "@/types";
import MapleLeafIcon from "./MapleLeafIcon";
import FlowerIcon from "./FlowerIcon";

interface Props {
  season: RecruitmentSeason;
  className?: string;
}

interface Placement {
  left: string;
  top: string;
  size: number;
  rotate: number;
  opacity: number;
}

// Hand-placed, so the cover stays calm instead of reading as a pattern.
const PLACEMENTS: Placement[] = [
  { left: "6%", top: "44%", size: 34, rotate: -20, opacity: 0.28 },
  { left: "20%", top: "14%", size: 18, rotate: 35, opacity: 0.2 },
  { left: "34%", top: "52%", size: 22, rotate: 12, opacity: 0.16 },
  { left: "60%", top: "36%", size: 14, rotate: -50, opacity: 0.2 },
  { left: "74%", top: "58%", size: 30, rotate: 28, opacity: 0.22 },
  { left: "84%", top: "20%", size: 24, rotate: -12, opacity: 0.26 },
  { left: "92%", top: "62%", size: 16, rotate: 60, opacity: 0.16 },
  { left: "13%", top: "70%", size: 16, rotate: -35, opacity: 0.18 },
  { left: "47%", top: "18%", size: 26, rotate: 22, opacity: 0.2 },
  { left: "67%", top: "74%", size: 14, rotate: -8, opacity: 0.16 },
];

// Scattered blossoms (spring) or maple leaves (autumn) in the inherited
// (member's) colour: the shape tells the season, the colour the member.
const SeasonMotif = ({ season, className }: Props) => {
  const Icon = season === "spring" ? FlowerIcon : MapleLeafIcon;

  return (
    <div
      aria-hidden
      className={twMerge("pointer-events-none absolute inset-0", className)}
    >
      {PLACEMENTS.map((p) => (
        <span
          key={`${p.left}-${p.top}`}
          className="absolute block"
          style={{
            left: p.left,
            top: p.top,
            width: p.size,
            height: p.size,
            opacity: p.opacity,
            transform: `rotate(${p.rotate}deg)`,
          }}
        >
          <Icon className="h-full w-full" />
        </span>
      ))}
    </div>
  );
};

export default SeasonMotif;
