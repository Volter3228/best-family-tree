import { ArrowRightIcon } from "@heroicons/react/16/solid";
import { twMerge } from "tailwind-merge";
import PositionBadge from "@/components/sidebar/info/PositionBadge";
import { useRoles, useTeams, useTeamTypes } from "@/hooks";
import { useT } from "@/i18n/useT";
import {
  parsePositionValue,
  toBadgePosition,
  type BadgePosition,
} from "./positionSuggestion";

interface Props {
  field: string;
  current: string | null;
  next: string | null;
}

// Mixed with the theme colours: Tailwind's dark variant follows the OS, not
// the app theme.
const NEW_CHIP_STYLE = {
  color: "color-mix(in srgb, #10b981 60%, var(--foreground))",
  backgroundColor: "color-mix(in srgb, #10b981 16%, transparent)",
};

const NewChip = ({ children }: { children: string }) => (
  <span
    style={NEW_CHIP_STYLE}
    className="whitespace-nowrap rounded-full px-1.5 py-px text-[10px] font-semibold uppercase tracking-wide"
  >
    {children}
  </span>
);

const Badge = ({
  badge,
  removed = false,
}: {
  badge: BadgePosition;
  removed?: boolean;
}) => {
  const t = useT().review;
  // An existing team carries its period in its name; only a standalone
  // position or a team created on approval needs the years spelled out.
  const showYears = !!badge.years && (!badge.position.team || badge.teamIsNew);
  const chips = !removed && (badge.teamIsNew || badge.roleIsNew);
  return (
    <span className="inline-flex min-w-0 max-w-full flex-wrap items-center gap-x-1.5 gap-y-1">
      <span
        className={twMerge(
          "inline-flex min-w-0 max-w-full",
          removed && "opacity-60 [&_*]:line-through",
        )}
      >
        <PositionBadge position={badge.position} />
      </span>
      {(showYears || chips) && (
        <span className="inline-flex flex-wrap items-center gap-1.5">
          {showYears && (
            <span
              className={twMerge(
                "whitespace-nowrap text-xs text-foreground/60",
                removed && "line-through",
              )}
            >
              {badge.years}
            </span>
          )}
          {chips && badge.teamIsNew && <NewChip>{t.newTeam}</NewChip>}
          {chips && badge.roleIsNew && <NewChip>{t.newRole}</NewChip>}
        </span>
      )}
    </span>
  );
};

const useCatalog = () => {
  const [teams] = useTeams();
  const [teamTypes] = useTeamTypes();
  const [roles] = useRoles();
  return { teams, teamTypes, roles };
};

// The team type of the suggested position for the row label ("old → new" when
// an edit moves it to another type). The badge itself shows only its logo.
export const PositionTypeLabel = ({ field, current, next }: Props) => {
  const catalog = useCatalog();
  const typeOf = (raw: string | null) => {
    const value = parsePositionValue(raw);
    return value
      ? toBadgePosition(value, catalog).position.team?.teamType?.name
      : undefined;
  };
  const from = field === "position:add" ? undefined : typeOf(current);
  const to = field === "position:remove" ? undefined : typeOf(next);
  const text = from && to && from !== to ? `${from} → ${to}` : (to ?? from);
  if (!text) return null;
  return (
    <>
      {" · "}
      <span className="font-medium text-foreground/80">{text}</span>
    </>
  );
};

// A suggested position change, drawn with the same badges as the profile.
const SuggestionPositions = ({ field, current, next }: Props) => {
  const catalog = useCatalog();
  const from = parsePositionValue(current);
  const to = parsePositionValue(next);
  const fromBadge = from && toBadgePosition(from, catalog);
  const toBadge = to && toBadgePosition(to, catalog);

  // An edit shows the old badge, then "→ new" on the next line, so the arrow
  // never ends up stranded at a line end.
  return (
    <div className="mt-1 flex flex-col items-start gap-1">
      {field === "position:remove" && fromBadge && (
        <Badge badge={fromBadge} removed />
      )}
      {field === "position:replace" && fromBadge && (
        <span className="inline-flex min-w-0 max-w-full opacity-70">
          <Badge badge={fromBadge} />
        </span>
      )}
      {field !== "position:remove" && toBadge && (
        <span className="flex min-w-0 max-w-full items-center gap-1.5">
          {field === "position:replace" && (
            <ArrowRightIcon className="h-3.5 w-3.5 shrink-0 text-foreground/40" />
          )}
          <Badge badge={toBadge} />
        </span>
      )}
    </div>
  );
};

export default SuggestionPositions;
