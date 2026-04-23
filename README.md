# Law of Liberty Baptist Church — Website

Next.js 16 / App Router site for Law of Liberty Baptist Church, Jacksonville, FL.

## Local dev

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Stack

- Next.js 16 (App Router) + TypeScript
- Tailwind CSS v4
- ISR for event data (Google Sheet CSV, revalidates every 5 min)

## Editable content

- **Events** — edit the published Google Sheet CSV; see `src/lib/sheets.ts` for the published ID.
- **Copy** — most homepage text lives in the section components under `src/components/`.
- **Images** — drop new files in `public/` and swap the paths referenced in the components.

## Deploy

Push to GitHub and import into Vercel. No environment variables required.
