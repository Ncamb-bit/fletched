# Deployment

The site is a static Vite/React SPA hosted on **Vercel** via Vercel's **native Git
integration** (no GitHub Actions). Production is gated behind a dedicated
`production` branch so merging to `main` does **not** ship.

| Action | What deploys |
| --- | --- |
| Open / update a PR into `main` | **Preview** build, URL commented on the PR (automatic). |
| Merge into `main` | **Preview** only — does **not** touch production. |
| Update the **`production`** branch | **Production** deploy. |

## One-time setup

1. **Vercel → Project → Settings → Git → Production Branch:** change it from
   `main` to **`production`**. (This is the switch that stops `main` from
   auto-shipping to prod — after this, pushes to `main` are previews.)
2. **Create the `production` branch** so Vercel has something to deploy:
   ```sh
   git checkout main && git pull
   git branch production && git push -u origin production
   ```
   That first push deploys the current `main` to production.

No tokens or secrets are needed — Vercel's Git integration handles everything.

## Cutting a production release

1. Merge the PRs you want to ship into `main` (each got its own preview).
2. Promote `main` to production by updating the `production` branch — either:
   - **Via PR (recommended):** open a PR from `main` → `production` and merge it
     (gives you one last preview + a record of what shipped), or
   - **Via CLI:**
     ```sh
     git checkout production && git merge main && git push
     ```
3. Vercel builds the `production` branch and deploys it live.

> Prefer fully manual? You can instead leave things as previews and click
> **Promote to Production** on any deployment in the Vercel dashboard.

## SPA routing

`vercel.json` rewrites all unmatched paths to `/index.html` so client-side routes
(e.g. `/delete-account`, `/about`) resolve on direct load and refresh. Static
assets are served first, so this only affects app routes.

## Custom domain

`fletchedco.com` is attached in Vercel → Project → **Settings → Domains**, with the
DNS records configured at the domain registrar per Vercel's instructions. The
Google Play account-deletion URL should point at
`https://fletchedco.com/delete-account` once the site is live there. (Until then,
the current Railway page — `https://fletched-mobile-production.up.railway.app/delete-account`
— is the valid deletion URL.)
