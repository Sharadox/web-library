/** One Next.js redirect, as returned from `redirects()` in next.config. */
export interface LocaleRedirect {
  source: string;
  destination: string;
  permanent: false;
  has?: { type: "header"; key: string; value: string }[];
}
