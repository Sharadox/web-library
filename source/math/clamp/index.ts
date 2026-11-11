/**
 * Keeps a value between a minimum and a maximum.
 *
 * @example
 * clamp(5, 0, 1); // 1
 */
export function clamp(value: number, minimum: number, maximum: number): number {
  return Math.min(maximum, Math.max(minimum, value));
}
