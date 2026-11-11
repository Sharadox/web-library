/**
 * Whether a value is `true` or `false`.
 *
 * @example
 * isBoolean(false); // true
 */
export function isBoolean(value: unknown): value is boolean {
  return typeof value === "boolean";
}
