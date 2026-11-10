import { expect, it } from "vitest";
import { styleSheet } from "@sharadox/web-library/style/style-sheet";
import { CONFIGURATION } from "@sharadox/web-library/style/test-fixture";

it("writes every style plus a fallback that follows the device", () => {
  expect(styleSheet(CONFIGURATION).split("\n")).toEqual([
    ":root{--background:#000;--foreground:#fff;color-scheme:dark}",
    "@media (prefers-color-scheme:light){:root:not([data-style]){--background:#fff;--foreground:#000;color-scheme:light}}",
    ':root[data-style="black"]{--background:#000;--foreground:#fff;color-scheme:dark}',
    ':root[data-style="white"]{--background:#fff;--foreground:#000;color-scheme:light}',
    ':root[data-style="midnight"]{--background:#001;--foreground:#eef;color-scheme:dark}',
  ]);
});
