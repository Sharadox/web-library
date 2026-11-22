/**
 * A new UUID version 7 (RFC 9562): the time in milliseconds first, then random bits, so identifiers sort by when
 * they were made and never repeat. For example a contact form's conversation identifier.
 *
 * @example
 * uuidVersion7(); // "019a8f3c-6b2e-7c41-9d03-5e1f2a7b8c90"
 */
export function uuidVersion7({
  now = Date.now(),
  random = crypto.getRandomValues(new Uint8Array(10)),
}: { now?: number; random?: Uint8Array } = {}): string {
  const bytes = new Uint8Array(16);
  // 48 bits of Unix time in milliseconds, most significant byte first.
  let time = now;
  for (let index = 5; index >= 0; index--) {
    bytes[index] = time % 256;
    time = Math.floor(time / 256);
  }
  bytes.set(random.subarray(0, 10), 6);
  bytes[6] = 0x70 | (bytes[6]! & 0x0f); // version 7
  bytes[8] = 0x80 | (bytes[8]! & 0x3f); // the RFC's variant
  const hex = [...bytes].map((byte) => byte.toString(16).padStart(2, "0")).join("");
  return `${hex.slice(0, 8)}-${hex.slice(8, 12)}-${hex.slice(12, 16)}-${hex.slice(16, 20)}-${hex.slice(20)}`;
}
