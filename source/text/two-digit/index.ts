/**
 * A count as two digits, the way numbered lists and steps show it: 1 is "01", 12 stays "12".
 *
 * @example
 * twoDigits(3); // "03"
 */
export function twoDigits(count: number): string {
  return String(count).padStart(2, "0");
}
