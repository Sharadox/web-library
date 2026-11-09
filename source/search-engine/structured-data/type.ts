export interface StructuredDataProperties {
  /** A schema.org JSON-LD object, for example `{ "@context": "https://schema.org", "@type": "Restaurant", … }`. */
  data: Record<string, unknown>;
}
