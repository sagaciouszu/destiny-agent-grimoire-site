# Destiny Agent Grimoire Site

<p>
  <a href="https://sagaciouszu.github.io/destiny-agent-grimoire-site/"><img src="https://img.shields.io/badge/site-live-d8b45a?style=flat-square" alt="Live site"></a>
  <a href="https://github.com/sagaciouszu/destiny-agent-grimoire-site/actions/workflows/pages.yml"><img src="https://github.com/sagaciouszu/destiny-agent-grimoire-site/actions/workflows/pages.yml/badge.svg" alt="Deploy status"></a>
  <img src="https://img.shields.io/badge/Eleventy-3.1-d8b45a?style=flat-square" alt="Eleventy 3.1">
  <img src="https://img.shields.io/badge/Node-24-5fa04e?style=flat-square&amp;logo=node.js&amp;logoColor=white" alt="Node 24">
  <a href="LICENSE"><img src="https://img.shields.io/badge/license-MIT-3da639?style=flat-square" alt="License: MIT"></a>
</p>

The website for the [Destiny Agent Grimoire](https://github.com/sagaciouszu/destiny-agent-grimoire):
lore overviews, install guides, troubleshooting, and the agent roster.

Built with [Eleventy](https://www.11ty.dev/) and plain CSS. The site is deployed
to GitHub Pages at <https://sagaciouszu.github.io/destiny-agent-grimoire-site/>.

## Local development

```bash
npm ci
npm run serve
```

The dev server serves the site under `/destiny-agent-grimoire-site/`, matching the deployed
path.

## Build

```bash
npm run build
```

Output goes to `_site/`.

## Content

- `index.njk` — home, including the rotating test transcripts
- `grimoire/` — library overview, install, AI connection
- `agents/` — source for the personas overview, install, integrations and old-URL redirects
- `agents/agent.njk` — generates `/personas/<id>/` pages from the roster
- `agents/build.md` — how to build a new persona
- `troubleshooting.md`
- `troubleshooting/experts.md` — repository-level checks, plainly written
- `troubleshooting/audits.md` — old URL kept as a redirect to the audits section
- `about.md`
- `404.md`
- `getting-started.md` — legacy redirect kept for old links
- `_data/agents.js` — the agent roster and hand-authored profiles; add the
  registry row in `series/agents.json` first, then the profile here
- `_data/voices.js` — the test dialogues for the home panel and persona pages
- `_data/sitemap.js`, `sitemap.njk`, `robots.txt.njk` — crawler metadata
- `assets/site.css`, `assets/site.js`
- `assets/fonts/` — self-hosted Neue Haas Grotesk Display Pro and Geist Mono
- `assets/social.svg`, `assets/social.png` — default link preview card
- `scripts/check-stats.py` — counts and sizes must match `_data/grimoire.json`
- `scripts/check-links.py` — build-time link, metadata and sitemap gate
- `scripts/check-a11y.py` — basic static accessibility gate
- `scripts/check-external.py` — external-link check
- `scripts/check-axe.mjs` — full axe-core scan in Chromium
- `scripts/check-tapes.py` — proves no tape matches a canon line (needs the local Grimoire DB)
- `scripts/check-samples.py` — verifies every roster sample with `verify --exact` (needs the local Grimoire DB)
- `scripts/check-roster.py` — keeps consult copies out of rosters, tallies and character totals
- `scripts/sync-agents.py` — rewrites repo, entry, version, release URL, last update
  and audit totals from the registry and sibling repositories (`--check` in `npm run check`)

## Deploy

Pushes to `master` run `.github/workflows/pages.yml` and publish `_site/` to
GitHub Pages.

## License

MIT. See [LICENSE](LICENSE). Destiny and its content belong to Bungie.

## Agent pages

Each entry in `_data/agents.js` produces a persona page at `/personas/<id>/`,
plus a nav item and a sitemap entry. The same id drives the consult copy name
(`<id>-consult.md`), so keep it aligned with the deploy registry.

Consult copies (`<id>-consult.md`) are helpers, not personas: they are never
counted toward any roster, tally or statistic on the site.
`scripts/check-roster.py` (part of `npm run check` and the deploy workflow)
fails if a consult id reaches the roster, a consult page gets built, or a
spelled-out character total stops matching the roster size.

The Test Tapes read from `_data/voices.js`: a dozen or more exchanges per persona,
captured live from the persona's consult agent and dated in `captured`. None
of them are canon quotations — `scripts/check-tapes.py` (part of `npm run
check`) fails if any tape matches a canon line verbatim. The home panel at
`/#tapes` rotates and filters them; each persona page lists its own set.
Tape links are shareable as `?tape=N`, optionally combined with `speaker` or
`topic`.

Agent pages carry the release version, audit result, last-updated date, verified
sample lines and a short limits list. `updated` is set per agent; other pages use
the last git commit date for their source file.

## Reading order

The docs lead with the short path and the reason to use each piece. Deeper
commands, file layouts and test gates sit under a `For Experts (or enthusiasts)`
heading at the bottom. The home page, Grimoire install, AI connection page and Personas install all
show the recommended order: Grimoire, then AI access, then personas.

## Checks

`npm run check` runs the whole local gate: build, internal links, fragments,
canonical URLs, duplicate titles and descriptions, sitemap, robots.txt, the
static accessibility check and the axe-core scan. `npm run check:external`
verifies outbound links. The Pages workflow runs the same checks after every
build, and a separate workflow checks external links on PRs and after deploys.
`_redirects` holds true 301s for hosts that support the Netlify/Cloudflare
format; GitHub Pages uses noindex meta-refresh pages.

