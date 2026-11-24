/** The site's own domains: links to them, or to any of their subdomains, stay in the same tab. */
export interface SameSiteOptions {
  /** `["luispiresdecor.com"]` also covers `account.luispiresdecor.com` and every preview under it. */
  domains?: readonly string[];
}
