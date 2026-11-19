import { useState } from "react";
import { twMerge } from "tailwind-merge";
import type { AccessGrant } from "@/api/access";
import { COLOR_CLASSES } from "@/constants/colorClasses";
import ConfirmDeleteControl from "@/components/sidebar/form/ConfirmDeleteControl";
import { useT } from "@/i18n/useT";
import type { AccentColor } from "@/types";
import { abbreviateName, useDisplayName } from "@/utils/displayName";
import { useIsMobileScreen } from "@/hooks/membersTree/useTreeDirection";
import PersonAvatar from "./PersonAvatar";

interface Props {
  grant: AccessGrant;
  isSelf: boolean;
  busy: boolean;
  error?: string;
  onRemove: () => Promise<void>;
  color: AccentColor;
}

const AccessRow = ({ grant, isSelf, busy, error, onRemove, color }: Props) => {
  const t = useT().access;
  const dn = useDisplayName();
  const [confirming, setConfirming] = useState(false);
  const name = dn(grant.name);
  const mobile = useIsMobileScreen();
  const locked = isSelf || grant.level === "ADMIN";
  const colorClasses = COLOR_CLASSES[color];

  return (
    <li className="relative py-2">
      <div className="flex items-center gap-3">
        <PersonAvatar
          kind="member"
          id={grant.memberId}
          name={grant.name}
          photo={grant.photo}
          color={color}
        />
        <span className="flex min-w-0 flex-1 items-center gap-1.5">
          <span className="truncate text-sm font-semibold text-foreground">
            {mobile ? abbreviateName(name) : name}
          </span>
          {isSelf && (
            <span
              className={twMerge(
                "shrink-0 rounded-full px-2 py-0.5 text-[11px] font-semibold leading-tight",
                colorClasses.softBg,
                colorClasses.text,
              )}
            >
              {t.you}
            </span>
          )}
        </span>
        <span
          className={twMerge(
            "shrink-0 rounded-full px-2 py-0.5 text-[11px] font-semibold leading-tight",
            grant.level === "ADMIN"
              ? twMerge(colorClasses.accentBg, "text-white")
              : twMerge(colorClasses.softBg, colorClasses.text),
          )}
        >
          {grant.level === "ADMIN" ? t.admin : t.editor}
        </span>
        {locked ? (
          <span className="h-11 w-11 shrink-0" aria-hidden />
        ) : (
          <ConfirmDeleteControl
            label={t.remove}
            message={t.removeMessage(name)}
            isConfirming={confirming}
            isSubmitting={busy}
            onAsk={setConfirming}
            onConfirm={() => onRemove().finally(() => setConfirming(false))}
          />
        )}
      </div>
      {error && <p className="mt-1 pl-[52px] text-xs text-red-500">{error}</p>}
    </li>
  );
};

export default AccessRow;
