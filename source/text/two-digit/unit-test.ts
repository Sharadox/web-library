import { expect, test } from "vitest";
import { twoDigits } from "@sharadox/web-library/text/two-digit";

test("writes counts with two digits", () => {
  expect(twoDigits(1)).toBe("01");
  expect(twoDigits(12)).toBe("12");
  expect(twoDigits(120)).toBe("120");
});
