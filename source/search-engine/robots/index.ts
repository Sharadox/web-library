import type { RobotsOptions, RobotsRules } from "@sharadox/web-library/search-engine/robots/type";

/** robots.txt rules: everything allowed with the sitemap and host, or everything disallowed while not indexable. */
export function robots({ url, indexable }: RobotsOptions): RobotsRules {
  return indexable
    ? { rules: { userAgent: "*", allow: "/" }, sitemap: `${url}/sitemap.xml`, host: url }
    : { rules: { userAgent: "*", disallow: "/" } };
}
