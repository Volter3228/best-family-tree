import { useState } from "react";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { useTheme } from "@/context/ThemeContext";
import { useStackOnOverflow } from "@/hooks";
import type { MemberPosition } from "@/types";

interface Props {
  position: MemberPosition;
  // When set the badge becomes a button (e.g. jump to the team in team view).
  onClick?: () => void;
}

const PositionBadge = ({ position, onClick }: Props) => {
  const { role, team } = position;
  const { themeId } = useTheme();
  const [isHovered, setIsHovered] = useState(false);
  const teamType = team?.teamType;
  // Always show the team type's logo, never the team's own photo.
  const logoUrl = teamType?.iconUrl;
  const isDarkTheme = themeId === "dark";
  const isInteractive = !!onClick;
  const borderColor = teamType?.color || "var(--accent)";
  const tintPercent = (isDarkTheme ? 28 : 14) + (isInteractive && isHovered ? 16 : 0);
  const bgColor = teamType?.color
    ? `color-mix(in srgb, ${teamType.color} ${tintPercent}%, ${isDarkTheme ? "var(--surface)" : "white"
    })`
    : "var(--accent-light)";
  // Mix the accent toward the theme foreground so text stays readable on the
  // tinted background for any accent color (e.g. near-black or near-white).
  const textColor = teamType?.color
    ? `color-mix(in srgb, ${borderColor} 30%, var(--foreground))`
    : borderColor;

  // A standalone position shows its organisation instead of a team.
  const teamLabel = team?.name ?? position.organization ?? "";
  const teamWords = teamLabel.split(/\s+/).filter(Boolean);
  const teamPrefix = teamWords.slice(0, -1).join(" ");
  const lastTeamWord = teamWords.at(-1);
  const details = role.name;

  // One row when it fits; otherwise two rows (team + logo / role + years) that
  // only take as much width as the longer row needs.
  const { ref, stacked } = useStackOnOverflow(`${teamLabel}|${details}`);
  const Component: React.ElementType = isInteractive ? "button" : "span";

  return (
    <Component
      // A span or a button: both are plain HTMLElements for the measurement.
      ref={ref as React.RefObject<HTMLButtonElement>}
      type={isInteractive ? "button" : undefined}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      title={isInteractive ? "Показати в команді" : undefined}
      className={twMerge(
        "inline-flex min-w-0 max-w-full gap-x-1 px-2.5 py-1 text-left text-xs font-medium",
        "relative z-10 border transition-all duration-200",
        stacked
          ? "flex-col items-start gap-y-0.5 rounded-2xl"
          : "items-center whitespace-nowrap rounded-full",
        isInteractive &&
        "cursor-pointer hover:z-20 hover:-translate-y-px hover:shadow-md active:translate-y-0 active:shadow-sm",
      )}
      style={{
        backgroundColor: bgColor,
        borderColor,
        color: textColor,
      }}
    >
      <span className="inline-flex min-w-0 flex-wrap items-center gap-x-1">
        {teamPrefix && <span className="min-w-0">{teamPrefix}</span>}
        {lastTeamWord && (
          <span className="inline-flex shrink-0 items-center gap-1 whitespace-nowrap">
            {lastTeamWord}
            {logoUrl && (
              <Image
                src={logoUrl}
                alt={team?.name ?? ""}
                width={14}
                height={14}
                className="shrink-0 rounded-full"
              />
            )}
          </span>
        )}
      </span>
      {details && <span className="min-w-0">{details}</span>}
    </Component>
  );
};

export default PositionBadge;
