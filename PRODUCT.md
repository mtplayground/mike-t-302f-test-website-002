# Product Contract

## What This Project Is

`mike-t-302f-test-website-002` is a private Next.js web application initialized with the App Router and TypeScript. It is currently a foundation project rather than a feature-rich product.

## Current Behavior

The app serves a single home page at `/` confirming that the Next.js project has been initialized. The page highlights the current setup: App Router, TypeScript, and local development on port `8080`.

## Key Features

- Next.js App Router application rooted in `app/`.
- TypeScript-enabled React pages and layout.
- Basic global styling in `app/globals.css`.
- Project metadata configured in `app/layout.tsx`.
- npm scripts for development, production build, production start, and linting.

## Architecture And Conventions

- Application routes live under `app/`.
- Static assets should live under `public/` when added.
- Shared UI and utilities should be introduced later only when needed, using conventional root folders such as `components/` and `lib/`.
- The development server is expected to bind to `0.0.0.0:8080`.
- Build and lint validation use `npm run build` and `npm run lint`.

## Current Non-Goals

- No backend services, database, authentication, or external API integrations are present.
- No domain-specific product workflow has been implemented yet.
