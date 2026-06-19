# Turbopack CSS cascade-order repro (Nx + Next 16)

Reproduces the Turbopack CSS ordering bug seen when migrating an **Nx monorepo** to
Turbopack: an equal-specificity CSS-module override loses to the base rule after a
client navigation, because Turbopack re-emits the shared library CSS module in a
separate chunk that lands later in the document.

Mirrors the real-world setup:

- `apps/web` — the Next app (built with `@nx/next` `withNx`, like the real repo).
- `libs/ui-kit` — a shared library with `Button` (`.kindPrimary` → orange),
  imported via the `@ui-kit/*` tsconfig path alias + `experimental.externalDir`.
- `apps/web/components/Banner` — override `.featureButton` → transparent.

`.kindPrimary` (base, in the lib) and `.featureButton` (override, in the app) both
set `--btn-bg` with specificity `(0,1,0)`, so only document order decides the winner.

## Open in CodeSandbox

> ⚠️ Turbopack is a native binary — it does **not** run in StackBlitz/WebContainer.
> Use a **CodeSandbox Devbox** (cloud VM), which runs real Turbopack.

```
https://codesandbox.io/p/github/<your-org>/turbopack-css-order-repro
```

The `dev` task starts automatically (`.codesandbox/tasks.json`).

## Reproduce (dev mode — this is where it triggers)

```bash
npm install
npm run dev          # nx serve web  → http://localhost:3003
```

1. On **Home**, the “Show more” button is transparent (white border, white text). ✅
2. Click it → navigates to **/catalog** (client transition).
3. Press the browser **Back** button.
4. The button is now **orange**. ❌

What happens in the DOM: navigating to `/catalog` loads a second copy of the shared
`Button` stylesheet (e.g. `_0fllvkn._.css`) and appends it to `<head>`. On Back it is
**not removed**, so it sits after Home's chunk that holds `.featureButton` — and the
later `.kindPrimary` now wins the cascade.

### Conditions that make it trigger (all matter)

- Built through **`@nx/next` `withNx`** (plain `next dev` batches the CSS into one
  chunk and does **not** reproduce — verified).
- The shared component lives **outside the app** (`libs/ui-kit`, via `externalDir`).
- Enough routes share `Button` that it gets its own chunk (`r1..r16` + `/catalog`).
- **Working HMR.** Next 16 blocks cross-origin dev resources; `allowedDevOrigins`
  is set in `apps/web/next.config.js` so the dev websocket connects. Without it the
  page can't load the appended chunk and the bug is masked.

## Fixes (try them live)

- **Doubled specificity (shipped fix):** in `apps/web/components/Banner/Banner.module.css`,
  change `.featureButton` → `.featureButton.featureButton` (specificity `(0,2,0)`).
  It beats every `.kindPrimary` copy regardless of order. Verified to hold even while
  the duplicate chunk is still appended.
- **`@layer`:** wrap the lib's `Button.module.css` in `@layer ui-kit { … }` and declare
  `@layer ui-kit;` in a global stylesheet; the unlayered override always wins.
  ⚠️ Caveat: a layered rule also loses to plain global element selectors like
  `a { color }`, which can produce other regressions (e.g. black link text).

## Versions

- `next` `16.2.3`, `@nx/next` / `nx` `22.4.2` — pinned to match the app under migration.

## Upstream

- https://github.com/vercel/next.js/issues/83941
- https://github.com/vercel/next.js/pull/89615
