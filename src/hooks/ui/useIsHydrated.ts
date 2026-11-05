import { useSyncExternalStore } from "react";

const noopSubscribe = () => () => {};

/** `false` during hydration, `true` afterwards. Lets client-only state wait for real values. */
export const useIsHydrated = (): boolean =>
  useSyncExternalStore(
    noopSubscribe,
    () => true,
    () => false,
  );
