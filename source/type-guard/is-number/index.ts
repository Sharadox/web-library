/**
 * Whether a value is a finite number (not `NaN`, not `Infinity`).
 *
 * @example
 * isNumber(1.5); // true
 * isNumber(Number.NaN); // false
 */
export function isNumber(value: unknown): value is number {
  return typeof value === "number" && Number.isFinite(value);
}
