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
- `/login` — Sign in / sign up
- `/universe` — My Universe (favorites)

## Status
Phase 1 (design + frontend) is done. Phase 2 (Supabase database, auth,
favorites, watch history) is live. Content is placeholder/mock data
in `lib/catalog.ts` until a real content source is connected.
