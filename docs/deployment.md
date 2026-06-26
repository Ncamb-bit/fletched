# Deployment

The site is a static Vite/React SPA hosted on **Vercel**. Deploys are driven by
**GitHub Actions**, not Vercel's native Git integration, so we control exactly
*when* production updates.

| Trigger | Workflow | Result |
| --- | --- | --- |
| Open / update a PR into `main` | `.github/workflows/preview.yml` | Ephemeral **preview** URL, commented on the PR. Never touches prod. |
| Publish a **GitHub Release** | `.github/workflows/production.yml` | Builds and deploys to **production**. |

Merging to `main` does **not** deploy. Changes accumulate on `main` until you cut
a release.

## One-time setup

1. **Disconnect Vercel's Git integration** so it stops auto-deploying on push:
   Vercel → Project → **Settings → Git → Disconnect**. (Actions becomes the only
   deployer; if you skip this, every push to `main` would still deploy prod.)
2. **Create a Vercel access token:** Vercel → **Account Settings → Tokens →
   Create**. Copy it.
3. **Get the org and project IDs:** run `vercel link` locally in this repo (or
   read them from Vercel → Project → **Settings → General**). They land in
   `.vercel/project.json` as `orgId` and `projectId`.
4. **Add GitHub repo secrets** (Repo → **Settings → Secrets and variables →
   Actions → New repository secret**):
   - `VERCEL_TOKEN` — the token from step 2
   - `VERCEL_ORG_ID` — `orgId`
   - `VERCEL_PROJECT_ID` — `projectId`

`.vercel/` is gitignored — never commit it.

## Cutting a production release

1. Merge the PRs you want to ship into `main`.
2. GitHub → **Releases → Draft a new release** → choose/create a tag (e.g.
   `v1.1.0`) targeting `main` → **Publish release**.
3. The `Production Deploy` workflow runs and pushes the build live.

## SPA routing

`vercel.json` rewrites all unmatched paths to `/index.html` so client-side routes
(e.g. `/delete-account`, `/about`) resolve on direct load and refresh. Static
assets are served first, so this only affects app routes.

## Custom domain

`fletchedco.com` is attached in Vercel → Project → **Settings → Domains**, with
the DNS records (A / CNAME) configured at the domain registrar per Vercel's
instructions. The Google Play account-deletion URL points at
`https://fletchedco.com/delete-account`.
