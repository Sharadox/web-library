import { describe, expect, it } from "vitest";
import { isLocale, languageTag, openGraphLocale } from "@sharadox/web-library/internationalization/locale";

describe("locale", () => {
  it("accepts only published locales", () => {
    expect(isLocale("pt", ["en", "pt"] as const)).toBe(true);
    expect(isLocale("fr", ["en", "pt"] as const)).toBe(false);
  });
  it("maps to language and Open Graph tags", () => {
    expect(languageTag("pt")).toBe("pt-PT");
    expect(languageTag("en")).toBe("en");
    expect(openGraphLocale("pt")).toBe("pt_PT");
    expect(openGraphLocale("en")).toBe("en_GB");
  });
});
