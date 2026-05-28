# Product Contract

## What This Project Is

`mike-t-302f-test-website-002` is a static Next.js App Router landing page for
Agent Team, a founder-focused autonomous software development service.

## Current Behavior

The app serves a single statically exported home page at `/`. The page presents
Agent Team for Founders with a sticky header, mobile navigation, hero, value
proposition, how-it-works, features/benefits, closing CTA, and footer. The
primary CTA URL is configured at build time through `NEXT_PUBLIC_CTA_URL`, with
a safe default of `https://example.com/start`.

## Key Features

- Static-exported Next.js site using TypeScript and the App Router.
- Tailwind CSS design tokens for color, typography, spacing, surfaces, focus
  states, and reduced-motion behavior.
- Responsive root layout with font loading, skip link, sticky navigation,
  mobile menu, shared content container, and footer.
- Homepage sections for hero, value proposition, Plan/Build/Deploy/Operate
  workflow, GitHub-native benefits, production/security ownership benefits, and
  a prominent final CTA.
- Brand and sharing assets under `public/`, including favicon variants,
  apple-touch icon, hero image, and Open Graph image.
- Root metadata includes title, description, icons, Open Graph, and Twitter card
  data.
- Static `robots.txt` and `sitemap.xml` are included for crawlability.
- Playwright smoke coverage checks that the home page loads, all sections
  render, and the CTA link matches the configured target.

## Architecture And Conventions

- Routes live under `app/`; `app/page.tsx` explicitly composes homepage section
  components from `components/sections/`.
- Layout components live in `components/layout/`; shared UI primitives live in
  `components/ui/`.
- Shared configuration and utilities live in `lib/`, including navigation data,
  public environment loading, and class name composition.
- Static assets and crawl files live in `public/`.
- `npm run dev` binds to `0.0.0.0:8080`.
- `npm run build` emits the static export to `out/`.
- `npm run serve` serves `out/` on `0.0.0.0:8080`.
- `npm run test:e2e` runs the Playwright smoke test.
- `npm run verify:static` builds the static export, serves `out/`, and verifies
  key pages/assets from the plain static server.
- Standard validation uses `npm run format:check`, `npm run lint`,
  `npm run build`, `npm run test:e2e`, and `npm run verify:static`.

## Current Non-Goals

- No backend services, database, authentication, or private runtime secrets are
  present.
- No dynamic routes or server-only Next.js features should be introduced while
  the site remains statically exported.
