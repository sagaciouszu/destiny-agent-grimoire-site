# Grimoire Site

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
- `_data/agents.js` — the agent roster; add new agents there
- `assets/site.css`, `assets/site.js`, `assets/starmap.svg`

## Deploy

Pushes to `master` run `.github/workflows/pages.yml` and publish `_site/` to
GitHub Pages.
