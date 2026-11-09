import { expect, it } from "vitest";
import { isLikelyBot } from "@sharadox/web-library/form/bot-check";

const form = (fields: Record<string, string>) => {
  const data = new FormData();
  for (const [name, value] of Object.entries(fields)) data.set(name, value);
  return data;
};

it("flags a filled honeypot and too-fast submissions", () => {
  expect(isLikelyBot(form({ "started-at": "1000" }), { now: 10_000 })).toBe(false);
  expect(isLikelyBot(form({ "started-at": "1000", website: "spam" }), { now: 10_000 })).toBe(true);
  expect(isLikelyBot(form({ "started-at": "1000" }), { now: 2000 })).toBe(true);
});
