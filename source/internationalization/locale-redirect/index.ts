import { LOCALE_COOKIE } from "@sharadox/web-library/internationalization/locale-preference";
import type { LocaleRedirect } from "@sharadox/web-library/internationalization/locale-redirect/type";

/**
 * Redirects for next.config `redirects()`. `/` goes to, in order: the language the visitor picked before (the
 * `locale` cookie set by `rememberLocale`), the language their browser asks for first (Accept-Language) when it is
 * published, and otherwise `/<defaultLocale>`.
 */
export function localeRedirects(
  locales: readonly string[],
  defaultLocale: string,
  cookie: string = LOCALE_COOKIE,
): LocaleRedirect[] {
  const remembered: LocaleRedirect[] = locales.map((locale) => ({
    source: "/",
    has: [{ type: "cookie", key: cookie, value: locale }],
    destination: `/${locale}`,
    permanent: false,
  }));
  const preferred: LocaleRedirect[] = locales
    .filter((locale) => locale !== defaultLocale)
    .map((locale) => ({
      source: "/",
      has: [{ type: "header", key: "accept-language", value: `${locale}.*` }],
      destination: `/${locale}`,
      permanent: false,
    }));
  return [...remembered, ...preferred, { source: "/", destination: `/${defaultLocale}`, permanent: false }];
}
