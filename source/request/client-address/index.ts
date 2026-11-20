/** Anything that reads request headers by name: a `Headers`, or what Next.js `headers()` returns. */
export interface HeaderReader {
  get(name: string): string | null;
}

/**
 * The visitor's address as the hosting platform reports it: the first entry of `x-forwarded-for` (the visitor; the
 * rest are proxies), or "unknown". For rate limits and abuse checks, never stored with personal data.
 *
 * @example
 * clientAddress(await headers()); // "203.0.113.7"
 */
export function clientAddress(headers: HeaderReader): string {
  return (headers.get("x-forwarded-for") ?? "").split(",")[0]!.trim() || "unknown";
}
