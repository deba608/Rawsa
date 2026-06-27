# Rawsa

White-theme product website for **Rawsa**, a fruit-rich beverage range by **Stoneman Foodtech** (Stoneman Food and Beverages Pvt Ltd).

The site is a single-page Next.js application with anchor-based sections, WhatsApp commerce, and a distributor enquiry flow.

## Tech Stack

| | |
|---|---|
| Framework | [Next.js](https://nextjs.org/) 16.2.6 (App Router) |
| UI | React 19.2.4, TypeScript 5 |
| Styling | Tailwind CSS 4 (PostCSS plugin `@tailwindcss/postcss`), monolithic CSS with BEM-like custom animations |
| Animation | [`motion`](https://motion.dev/) ^12.40.0 (replaces framer-motion) |
| Lint | ESLint 9 flat config (`eslint.config.mjs`) |

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start development server on port 3000 |
| `npm run build` | Production build via Turbopack |
| `npm run start` | Serve production build |
| `npm run lint` | Run ESLint (flat config, no `--ext` needed) |

No test, typecheck, or format commands are configured.

## Project Structure

```
src/
├── app/
│   ├── _components/      # All site components
│   │   ├── data.ts       # Product data, nav links, comparison data
│   │   ├── types.ts      # TypeScript type definitions
│   │   └── *.tsx         # Section components
│   ├── page.tsx          # Main landing page ("use client")
│   ├── layout.tsx        # Root layout (fonts, metadata)
│   ├── globals.css       # All styles (~3000 lines)
│   ├── error.tsx         # Error boundary
│   ├── loading.tsx       # Loading spinner
│   ├── not-found.tsx     # 404 page
│   ├── privacy/page.tsx  # Privacy Policy (server component)
│   ├── terms/page.tsx    # Terms & Conditions (server component)
│   └── shipping/page.tsx # Shipping & Return (server component)
├── components/           # Empty (unused)
public/
└── rawsa-designs/cropped/  # Product PNG assets + logo
```

## Architecture

- **Single client page** — the landing page (`page.tsx`) is `"use client"` with anchor-linked sections: Hero, Flavours, Why Rawsa, Compare, Ingredients, Story, Distributor, Footer.
- **Legal pages** (`/privacy`, `/terms`, `/shipping`) are server components using a shared `LegalPage` layout.
- **No API routes, Server Actions, or middleware** — the distributor form simulates submission with a timeout. No `.env` files are needed.
- **Commerce** — product orders flow through `wa.me` WhatsApp links. No cart or checkout.
- **Navigation** — desktop topbar + mobile drawer with FLIP-animated logo transitions and IntersectionObserver-based active section tracking.

## Key Details

- Tailwind v4 uses `@import "tailwindcss"` — NOT `@tailwind base/components/utilities`.
- Path alias `@/*` maps to `./src/*`.
- Commerce WhatsApp: `wa.me/918018353597`.
- All product images are served from `public/rawsa-designs/cropped/`.
- The `.claude/` directory is gitignored (editor configuration).

## Company

**Stoneman Food and Beverages Pvt Ltd**  
Ground Floor, Plot No. 946/2999, Prasanti Vihar, Barmunda  
Bhubaneswar – 751003, Odisha, India  
[info@stonemanfoodtech.com](mailto:info@stonemanfoodtech.com)
