import { useCallback, useEffect, useSyncExternalStore } from "react";
import { fetchEventTypes, fetchRoles, fetchTeams } from "@/api";
import type { EventType, Role, Team } from "@/types";

const EMPTY: never[] = [];

// Lazily cache shared reference data in one external store per resource.
const createMetaStore = <T>(fetcher: () => Promise<T[]>) => {
  let data: T[] | null = null;
  let promise: Promise<void> | null = null;
  const listeners = new Set<() => void>();

  const notify = () => listeners.forEach((listener) => listener());

  const run = (force: boolean) => {
    if (promise || (!force && data !== null)) return;
    promise = fetcher()
      .then((result) => {
        data = result;
      })
      .catch(console.error)
      .finally(() => {
        promise = null;
        notify();
      });
  };

  return {
    subscribe: (listener: () => void) => {
      listeners.add(listener);
      return () => {
        listeners.delete(listener);
      };
    },
    getSnapshot: () => data,
    load: () => run(false),
    // Refetch while keeping stale data until the new result arrives.
    reload: () => run(true),
    set: (value: T[]) => {
      data = value;
      notify();
    },
  };
};

const eventTypesStore = createMetaStore<EventType>(fetchEventTypes);
const rolesStore = createMetaStore<Role>(fetchRoles);
const teamsStore = createMetaStore<Team>(() => fetchTeams());

// Subscribe components to the cached list and expose a shared updater.
const useMetaStore = <T>(
  store: ReturnType<typeof createMetaStore<T>>,
): [T[], (value: T[]) => void, () => void] => {
  useEffect(() => {
    store.load();
  }, [store]);
  const value = useSyncExternalStore(
    store.subscribe,
    store.getSnapshot,
    () => null,
  );
  const setValue = useCallback((next: T[]) => store.set(next), [store]);
  return [value ?? EMPTY, setValue, store.reload];
};

export const useEventTypes = () => useMetaStore(eventTypesStore);
export const useRoles = () => useMetaStore(rolesStore);
export const useTeams = () => useMetaStore(teamsStore);
