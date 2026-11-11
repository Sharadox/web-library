/**
 * Joins the class names that are set, skipping `false`, `null`, `undefined` and empty strings.
 *
 * @example
 * classNames("button", isActive && "active", undefined); // "button active" or "button"
 */
export function classNames(...names: (string | false | null | undefined)[]): string {
  return names.filter(Boolean).join(" ");
}
