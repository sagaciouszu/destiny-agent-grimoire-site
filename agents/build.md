---
section: integration
layout: page
title: Add an Agent
category: Agents & Integration · Add an Agent
lede: "Adding a persona is three things: a repository, one registry row and one site row. The simple steps are first; the field reference is at the bottom."
---

<details class="section" open>
<summary><span class="section-title" role="heading" aria-level="2" id="short-version">The short version <a class="heading-anchor" href="#short-version" aria-label="Permalink to The short version">#</a></span></summary>

<ol>
  <li><strong>Make the persona repository.</strong> Start from an existing agent repository. It needs an entry file, <code>AGENTS.md</code>, the voice and world material, <code>setup.sh</code> and an audit.</li>
  <li><strong>Add one row to the registry.</strong> Put the id, name, source repository, entry file and consult topics in <code>series/agents.json</code>.</li>
  <li><strong>Add one object to the site.</strong> Add the same id and the display fields to <code>_data/agents.js</code>.</li>
  <li><strong>Run the gates.</strong> Audit the persona, install it, then run the site's link check.</li>
</ol>

<p>That is enough for a new page, nav entry and sitemap entry.</p>

</details>

<details class="section" open>
<summary><span class="section-title" role="heading" aria-level="2" id="why-add-one">Why add one <a class="heading-anchor" href="#why-add-one" aria-label="Permalink to Why add one">#</a></span></summary>

- **The series grows without another archive.** Every persona reads the same Grimoire.
- **The site is data-driven.** One site object produces the page, nav entry, sitemap entry and roster link.
- **The pieces stay independent.** A persona can ship with its own repository, tests and release cycle.

</details>

<h2 id="for-experts">For experts <a class="heading-anchor" href="#for-experts" aria-label="Permalink to For experts">#</a></h2>

<p class="muted">The repository contract, every registry and site field, and the
gates to run before publishing.</p>

<h3 id="the-shape">The shape</h3>

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

<h3 id="the-registry">The registry</h3>

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

<h3 id="the-site">The site</h3>

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

<h3 id="the-gates">The gates</h3>

Run the agent audit from the agent repository:

<pre><code>bash tests/master-audit.sh</code></pre>

Then install the series into OpenCode and check that the new agent appears:

<pre><code>bash scripts/sync-live-agents.sh</code></pre>

Before pushing the site, run the link and metadata gate:

<pre><code>python3 scripts/check-links.py</code></pre>

CI runs the same check after every build. A missing page, broken fragment,
duplicate title or stale sitemap fails the deploy.

## Next

- [Meet the personas]({{ '/agents/' | url }})
- [Deploy an agent]({{ '/agents/install/' | url }})
- [Read the series standards](https://github.com/sagaciouszu/destiny-agent-grimoire/blob/master/STANDARDS.md)
