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

- `index.md` — home
- `grimoire/` — archive overview, install, MCP server
- `agents/` — roster, install, platform support
- `troubleshooting.md`
- `about.md`
- `404.md`
- `getting-started.md` — legacy redirect kept for old links
- `_data/agents.js` — the agent roster; add new agents there
- `assets/site.css`, `assets/site.js`, `assets/starmap.svg`

## Deploy

Pushes to `master` run `.github/workflows/pages.yml` and publish `_site/` to
GitHub Pages.

## License

MIT. See [LICENSE](LICENSE). Destiny and its content belong to Bungie.
