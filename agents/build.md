---
section: personas
layout: page
title: Build a Persona
category: Personas · Build a Persona
lede: "Building a persona is a bigger project: its own project folder, one line in the series list and one entry in the site roster. This page is for people comfortable with Git and the project layout."
permalink: /personas/build/
---

<details class="section" open>
<summary><span class="section-title" role="heading" aria-level="2" id="short-version">The short version</span></summary>

<ol>
  <li><strong>Make the character its own project.</strong> Start from an existing one. It needs an instructions file, the voice and world material, a setup script and tests.</li>
  <li><strong>Add one line to the series list.</strong> Put the id, name, source project, entry file and topics in <code>series/agents.json</code>.</li>
  <li><strong>Add one entry to the site.</strong> Add the same id and the display fields to <code>_data/agents.js</code>.</li>
  <li><strong>Run the checks.</strong> Test the character, install it, then run the site's link check.</li>
</ol>

<p>That is enough to get a new page, a menu entry and a search-engine entry.</p>

</details>

<details class="section" open>
<summary><span class="section-title" role="heading" aria-level="2" id="why-add-one">Why add one</span></summary>

<ul class="tile-grid">
  <li><strong>New characters share one library</strong><p>Every character reads the same Grimoire, so a new persona does not need its own lore copy.</p></li>
  <li><strong>The site does the paperwork</strong><p>One site entry produces the page, menu entry, search-engine entry and roster link.</p></li>
  <li><strong>Each character keeps its own pace</strong><p>A character can ship with its own project, tests and release schedule.</p></li>
</ul>

</details>

<h2 id="for-experts">For Experts (or enthusiasts) <a class="heading-anchor" href="#for-experts" aria-label="Permalink to For Experts (or enthusiasts)">#</a></h2>

<p class="muted">The repository contract, every registry and site field, and the
checks to run before publishing.</p>

<h3 id="the-shape">The shape</h3>

A series persona is its own project, not a folder inside the library. The
reference implementations are [The Drifter](https://github.com/sagaciouszu/destiny-agent-drifter)
and [Eris Morn](https://github.com/sagaciouszu/destiny-agent-eris-morn). Together they show
what a persona needs:

- an entry file, `<id>.md`, for OpenCode;
- `AGENTS.md` for runtimes that read a single instruction file;
- `INDEX.md`, `TOOLS.md`, `SOUL.md` and `IDENTITY.md`;
- `core/`, `voice/`, `world/` and `reference/` for the deep material;
- `setup.sh` for the archive link and database;
- `tests/master-audit.sh` for the voice, quote and structure gates.

In the OpenCode deployment, a consult copy is generated from the entry, not
written by hand. It reads the archive and cannot edit files, run shell commands
or ask another persona.

<h3 id="the-registry">The registry</h3>

The deployment reads `series/agents.json` in the Grimoire. Add one entry:

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
name, the site URL and the nav item. Keep it stable after publishing.

[Open the registry](https://github.com/sagaciouszu/destiny-agent-grimoire/blob/master/series/agents.json)

<h3 id="the-site">The site</h3>

Add the persona to `_data/agents.js` in the site project. One entry builds
`/personas/<id>/`, the nav entry, the sitemap entry and the roster link.

The fields:

<table class="field-table">
  <thead><tr><th>Field</th><th>What it does</th></tr></thead>
  <tbody>
    <tr><td>id, name, role</td><td>Identity and the line under the name.</td></tr>
    <tr><td>heading</td><td>The first section heading on the persona page.</td></tr>
    <tr><td>short, paragraphs</td><td>Summary and full profile.</td></tr>
    <tr><td>consult, repo, repoName, entry, entryUrl</td><td>Links and canon surface.</td></tr>
    <tr><td>version, releaseUrl, updated</td><td>The record shown on the page.</td></tr>
    <tr><td>audit</td><td><code>{ passed, total }</code> from <code>tests/suites.json</code>; the suite is green on the current tag.</td></tr>
    <tr><td>samples</td><td>Verified lines with a context label.</td></tr>
    <tr><td>limits</td><td>What the persona will not do.</td></tr>
  </tbody>
</table>

Every line in `samples` has to pass; `npm run check` runs
<code>scripts/check-samples.py</code> over every roster sample:

<pre><code>python3 lore/db/query.py verify "&lt;line&gt;" --speaker "&lt;name&gt;" --exact</code></pre>

<h3 id="the-gates">The gates</h3>

Roster metadata (repo, entry, version, release URL, last update and audit
totals) is generated from <code>series/agents.json</code> and the sibling
repositories with <code>python3 scripts/sync-agents.py</code>; the profile
prose stays hand-authored. <code>npm run check</code> verifies it.

Run the persona's audit from its repository:

<pre><code>bash tests/master-audit.sh</code></pre>

Then install the series into OpenCode and check that the new persona appears:

<pre><code>bash scripts/sync-live-agents.sh</code></pre>

Before pushing the site, run the link and metadata check:

<pre><code>python3 scripts/check-links.py</code></pre>

CI runs the same check after every build. A missing page, broken fragment,
duplicate title or stale sitemap fails the deploy.

## Next

- [Meet the characters]({{ '/personas/' | url }})
- [Install the characters]({{ '/personas/install/' | url }})
- [Read the series standards](https://github.com/sagaciouszu/destiny-agent-grimoire/blob/master/STANDARDS.md)
