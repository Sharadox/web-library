/**
 * Joins the parts that are set with a separator surrounded by spaces, skipping `false`, `null`, `undefined` and empty
 * strings. Brands keep their separator in one constant and pass it here.
 *
 * @example
 * separate("•", "Contact", "Ana", undefined); // "Contact • Ana"
 */
export function separate(separator: string, ...parts: (string | false | null | undefined)[]): string {
  return parts.filter(Boolean).join(` ${separator} `);
}
