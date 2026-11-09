/** Joins the class names that are set, skipping false, null, undefined and empty strings. */
export function classNames(...names: (string | false | null | undefined)[]): string {
  return names.filter(Boolean).join(" ");
}
