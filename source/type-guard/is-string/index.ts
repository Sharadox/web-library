/**
 * Whether a value is a string.
 *
 * @example
 * isString("a"); // true
 * isString(1); // false
 */
export function isString(value: unknown): value is string {
  return typeof value === "string";
}
