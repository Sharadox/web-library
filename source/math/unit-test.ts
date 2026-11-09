import { expect, it } from "vitest";
import { clamp } from "@sharadox/web-library/math/clamp";
import { pseudoRandom } from "@sharadox/web-library/math/pseudo-random";
import { radians } from "@sharadox/web-library/math/radians";

it("converts, clamps and repeats", () => {
  expect(radians(180)).toBeCloseTo(Math.PI);
  expect(clamp(5, 0, 1)).toBe(1);
  expect(clamp(-5, 0, 1)).toBe(0);
  expect(pseudoRandom(3)).toBe(pseudoRandom(3));
  expect(pseudoRandom(3)).toBeGreaterThanOrEqual(0);
  expect(pseudoRandom(3)).toBeLessThan(1);
});
