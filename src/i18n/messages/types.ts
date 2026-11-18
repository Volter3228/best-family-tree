import type { uk } from "./uk";

type Widen<T> = T extends string
  ? string
  : T extends (...args: infer A) => infer R
    ? (...args: A) => Widen<R>
    : T extends object
      ? { -readonly [K in keyof T]: Widen<T[K]> }
      : T;

export type Messages = Widen<typeof uk>;
