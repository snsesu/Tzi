# NEXA

Premium anime/movie/entertainment platform — dark, cinematic UI built with Next.js, TypeScript, and Tailwind CSS.

## Run locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000

## Pages
- `/` — Home
- `/search` — Search
- `/categories` — Browse by genre
- `/title/[id]` — Content details (e.g. `/title/nova-drift`)

## Status
Phase 1 (design + frontend) is mostly done. Phase 2 (Supabase database, auth,
favorites, watch history) has not started yet. Content is placeholder/mock data
in `lib/catalog.ts` until a real content source is connected.
