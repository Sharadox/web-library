# template-web-library

The skeleton every Sharadox web library starts from (private; `pnpm new-library` in sharadox-tool creates new libraries from it).

## What a library is

- **`x-web-library`** — the logic of the app `x-web-application` (components, content, actions). Exists from the start.
- **`web-library`** — generic code with no particular topic, arranged by topic folders.
- **`<topic>-web-library`** — one per topic (`internationalization`, `style`, `email`…), created only once a topic has gathered enough code. Never one library per component.
- **`x-<topic>-web-library`** — an app's own use of a topic library, only when needed.

## Structure

TypeScript in `source/`, one thing per folder: `index.ts(x)`, `type.ts`, `index.module.scss`, `unit-test.ts(x)`, `benchmark-test.ts`. Code imports the library by its own package name (`@sharadox/<library>/<thing>`): TypeScript resolves it to the source through the `sharadox-source` export condition, Vitest through an alias, and consumers to `distribution/`.

`pnpm build` compiles to `distribution/`: JavaScript with `"use client"` kept, type declarations, and each `index.module.scss` compiled to `index.module.css` (consumers need no Sass; Next.js bundles the CSS modules directly). Components accept `className` and expose CSS variables so every site can restyle them.

## Releasing

Versions start at 0.1.0. Set the version in `package.json` on a `<feature>.preview` branch, merge through `preview` into `index`, then tag `v<version>` on `index`: the publish workflow publishes to npm with the organisation's `NPM_TOKEN` (public packages with provenance).

## Commands

`pnpm verify` (format, lint, types, unit and benchmark tests, build) · `pnpm documentation` (API reference in `documentation/`)
