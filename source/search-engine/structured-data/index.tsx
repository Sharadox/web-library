import type { StructuredDataProperties } from "@sharadox/web-library/search-engine/structured-data/type";

/** Renders JSON-LD for search engines. `<` is escaped so the data can never close the script tag early. */
export function StructuredData({ data }: StructuredDataProperties) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}
