import { expect, it } from "vitest";
import { localizedSitemap } from "@sharadox/web-library/search-engine/sitemap";

it("lists every locale with its alternates and priorities", () => {
  const lastModified = new Date("2026-11-09T00:00:00Z");
  const sitemap = localizedSitemap({
    url: "https://example.com",
    locales: ["en", "pt"],
    otherPriority: 0.9,
    lastModified,
  });
  expect(sitemap).toEqual([
    {
      url: "https://example.com/en",
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
      alternates: { languages: { en: "https://example.com/en", pt: "https://example.com/pt" } },
    },
    {
      url: "https://example.com/pt",
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
      alternates: { languages: { en: "https://example.com/en", pt: "https://example.com/pt" } },
    },
  ]);
});
