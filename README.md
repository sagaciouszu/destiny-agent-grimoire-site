# Grimoire Site

<p>
  <a href="https://sagaciouszu.github.io/grimoire-site/"><img src="https://img.shields.io/badge/site-live-d8b45a?style=flat-square" alt="Live site"></a>
  <a href="https://github.com/sagaciouszu/grimoire-site/actions/workflows/pages.yml"><img src="https://github.com/sagaciouszu/grimoire-site/actions/workflows/pages.yml/badge.svg" alt="Deploy status"></a>
  <img src="https://img.shields.io/badge/Eleventy-3.1-d8b45a?style=flat-square" alt="Eleventy 3.1">
  <img src="https://img.shields.io/badge/Node-24-5fa04e?style=flat-square&amp;logo=node.js&amp;logoColor=white" alt="Node 24">
  <a href="LICENSE"><img src="https://img.shields.io/badge/license-MIT-3da639?style=flat-square" alt="License: MIT"></a>
</p>

The website for the [Destiny Agent Grimoire](https://github.com/sagaciouszu/destiny-agent-grimoire):
lore overviews, install guides, troubleshooting, and the agent roster.

Built with [Eleventy](https://www.11ty.dev/) and plain CSS. The site is deployed
to GitHub Pages at <https://sagaciouszu.github.io/grimoire-site/>.

## Local development

```bash
npm ci
npm run serve
```

The dev server serves the site under `/grimoire-site/`, matching the deployed
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
- `about.md`
- `404.md`
- `getting-started.md` — legacy redirect kept for old links
- `_data/agents.js` — the agent roster; add new agents there
- `_data/voices.js` — 50 test dialogues for the home panel
- `_data/sitemap.js`, `sitemap.njk`, `robots.txt.njk` — crawler metadata
- `assets/site.css`, `assets/site.js`, `assets/starmap.svg`
- `assets/fonts/` — self-hosted Neue Haas Grotesk Display Pro and Geist Mono
- `assets/social.svg`, `assets/social.png` — default link preview card
- `scripts/check-links.py` — build-time link, metadata and sitemap gate
- `scripts/check-a11y.py` — basic static accessibility gate
- `scripts/check-external.py` — weekly external-link check

## Deploy

Pushes to `master` run `.github/workflows/pages.yml` and publish `_site/` to
GitHub Pages.

## License

MIT. See [LICENSE](LICENSE). Destiny and its content belong to Bungie.

## Agent pages

Each entry in `_data/agents.js` produces a persona page at `/personas/<id>/`,
plus a nav item and a sitemap entry. The same id drives the consult copy name
(`<id>-consult.md`), so keep it aligned with the deploy registry.

The home-page panel reads from `_data/voices.js`. Drifter and Eris use their
ten-turn test scripts; Zavala, Calus and Ghost were captured from their consult
agents. None of the tapes are canon quotations. Drifter/Eris entries link to
their source tests.

Agent pages carry the release version, audit result, last-updated date, verified
sample lines and a short limits list. `updated` is set per agent; other pages use
the last git commit date for their source file.

## Reading order

The docs lead with the short path and the reason to use each piece. Deeper
commands, file layouts and test gates sit under a `For Experts (or enthusiasts)`
heading at the bottom. The home page, Grimoire install, AI connection page and Personas install all
show the recommended order: Grimoire, then AI access, then personas.

## Checks

`python3 scripts/check-links.py` validates the built site: internal links,
fragments, canonical URLs, duplicate titles and descriptions, the sitemap and
robots.txt. The Pages workflow runs it and the accessibility check after every
build. A separate weekly workflow checks external links.

## Theme

The palette is Destiny 2 UI-inspired: charcoal, bone, Vanguard gold and a muted
ember accent. No cyan. The topbar toggle switches between the dark theme and a
warm paper light theme.
The choice is stored in `localStorage`; without a stored choice the site follows
`prefers-color-scheme`. The theme is applied before paint by the inline script in
`_includes/head.njk`.
