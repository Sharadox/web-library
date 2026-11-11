import { isString } from "@sharadox/web-library/type-guard/is-string";

/**
 * Whether a value is a string with at least one character.
 *
 * @example
 * isNonEmptyString(""); // false
 */
export function isNonEmptyString(value: unknown): value is string {
  return isString(value) && value.length > 0;
}
