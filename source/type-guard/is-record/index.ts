/**
 * Whether a value is a plain object (an object literal or `Object.create(null)`), not an array, a date or `null`.
 *
 * @example
 * isRecord({ a: 1 }); // true
 * isRecord([]); // false
 */
export function isRecord(value: unknown): value is Record<string, unknown> {
  if (typeof value !== "object" || value === null) return false;
  const prototype = Object.getPrototypeOf(value) as unknown;
  return prototype === Object.prototype || prototype === null;
}
