import { expect, test } from "vitest";
import { clientAddress } from "@sharadox/web-library/request/client-address";

test("takes the visitor's address from the forwarded chain, or says it's unknown", () => {
  expect(clientAddress(new Headers({ "x-forwarded-for": " 203.0.113.7 , 10.0.0.1" }))).toBe("203.0.113.7");
  expect(clientAddress(new Headers())).toBe("unknown");
  expect(clientAddress(new Headers({ "x-forwarded-for": "" }))).toBe("unknown");
});
