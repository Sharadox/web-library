import { afterEach, expect, it } from "vitest";
import {
  declineConsent,
  everything,
  hasConsent,
  readConsent,
  saveConsent,
} from "@sharadox/web-library/privacy/consent";
import type { ConsentConfiguration } from "@sharadox/web-library/privacy/consent/type";

const CONFIGURATION: ConsentConfiguration = {
  storageKey: "consent",
  version: 1,
  categories: [{ key: "required", required: true }, { key: "analytics" }, { key: "marketing" }],
};

afterEach(() => {
  localStorage.clear();
  sessionStorage.clear();
});

it("asks when nothing is stored", () => {
  expect(readConsent(CONFIGURATION)).toEqual({ kind: "unknown" });
  expect(hasConsent(CONFIGURATION, "required")).toBe(true);
  expect(hasConsent(CONFIGURATION, "analytics")).toBe(false);
});

it("keeps accepted and manual answers for good, with required always on", () => {
  saveConsent(CONFIGURATION, { required: false, analytics: true, marketing: false });
  const status = readConsent(CONFIGURATION);
  expect(status.kind === "decided" && status.record.granted).toEqual({
    required: true,
    analytics: true,
    marketing: false,
  });
  expect(hasConsent(CONFIGURATION, "analytics")).toBe(true);
  saveConsent(CONFIGURATION, everything(CONFIGURATION));
  expect(hasConsent(CONFIGURATION, "marketing")).toBe(true);
});

it("keeps a refusal only for this visit, and asks again on the next one", () => {
  saveConsent(CONFIGURATION, everything(CONFIGURATION));
  declineConsent(CONFIGURATION);
  expect(readConsent(CONFIGURATION)).toEqual({ kind: "declined" });
  expect(localStorage.getItem("consent")).toBeNull();
  sessionStorage.clear(); // the visit ends
  expect(readConsent(CONFIGURATION)).toEqual({ kind: "unknown" });
});

it("asks again when the categories change", () => {
  saveConsent(CONFIGURATION, everything(CONFIGURATION));
  expect(readConsent({ ...CONFIGURATION, version: 2 })).toEqual({ kind: "unknown" });
});
