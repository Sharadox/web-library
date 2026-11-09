import type { LocaleRedirect } from "@sharadox/web-library/internationalization/locale-redirect/type";

/**
 * Redirects for next.config `redirects()`: `/` goes to the visitor's language when their browser asks for one of
 * the published locales first (Accept-Language), otherwise to `/<defaultLocale>`.
 */
export function localeRedirects(locales: readonly string[], defaultLocale: string): LocaleRedirect[] {
  const preferred: LocaleRedirect[] = locales
    .filter((locale) => locale !== defaultLocale)
    .map((locale) => ({
      source: "/",
      has: [{ type: "header", key: "accept-language", value: `${locale}.*` }],
      destination: `/${locale}`,
      permanent: false,
    }));
  return [...preferred, { source: "/", destination: `/${defaultLocale}`, permanent: false }];
}
