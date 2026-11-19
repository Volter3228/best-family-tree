import { ArrowTopRightOnSquareIcon } from "@heroicons/react/16/solid";
import { twMerge } from "tailwind-merge";
import { COLOR_CLASSES } from "@/constants/colorClasses";
import { useLocale, useT } from "@/i18n/useT";
import type { AccentColor } from "@/types";
import { useDisplayName } from "@/utils/displayName";
import CollapseOut from "./CollapseOut";
import PersonAvatar from "./PersonAvatar";
import SuggestionRow from "./SuggestionRow";
import { formatSent, type SuggestionBatch } from "./suggestionFormat";

export type ReviewKind = "approve" | "reject";

interface Props {
  batch: SuggestionBatch;
  leaving: ReadonlySet<string>;
  busy: ReadonlySet<string>;
  errors: Readonly<Record<string, string>>;
  onAct: (id: string, kind: ReviewKind, force?: boolean) => void;
  onActAll: (batch: SuggestionBatch, kind: ReviewKind) => void;
  onOpen: () => void;
  color: AccentColor;
}

const SuggestionBatchCard = ({
  batch,
  leaving,
  busy,
  errors,
  onAct,
  onActAll,
  onOpen,
  color,
}: Props) => {
  const t = useT().review;
  const locale = useLocale();
  const dn = useDisplayName();
  const colorClasses = COLOR_CLASSES[color];
  const { target, author } = batch;
  const name = target.kind === "member" ? dn(target.name) : target.name;
  const authorName = author.name ? dn(author.name) : author.email;
  const rows = batch.items.filter((i) => !leaving.has(i.id));
  const bulkApprovable = rows.some((i) => !i.locked && !i.stale);
  const bulkRejectable = rows.some((i) => !i.locked);
  const anyBusy = batch.items.some((i) => busy.has(i.id));
  const sent = formatSent(batch.createdAt, locale, t.justNow);

  return (
    <CollapseOut leaving={rows.length === 0}>
      <section className="mb-3 rounded-2xl bg-foreground/[0.03] p-3 ring-1 ring-foreground/10">
        <div className="flex items-center gap-3">
          <PersonAvatar
            kind={target.kind}
            id={target.id}
            name={target.name}
            photo={target.photo}
            color={color}
          />
          <div className="flex min-w-0 flex-1 flex-col">
            <button
              type="button"
              onClick={onOpen}
              className="touch-manipulation self-start truncate text-left text-sm font-semibold text-foreground hover:underline focus:outline-none focus-visible:underline"
            >
              {name}
            </button>
            <span className="truncate text-xs text-foreground/60">
              {t.by(authorName || t.unknownAuthor)}
              {sent && ` · ${sent}`}
            </span>
          </div>
          <button
            type="button"
            onClick={onOpen}
            aria-label={t.openAria(name)}
            className={twMerge(
              "flex h-8 shrink-0 touch-manipulation items-center gap-1 rounded-full px-3 text-xs font-semibold transition-colors focus:outline-none focus-visible:ring-2",
              colorClasses.text,
              colorClasses.softBg,
              colorClasses.focusVisibleRing,
            )}
          >
            {t.open}
            <ArrowTopRightOnSquareIcon className="h-3.5 w-3.5" />
          </button>
        </div>

        <div className="mt-1 divide-y divide-foreground/10">
          {batch.items.map((item) => (
            <SuggestionRow
              key={item.id}
              suggestion={item}
              leaving={leaving.has(item.id)}
              busy={busy.has(item.id)}
              error={errors[item.id]}
              onApprove={(force) => onAct(item.id, "approve", force)}
              onReject={() => onAct(item.id, "reject")}
            />
          ))}
        </div>

        <CollapseOut leaving={rows.length < 2}>
          <div className="mt-2 flex gap-2">
            <button
              type="button"
              onClick={() => onActAll(batch, "approve")}
              disabled={!bulkApprovable || anyBusy}
              className={twMerge(
                "h-9 flex-1 touch-manipulation rounded-full text-sm font-semibold text-white shadow-sm transition-[box-shadow,scale] hover:shadow-md active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-surface disabled:opacity-50",
                colorClasses.accentBg,
                colorClasses.focusVisibleRing,
              )}
            >
              {t.approveAll}
            </button>
            <button
              type="button"
              onClick={() => onActAll(batch, "reject")}
              disabled={!bulkRejectable || anyBusy}
              className="h-9 flex-1 touch-manipulation rounded-full bg-foreground/5 text-sm font-semibold text-foreground/80 transition-colors hover:bg-foreground/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-foreground/30 disabled:opacity-50"
            >
              {t.rejectAll}
            </button>
          </div>
        </CollapseOut>
      </section>
    </CollapseOut>
  );
};

export default SuggestionBatchCard;
