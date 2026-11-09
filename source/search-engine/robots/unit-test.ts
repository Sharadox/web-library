import { expect, it } from "vitest";
import { robots } from "@sharadox/web-library/search-engine/robots";

it("allows indexing with a sitemap, or blocks everything", () => {
  expect(robots({ url: "https://example.com", indexable: true })).toEqual({
    rules: { userAgent: "*", allow: "/" },
    sitemap: "https://example.com/sitemap.xml",
    host: "https://example.com",
  });
  expect(robots({ url: "https://example.com", indexable: false })).toEqual({
    rules: { userAgent: "*", disallow: "/" },
  });
});
