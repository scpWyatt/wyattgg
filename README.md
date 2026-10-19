# Wyatt.gg

Wyatt's personal website for voice-over work, content creation, and browser-based writing tools. Built with Next.js App Router, React, TypeScript, and Tailwind CSS, and deployed to Vercel from GitHub.

## What's here

- Home, contact information, channel emotes, a voice-over portfolio, and game-development references.
- Writing practice and quizzes, plus guided Hero's Journey, But/Therefore, and Kishotenketsu exercises.
- Flashcards for literary devices, storytelling, Save the Cat, Hero's Journey, poets, poems, and poetic terms.
- A Pomodoro timer with configurable work and break durations and optional audio.
- An unlisted personal focus page with an analog clock and a count-up work timer.

## Development

Use **Node.js 24.x** and npm to match production. The version is specified in `.nvmrc` and `package.json`, and the Vercel project is configured for Node 24. With nvm, run `nvm install 24` and `nvm use 24`.

From the repository root, install dependencies from the committed lockfile and start the development server:

```bash
npm ci
npm run dev
```

Open [localhost:3000](http://localhost:3000). Next.js uses Turbopack for development and production builds. No environment variables or database are required. Production builds need network access to download the Figtree and Space Grotesk fonts through `next/font/google`.

To preview the production build locally:

```bash
npm run build
npm start
```

If port 3000 is already in use, pass a different port: `npm run dev -- --port 3100` or `npm start -- --port 3100`.

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

Next.js 16 no longer runs lint during `next build`, so run `npm run check` before deploying. Jest and React Testing Library cover flashcard flows, writing exercises and quizzes, Pomodoro behavior and settings, and focus timer persistence and recovery. Browser checks are still useful for layouts, animations, audio, and mobile interactions.

Next.js and TypeScript generate `.next/`, `next-env.d.ts`, and `*.tsbuildinfo`; do not edit those files by hand.

## Code map

- `app/`: routes and layouts. `/`, `/contact`, `/emotes`, `/works`, and `/references` are the public information pages.
- `app/writing-exercises/`: literary-device practice and quizzes, Hero's Journey, But/Therefore, Kishotenketsu, and the Pomodoro timer. Hooks hold exercise state; components render each stage.
- `app/components/flashcards/`: shared flashcard game with shuffle, reverse mode, and a review deck. `/flashcards` links to the writing and poetry decks.
- `app/poetry/flashcards/`: poet, poem, and terminology decks.
- `app/focus/`: the unlisted clock and work timer. The page exports search-engine metadata, `WorkClock.tsx` renders the interface, and `useWorkTimer.ts` manages time and browser storage.
- `components/`: shared navigation, footer, and reusable components, plus some older templates.
- `data/`: local JSON content for the portfolio, reference links, exercises, and decks.
- `styles/globals.css`: Tailwind v4 theme, shared utilities, animations, and compatibility styles. PostCSS uses `@tailwindcss/postcss`.
- `public/`: favicon, images, and timer audio.
- `tests/`: regression tests for flashcards, exercises, quizzes, timer behavior, and settings.

Routes are prerendered at build time. Interactive tools run on the client. Writing exercises, quizzes, flashcards, and the Pomodoro timer hold their progress in React state and reset on reload; the focus timer saves its current session in the browser. There are no API routes, authentication services, middleware, or server-side persistence.

## Common edits

| Change | Where to look |
| --- | --- |
| Homepage text and social links | `app/page.tsx` |
| Navigation and shared social links | `components/Header.component.tsx`, `components/Footer.component.tsx` |
| Contact details and copy-email button | `app/contact/page.tsx`, `app/contact/CopyEmailButton.tsx` |
| Emote information and external emote-list URL | `app/emotes/page.tsx` |
| Portfolio entries | `data/works.json` |
| Reference resources | `data/references.json` |
| Writing prompts, tutorials, and exercise content | `data/writing-exercises/` |
| Flashcard content | `data/writing-exercises/flashcards/`, `data/poetry/` |
| Flashcard display fields and game options | `app/writing-exercises/flashcards/config.ts` |
| Shared colors, utilities, and animations | `styles/globals.css` |
| Fonts and the shared page layout | `app/layout.tsx` |

Use the existing JSON structure when adding content. New routes live in `app/<route>/page.tsx`; export page metadata from a server component and put interactive state in a client component. Tailwind v4 configuration lives in CSS, so there is no `tailwind.config.js`.

## Personal focus page

The route is `/focus`. Keep it out of navigation, public link lists, and any future sitemap. It intentionally has no incoming links on the website and exports `noindex, nofollow` metadata. This makes it unlisted, not access-controlled: anyone who knows the URL can open it.

- The analog clock and date use the device's local time.
- Start begins a count-up session. Pause excludes break time; Resume continues the same session. Reset clears the current session.
- A running session includes time spent away from the page, including while the phone is locked or the tab is closed. Pause before taking a break if that time should not count. The display catches up when the page becomes active again.
- The current session is stored in `localStorage` under `wyattgg.focus-session.v1`. It survives reloads and synchronizes across tabs on the same site in the same browser.
- There is no session history, account, cloud backup, or synchronization between devices. Clearing site data removes the saved session; local development and production keep separate sessions.
- If browser storage is unavailable, the timer still works while the page remains open and displays a message that the session cannot be saved.

## Vercel

The GitHub repository is `scpWyatt/wyattgg`. Pushing to `main` automatically triggers the connected Vercel production deployment.

| Setting | Value |
| --- | --- |
| Framework preset | Next.js |
| Root directory | Repository root |
| Node.js version | 24.x |
| Install command | `npm ci` |
| Build command | `npm run build` |
| Output directory | Vercel's default for Next.js |
| Required environment variables | None |

`engines.node: "24.x"` also selects Node 24 for deployments. No custom adapter or `vercel.json` is needed.

Before a production push:

1. Run `npm run check` with Node 24.
2. Preview the affected routes on desktop and mobile, and exercise any changed interactive controls.
3. Review and commit the intended changes, then push to `main` when ready to publish.
4. Wait for the Vercel commit status to succeed and verify the affected production pages. A successful Git push alone does not confirm deployment success.

## Upgrade notes (October 2026)

- Next.js 16.4.2, React/React DOM 19.3.1, Tailwind CSS 4.3.3, Heroicons 2.2.0, Jest 30.5.2, and React Testing Library 16.3.3.
- TypeScript 6.0.3 is intentionally used instead of 7: the current `typescript-eslint` parser declares support for TypeScript versions below 6.1. Node type definitions match the deployed Node 24 runtime.
- ESLint remains on 9.39.5 because the React lint plugin included by Next.js currently declares peer support through ESLint 9. ESLint 10 should be adopted once that plugin supports it, without bypassing peer dependency checks.
- ESLint uses the official Next.js flat configuration. Redundant individual ESLint dependencies, unused Headless UI and react-countdown packages, unused Lodash types, and the old Autoprefixer plugin were removed.
- Tailwind's official migration updated utility names and moved configuration into CSS. Font variables and compatibility styles preserve the existing design. The browser baseline is Safari 16.4+, Chrome/Edge 111+, and Firefox 128+.
- At the October 2026 upgrade, `npm audit --omit=dev` reported no production vulnerabilities. The full audit reported development-only advisories, including unpatched `braces@3.0.3` and `sprintf-js@1.1.3` in the lint/test dependency chains. Recheck with `npm audit` when maintaining dependencies. Avoid blindly applying `npm audit fix --force`: the suggested downgrades at the time would undo the framework/tooling migration.

For future dependency updates, inspect `npm outdated` and peer requirements, update `package.json` and `package-lock.json` together, then run `npm run check` and test the affected pages. Keep Next.js and `eslint-config-next` on matching versions, React and React DOM aligned, and Node type definitions aligned with the production runtime.

References: [Next.js 16 migration](https://nextjs.org/docs/app/guides/upgrading/version-16), [Next.js ESLint configuration](https://nextjs.org/docs/app/api-reference/config/eslint), [Tailwind v4 migration](https://tailwindcss.com/docs/upgrade-guide), and [Vercel Node versions](https://vercel.com/docs/functions/runtimes/node-js/node-js-versions).
