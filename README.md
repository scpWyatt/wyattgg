# Wyatt.gg

Personal website and browser-based writing tools built with Next.js App Router, React, TypeScript, and Tailwind CSS. Hosted on Vercel.

## Development

Use **Node.js 24.x** (also specified in `.nvmrc` and `package.json`). With nvm, run `nvm install 24` and `nvm use 24`. Install dependencies from the committed lockfile:

```bash
npm ci
npm run dev
```

Open [localhost:3000](http://localhost:3000). Next.js uses Turbopack for development and production builds. No environment variables or database are required. Production builds need network access to download the Figtree and Space Grotesk fonts through `next/font/google`.

## Commands

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run lint` | Run Next.js Core Web Vitals and TypeScript lint rules; warnings fail |
| `npm run typecheck` | Generate route types and check TypeScript |
| `npm test` | Run regression tests once |
| `npm run test:watch` | Run tests interactively while editing |
| `npm run build` | Create the production build |
| `npm start` | Serve an existing production build |
| `npm run check` | Run lint, type checking, tests, and the production build |

Next.js 16 no longer runs lint during `next build`, so run `npm run check` before deploying. Generated `.next/`, `next-env.d.ts`, and `*.tsbuildinfo` files are not source files.

## Code map

- `app/`: routes and layouts. `/`, `/contact`, `/emotes`, `/works`, and `/references` are the public information pages.
- `app/writing-exercises/`: literary-device practice and quizzes, Hero's Journey, But/Therefore, Kishotenketsu, and the Pomodoro timer. Hooks hold exercise state; components render each stage.
- `app/components/flashcards/`: shared flashcard game with shuffle, reverse mode, and a review deck. `/flashcards` links to the writing and poetry decks.
- `app/poetry/flashcards/`: poet, poem, and terminology decks.
- `components/`: shared navigation, footer, and reusable components, plus some older templates.
- `data/`: local JSON content for the portfolio, reference links, exercises, and decks.
- `styles/globals.css`: Tailwind v4 theme, shared utilities, animations, and compatibility styles. PostCSS uses `@tailwindcss/postcss`.
- `public/`: favicon, images, and timer audio.
- `tests/`: regression tests for flashcards, exercises, quizzes, timer behavior, and settings.

Routes are prerendered at build time. Interactive tools run on the client; exercise progress lives in React state and resets on reload. There are no API routes, authentication services, middleware, or server-side persistence.

## Vercel

Use the **Next.js** framework preset, the repository root as the root directory, `npm ci` to install, and `npm run build` to build. Keep Vercel's default Next.js output-directory setting. `engines.node: "24.x"` selects Node 24 for deployments; no custom adapter or `vercel.json` is needed.

Pushing to `main` on GitHub automatically triggers the connected Vercel production deployment.

## Upgrade notes (October 2026)

- Next.js 16.4.2, React/React DOM 19.3.1, Tailwind CSS 4.3.3, Heroicons 2.2.0, Jest 30.5.2, and React Testing Library 16.3.3.
- TypeScript 6.0.3 is intentionally used instead of 7: the current `typescript-eslint` parser declares support for TypeScript versions below 6.1. Node type definitions match the deployed Node 24 runtime.
- ESLint remains on 9.39.5 because the React lint plugin included by Next.js currently declares peer support through ESLint 9. ESLint 10 should be adopted once that plugin supports it, without bypassing peer dependency checks.
- ESLint uses the official Next.js flat configuration. Redundant individual ESLint dependencies, unused Headless UI and react-countdown packages, unused Lodash types, and the old Autoprefixer plugin were removed.
- Tailwind's official migration updated utility names and moved configuration into CSS. Font variables and compatibility styles preserve the existing design. The browser baseline is Safari 16.4+, Chrome/Edge 111+, and Firefox 128+.
- The lockfile includes updated compatible transitive dependencies. `npm audit --omit=dev` reports no production vulnerabilities. The full audit still reports development-only advisories, including unpatched `braces@3.0.3` and `sprintf-js@1.1.3` in the lint/test dependency chains. Do not use `npm audit fix --force`: its suggested downgrades would undo the framework/tooling migration. Recheck upstream releases when maintaining dependencies.

References: [Next.js 16 migration](https://nextjs.org/docs/app/guides/upgrading/version-16), [Next.js ESLint configuration](https://nextjs.org/docs/app/api-reference/config/eslint), [Tailwind v4 migration](https://tailwindcss.com/docs/upgrade-guide), and [Vercel Node versions](https://vercel.com/docs/functions/runtimes/node-js/node-js-versions).
