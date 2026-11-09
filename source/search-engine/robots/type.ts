export interface RobotsOptions {
  /** The site's public url without a trailing slash. */
  url: string;
  /** False keeps the whole site out of search engines (previews before a client launches). */
  indexable: boolean;
}

/** The rules Next.js's `robots()` returns. */
export interface RobotsRules {
  rules: { userAgent: string; allow?: string; disallow?: string };
  sitemap?: string;
  host?: string;
}
