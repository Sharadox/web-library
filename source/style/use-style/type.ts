export interface StyleState {
  /** What the visitor picked: "system" or a style name. */
  choice: string;
  /** The style in use right now. Before hydration (and on the server) it is the fallback default. */
  style: string;
  /** Picks a style (or "system"), remembers it and applies it at once. */
  choose: (choice: string) => void;
}
