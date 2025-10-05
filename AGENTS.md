# Repository Guidelines

## Project Structure & Module Organization
- `src/app` contains all Next.js route segments, layouts, and `globals.css`; keep new pages colocated with their route segment.
- Reusable UI lives in `src/components/ui`, while higher-level sections belong in `src/components/sections`; favor composition over deeply nested props.
- Shared utilities and constants reside in `src/lib`; place only pure, framework-agnostic helpers here.
- Global types belong in `src/types`; prefer module-scoped types when usage is limited to a single feature.
- Static assets and SEO images live under `public`; name files kebab-case and reference them with root-relative URLs.

## Build, Test & Lint Commands
- `pnpm install` — install dependencies (pnpm is required; lockfile is authoritative).
- `pnpm dev` — run the local dev server with Turbopack on `http://localhost:3000`.
- `pnpm build` — execute the production Next.js build; run before opening a PR to catch compilation issues.
- `pnpm start` — serve the production build for smoke-testing.
- `pnpm lint` — apply the shared ESLint config (`next/core-web-vitals`) to enforce code quality.

## Coding Style & Naming Conventions
- Use TypeScript with React function components, typed props, and hooks-first state management; avoid default exports for components.
- Follow 2-space indentation, keep imports sorted by source (external → internal), and group related Tailwind classes logically.
- Use PascalCase for components and hooks, camelCase for variables and functions, and SCREAMING_SNAKE_CASE for constants exported from `src/lib/constants.ts`.
- Tailwind v4 powers styling; prefer utility classes over bespoke CSS, and extend design tokens via `globals.css` when necessary.

## Testing Guidelines
- Automated testing is not yet wired in; when adding tests use Vitest + React Testing Library, colocating files under `src/__tests__` or `__tests__` folders adjacent to the component.
- Mirror the component or route name in the test filename (e.g., `Header.test.tsx`) and cover primary render states and interactive behavior.
- Target at least 80% statement coverage for new features; include regression tests alongside bug fixes.

## Commit & Pull Request Guidelines
- Match the conventional style visible in `git log` (`feat:`, `fix:`, `chore:`); keep the subject ≤72 characters and present-tense.
- Structure commits around cohesive changes; avoid mixing refactors with feature work.
- Pull requests should include a concise summary, clear testing notes, linked issues when applicable, and screenshots or recordings for UI changes.
- Rebase onto the latest `main` before requesting review and confirm `pnpm build` and `pnpm lint` succeed locally.

## Security & Configuration Tips
- Use Node.js `22.20.0` as specified in `.node-version`; manage versions via `pnpm env use` or `nvm`.
- Store secrets in `.env.local` (never commit them), and document required environment keys in the PR description.
- Review third-party dependencies before adding them; prefer existing libraries already in use (React Hook Form, Zod, SWR) to limit bundle size.
