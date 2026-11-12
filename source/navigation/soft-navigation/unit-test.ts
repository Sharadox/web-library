// @vitest-environment happy-dom
import { afterEach, expect, test, vi } from "vitest";
import {
  beginSoftNavigation,
  isSoftNavigation,
  markSoftNavigationDocument,
  SOFT_NAVIGATION_ATTRIBUTE,
} from "@sharadox/web-library/navigation/soft-navigation";

afterEach(() => vi.useRealTimers());

test("a soft navigation lasts its window, then ends", () => {
  vi.useFakeTimers({ now: 1000 });
  expect(isSoftNavigation()).toBe(false);
  beginSoftNavigation(500);
  expect(isSoftNavigation()).toBe(true);
  vi.setSystemTime(1600);
  expect(isSoftNavigation()).toBe(false);
  beginSoftNavigation();
  vi.setSystemTime(3500);
  expect(isSoftNavigation()).toBe(true);
});

test("marks the document for CSS", () => {
  markSoftNavigationDocument();
  expect(document.documentElement.hasAttribute(SOFT_NAVIGATION_ATTRIBUTE)).toBe(true);
});
