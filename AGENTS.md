<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Rawsa (Stoneman Foodtech)

## Stack (non-obvious versions)
- npm (lock: `package-lock.json` — not pnpm/yarn)
- Next.js 16.2.6, React 19.2.4, Tailwind v4
- `motion` ^12.40.0 (replaces `framer-motion`)
- ESLint v9 flat config (`eslint.config.mjs`)

## Commands
```
npm run dev       # dev server on localhost:3000
npm run build     # production build
npm run start     # serve production build
npm run lint      # eslint (no --ext needed, flat config)
```
No test, typecheck, or format commands exist.

## Architecture
- Single `"use client"` landing page (`src/app/page.tsx`) with anchor-based sections
- Legal pages are server components: `/privacy`, `/terms`, `/shipping`
- All site components in `src/app/_components/` — `src/components/` is empty
- All CSS in `src/app/globals.css` (~3000 lines, monolithic, BEM-like names)
- No API routes, no Server Actions, no middleware, no env files
- Commerce via WhatsApp links (`wa.me`), no cart/checkout

## Tailwind v4 quirks
- Uses `@import "tailwindcss"` — NOT `@tailwind base/components/utilities`
- PostCSS plugin is `@tailwindcss/postcss` (separate from `tailwindcss` v4)

## TypeScript
- `@/*` maps to `./src/*`
- All data models in `src/app/_components/data.ts`
- Types in `src/app/_components/types.ts`
