import type { LocalizedSitemapOptions, SitemapEntry } from "@sharadox/web-library/search-engine/sitemap/type";

/** A sitemap with one entry per locale (`/<locale>`), each listing every language version as an alternate. */
export function localizedSitemap({
  url,
  locales,
  primaryLocale = locales[0],
  otherPriority = 1,
  changeFrequency = "monthly",
  lastModified = new Date(),
}: LocalizedSitemapOptions): SitemapEntry[] {
  const languages = Object.fromEntries(locales.map((locale) => [locale, `${url}/${locale}`]));
  return locales.map((locale) => ({
    url: `${url}/${locale}`,
    lastModified,
    changeFrequency,
    priority: locale === primaryLocale ? 1 : otherPriority,
    alternates: { languages },
  }));
}
