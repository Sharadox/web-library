import { expect, test } from "vitest";
import { uuidVersion7 } from "@sharadox/web-library/identifier/uuid-version-7";

test("puts the time first, then version 7, the variant and random bits", () => {
  const id = uuidVersion7({ now: 0x019a8f3c6b2e, random: new Uint8Array(10).fill(0xff) });
  expect(id).toBe("019a8f3c-6b2e-7fff-bfff-ffffffffffff");
  expect(uuidVersion7({ now: 0, random: new Uint8Array(10) })).toBe("00000000-0000-7000-8000-000000000000");
});

test("makes a different, well-formed identifier each time, sorting by when it was made", () => {
  const first = uuidVersion7({ now: 1_763_700_000_000 });
  const second = uuidVersion7({ now: 1_763_700_000_001 });
  expect(first).toMatch(/^[0-9a-f]{8}-[0-9a-f]{4}-7[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/);
  expect(first < second).toBe(true);
  expect(uuidVersion7()).not.toBe(uuidVersion7());
});
