import { act, renderHook } from "@testing-library/react";
import { afterEach, expect, it, vi } from "vitest";
import { styleScript } from "@sharadox/web-library/style/style-script";
import { useStyle } from "@sharadox/web-library/style/use-style";
import { CONFIGURATION } from "@sharadox/web-library/style/test-fixture";

const prefersLight = (light: boolean) =>
  vi.spyOn(window, "matchMedia").mockImplementation(
    (query: string) =>
      ({
        matches: query.includes("light") ? light : !light,
        addEventListener: () => {},
      }) as unknown as MediaQueryList,
  );
const root = document.documentElement;
const run = () => new Function(styleScript(CONFIGURATION))();

afterEach(() => {
  localStorage.clear();
  vi.restoreAllMocks();
  root.removeAttribute("data-style");
  root.removeAttribute("data-style-choice");
});

it("the inline script follows the device when nothing is remembered", () => {
  prefersLight(true);
  run();
  expect(root.getAttribute("data-style")).toBe("white");
  expect(root.getAttribute("data-style-choice")).toBe("system");
  expect(root.style.colorScheme).toBe("light");
});

it("the inline script applies a remembered choice and ignores a stale one", () => {
  prefersLight(true);
  localStorage.setItem("style", "midnight");
  run();
  expect(root.getAttribute("data-style")).toBe("midnight");
  localStorage.setItem("style", "removed-style");
  run();
  expect(root.getAttribute("data-style")).toBe("white");
  expect(root.getAttribute("data-style-choice")).toBe("system");
});

it("choosing remembers the style, and choosing system forgets it", async () => {
  prefersLight(false);
  run();
  const { result } = renderHook(() => useStyle(CONFIGURATION));
  expect(result.current.style).toBe("black");
  await act(async () => result.current.choose("white"));
  expect(localStorage.getItem("style")).toBe("white");
  expect(result.current).toMatchObject({ choice: "white", style: "white" });
  await act(async () => result.current.choose("system"));
  expect(localStorage.getItem("style")).toBeNull();
  expect(result.current).toMatchObject({ choice: "system", style: "black" });
});

it("a configuration can open in a fixed style; then System is remembered like any other choice", async () => {
  prefersLight(true);
  const configuration = { ...CONFIGURATION, defaultChoice: "black" };
  new Function(styleScript(configuration))();
  expect(root.getAttribute("data-style")).toBe("black");
  expect(root.getAttribute("data-style-choice")).toBe("black");
  const { result } = renderHook(() => useStyle(configuration));
  await act(async () => result.current.choose("system"));
  expect(localStorage.getItem("style")).toBe("system");
  expect(result.current.style).toBe("white");
  await act(async () => result.current.choose("black"));
  expect(localStorage.getItem("style")).toBeNull();
});
