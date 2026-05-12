# tab-web

Marketing, privacy, and terms site for **The Tab** — a Chrome/Firefox browser extension that replaces the new tab page.

Built with **Vite + React + TypeScript + React Router**.

## Pages

- `/` — Home (features, install CTAs)
- `/privacy` — Privacy policy (canonical URL referenced from the extension manifest and Google OAuth consent screen)
- `/terms` — Terms of service

## Develop

```bash
npm install
npm run dev
```

The dev server runs at <http://localhost:5173>.

## Build

```bash
npm run build      # type-check + production bundle into dist/
npm run preview    # serve the production build locally
```

## Deploy

Designed for Vercel (zero-config). `vercel.json` adds SPA-style rewrites so deep links like `/privacy` and `/terms` resolve, and the legacy `/privacy/` (with trailing slash) URL stays compatible with the existing Google OAuth consent-screen configuration.

## Project layout

```
.
├── index.html              # Vite HTML entry; pre-applies saved theme to avoid FOUC
├── public/                 # static assets (favicon, etc.)
├── src/
│   ├── main.tsx            # mounts the React app inside <BrowserRouter>
│   ├── App.tsx             # route table
│   ├── theme.ts            # theme hook (light/dark, persisted to localStorage)
│   ├── styles.css          # global styles + tokens
│   ├── components/
│   │   ├── Layout.tsx
│   │   └── ThemeToggle.tsx
│   └── pages/
│       ├── Home.tsx
│       ├── Privacy.tsx
│       ├── Terms.tsx
│       └── NotFound.tsx
├── tsconfig.json + tsconfig.app.json + tsconfig.node.json
├── vite.config.ts
└── vercel.json
```

## Updating the privacy policy

The privacy policy lives in [`src/pages/Privacy.tsx`](src/pages/Privacy.tsx) and must reflect the current set of OAuth scopes declared in the extension's `manifest.json`. The currently-disclosed scopes are:

- `https://www.googleapis.com/auth/userinfo.profile`
- `https://www.googleapis.com/auth/userinfo.email`
- `https://www.googleapis.com/auth/calendar.readonly`
- `https://www.googleapis.com/auth/tasks.readonly`

If the extension adds, removes, or changes a scope (especially anything moving from read-only to read-write), update both `src/pages/Privacy.tsx` and `src/pages/Terms.tsx`, then bump the "Effective" date at the top of each page.
