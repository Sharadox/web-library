import { afterEach, expect, test, vi } from "vitest";
import { supportsWebGl } from "@sharadox/web-library/graphics/web-gl-support";

afterEach(() => vi.unstubAllGlobals());
const canvasWith = (getContext: (kind: string) => unknown) =>
  vi.stubGlobal("document", { createElement: () => ({ getContext }) });

test("is true with WebGL 2 or WebGL", () => {
  canvasWith((kind) => (kind === "webgl2" ? {} : null));
  expect(supportsWebGl()).toBe(true);
  canvasWith((kind) => (kind === "webgl" ? {} : null));
  expect(supportsWebGl()).toBe(true);
});

test("is false without either, when the browser refuses, or outside a browser", () => {
  canvasWith(() => null);
  expect(supportsWebGl()).toBe(false);
  canvasWith(() => {
    throw new Error("blocked");
  });
  expect(supportsWebGl()).toBe(false);
  vi.unstubAllGlobals();
  expect(supportsWebGl()).toBe(false);
});
