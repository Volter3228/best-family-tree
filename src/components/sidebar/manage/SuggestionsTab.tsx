import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import {
  approveSuggestion,
  fetchSuggestions,
  rejectSuggestion,
  type SuggestionDto,
} from "@/api/suggestionReview";
import { ApiError } from "@/api/ApiError";
import fetchMemberById from "@/api/fetchMemberById";
import { useMembersActions, useTeams } from "@/hooks";
import Spinner from "@/components/ui/Spinner";
import { useProfileStore } from "@/store/profileStore";
import { useT } from "@/i18n/useT";
import ManageScrollArea from "./ManageScrollArea";
import SuggestionBatchCard, { type ReviewKind } from "./SuggestionBatchCard";
import { groupByBatch, omit, type SuggestionBatch } from "./suggestionFormat";
import type { ManageTabProps } from "./types";

const LEAVE_MS = 300;

const SuggestionsTab = ({ refreshCount, color }: ManageTabProps) => {
  const t = useT().review;
  const { updateMember, getMentorsList } = useMembersActions();
  const [, , reloadTeams] = useTeams();
  const [items, setItems] = useState<SuggestionDto[] | null>(null);
  const [loadError, setLoadError] = useState(false);
  const [leaving, setLeaving] = useState<ReadonlySet<string>>(new Set());
  const [busy, setBusy] = useState<ReadonlySet<string>>(new Set());
  const [errors, setErrors] = useState<Record<string, string>>({});
  const mounted = useRef(true);

  useEffect(() => {
    mounted.current = true;
    return () => {
      mounted.current = false;
    };
  }, []);

  useEffect(() => {
    fetchSuggestions()
      .then(setItems)
      .catch(() => setLoadError(true));
  }, []);

  const batches = useMemo(() => groupByBatch(items ?? []), [items]);

  const setFlag = (
    set: React.Dispatch<React.SetStateAction<ReadonlySet<string>>>,
    id: string,
    on: boolean,
  ) =>
    set((prev) => {
      const next = new Set(prev);
      if (on) next.add(id);
      else next.delete(id);
      return next;
    });

  const dropRow = (id: string) => {
    setFlag(setLeaving, id, true);
    setTimeout(() => {
      if (!mounted.current) return;
      setItems((prev) => prev?.filter((i) => i.id !== id) ?? prev);
      setFlag(setLeaving, id, false);
    }, LEAVE_MS);
  };

  const run = useCallback(
    async (id: string, kind: ReviewKind, force: boolean) => {
      setFlag(setBusy, id, true);
      setErrors((prev) => omit(prev, id));
      try {
        if (kind === "approve") await approveSuggestion(id, force);
        else await rejectSuggestion(id);
        dropRow(id);
        return true;
      } catch (error) {
        const code = error instanceof ApiError ? error.code : undefined;
        if (code === "already_reviewed") dropRow(id);
        if (code === "suggestion_stale") {
          setItems(
            (prev) =>
              prev?.map((i) => (i.id === id ? { ...i, stale: true } : i)) ??
              prev,
          );
        }
        const known = code
          ? (t.errors as Record<string, string>)[code]
          : undefined;
        setErrors((prev) => ({ ...prev, [id]: known ?? t.errors.generic }));
        return false;
      } finally {
        setFlag(setBusy, id, false);
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [t],
  );

  // Only the approved records are refetched, and only once the rows have
  // folded away: a full tree reload mid-animation made the collapse stutter.
  const refreshApproved = useCallback(
    (approved: SuggestionDto[]) => {
      const memberIds = new Set<string>();
      let teams = false;
      let mentors = false;
      for (const item of approved) {
        if (item.target.kind === "team") teams = true;
        else memberIds.add(item.target.id);
        if (item.field === "name" || item.field === "status") mentors = true;
      }
      setTimeout(async () => {
        for (const id of memberIds) {
          const member = await fetchMemberById(id).catch(() => null);
          if (member) updateMember(member);
        }
        if (mentors) getMentorsList();
        if (teams) reloadTeams();
      }, LEAVE_MS + 50);
    },
    [updateMember, getMentorsList, reloadTeams],
  );

  const act = async (id: string, kind: ReviewKind, force = false) => {
    const item = items?.find((i) => i.id === id);
    const ok = await run(id, kind, force);
    if (ok && kind === "approve" && item) refreshApproved([item]);
    refreshCount();
  };

  const actAll = async (batch: SuggestionBatch, kind: ReviewKind) => {
    const approved: SuggestionDto[] = [];
    for (const item of batch.items) {
      if (item.locked || leaving.has(item.id)) continue;
      if (kind === "approve" && item.stale) continue;
      const ok = await run(item.id, kind, false);
      if (ok && kind === "approve") approved.push(item);
    }
    if (approved.length > 0) refreshApproved(approved);
    refreshCount();
  };

  return (
    <ManageScrollArea color={color}>
      {items === null ? (
        loadError ? (
          <p className="px-2 py-6 text-center text-sm text-foreground/60">
            {t.loadFailed}
          </p>
        ) : (
          <div className="flex justify-center py-8 text-foreground/40">
            <Spinner className="h-5 w-5 !text-current" />
          </div>
        )
      ) : batches.length === 0 ? (
        <p className="px-2 py-6 text-center text-sm text-foreground/60">
          {t.empty}
        </p>
      ) : (
        batches.map((batch) => (
          <SuggestionBatchCard
            key={batch.batchId}
            batch={batch}
            leaving={leaving}
            busy={busy}
            errors={errors}
            onAct={act}
            onActAll={actAll}
            onOpen={() => {
              const { kind, id } = batch.target;
              const profile = useProfileStore.getState();
              if (kind === "member") profile.requestOpen(id, "info");
              else profile.requestOpenTeam(id);
            }}
            color={color}
          />
        ))
      )}
    </ManageScrollArea>
  );
};

export default SuggestionsTab;
