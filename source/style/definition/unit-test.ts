import { expect, it } from "vitest";
import { resolveStyle } from "@sharadox/web-library/style/definition";
import { CONFIGURATION } from "@sharadox/web-library/style/test-fixture";

it("follows the system scheme for 'system', with the fallback when it is unknown", () => {
  expect(resolveStyle(CONFIGURATION, "system", "light").name).toBe("white");
  expect(resolveStyle(CONFIGURATION, "system", "dark").name).toBe("black");
  expect(resolveStyle(CONFIGURATION, "system", undefined).name).toBe("black");
});

it("uses a chosen style whatever the system says, and ignores unknown names", () => {
  expect(resolveStyle(CONFIGURATION, "midnight", "light").name).toBe("midnight");
  expect(resolveStyle(CONFIGURATION, "sepia", "light").name).toBe("white");
});
