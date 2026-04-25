# Copilot Instructions

## Commands

This repository uses the scripts in `package.json` and currently has a `yarn.lock`, so prefer Yarn commands:

| Purpose | Command | Notes |
| --- | --- | --- |
| Start dev server | `yarn dev` | Runs `next dev`. |
| Production build | `yarn build` | Builds the Nextra site as a static export in `out/`. |
| Preview exported site | `yarn start` | Serves the generated `out/` directory. |

There is currently **no test script** and **no lint script** in `package.json`, so there is no supported full-suite or single-test command yet.

## High-level architecture

This is a small **Next.js App Router** project using **Nextra** with the `nextra-theme-docs` theme.

- `next.config.mjs` enables Nextra as a Next.js plugin and configures static export for GitHub Pages. In Actions, it derives `basePath`/`assetPrefix` from `GITHUB_REPOSITORY` for project pages repositories.
- `app/layout.jsx` is the shared shell for the docs site. It imports `nextra-theme-docs/style.css` and wires the Nextra `Layout`, `Navbar`, `Footer`, `Banner`, and `Head` components together.
- `app/[[...mdxPath]]/page.jsx` is the MDX entrypoint. It uses `generateStaticParamsFor(...)` and `importPage(...)` from `nextra/pages` so every page under `content/` is routed through the same catch-all App Router page.
- `mdx-components.js` is the central MDX component merge point. It starts from the theme defaults and overlays any repo-specific components.
- `content/` is the documentation source tree. Top-level and nested `.mdx` files are intended to become site pages through Nextra page-map/import logic.

## Key conventions

- Keep docs content in `content/**/*.mdx`; this is the content source the app is built around.
- Put MDX component customizations in `mdx-components.js` so all pages share the same overrides instead of redefining components per page.
- Keep layout/theme-level changes in `app/layout.jsx`; that file owns the site-wide banner, navbar, footer, metadata shell, and `getPageMap()` wiring.
- The codebase currently uses **JavaScript/JSX files**, even though `typescript` is installed. Match the existing file style unless there is a reason to introduce typed files.
- Route changes should preserve the catch-all Nextra pattern in `app/[[...mdxPath]]/page.jsx`; individual content pages are meant to come from the `content/` tree rather than separate `app/**/page.jsx` files.
- The docs theme wrapper comes from `useMDXComponents().wrapper`; pages should render through that wrapper so the sidebar, TOC, and page metadata stay connected.
- GitHub Pages deployment expects a static export in `out/`; if you change asset paths or routing, keep the Pages `basePath` handling in `next.config.mjs` aligned with the workflow in `.github/workflows/deploy-pages.yml`.
