# Muhammad Umair — Portfolio

A single-page portfolio built with React, Vite, and Tailwind CSS.

## Run it locally

```bash
npm install
npm run dev
```

Open the URL it prints (usually http://localhost:5173).

## Edit your content

All the text on the page — name, bio, experience, projects, education, skills,
contact links — lives in one file: `src/data.js`. Change the values there and
the page updates automatically. You shouldn't need to touch any other file
just to update content.

## Deploy to Vercel

**Option A — via GitHub (recommended)**
1. Push this folder to a new GitHub repo.
2. Go to https://vercel.com/new, sign in, and import that repo.
3. Vercel auto-detects Vite. Leave the defaults (Build Command: `npm run build`,
   Output Directory: `dist`) and click **Deploy**.
4. Every future push to `main` auto-deploys.

**Option B — via CLI**
```bash
npm install -g vercel
vercel        # first deploy, follow the prompts
vercel --prod # subsequent production deploys
```

## Tech
- React 19 + Vite
- Tailwind CSS v4
- IBM Plex Mono / IBM Plex Sans (Google Fonts)
