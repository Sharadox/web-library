import { describe, expect, test } from "vitest";
import { clamp } from "@sharadox/web-library/math/clamp";
import { pseudoRandom } from "@sharadox/web-library/math/pseudo-random";
import { radians } from "@sharadox/web-library/math/radians";

describe("clamp", () => {
  test.each([
    [5, 1],
    [-5, 0],
    [0.5, 0.5],
  ])("clamp(%s, 0, 1) is %s", (value, expected) => {
    expect(clamp(value, 0, 1)).toBe(expected);
  });
});

test("radians converts degrees", () => {
  expect(radians(180)).toBeCloseTo(Math.PI);
  expect(radians(0)).toBe(0);
});

test("pseudoRandom is repeatable and within [0, 1)", () => {
  for (const seed of [0, 1, 3, 1000]) {
    expect(pseudoRandom(seed)).toBe(pseudoRandom(seed));
    expect(pseudoRandom(seed)).toBeGreaterThanOrEqual(0);
    expect(pseudoRandom(seed)).toBeLessThan(1);
  }
});
