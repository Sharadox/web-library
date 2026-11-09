import type { Translated } from "@sharadox/web-library/internationalization/locale/type";

/** Picks the copy for a locale. */
export function translate<Locale extends string>(value: Translated<Locale>, locale: NoInfer<Locale>): string {
  return value[locale];
}
