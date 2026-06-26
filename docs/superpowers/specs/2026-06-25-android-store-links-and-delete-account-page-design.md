# Design: Android store links + Delete Account page

**Date:** 2026-06-25
**Status:** Approved (pending spec review)

## Goal

Two changes to the Fletched marketing site (`~/Documents/personal/fletched`, React + Vite + Tailwind):

1. Surface **both** app stores (Apple App Store + Google Play) everywhere the site currently shows a single, non-functional "App Store" button — and wire them to real links.
2. Add a self-hosted **`/delete-account`** page so the Google Play Data Safety "account deletion" URL can move off the mobile app's Railway server and onto this site.

## Background / current state

- `src/components/ui/AppStoreButton.tsx` renders a `motion.button` (3 variants: `black`, `slate`, `navbar`). **It links nowhere** — it's a dead button. The Apple logo is loaded from an external host (`i.ibb.co`).
- It's used in 5 spots: navbar + mobile-menu (`src/layouts/MainLayout.tsx`), Home hero + Home CTA (`src/pages/Home.tsx`), and the About CTA (`src/pages/About.tsx`).
- The mobile app's Railway server (`~/Documents/personal/fletched-mobile/server/index.ts`) serves a static informational page at `/delete-account`. It is purely informational (no form): it explains in-app deletion and an email-request fallback. Required by the Play Console Data Safety form.
- Both apps share ID `app.replit.fletched`. Official domain is `fletchedco.com`.

## Decisions (from brainstorming)

- iOS **is live**. App Store URL: `https://apps.apple.com/us/app/fletched-archery-calculator/id6759381081`
- Google Play URL: `https://play.google.com/store/apps/details?id=app.replit.fletched`
- Button presentation: **match the existing custom tactical/blueprint style** (not Google/Apple official badges).
- Delete-account contact email: **`info@fletchedapp.com`** (matches the app + existing Railway page).
- Delete-account page **is linked in the footer** alongside Privacy / Security / Terms.

## Design

### 1. Store links

**`src/lib/appLinks.ts`** (new) — single source of truth:

```ts
export const APP_STORE_URL = "https://apps.apple.com/us/app/fletched-archery-calculator/id6759381081";
export const GOOGLE_PLAY_URL = "https://play.google.com/store/apps/details?id=app.replit.fletched";
```

**`src/components/ui/StoreButton.tsx`** (new; replaces `AppStoreButton.tsx`):

- `StoreButton({ store, variant, className })` where `store: "apple" | "google"`, `variant: "black" | "slate" | "navbar"`.
  - Renders the existing button markup, wrapped in an `<a href target="_blank" rel="noopener noreferrer">` pointing at the right store URL (this is the fix for the dead button).
  - Apple text stays "App Store" / "Download on the". Google text is "Google Play" / "Get it on".
  - **Logos:** switch both to `react-icons` vectors — `FaApple` and `FaGooglePlay` (`react-icons/fa`, already a dependency) — styled white at the same sizes as today. This removes the fragile `i.ibb.co` external image. *(Minor visual change to the Apple button: PNG → vector glyph. Called out for review.)*
- `StoreButtons({ variant, orientation, className })` — convenience wrapper that renders the Apple + Google pair with consistent spacing. `orientation: "row" | "stack"` (row wraps on narrow widths via `flex-wrap`).

**Usage replacements:**

| Location | Before | After |
|---|---|---|
| Navbar (desktop) | `<AppStoreButton variant="navbar" className="hidden md:flex" />` | `<StoreButtons variant="navbar" orientation="row" className="hidden md:flex" />` |
| Mobile menu footer | `<AppStoreButton className="w-full" variant="slate" />` | `<StoreButtons variant="slate" orientation="stack" className="w-full" />` |
| Home hero | `<AppStoreButton />` | `<StoreButtons variant="black" orientation="row" />` |
| Home CTA | `<AppStoreButton variant="slate" className="mx-auto" />` | `<StoreButtons variant="slate" orientation="row" className="justify-center" />` |
| About CTA | `<AppStoreButton variant="navbar" className="h-16 px-10 rounded-2xl mx-auto" />` | `<StoreButtons variant="navbar" orientation="row" className="justify-center" />` |

`AppStoreButton.tsx` is deleted after all imports are updated.

### 2. Delete Account page

**`src/pages/DeleteAccount.tsx`** (new) — content ported from the Railway page, restyled to match `Privacy.tsx`'s structure (`pt-32 pb-20`, `max-w-4xl`, `AnimatedSection`, `h1`/`h2`/`ul` pattern, prose classes). Sections:

1. **Option 1 — Delete in the app (immediate):** Profile → Account → Delete Account → confirm. Removed right away.
2. **Option 2 — Request by email:** email `info@fletchedapp.com` from the account's address, subject "Delete my account"; processed within 30 days.
3. **What gets deleted:** account + credentials; email/name/username; bow & arrow gear profiles; hunt logs, range sessions, shot history; profile + in-app activity.
4. **What may be retained:** legally-required records; email-request data up to 30 days.
5. Closing note: individual gear profiles can be deleted in-app without deleting the whole account.

**Routing:** add `<Route path="/delete-account" element={<DeleteAccount />} />` in `src/App.tsx`.

**Footer:** in `src/layouts/MainLayout.tsx`, add `{ name: 'Delete Account', path: '/delete-account' }` to the footer legal-links list (Privacy / Security / Terms). It is **not** added to the primary nav (`navLinks`), so it won't appear in the header or mobile menu.

## Out of scope / follow-ups (not done by this change)

- Updating the Play Console Data Safety URL to `https://fletchedco.com/delete-account` — a manual console step for the user after deploy.
- Removing the `/delete-account` route from the mobile Railway server — safe to leave until the new URL is verified live; can be removed later.
- No backend/form: the page is informational only, matching the current Railway page.

## Testing / verification

- `npm run build` (tsc + vite) passes; `npm run lint` clean.
- Manual: all 5 store-button spots show two working buttons that open the correct store in a new tab; `/delete-account` renders inside the layout with nav + footer; footer "Delete Account" link routes correctly.
