import { render } from "@testing-library/react";
import { expect, it } from "vitest";
import { ScrollWords } from "@sharadox/web-library/animation/scroll-word";

it("renders one span per word inside the paragraph", () => {
  const { container } = render(<ScrollWords text="Simple, on purpose." className="statement" />);
  expect(container.querySelector("p")?.className).toBe("statement");
  expect(container.querySelectorAll("p > span")).toHaveLength(3);
  expect(container.textContent).toBe("Simple, on purpose. ");
});
