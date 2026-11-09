import { expect, it } from "vitest";
import { classNames } from "@sharadox/web-library/class-name";

it("joins only the names that are set", () => {
  expect(classNames("button", false, undefined, "white", null, "")).toBe("button white");
});
