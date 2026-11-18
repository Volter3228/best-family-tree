import type { Locale } from "../locale";
import { en } from "./en";
import type { Messages } from "./types";
import { uk } from "./uk";

export type { Messages };
export const messages: Record<Locale, Messages> = { uk, en };
