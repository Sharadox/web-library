/**
 * Whether a link leaves the site: anything that isn't one of its own paths (`/…`), sections (`#…`) or relative
 * addresses. Other sites, and the apps that handle email, phones, messages and maps (`mailto:`, `tel:`, `sms:`, a map
 * link), all leave it.
 *
 * @example
 * leavesSite("mailto:ana@example.com"); // true
 * leavesSite("/en/privacy"); // false
 */
export function leavesSite(href: string): boolean {
  return /^[a-z][a-z\d+.-]*:/i.test(href) || href.startsWith("//");
}

/**
 * The attributes that open a link in a new tab when it leaves the site (see `leavesSite`), so the visitor keeps the
 * page where they were while an email web app, a map or another site opens beside it; nothing for the site's own
 * links. `noopener noreferrer` keeps the new page from reaching back into this one.
 *
 * @example
 * <a href={href} {...newTab(href)}>…</a>
 */
export function newTab(href: string): { target?: "_blank"; rel?: "noopener noreferrer" } {
  return leavesSite(href) ? { target: "_blank", rel: "noopener noreferrer" } : {};
}
