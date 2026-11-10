# @sharadox/web-library

Generic building blocks for web applications, arranged by topic. When a topic grows big enough it moves into its own library (for example `internationalization-web-library`).

```sh
pnpm add @sharadox/web-library
```

Import each piece by its path:

| Topic                   | Pieces                                                                                                                                                                                                           |
| ----------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `internationalization/` | `locale` (`isLocale`, `languageTag`, `openGraphLocale`, `Translated`), `translate`, `locale-redirect` (next.config redirects: remembered language, then Accept-Language), `locale-preference` (`rememberLocale`) |
| `search-engine/`        | `sitemap` (`localizedSitemap`), `robots`, `structured-data` (JSON-LD component)                                                                                                                                  |
| `animation/`            | `reveal`, `scroll-word` (text that lights up word by word), `in-view`, `count-up`, `smooth-scroll`                                                                                                               |
| `style/`                | `definition` (`resolveStyle`), `style-script` (`<StyleScript>` for `<head>`: every style's CSS variables and the no-flash script), `use-style` (picker hook), `apply`, `style-sheet`                             |
| `pointer/`              | `spotlight` (pointer position as CSS variables), `tilt` (3D tilt towards the pointer)                                                                                                                            |
| `time/`                 | `zone-minute`, `format-time`, `sun-time` (sunrise and sunset), `sun-today` (React hook), `open-state`                                                                                                            |
| `form/`                 | `rate-limit`, `bot-check` (honeypot and fill time), `field`                                                                                                                                                      |
| `html/`                 | `escape`                                                                                                                                                                                                         |
| `math/`                 | `radians`, `clamp`, `pseudo-random`                                                                                                                                                                              |
| `test/`                 | `visual-snapshot` (Playwright: frozen clock, settled reveals)                                                                                                                                                    |
| —                       | `class-name`                                                                                                                                                                                                     |

```tsx
import { Reveal } from "@sharadox/web-library/animation/reveal";
import { translate } from "@sharadox/web-library/internationalization/translate";

<Reveal delay={0.1}>{translate({ en: "Hello", pt: "Olá" }, locale)}</Reveal>;
```

Styles are what other projects call themes: any number of dark and light styles, a default for each scheme, "system" as the default choice, and a manual choice remembered in browser storage.

React components are client components (`"use client"`), accept `className`, and can be restyled per site. React (and, for `test/`, Playwright) are optional peer dependencies.

## Licence

Licença Sharadox de Código Aberto, versão 0.1.0 — [português](LICENCA.md) (the binding text) · [English translation](LICENSE.md).
