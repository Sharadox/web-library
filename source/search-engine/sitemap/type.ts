export interface LocalizedSitemapOptions {
  /** The site's public url without a trailing slash, for example "https://sharadox.com". */
  url: string;
  locales: readonly string[];
  /** Gets priority 1; the other locales get `otherPriority`. Defaults to the first locale. */
  primaryLocale?: string;
  otherPriority?: number;
  changeFrequency?: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
  /** Defaults to now. */
  lastModified?: Date;
}

/** One sitemap entry, in the shape Next.js's `sitemap()` returns. */
export interface SitemapEntry {
  url: string;
  lastModified: Date;
  changeFrequency: NonNullable<LocalizedSitemapOptions["changeFrequency"]>;
  priority: number;
  alternates: { languages: Record<string, string> };
}
