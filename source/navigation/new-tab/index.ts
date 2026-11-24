import type { SameSiteOptions } from "@sharadox/web-library/navigation/new-tab/type";

/** Whether a web address is on one of the domains, or a subdomain of one. */
function onDomains(href: string, domains: readonly string[]): boolean {
  if (domains.length === 0 || !/^(https?:)?\/\//i.test(href)) return false;
  let host: string;
  try {
    host = new URL(href, "https://base.invalid").hostname.toLowerCase();
  } catch {
    return false;
  }
  return domains.some((domain) => host === domain.toLowerCase() || host.endsWith(`.${domain.toLowerCase()}`));
}

/**
 * Whether a link leaves the site: anything that isn't one of its own paths (`/…`), sections (`#…`), relative
 * addresses, or web addresses on its own `domains` (and their subdomains). Other sites, and the apps that handle
 * email, phones, messages and maps (`mailto:`, `tel:`, `sms:`, a map link), all leave it.
 *
 * @example
 * leavesSite("mailto:ana@example.com"); // true
 * leavesSite("/en/privacy"); // false
 * leavesSite("https://account.luispiresdecor.com", { domains: ["luispiresdecor.com"] }); // false
 */
export function leavesSite(href: string, { domains = [] }: SameSiteOptions = {}): boolean {
  if (onDomains(href, domains)) return false;
  return /^[a-z][a-z\d+.-]*:/i.test(href) || href.startsWith("//");
}

/**
 * The attributes that open a link in a new tab when it leaves the site (see `leavesSite`), so the visitor keeps the
 * page where they were while an email web app, a map or another site opens beside it; nothing for the site's own
 * links, including those on its own `domains`. `noopener noreferrer` keeps the new page from reaching back into
 * this one.
 *
 * @example
 * <a href={href} {...newTab(href)}>…</a>
 * <a href={href} {...newTab(href, { domains: ["luispiresdecor.com"] })}>…</a>
 */
export function newTab(href: string, options?: SameSiteOptions): { target?: "_blank"; rel?: "noopener noreferrer" } {
  return leavesSite(href, options) ? { target: "_blank", rel: "noopener noreferrer" } : {};
}
