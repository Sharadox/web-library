/**
 * Marks code that can't be reached when every case of a union is handled: TypeScript reports an error if a case
 * is added and forgotten, and calling it at run time throws.
 *
 * @example
 * switch (kind) {
 *   case "a": return 1;
 *   case "b": return 2;
 *   default: return assertNever(kind);
 * }
 */
export function assertNever(value: never): never {
  throw new Error(`Unexpected value: ${JSON.stringify(value)}`);
}
