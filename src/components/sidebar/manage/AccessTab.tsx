import { useEffect, useMemo, useState } from "react";
import {
  fetchGrants,
  removeGrant,
  setGrant,
  type AccessGrant,
} from "@/api/access";
import { ApiError } from "@/api/ApiError";
import { ComboboxInput } from "@/components/sidebar/form/inputs";
import Spinner from "@/components/ui/Spinner";
import { COLOR_CLASSES } from "@/constants/colorClasses";
import { useMembersList } from "@/hooks";
import { ActivityState } from "@/types";
import { useLocale, useT } from "@/i18n/useT";
import { useSessionStore } from "@/store/sessionStore";
import { useDisplayName } from "@/utils/displayName";
import { twMerge } from "tailwind-merge";
import AccessRow from "./AccessRow";
import ManageScrollArea from "./ManageScrollArea";
import { omit } from "./suggestionFormat";
import type { ManageTabProps } from "./types";

const AccessTab = ({ color }: ManageTabProps) => {
  const t = useT().access;
  const locale = useLocale();
  const dn = useDisplayName();
  const selfId = useSessionStore((s) => s.session?.memberId);
  const members = useMembersList();
  const colorClasses = COLOR_CLASSES[color];
  const [grants, setGrants] = useState<AccessGrant[] | null>(null);
  const [loadError, setLoadError] = useState(false);
  const [busyId, setBusyId] = useState<string | null>(null);
  const [rowErrors, setRowErrors] = useState<Record<string, string>>({});
  const [addError, setAddError] = useState<string | null>(null);
  const [pickedId, setPickedId] = useState("");
  const [pickerKey, setPickerKey] = useState(0);
  const [adding, setAdding] = useState(false);

  useEffect(() => {
    fetchGrants()
      .then(setGrants)
      .catch(() => setLoadError(true));
  }, []);

  const sorted = useMemo(
    () =>
      [...(grants ?? [])].sort((a, b) => {
        if (a.memberId === selfId) return -1;
        if (b.memberId === selfId) return 1;
        return dn(a.name).localeCompare(dn(b.name), locale);
      }),
    [grants, selfId, dn, locale],
  );

  const options = useMemo(() => {
    const granted = new Set((grants ?? []).map((g) => g.memberId));
    const active = (m: (typeof members)[number]) =>
      m.activityState === ActivityState.Active;
    return members
      .filter((m) => !granted.has(m.id))
      .sort((a, b) =>
        active(a) !== active(b)
          ? active(a)
            ? -1
            : 1
          : dn(a.name).localeCompare(dn(b.name), locale),
      )
      .map((m) => ({ text: dn(m.name), value: m.id }));
  }, [members, grants, dn, locale]);

  const describe = (error: unknown) => {
    const code = error instanceof ApiError ? error.code : undefined;
    const known = code ? (t.errors as Record<string, string>)[code] : undefined;
    return known ?? t.errors.generic;
  };

  const upsert = (grant: AccessGrant) =>
    setGrants((prev) => [
      ...(prev ?? []).filter((g) => g.memberId !== grant.memberId),
      grant,
    ]);

  const remove = async (memberId: string) => {
    setBusyId(memberId);
    setRowErrors((prev) => omit(prev, memberId));
    try {
      await removeGrant(memberId);
      setGrants((prev) => prev?.filter((g) => g.memberId !== memberId) ?? prev);
    } catch (error) {
      setRowErrors((prev) => ({ ...prev, [memberId]: describe(error) }));
    } finally {
      setBusyId(null);
    }
  };

  const add = async () => {
    if (!pickedId) return;
    setAdding(true);
    setAddError(null);
    try {
      upsert(await setGrant(pickedId, "EDITOR"));
      setPickedId("");
      setPickerKey((k) => k + 1);
    } catch (error) {
      setAddError(describe(error));
    } finally {
      setAdding(false);
    }
  };

  return (
    <ManageScrollArea color={color}>
      <p className="px-1 pb-3 text-xs text-foreground/60">{t.info}</p>

      <section className="flex flex-wrap items-center gap-2 rounded-2xl bg-foreground/[0.03] p-3 ring-1 ring-foreground/10">
        <div className="min-w-0 flex-[1_1_10rem]">
          <ComboboxInput
            key={pickerKey}
            name="access-member"
            placeholder={t.memberPlaceholder}
            options={options}
            allowCreate={false}
            onSelect={(value) => {
              setPickedId(value);
              setAddError(null);
            }}
            color={color}
          />
        </div>
        <button
          type="button"
          onClick={add}
          disabled={!pickedId || adding}
          className={twMerge(
            "flex h-10 shrink-0 touch-manipulation items-center justify-center gap-1.5 rounded-full px-5 text-sm font-semibold text-white shadow-sm transition-[box-shadow,scale] hover:shadow-md active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-surface disabled:opacity-50",
            colorClasses.accentBg,
            colorClasses.focusVisibleRing,
          )}
        >
          {adding && <Spinner className="h-4 w-4" />}
          {adding ? t.adding : t.add}
        </button>
        {addError && (
          <p className="basis-full text-xs text-red-500">{addError}</p>
        )}
      </section>

      {grants === null ? (
        loadError ? (
          <p className="px-2 py-6 text-center text-sm text-foreground/60">
            {t.loadFailed}
          </p>
        ) : (
          <div className="flex justify-center py-8 text-foreground/40">
            <Spinner className="h-5 w-5 !text-current" />
          </div>
        )
      ) : sorted.length === 0 ? (
        <p className="px-2 py-6 text-center text-sm text-foreground/60">
          {t.empty}
        </p>
      ) : (
        <ul className="mt-3 flex flex-col divide-y divide-foreground/10">
          {sorted.map((grant) => (
            <AccessRow
              key={grant.memberId}
              grant={grant}
              isSelf={grant.memberId === selfId}
              busy={busyId === grant.memberId}
              error={rowErrors[grant.memberId]}
              onRemove={() => remove(grant.memberId)}
              color={color}
            />
          ))}
        </ul>
      )}
    </ManageScrollArea>
  );
};

export default AccessTab;
