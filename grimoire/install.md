---
section: grimoire
layout: page
title: Install the Grimoire
category: The Grimoire · Install
lede: Get the archive on your machine in a minute or two. The easy path is first; the full command reference is at the bottom.
---

<nav class="setup-order setup-order--inline" aria-label="Recommended setup order">
  <span class="setup-order-label">Setup order</span>
  <ol>
    <li><a href="{{ '/grimoire/install/' | url }}" aria-current="step">1. Grimoire</a></li>
    <li><a href="{{ '/grimoire/mcp/' | url }}">2. MCP <span class="setup-optional">optional</span></a></li>
    <li><a href="{{ '/agents/install/' | url }}">3. Personas</a></li>
  </ol>
</nav>

<details class="section" open>
<summary><span class="section-title" role="heading" aria-level="2" id="quick-start">Start here <a class="heading-anchor" href="#quick-start" aria-label="Permalink to Start here">#</a></span></summary>

You need Git, Python 3.8 or newer, and about 260 MB of free space. No account,
API key or build tools.

<pre><code>git clone https://github.com/sagaciouszu/destiny-agent-grimoire.git
cd destiny-agent-grimoire
curl -fsSL https://github.com/sagaciouszu/destiny-agent-grimoire/releases/latest/download/grimoire.db -o grimoire.db
curl -fsSL https://github.com/sagaciouszu/destiny-agent-grimoire/releases/latest/download/SHA256SUMS -o SHA256SUMS
sha256sum -c SHA256SUMS
mv grimoire.db db/grimoire.db
python3 db/query.py stats</code></pre>

<p>If the last command prints counts, you are done.</p>

</details>

<details class="section" open>
<summary><span class="section-title" role="heading" aria-level="2" id="what-you-get">What this gives you <a class="heading-anchor" href="#what-you-get" aria-label="Permalink to What this gives you">#</a></span></summary>

<ul class="tile-grid">
  <li><strong>One place to look things up</strong><p>Search books, dialogue, cards, items and records without opening a dozen wiki tabs.</p></li>
  <li><strong>A quote checker</strong><p>Paste a line and find out whether it is canon before you put it in a post, a video or an agent's mouth.</p></li>
  <li><strong>A canon source for agents</strong><p>The Drifter and Eris read this same archive, so they answer from the same material you do.</p></li>
  <li><strong>An optional tool server</strong><p>Connect an AI client through MCP and it can search the archive directly.</p></li>
</ul>

You do not need the agents or MCP to use the archive. They are separate pieces
that become more useful together.

</details>

<details class="section" open>
<summary><span class="section-title" role="heading" aria-level="2" id="prerequisites">Before you start <a class="heading-anchor" href="#prerequisites" aria-label="Permalink to Before you start">#</a></span></summary>

<ul class="checklist">
  <li>Python 3.8 or newer. The standard library is enough.</li>
  <li>Git, to clone the archive.</li>
  <li>About 260 MB of free space. The database itself is about 170 MB.</li>
  <li>Roughly the same space again if you build from source.</li>
</ul>

The download needs no build tools at all. The source build is pure Python.

</details>

<details class="section">
<summary><span class="section-title" role="heading" aria-level="2" id="build-it">Prefer to build it yourself? <a class="heading-anchor" href="#build-it" aria-label="Permalink to Prefer to build it yourself?">#</a></span></summary>

This is slower and uses more disk, but it is reproducible and works offline once
the sources are present.

<pre><code>git clone https://github.com/sagaciouszu/destiny-agent-grimoire.git
cd destiny-agent-grimoire
python3 db/migrate.py</code></pre>

<p>The build reads <code>source/</code> and <code>archive/data/*.jsonl</code> and writes
<code>db/grimoire.db</code>.</p>

</details>

<details class="section">
<summary><span class="section-title" role="heading" aria-level="2" id="everyday-commands">Everyday commands <a class="heading-anchor" href="#everyday-commands" aria-label="Permalink to Everyday commands">#</a></span></summary>

<pre><code>python3 db/query.py stats
python3 db/query.py search "Crota" --limit 5
python3 db/query.py character "eris" --limit 20
python3 db/query.py verify "Absolutely not." --speaker "Eris Morn" --exact</code></pre>

<p>Every command accepts <code>--json</code>. Read commands accept <code>--limit</code>
and <code>--offset</code>. Search treats punctuation as text instead of throwing
an error.</p>

<p>A failed <code>verify</code> exits with status 1 and prints <code>NOT FOUND</code>.
Treat that as a stop sign, not a puzzle to reword until it passes.</p>

</details>

<details class="section">
<summary><span class="section-title" role="heading" aria-level="2" id="connect-an-ai">Connect an AI <a class="heading-anchor" href="#connect-an-ai" aria-label="Permalink to Connect an AI">#</a></span></summary>

MCP lets a client ask the archive questions as tools. Install the adapter once:

<pre><code>bash mcp-server/install.sh</code></pre>

<p>The installer prints a client snippet pointing at <code>mcp-server/run.sh</code>.
It runs locally, over stdio, and only reads the database. See
<a href="{{ '/grimoire/mcp/' | url }}">MCP server</a> for the client setup and the
full tool list.</p>

</details>

<details class="section experts">
<summary><span class="section-title" role="heading" aria-level="2" id="for-experts">For Experts (or enthusiasts) <a class="heading-anchor" href="#for-experts" aria-label="Permalink to For Experts (or enthusiasts)">#</a></span></summary>

<p class="muted">The release details, rebuild path and test gates. You can ignore
this section if the short version worked.</p>

<h3 id="release-details">The release, step by step <a class="heading-anchor" href="#release-details" aria-label="Permalink to The release, step by step">#</a></h3>

<p>The release asset is the official download. <code>SHA256SUMS</code> is attached
to the same release, and the publish pipeline checks the digest before it goes
out.</p>

<pre><code>curl -fsSL https://github.com/sagaciouszu/destiny-agent-grimoire/releases/latest/download/grimoire.db -o grimoire.db
curl -fsSL https://github.com/sagaciouszu/destiny-agent-grimoire/releases/latest/download/SHA256SUMS -o SHA256SUMS
sha256sum -c SHA256SUMS
mv grimoire.db db/grimoire.db</code></pre>

<p>A mismatch means the file was cut short or changed in transit. Delete it and
download again instead of opening it.</p>

<h3 id="rebuild-and-ingest">Rebuild and add lore <a class="heading-anchor" href="#rebuild-and-ingest" aria-label="Permalink to Rebuild and add lore">#</a></h3>

<p>Rebuild after changing sources or scraper output. The migration is the only
step that writes the database.</p>

<pre><code>python3 db/migrate.py
python3 tests/sync-doc-counts.py</code></pre>

<p>The helpers under <code>archive/</code> and <code>scripts/</code> collect and
format the inputs.</p>

<h3 id="run-the-gates">Run the checks <a class="heading-anchor" href="#run-the-gates" aria-label="Permalink to Run the checks">#</a></h3>

<p>The archive audit covers database integrity, source conformance, retrieval,
documentation and the MCP surface.</p>

<pre><code>bash grimoire-master-audit.sh
bash tests/query-interface-test.sh
python3 tests/conformance.py</code></pre>

<p>Agent checks live with each agent repository and pull the shared gates through
<code>lore/tests/</code>.</p>

</details>

## Next

- [Try the commands](#everyday-commands)
- [Connect an AI with MCP]({{ '/grimoire/mcp/' | url }})
- [Assemble your fireteam]({{ '/agents/install/' | url }})
