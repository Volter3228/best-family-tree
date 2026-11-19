import { useState } from "react";
import {
  ArrowRightIcon,
  CheckIcon,
  XMarkIcon,
} from "@heroicons/react/16/solid";
import { twMerge } from "tailwind-merge";
import type { SuggestionDto } from "@/api/suggestionReview";
import Spinner from "@/components/ui/Spinner";
import { useLocale, useT } from "@/i18n/useT";
import type { MemberStatus } from "@/types";
import { getStatusLabel } from "@/utils";
import { useDisplayName } from "@/utils/displayName";
import CollapseOut from "./CollapseOut";
import SuggestionPhotos from "./SuggestionPhotos";
import { fieldLabelKey, formatDay } from "./suggestionFormat";

interface Props {
  suggestion: SuggestionDto;
  leaving: boolean;
  busy: boolean;
  error?: string;
  onApprove: (force: boolean) => void;
  onReject: () => void;
}

const ICON_BUTTON =
  "flex h-9 w-9 shrink-0 touch-manipulation items-center justify-center rounded-full transition-colors focus:outline-none focus-visible:ring-2 disabled:cursor-not-allowed disabled:opacity-40";

const SuggestionRow = ({
  suggestion: s,
  leaving,
  busy,
  error,
  onApprove,
  onReject,
}: Props) => {
  const t = useT().review;
  const tMember = useT().memberForm;
  const locale = useLocale();
  const dn = useDisplayName();
  const [confirming, setConfirming] = useState(false);
  const isMember = s.target.kind === "member";

  const label = (() => {
    switch (s.field) {
      case "birthday":
        return tMember.birthday;
      case "joinedAt":
        return tMember.joinedAt;
      case "status":
        return tMember.status;
      case "mentorId":
        return tMember.mentor;
      case "phone:remove":
        return t.fields.phoneRemove;
      case "phone:add":
      case "phone:replace":
        return tMember.phoneNumber;
      default:
        return (
          (t.fields as Record<string, string>)[
            fieldLabelKey(s.field, s.target.kind)
          ] ?? t.fields.unknown
        );
    }
  })();

  const show = (raw: string | null, named: string | null | undefined) => {
    if (named) return s.field === "mentorId" ? dn(named) : named;
    if (!raw) return null;
    switch (s.field) {
      case "birthday":
      case "joinedAt":
        return formatDay(raw, locale);
      case "status":
        return getStatusLabel(raw as MemberStatus, locale);
      case "isOngoing":
        return raw === "true" ? t.yes : t.no;
      case "name":
        return isMember ? dn(raw) : raw;
      default:
        return raw;
    }
  };

  const empty = <span className="text-foreground/40">—</span>;
  const current = show(
    s.currentValue ?? s.fromValue,
    s.currentLabel ?? s.fromLabel,
  );
  const next = show(s.toValue, s.toLabel);

  const approve = () => {
    if (s.stale && !confirming) {
      setConfirming(true);
      return;
    }
    setConfirming(false);
    onApprove(s.stale);
  };

  return (
    <CollapseOut leaving={leaving}>
      <div className="flex items-start gap-2 py-2">
        <div className="min-w-0 flex-1">
          <p className="text-xs text-foreground/60">{label}</p>
          {s.field === "photo" ? (
            <SuggestionPhotos
              suggestionId={s.id}
              kind={s.target.kind}
              name={s.target.name}
              current={s.currentValue ?? s.fromValue}
              next={s.toValue}
            />
          ) : (
            <p className="mt-0.5 flex flex-wrap items-center gap-x-1.5 text-sm [overflow-wrap:anywhere]">
              <span className="text-foreground/60">{current ?? empty}</span>
              <ArrowRightIcon className="h-3.5 w-3.5 shrink-0 text-foreground/40" />
              <span className="font-medium text-foreground">
                {next ?? empty}
              </span>
            </p>
          )}
          {s.stale && (
            <p className="mt-0.5 text-xs text-amber-600 dark:text-amber-400">
              {confirming ? t.staleConfirm : t.stale}
            </p>
          )}
          {error && <p className="mt-0.5 text-xs text-red-500">{error}</p>}
        </div>
        <span
          title={s.locked ? t.locked : undefined}
          className="flex shrink-0 gap-1"
        >
          <button
            type="button"
            onClick={approve}
            disabled={s.locked || busy}
            aria-label={confirming ? t.approveAnyway : t.approve}
            title={
              s.locked ? undefined : confirming ? t.approveAnyway : t.approve
            }
            className={twMerge(
              ICON_BUTTON,
              confirming
                ? "bg-amber-500 text-white hover:bg-amber-600 focus-visible:ring-amber-500/60"
                : "text-green-600 hover:bg-green-500/10 focus-visible:ring-green-500/60 dark:text-green-400",
            )}
          >
            {busy ? (
              <Spinner className="h-4 w-4 !text-current" />
            ) : (
              <CheckIcon className="h-5 w-5" />
            )}
          </button>
          <button
            type="button"
            onClick={onReject}
            disabled={s.locked || busy}
            aria-label={t.reject}
            title={s.locked ? undefined : t.reject}
            className={twMerge(
              ICON_BUTTON,
              "text-red-500 hover:bg-red-500/10 focus-visible:ring-red-500/60",
            )}
          >
            <XMarkIcon className="h-5 w-5" />
          </button>
        </span>
      </div>
    </CollapseOut>
  );
};

export default SuggestionRow;
