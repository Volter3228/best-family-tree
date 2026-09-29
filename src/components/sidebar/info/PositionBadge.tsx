import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { useTheme } from "@/context/ThemeContext";
import { getPositionYearLabel } from "@/utils";
import type { MemberPosition } from "@/types";

interface Props {
  position: MemberPosition;
}

const PositionBadge = ({ position }: Props) => {
  const { role, team } = position;
  const { themeId } = useTheme();
  const eventType = team?.eventType;
  const isDarkTheme = themeId === "dark";
  const borderColor = eventType?.color || "var(--accent)";
  const bgColor = eventType?.color
    ? `color-mix(in srgb, ${eventType.color} ${isDarkTheme ? 28 : 14}%, ${isDarkTheme ? "var(--surface)" : "white"
    })`
    : "var(--accent-light)";
  // Mix the accent toward the theme foreground so text stays readable on the
  // tinted background for any accent color (e.g. near-black or near-white).
  const textColor = eventType?.color
    ? `color-mix(in srgb, ${borderColor} 30%, var(--foreground))`
    : borderColor;

  const yearLabel = getPositionYearLabel(position);
  const teamLabel = team?.name ? team.name : eventType?.name || "";
  const teamWords = teamLabel.split(/\s+/).filter(Boolean);
  const teamPrefix = teamWords.slice(0, -1).join(" ");
  const lastTeamWord = teamWords.at(-1);
  const details = [role.name, yearLabel].filter(Boolean).join(" ");

  return (
    <span
      className={twMerge(
        "inline-flex items-center gap-1 whitespace-nowrap rounded-full px-2.5 py-1 text-xs font-medium",
        "border transition-all duration-200",
      )}
      style={{
        backgroundColor: bgColor,
        borderColor,
        color: textColor,
      }}
    >
      {teamPrefix && <span>{teamPrefix}</span>}
      {lastTeamWord && (
        <span className="inline-flex items-center gap-1 whitespace-nowrap">
          {lastTeamWord}
          {eventType?.iconUrl && (
            <Image
              src={eventType.iconUrl}
              alt={eventType.name}
              width={14}
              height={14}
              className="shrink-0 rounded-full"
            />
          )}
        </span>
      )}
      {details && <span>{details}</span>}
    </span>
  );
};

export default PositionBadge;
