# Product Contract

## What This Project Is

`mike-t-302f-test-website-002` is a static Next.js App Router landing page for
Agent Team, a founder-focused autonomous software development service.

## Current Behavior

The app serves a single home page at `/`. The page has a sticky header, a hero
section for "Agent Team for Founders", a value proposition section, and a footer.
The primary CTA URL is configured through the public environment variable
`NEXT_PUBLIC_CTA_URL`.

## Key Features

- Static-exported Next.js site using TypeScript and the App Router.
- Tailwind CSS design tokens for color, typography, spacing, surfaces, and focus
  states.
- Responsive root layout with font loading, sticky navigation, mobile menu,
  shared content container, and footer.
- Hero section with headline, subhead, tagline, CTA, and a generated bitmap hero
  image in `public/images/hero-agent-team.png`.
- Value proposition section with scannable cards about turning ideas into
  production-ready, secure software through an autonomous SDLC.
- Shared UI primitives under `components/ui/`: buttons, sections, cards, and
  icon badges.

## Architecture And Conventions

- Routes live under `app/`; the root page composes section components from
  `components/sections/`.
- Layout components live in `components/layout/`; shared UI primitives live in
  `components/ui/`.
- Shared configuration and small utilities live in `lib/`, including navigation
  data, public environment loading, and class name composition.
- Static assets live in `public/`.
- `npm run dev` binds to `0.0.0.0:8080`.
- `npm run build` emits the static export, and `npm run serve` serves `out/` on
  `0.0.0.0:8080`.
- Validation uses `npm run format:check`, `npm run lint`, and `npm run build`.

## Current Non-Goals

- No backend services, database, authentication, or private runtime secrets are
  present.
- No dynamic routes or server-only Next.js features should be introduced while
  the site remains statically exported.
