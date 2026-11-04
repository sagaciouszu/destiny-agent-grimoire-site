---
section: integration
layout: page
title: Add an Agent
category: Agents & Integration · Add an Agent
lede: A new agent is a repository, one registry row and one site row. The page, nav entry and sitemap entry follow from the data.
---

## The shape

A series agent is its own repository, not a folder inside the archive. The
reference implementations are [The Drifter](https://github.com/sagaciouszu/how-to-drift-for-agents)
and [Eris Morn](https://github.com/sagaciouszu/eris-morn). Between them they show
the contract:

- an entry file, `<id>.md`, for OpenCode;
- `AGENTS.md` for runtimes that read a single instruction file;
- `INDEX.md`, `TOOLS.md`, `SOUL.md` and `IDENTITY.md`;
- `core/`, `voice/`, `world/` and `reference/` for the deep material;
- `setup.sh` for the archive link and database;
- `tests/master-audit.sh` for the voice, quote and structure gates.

In the OpenCode deployment, a consult copy is generated from the entry, not
written by hand. It reads the archive and cannot edit files, run shell commands
or ask another agent.

## The registry

Deployment reads `series/agents.json` in the Grimoire. Add one row:

- `id` — lowercase letters, digits and hyphens;
- `name` — the display name;
- `source` — the repository name;
- `entry` — the entry file name;
- `summary` — one line for the series list;
- `consult` — the topics a peer may ask about.

The `id` is the contract. It becomes the OpenCode agent id, the consult file
name, the site URL and the nav item. Keep it stable once published.

[Open the registry](https://github.com/sagaciouszu/destiny-agent-grimoire/blob/master/series/agents.json)

## The site

Add the agent to `_data/agents.js` in this repository. The site builds
`/agents/<id>/`, a nav entry, a sitemap entry and the roster link from that
object. Set `featured: true` for a summary at the top of the Agents page; leave
it false for a roster entry.

The fields:

- `id`, `name`, `role` — identity and the line under the name;
- `heading` — the first section heading on the agent page;
- `short`, `paragraphs` — summary and full profile;
- `consult`, `repo`, `repoName`, `entry`, `entryUrl` — links and canon surface;
- `version`, `releaseUrl`, `updated` — the record shown on the page;
- `audit` — `{ passed, total }` from `tests/master-audit.sh`;
- `samples` — verified lines with a context label;
- `limits` — what the agent will not do.

Every entry in `samples` must pass:

<pre><code>python3 lore/db/query.py verify "&lt;line&gt;" --speaker "&lt;name&gt;" --exact</code></pre>

## The gates

Run the agent audit from the agent repository:

<pre><code>bash tests/master-audit.sh</code></pre>

Then install the series into OpenCode and check that the new agent appears:

<pre><code>bash scripts/sync-live-agents.sh</code></pre>

Before pushing the site, run the link and metadata gate:

<pre><code>python3 scripts/check-links.py</code></pre>

CI runs the same check after every build. A missing page, broken fragment,
duplicate title or stale sitemap fails the deploy.

## Next

- [Meet the series]({{ '/agents/' | url }})
- [Deploy an agent]({{ '/agents/install/' | url }})
- [Read the series standards](https://github.com/sagaciouszu/destiny-agent-grimoire/blob/master/STANDARDS.md)
