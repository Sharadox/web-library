import { render } from "@testing-library/react";
import { expect, it } from "vitest";
import { StructuredData } from "@sharadox/web-library/search-engine/structured-data";

it("renders JSON-LD and escapes script-closing text", () => {
  const { container } = render(<StructuredData data={{ "@type": "Thing", name: "</script><b>" }} />);
  const script = container.querySelector('script[type="application/ld+json"]')!;
  expect(script.innerHTML).not.toContain("</script>");
  expect(JSON.parse(script.textContent!)).toEqual({ "@type": "Thing", name: "</script><b>" });
});
