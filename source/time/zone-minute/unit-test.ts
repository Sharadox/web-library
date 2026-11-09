import { expect, it } from "vitest";
import { minutesInZone } from "@sharadox/web-library/time/zone-minute";

it("uses the zone's own time in winter and summer", () => {
  expect(minutesInZone(new Date("2026-01-15T12:30:00Z"), "Europe/Lisbon")).toBe(12 * 60 + 30);
  expect(minutesInZone(new Date("2026-07-15T12:30:00Z"), "Europe/Lisbon")).toBe(13 * 60 + 30);
});
