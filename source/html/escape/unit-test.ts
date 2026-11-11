import { expect, test } from "vitest";
import { escapeHtml } from "@sharadox/web-library/html/escape";

test("escapes every HTML-significant character and leaves the rest", () => {
  expect(escapeHtml(`<a href="link">Tom & 'Jerry'</a>`)).toBe(
    "&lt;a href=&quot;link&quot;&gt;Tom &amp; &#39;Jerry&#39;&lt;/a&gt;",
  );
  expect(escapeHtml("Olá")).toBe("Olá");
});
