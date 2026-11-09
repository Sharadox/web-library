/** Language tags for `<html lang>` and structured data's `inLanguage`, where the region matters. */
const LANGUAGE_TAG: Record<string, string> = { pt: "pt-PT", en: "en" };
/** Open Graph locales (`og:locale`). */
const OPEN_GRAPH_LOCALE: Record<string, string> = { pt: "pt_PT", en: "en_GB", es: "es_ES", fr: "fr_FR", de: "de_DE" };

/** Narrows an untrusted value (a route segment, a form field) to one of the published locales. */
export function isLocale<Locale extends string>(value: string, locales: readonly Locale[]): value is Locale {
  return (locales as readonly string[]).includes(value);
}

/** The BCP 47 tag for `<html lang>`: European Portuguese is `pt-PT`; other languages keep their code. */
export function languageTag(locale: string): string {
  return LANGUAGE_TAG[locale] ?? locale;
}

/** The Open Graph locale (`og:locale`), for example `pt_PT` or `en_GB`. */
export function openGraphLocale(locale: string): string {
  return OPEN_GRAPH_LOCALE[locale] ?? locale;
}
