import { describe, expect, test } from "vitest";
import { isBoolean } from "@sharadox/web-library/type-guard/is-boolean";
import { isDefined } from "@sharadox/web-library/type-guard/is-defined";
import { isNonEmptyString } from "@sharadox/web-library/type-guard/is-non-empty-string";
import { isNumber } from "@sharadox/web-library/type-guard/is-number";
import { isRecord } from "@sharadox/web-library/type-guard/is-record";
import { isString } from "@sharadox/web-library/type-guard/is-string";

describe("isString", () => {
  test.each([
    ["", true],
    ["a", true],
    [1, false],
    [null, false],
    [undefined, false],
    [{}, false],
  ])("%j → %s", (value, expected) => {
    expect(isString(value)).toBe(expected);
  });
});

describe("isNonEmptyString", () => {
  test.each([
    ["a", true],
    ["", false],
    [1, false],
  ])("%j → %s", (value, expected) => {
    expect(isNonEmptyString(value)).toBe(expected);
  });
});

describe("isNumber", () => {
  test.each([
    [0, true],
    [1.5, true],
    [-3, true],
    [Number.NaN, false],
    [Infinity, false],
    ["1", false],
  ])("%j → %s", (value, expected) => {
    expect(isNumber(value)).toBe(expected);
  });
});

describe("isBoolean", () => {
  test.each([
    [true, true],
    [false, true],
    [0, false],
    ["true", false],
  ])("%j → %s", (value, expected) => {
    expect(isBoolean(value)).toBe(expected);
  });
});

describe("isRecord", () => {
  test.each([
    [{}, true],
    [{ a: 1 }, true],
    [Object.create(null), true],
    [[], false],
    [new Date(), false],
    [null, false],
    ["text", false],
  ])("%j → %s", (value, expected) => {
    expect(isRecord(value)).toBe(expected);
  });
});

describe("isDefined", () => {
  test("keeps everything but undefined and null", () => {
    expect([0, "", false, undefined, null, 1].filter(isDefined)).toEqual([0, "", false, 1]);
  });
});
