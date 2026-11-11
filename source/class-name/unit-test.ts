import { expect, test } from "vitest";
import { classNames } from "@sharadox/web-library/class-name";

test("joins only the names that are set", () => {
  expect(classNames("button", false, undefined, "solid", null, "")).toBe("button solid");
  expect(classNames()).toBe("");
});
