# Aryan Rathod — Portfolio

A React + Vite + Tailwind portfolio, styled as an API — the nav is a set of HTTP
routes, the hero is a live terminal `curl` response, and each project is an
endpoint card. Includes a Cmd+K / Ctrl+K command palette for quick navigation.

## Stack

- React 18 + Vite
- Tailwind CSS
- Framer Motion (scroll reveals, palette transitions)
- lucide-react (icons)

## Run locally

```bash
npm install
npm run dev
```

Open the URL Vite prints (usually http://localhost:5173).

## Build

```bash
npm run build
npm run preview   # preview the production build locally
```

## Deploy to Vercel

**Option A — Vercel CLI**

```bash
npm install -g vercel
vercel login
vercel        # first deploy, follow the prompts
vercel --prod # promote to production
```

**Option B — Git + Vercel dashboard**

1. Push this folder to a GitHub repo.
2. Go to https://vercel.com/new and import the repo.
3. Vercel auto-detects the Vite framework (build command `npm run build`,
   output directory `dist`) from `vercel.json` — just click **Deploy**.

No environment variables are required; the contact form opens the visitor's
email client via a `mailto:` link, so there's no backend to configure.

## Editing content

All resume content (experience, projects, skills, contact links) lives in one
place: `src/data/portfolio.js`. Update that file and every section, the nav,
and the command palette will reflect the change automatically.
