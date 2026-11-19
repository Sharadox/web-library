import { expect, test } from "vitest";
import { leavesSite, newTab } from "@sharadox/web-library/navigation/new-tab";

test("other sites and the apps for email, phones, messages and maps leave the site", () => {
  for (const href of [
    "https://g.page/r/review",
    "http://example.com",
    "//cdn.example.com",
    "mailto:ana@example.com",
    "tel:+351912345678",
    "sms:+351912345678",
    "geo:37.1,-8.0",
  ]) {
    expect(leavesSite(href)).toBe(true);
    expect(newTab(href)).toEqual({ target: "_blank", rel: "noopener noreferrer" });
  }
});

test("the site's own pages, sections and relative addresses stay", () => {
  for (const href of ["/en/privacy", "#contact", "privacy", "?page=2", ""]) {
    expect(leavesSite(href)).toBe(false);
    expect(newTab(href)).toEqual({});
  }
});
