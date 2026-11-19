import { useState } from "react";
import { StarIcon as StarOutline } from "@heroicons/react/24/outline";
import { StarIcon as StarSolid } from "@heroicons/react/24/solid";
import { twMerge } from "tailwind-merge";
import type { SessionInfo } from "@/api/auth";
import { refreshProfile, setFeaturedPosition } from "@/api/profile";
import { useT } from "@/i18n/useT";
import { BriefcaseIcon } from "@heroicons/react/24/outline";
import InfoBubble from "@/components/ui/InfoBubble";
import TypeIconTile from "@/components/sidebar/info/TypeIconTile";
import { formatYearRange } from "@/utils/positions";

type Years = { startYear: number | null; endYear: number | null };
const lastYear = (p: Years) => p.endYear ?? p.startYear ?? -Infinity;
// Latest activity first; positions without years go last.
const byLatestYears = (a: Years, b: Years) =>
  lastYear(b) - lastYear(a) ||
  (b.startYear ?? -Infinity) - (a.startYear ?? -Infinity);

type SessionMember = NonNullable<SessionInfo["member"]>;

interface Props {
  member: SessionMember;
  // Demo sessions can't write, so the star toggles are hidden.
  readOnly: boolean;
}

const AccountRoles = ({ member, readOnly }: Props) => {
  const t = useT().account;
  const [pending, setPending] = useState<string | null | undefined>();
  const [failed, setFailed] = useState(false);
  const featured = pending !== undefined ? pending : member.featuredPositionId;

  if (member.positions.length === 0) return null;

  const toggle = async (id: string) => {
    setPending(featured === id ? null : id);
    setFailed(false);
    try {
      await setFeaturedPosition(featured === id ? null : id);
      await refreshProfile(member.id);
    } catch {
      setFailed(true);
    } finally {
      setPending(undefined);
    }
  };

  return (
    <div className="px-3 py-2">
      <p className="mb-1 flex items-center gap-1 text-xs font-medium text-foreground/60">
        {t.roles}
        {!readOnly && (
          <InfoBubble className="[&_svg]:h-3.5 [&_svg]:w-3.5">
            {t.featuredInfo}
          </InfoBubble>
        )}
      </p>
      <ul
        className="-mr-2 flex max-h-[13.5rem] flex-col overflow-y-auto pr-3"
        style={
          { "--scroll-color": "var(--accent-blue)" } as React.CSSProperties
        }
      >
        {[...member.positions].sort(byLatestYears).map((p) => {
          const on = featured === p.id;

          const place = p.teamName ?? p.organization;
          const label = on ? t.unfeatureRole : t.featureRole;
          return (
            <li key={p.id} className="flex items-center gap-2 py-1">
              <TypeIconTile
                iconUrl={p.teamTypeIconUrl}
                color={p.teamTypeColor}
                className="h-7 w-7 rounded-full"
                fallback={
                  <BriefcaseIcon className="h-4 w-4 text-accent-blue" />
                }
              />
              <span className="min-w-0 flex-1 text-sm leading-tight">
                <span className="block truncate font-medium">{p.roleName}</span>
                <span className="block truncate text-xs text-foreground/60">
                  {[
                    place,
                    formatYearRange({ start: p.startYear, end: p.endYear }),
                  ]
                    .filter(Boolean)
                    .join(" · ")}
                </span>
              </span>
              {!readOnly && (
                <button
                  type="button"
                  title={label}
                  aria-label={label}
                  aria-pressed={on}
                  onClick={() => void toggle(p.id)}
                  className={twMerge(
                    "shrink-0 rounded-full p-1 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-blue/60",
                    on
                      ? "text-accent-blue"
                      : "text-foreground/40 hover:text-accent-blue",
                  )}
                >
                  {on ? (
                    <StarSolid className="h-5 w-5" />
                  ) : (
                    <StarOutline className="h-5 w-5" />
                  )}
                </button>
              )}
            </li>
          );
        })}
      </ul>
      {failed && <p className="mt-1 text-xs text-red-500">{t.saveFailed}</p>}
    </div>
  );
};

export default AccountRoles;
