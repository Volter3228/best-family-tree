import { useState } from "react";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { useTheme } from "@/context/ThemeContext";
import { useStackOnOverflow } from "@/hooks";
import type { MemberPosition } from "@/types";
import { useT } from "@/i18n/useT";
import MaskIcon from "@/components/ui/MaskIcon";

interface Props {
  position: MemberPosition;
  // When set the badge becomes a button (e.g. jump to the team in team view).
  onClick?: () => void;
  // The member's chosen role: larger, gradient border and a shimmer.
  featured?: boolean;
}

const PositionBadge = ({ position, onClick, featured = false }: Props) => {
  const t = useT().memberInfo;
  const { role, team } = position;
  const { themeId } = useTheme();
  const [isHovered, setIsHovered] = useState(false);
  const teamType = team?.teamType;
  // Always show the team type's logo, never the team's own photo.
  const logoUrl = teamType?.iconUrl;
  const isDarkTheme = themeId === "dark";
  const isInteractive = !!onClick;
  // Without a type colour the badge is drawn in the theme foreground (the glow
  // then contrasts with the background in both themes).
  const borderColor = teamType?.color || "var(--foreground)";
  const tintPercent =
    (isDarkTheme ? 28 : 14) +
    (featured ? 4 : 0) +
    (isInteractive && isHovered && !featured ? 16 : 0);
  const bgColor = teamType?.color
    ? `color-mix(in srgb, ${teamType.color} ${tintPercent}%, ${
        isDarkTheme ? "var(--surface)" : "white"
      })`
    : featured
      ? `color-mix(in srgb, var(--foreground) 8%, ${
          isDarkTheme ? "var(--surface)" : "white"
        })`
      : "transparent";
  // Mix the accent toward the theme foreground so text stays readable on the
  // tinted background for any accent color (e.g. near-black or near-white).
  const textColor = teamType?.color
    ? `color-mix(in srgb, ${borderColor} 30%, var(--foreground))`
    : borderColor;

  // Gradient rim: transparent border over a padding-box fill and a border-box
  // gradient.
  const rimEnd = `color-mix(in srgb, ${borderColor} 35%, ${
    isDarkTheme ? "var(--foreground)" : "white"
  })`;
  const featuredStyle = featured
    ? {
        borderColor: "transparent",
        borderWidth: 1.5,
        // Dark theme: a lighter glow colour plus an extra soft halo.
        "--featured-glow": isDarkTheme
          ? `color-mix(in srgb, ${borderColor} 75%, white)`
          : borderColor,
        filter: isDarkTheme
          ? `drop-shadow(0 0 5px color-mix(in srgb, ${borderColor} 45%, transparent))`
          : undefined,
        background: `linear-gradient(${bgColor}, ${bgColor}) padding-box, linear-gradient(135deg, ${borderColor}, ${rimEnd}) border-box`,
      }
    : undefined;

  // A standalone position shows its organisation instead of a team.
  const teamLabel = team ? team.name : (position.organization ?? "");
  const teamWords = teamLabel.split(/\s+/).filter(Boolean);
  const teamPrefix = teamWords.slice(0, -1).join(" ");
  const lastTeamWord = teamWords.at(-1);
  const details = role.name;

  // One row when it fits; otherwise two rows (team + logo / role + years) that
  // only take as much width as the longer row needs.
  const { ref, stacked: overflowing } = useStackOnOverflow(
    `${teamLabel}|${details}`,
  );
  // The featured badge sits beside the section heading: always one line.
  const stacked = overflowing && !featured;
  const Component: React.ElementType = isInteractive ? "button" : "span";

  return (
    <Component
      // A span or a button: both are plain HTMLElements for the measurement.
      ref={ref as React.RefObject<HTMLButtonElement>}
      type={isInteractive ? "button" : undefined}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      title={isInteractive ? t.showInTeam : undefined}
      className={twMerge(
        "inline-flex min-w-0 max-w-full gap-x-1 px-2.5 py-1 text-left text-xs font-medium",
        featured &&
          "featured-shimmer gap-x-1.5 px-3 py-1.5 text-sm font-semibold",
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
        ...featuredStyle,
      }}
    >
      <span
        className={twMerge(
          "inline-flex min-w-0 flex-wrap items-center gap-x-1",
          featured && "flex-nowrap",
        )}
      >
        {teamPrefix && <span className="min-w-0">{teamPrefix}</span>}
        {lastTeamWord && (
          <span className="inline-flex shrink-0 items-center gap-1 whitespace-nowrap">
            {lastTeamWord}
            {logoUrl ? (
              <Image
                src={logoUrl}
                alt={team ? team.name : ""}
                width={featured ? 16 : 14}
                height={featured ? 16 : 14}
                className="shrink-0 rounded-full"
              />
            ) : (
              team && (
                // Fallback mark: the BEST logo as a silhouette in the badge's
                // text colour (theme foreground when the type has no colour).
                <MaskIcon
                  src="/images/best-logo.png"
                  className={featured ? "h-4 w-4" : "h-3.5 w-3.5"}
                />
              )
            )}
          </span>
        )}
      </span>
      {details && <span className="min-w-0">{details}</span>}
    </Component>
  );
};

export default PositionBadge;
