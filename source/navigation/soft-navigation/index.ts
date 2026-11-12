/** Where the flag lives: on `globalThis` under a registered symbol, so every copy of this library shares it. */
const KEY = Symbol.for("@sharadox/web-library/soft-navigation");
/** The attribute a document gets when it was rendered by a soft navigation. */
export const SOFT_NAVIGATION_ATTRIBUTE = "data-soft-navigation";

type Store = { [KEY]?: number };
/** The little of a browser document this needs (this library runs without DOM types). */
type DocumentHost = { document?: { documentElement: { setAttribute(name: string, value: string): void } } };

/**
 * Announces that the page is about to be rebuilt in place (for example switching language), so components that
 * mount in the next `durationMilliseconds` show their final state instead of replaying entrance effects.
 *
 * @example
 * beginSoftNavigation();
 * router.push("/pt", { scroll: false });
 */
export function beginSoftNavigation(durationMilliseconds = 2000): void {
  (globalThis as Store)[KEY] = Date.now() + durationMilliseconds;
}

/**
 * Whether a soft navigation is under way: components read it when they mount to skip entrance animations. Always
 * false on the server and on a first visit.
 *
 * @example
 * const [skipEntrance] = useState(isSoftNavigation);
 */
export function isSoftNavigation(): boolean {
  return Date.now() < ((globalThis as Store)[KEY] ?? 0);
}

/**
 * Marks the current document as rendered by a soft navigation (`<html data-soft-navigation>`), so CSS can turn off
 * time-based entrance animations for it: `:root[data-soft-navigation] .hero { animation: none }`. Does nothing
 * outside a browser.
 *
 * @example
 * markSoftNavigationDocument();
 */
export function markSoftNavigationDocument(): void {
  (globalThis as DocumentHost).document?.documentElement.setAttribute(SOFT_NAVIGATION_ATTRIBUTE, "");
}
