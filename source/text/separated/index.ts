import { separate } from "@sharadox/web-library/text/separate";
import { SEPARATOR } from "@sharadox/web-library/text/separator";

/**
 * Joins the parts that are set with the separator every Sharadox text uses (`SEPARATOR`, "·"), spaced on both sides,
 * skipping `false`, `null`, `undefined` and empty strings.
 *
 * @example
 * separated("Contact", "Ana (Café)", undefined); // "Contact · Ana (Café)"
 */
export function separated(...parts: (string | false | null | undefined)[]): string {
  return separate(SEPARATOR, ...parts);
}
