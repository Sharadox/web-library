import { expect, it } from "vitest";
import { escapeHtml } from "@sharadox/web-library/html/escape";

it("escapes every html-significant character", () => {
  expect(escapeHtml(`<a href="link">Tom & 'Jerry'</a>`)).toBe(
    "&lt;a href=&quot;link&quot;&gt;Tom &amp; &#39;Jerry&#39;&lt;/a&gt;",
  );
});
