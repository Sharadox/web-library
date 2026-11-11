const ENTITIES = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" } as const;

/**
 * Escapes text for safe use inside HTML, for example user input in an email body.
 *
 * @example
 * escapeHtml(`<b>"Tom" & 'Jerry'</b>`); // "&lt;b&gt;&quot;Tom&quot; &amp; &#39;Jerry&#39;&lt;/b&gt;"
 */
export function escapeHtml(text: string): string {
  return text.replace(/[&<>"']/g, (character) => ENTITIES[character as keyof typeof ENTITIES]);
}
