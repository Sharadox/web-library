# @sharadox/web-library

The small, general utilities every Sharadox library and application imports, so even one-liners are written once: type guards, class names, HTML escaping, joining labels, math helpers and exhaustiveness checks. No dependencies.

Topic code lives in its own libraries. This package used to hold it up to version 0.4. Each topic's new home:

| Topic                                                                   | Library                                      |
| ----------------------------------------------------------------------- | -------------------------------------------- |
| Languages, translations, locale redirects and links                     | `@sharadox/internationalization-web-library` |
| Page metadata, sitemap, robots, manifest, structured data, share images | `@sharadox/metadata-web-library`             |
| Styles (themes)                                                         | `@sharadox/style-web-library`                |
| Cookie consent                                                          | `@sharadox/consent-web-library`              |
| Reveal, scroll-lit words, in-view, count-up, marquee                    | `@sharadox/animation-web-library`            |
| Smooth scrolling, active section                                        | `@sharadox/scroll-web-library`               |
| Spotlight, tilt, custom cursor                                          | `@sharadox/pointer-web-library`              |
| Bot checks, rate limit, contact forms                                   | `@sharadox/form-web-library`                 |
| Time zones, opening hours, sunrise and sunset                           | `@sharadox/time-web-library`                 |
| Playwright helpers and shared test suites                               | `@sharadox/test-web-library`                 |

## Install

```sh
pnpm add @sharadox/web-library
```

## API

Import each utility by its path:

| Import                                       | Export                                                                                                                                                                         | Example                                                    |
| -------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------- |
| `@sharadox/web-library/type-guard/is-string` | `isString(value)`                                                                                                                                                              | `isString("a") // true`                                    |
| `…/type-guard/is-non-empty-string`           | `isNonEmptyString(value)`                                                                                                                                                      | `isNonEmptyString("") // false`                            |
| `…/type-guard/is-number`                     | `isNumber(value)`: finite numbers only                                                                                                                                         | `isNumber(NaN) // false`                                   |
| `…/type-guard/is-boolean`                    | `isBoolean(value)`                                                                                                                                                             | `isBoolean(false) // true`                                 |
| `…/type-guard/is-record`                     | `isRecord(value)`: plain objects only                                                                                                                                          | `isRecord([]) // false`                                    |
| `…/type-guard/is-defined`                    | `isDefined(value)`: not `null`/`undefined`                                                                                                                                     | `[1, undefined].filter(isDefined) // [1]`                  |
| `…/class-name`                               | `classNames(...names)`                                                                                                                                                         | `classNames("a", false, "b") // "a b"`                     |
| `…/html/escape`                              | `escapeHtml(text)`                                                                                                                                                             | `escapeHtml("<b>") // "&lt;b&gt;"`                         |
| `…/text/separator`                           | `SEPARATOR` ("·"), the separator every Sharadox text uses                                                                                                                      | `separate(SEPARATOR, "Contact", "Ana") // "Contact · Ana"` |
| `…/text/separate`                            | `separate(separator, ...parts)`                                                                                                                                                | `separate(SEPARATOR, "Contact", "Ana") // "Contact · Ana"` |
| `…/math/clamp`                               | `clamp(value, minimum, maximum)`                                                                                                                                               | `clamp(5, 0, 1) // 1`                                      |
| `…/math/radians`                             | `radians(degrees)`                                                                                                                                                             | `radians(180) // Math.PI`                                  |
| `…/math/pseudo-random`                       | `pseudoRandom(seed)`: repeatable number in [0, 1)                                                                                                                              | `pseudoRandom(3) === pseudoRandom(3)`                      |
| `…/assert/never`                             | `assertNever(value)`: exhaustive `switch` checks                                                                                                                               | `default: return assertNever(kind)`                        |
| `…/navigation/soft-navigation`               | `beginSoftNavigation()`, `isSoftNavigation()`, `markSoftNavigationDocument()`, `endSoftNavigationDocument()`: a page rebuilt in place (language switch) skips entrance effects | `const [skip] = useState(isSoftNavigation)`                |
| `…/layout/on-screen`                         | `isOnScreen(element)`: any part inside the viewport now                                                                                                                        | `if (isOnScreen(card)) …`                                  |

## Develop

Every function is tested at 100% coverage (`pnpm test:unit`). `pnpm verify` runs formatting, lint, type-check, tests and the build. Branches follow `<feature>.development` → `development` → `index`, and releases are `v<version>` tags on `index`.

## License

Licença Sharadox de Código Aberto, versão 0.1.0. See [português](LICENCA.md) (the binding text) and the [English translation](LICENSE.md).
