/**
 * Joins the parts that are set with a separator surrounded by spaces, skipping `false`, `null`, `undefined` and empty
 * strings. Pass `SEPARATOR` (from `…/text/separator`), the one every Sharadox text uses.
 *
 * @example
 * separate(SEPARATOR, "Contact", "Ana", undefined); // "Contact · Ana"
 */
export function separate(separator: string, ...parts: (string | false | null | undefined)[]): string {
  return parts.filter(Boolean).join(` ${separator} `);
}
