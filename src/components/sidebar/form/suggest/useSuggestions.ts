import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { ApiError } from "@/api/ApiError";
import type { PendingSuggestion, SuggestionChange } from "@/api/selfService";
import { useT } from "@/i18n/useT";

interface Options {
  targetId: string;
  fetchMine: (id: string) => Promise<PendingSuggestion[]>;
  // Runs once with the first loaded rows, to prefill the form with them.
  onFirstLoad?: (rows: PendingSuggestion[]) => void;
}

const PHONE_ROWS = ["phone:add", "phone:remove", "phone:replace"];

// Pending suggestions of the signed-in user for one record, plus a runner
// that tracks the submit state and maps server errors to friendly messages.
export const useSuggestions = ({
  targetId,
  fetchMine,
  onFirstLoad,
}: Options) => {
  const t = useT().suggest;
  const [pending, setPending] = useState<PendingSuggestion[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const onFirstLoadRef = useRef(onFirstLoad);
  useEffect(() => {
    onFirstLoadRef.current = onFirstLoad;
  });

  useEffect(() => {
    let stale = false;
    fetchMine(targetId)
      .then((rows) => {
        if (stale) return;
        setPending(rows);
        onFirstLoadRef.current?.(rows);
      })
      .catch(() => undefined);
    return () => {
      stale = true;
    };
  }, [fetchMine, targetId]);

  const pendingFields = useMemo(
    () =>
      new Set(
        pending.map(({ field }) =>
          PHONE_ROWS.includes(field) ? "phoneNumbers" : field,
        ),
      ),
    [pending],
  );

  const run = useCallback(
    async (action: () => Promise<void>) => {
      setError(null);
      setIsSubmitting(true);
      try {
        await action();
        return true;
      } catch (err) {
        const code = err instanceof ApiError ? err.code : undefined;
        const known = code ? (t.errors as Record<string, string>)[code] : null;
        setError(known ?? (err instanceof Error ? err.message : null));
        return false;
      } finally {
        setIsSubmitting(false);
      }
    },
    [t],
  );

  return { pending, pendingFields, isSubmitting, error, run };
};

// A change already waiting for review with the same value is not sent again.
export const withoutPending = (
  changes: SuggestionChange[],
  pending: PendingSuggestion[],
) =>
  changes.filter(({ field, value }) =>
    field === "phoneNumbers"
      ? !pending.some(
          (row) =>
            (row.field === "phone:add" || row.field === "phone:replace") &&
            value !== null &&
            (JSON.parse(value) as string[])[0] === row.toValue,
        )
      : !pending.some((row) => row.field === field && row.toValue === value),
  );
