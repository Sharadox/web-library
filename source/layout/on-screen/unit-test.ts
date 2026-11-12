import { afterEach, expect, test, vi } from "vitest";
import { isOnScreen } from "@sharadox/web-library/layout/on-screen";

const at = (top: number, left = 0, width = 100, height = 50) => ({
  getBoundingClientRect: () => ({ top, left, width, height, bottom: top + height, right: left + width }),
});
afterEach(() => vi.unstubAllGlobals());

test("is on screen when any part is inside the viewport", () => {
  vi.stubGlobal("innerWidth", 1000);
  vi.stubGlobal("innerHeight", 800);
  expect(isOnScreen(at(10))).toBe(true);
  expect(isOnScreen(at(-40))).toBe(true);
  expect(isOnScreen(at(-60))).toBe(false);
  expect(isOnScreen(at(800))).toBe(false);
  expect(isOnScreen(at(10, 1000))).toBe(false);
  expect(isOnScreen(at(10, -200))).toBe(false);
  expect(isOnScreen(at(10, 0, 0))).toBe(false);
  expect(isOnScreen(at(10, 0, 100, 0))).toBe(false);
});

test("nothing is on screen without a window", () => {
  vi.stubGlobal("innerWidth", undefined);
  vi.stubGlobal("innerHeight", undefined);
  expect(isOnScreen(at(10))).toBe(false);
});
