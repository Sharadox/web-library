/**
 * Whether a value is neither `undefined` nor `null`. Handy with `filter` to narrow arrays.
 *
 * @example
 * [1, undefined, 2].filter(isDefined); // [1, 2] as number[]
 */
export function isDefined<Value>(value: Value): value is NonNullable<Value> {
  return value !== undefined && value !== null;
}
