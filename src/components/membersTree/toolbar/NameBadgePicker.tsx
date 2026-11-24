import { useState } from "react";
import { NoSymbolIcon } from "@heroicons/react/24/outline";
import { twMerge } from "tailwind-merge";
import type { SessionInfo } from "@/api/auth";
import { refreshProfile, setNameBadge } from "@/api/profile";
import { useT } from "@/i18n/useT";
import TypeIconTile from "@/components/sidebar/info/TypeIconTile";
import { DefaultBadgeIcon } from "@/components/sidebar/info/NameBadge";

type SessionMember = NonNullable<SessionInfo["member"]>;

interface Props {
  member: SessionMember;
}

const SIZE = "h-8 w-8 shrink-0 rounded-full";

const NameBadgePicker = ({ member }: Props) => {
  const t = useT().account;
  // A team id, "LION" / "BEST" for the default icons, or null for none.
  const [pending, setPending] = useState<string | null | undefined>();
  const [failed, setFailed] = useState(false);
  const selected =
    pending !== undefined
      ? pending
      : (member.nameBadgeIcon ?? member.nameBadgeTeamId);

  // One option per team type; its value is the first team of that type.
  const types = new Map<
    string,
    { teamId: string; name: string; color: string | null; teamIds: string[] }
  >();
  for (const p of member.positions) {
    const icon = p.teamTypeIconUrl;
    if (!p.teamId || !p.teamName || !icon) continue;
    const entry = types.get(icon);
    if (entry) entry.teamIds.push(p.teamId);
    else {
      types.set(icon, {
        teamId: p.teamId,
        name: p.teamName,
        color: p.teamTypeColor,
        teamIds: [p.teamId],
      });
    }
  }

  const choose = async (value: string | null) => {
    if (value === selected) return;
    setPending(value);
    setFailed(false);
    try {
      await setNameBadge(
        value === null
          ? null
          : value === "LION" || value === "BEST"
            ? { icon: value }
            : { teamId: value },
      );
      await refreshProfile(member.id);
    } catch {
      setFailed(true);
    } finally {
      setPending(undefined);
    }
  };

  const ring = (on: boolean) =>
    twMerge(
      SIZE,
      "overflow-hidden transition-shadow focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-blue/60",
      on
        ? "ring-2 ring-accent-blue ring-offset-2 ring-offset-surface"
        : "ring-1 ring-foreground/10 hover:ring-foreground/30",
    );

  return (
    <div className="px-3 py-2">
      <p className="mb-1.5 text-xs font-medium text-foreground/60">{t.badge}</p>
      <div className="flex flex-wrap items-center gap-2.5 p-1 -m-1">
        <button
          type="button"
          title={t.badgeNone}
          aria-label={t.badgeNone}
          aria-pressed={selected === null}
          onClick={() => void choose(null)}
          className={twMerge(
            ring(selected === null),
            "flex items-center justify-center bg-foreground/5 text-foreground/50",
          )}
        >
          <NoSymbolIcon className="h-4 w-4" />
        </button>
        {(["LION", "BEST"] as const).map((icon) => (
          <button
            key={icon}
            type="button"
            title={icon === "LION" ? t.badgeLion : t.badgeBest}
            aria-label={icon === "LION" ? t.badgeLion : t.badgeBest}
            aria-pressed={selected === icon}
            onClick={() => void choose(icon)}
            className={twMerge(
              ring(selected === icon),
              "flex items-center justify-center bg-foreground/5",
            )}
          >
            <DefaultBadgeIcon icon={icon} className="h-[70%] w-[70%]" />
          </button>
        ))}
        {[...types].map(([icon, type]) => {
          const on = !!selected && type.teamIds.includes(selected);
          return (
            <button
              key={icon}
              type="button"
              title={type.name}
              aria-label={type.name}
              aria-pressed={on}
              onClick={() => !on && void choose(type.teamId)}
              className={ring(on)}
            >
              <TypeIconTile
                iconUrl={icon}
                color={type.color}
                className="h-full w-full"
              />
            </button>
          );
        })}
      </div>
      {failed && <p className="mt-1 text-xs text-red-500">{t.saveFailed}</p>}
    </div>
  );
};

export default NameBadgePicker;
