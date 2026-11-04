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

<table class="field-table">
  <thead><tr><th>Field</th><th>What it does</th></tr></thead>
  <tbody>
    <tr><td>id</td><td>Lowercase letters, digits and hyphens. The stable agent id.</td></tr>
    <tr><td>name</td><td>Display name.</td></tr>
    <tr><td>source</td><td>Repository name.</td></tr>
    <tr><td>entry</td><td>Entry file name.</td></tr>
    <tr><td>summary</td><td>One line for the series list.</td></tr>
    <tr><td>consult</td><td>Topics a peer may ask about.</td></tr>
  </tbody>
</table>

The `id` is the contract. It becomes the OpenCode agent id, the consult file
name, the site URL and the nav item. Keep it stable once published.

[Open the registry](https://github.com/sagaciouszu/destiny-agent-grimoire/blob/master/series/agents.json)

<h3 id="the-site">The site</h3>

Add the agent to `_data/agents.js` in this repository. The site builds
`/agents/<id>/`, a nav entry, a sitemap entry and the roster link from that
object. Set `featured: true` for a summary at the top of the Agents page; leave
it false for a roster entry.

The fields:

<table class="field-table">
  <thead><tr><th>Field</th><th>What it does</th></tr></thead>
  <tbody>
    <tr><td>id, name, role</td><td>Identity and the line under the name.</td></tr>
    <tr><td>heading</td><td>The first section heading on the agent page.</td></tr>
    <tr><td>short, paragraphs</td><td>Summary and full profile.</td></tr>
    <tr><td>consult, repo, repoName, entry, entryUrl</td><td>Links and canon surface.</td></tr>
    <tr><td>version, releaseUrl, updated</td><td>The record shown on the page.</td></tr>
    <tr><td>audit</td><td><code>{ passed, total }</code> from <code>tests/master-audit.sh</code>.</td></tr>
    <tr><td>samples</td><td>Verified lines with a context label.</td></tr>
    <tr><td>limits</td><td>What the agent will not do.</td></tr>
  </tbody>
</table>

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
