/** Cookie that remembers the language a visitor picked by hand; `localeRedirects` sends `/` to it. */
export const LOCALE_COOKIE = "locale";
const ONE_YEAR = 60 * 60 * 24 * 365;

/** Remembers a manual language choice for a year. Call it when the visitor switches language. */
export function rememberLocale(locale: string, cookie: string = LOCALE_COOKIE): void {
  const secure = location.protocol === "https:" ? "; secure" : "";
  document.cookie = `${cookie}=${encodeURIComponent(locale)}; path=/; max-age=${ONE_YEAR}; samesite=lax${secure}`;
}
