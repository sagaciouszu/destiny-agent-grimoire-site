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
- `grimoire/` — archive overview, install, MCP server
- `agents/` — overview, install, integrations
- `agents/agent.njk` — generates `/agents/<id>/` pages from the roster
- `agents/build.md` — how to add a new series agent
- `agents/skeleton.md` — hidden agent-page skeleton; not linked in nav or sitemap
- `troubleshooting.md`
- `about.md`
- `404.md`
- `getting-started.md` — legacy redirect kept for old links
- `_data/agents.js` — the agent roster; add new agents there
- `_data/voices.js` — short test transcript excerpts for the home panel
- `_data/sitemap.js`, `sitemap.njk`, `robots.txt.njk` — crawler metadata
- `assets/site.css`, `assets/site.js`, `assets/starmap.svg`
- `assets/social.svg`, `assets/social.png` — link preview card
- `scripts/check-links.py` — build-time link, metadata and sitemap gate

## Deploy

Pushes to `master` run `.github/workflows/pages.yml` and publish `_site/` to
GitHub Pages.

## License

MIT. See [LICENSE](LICENSE). Destiny and its content belong to Bungie.

## Agent pages

Each entry in `_data/agents.js` produces an agent page at `/agents/<id>/`,
plus a nav item and a sitemap entry. The same id drives the consult copy name
(`<id>-consult.md`), so keep it aligned with the deploy registry.

The home-page panel reads from `_data/voices.js`. Those are short excerpts from
the agent test suites, not model output and not canon. Replace that file with a
generated index when the test repositories expose one. Each excerpt links to the
agent page and to its source test.

Agent pages carry the release version, audit result, last-updated date, verified
sample lines and a short limits list. `updated` is set per agent; other pages use
the last git commit date for their source file.

## Reading order

The docs lead with the short path and the reason to use each piece. Deeper
commands, file layouts and test gates sit under a `For experts` heading at the
bottom. The home page, Grimoire install, MCP setup and Agent install all show the
recommended order: Grimoire, then MCP, then personas.

## Checks

`python3 scripts/check-links.py` validates the built site: internal links,
fragments, canonical URLs, duplicate titles and descriptions, the sitemap and
robots.txt. The Pages workflow runs it after every build.

## Theme

The palette is Destiny 2 UI-inspired: charcoal, bone, Vanguard gold and a muted
ember accent. No cyan. The topbar toggle switches between the dark theme and a
warm paper light theme.
The choice is stored in `localStorage`; without a stored choice the site follows
`prefers-color-scheme`. The theme is applied before paint by the inline script in
`_includes/head.njk`.
