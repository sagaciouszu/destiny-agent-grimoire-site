---
section: grimoire
layout: page
title: Install the Grimoire
category: The Grimoire · Install
lede: Get the library onto your computer in a few minutes. Start with the simple download; the full command reference is at the bottom.
---

<nav class="setup-order setup-order--inline" aria-label="Recommended setup order">
  <span class="setup-order-label">Setup order</span>
  <ol>
    <li><a href="{{ '/grimoire/install/' | url }}" aria-current="step">1. Grimoire</a></li>
    <li><a href="{{ '/grimoire/mcp/' | url }}">2. AI access <span class="setup-optional">optional</span></a></li>
    <li><a href="{{ '/personas/install/' | url }}">3. Characters</a></li>
  </ol>
</nav>

<details class="section" open>
<summary><span class="section-title" role="heading" aria-level="2" id="quick-start">Start here</span></summary>

Open a terminal in the folder where you want to keep the project. You need Git
(to download the project), Python 3.8 or newer (to run the search
tool), and about {{ grimoire.sizes.db_mb | plus: 100 }} MB of free space. No
account, no key, no build tools.

The commands below download the project, download the library file, check the
download, put the file in the right folder, and print the library counts. Paste
the block into a terminal.

<pre><code>git clone https://github.com/sagaciouszu/destiny-agent-grimoire.git
cd destiny-agent-grimoire
base=https://github.com/sagaciouszu/destiny-agent-grimoire
curl -fsSL "$base/releases/latest/download/grimoire.db" -o grimoire.db
curl -fsSL "$base/releases/latest/download/SHA256SUMS" -o SHA256SUMS
grep '  grimoire.db$' SHA256SUMS | sha256sum -c -
mv grimoire.db db/grimoire.db
python3 db/query.py stats</code></pre>

<p>If the last command prints counts, you are ready to search.</p>

</details>

<details class="section" open>
<summary><span class="section-title" role="heading" aria-level="2" id="what-you-get">What this gives you</span></summary>

<ul class="tile-grid">
  <li><strong>One place to look things up</strong><p>Search books, dialogue, cards, items and records without opening a dozen wiki tabs.</p></li>
  <li><strong>A quote checker</strong><p>Paste a line and find out whether it is real Destiny text before you put it in a post, a video or a character's mouth.</p></li>
  <li><strong>A shared source for characters</strong><p>All six characters read this same library, so they answer from the same material you do.</p></li>
  <li><strong>An optional AI connection</strong><p>Connect an AI app and it can search the library directly.</p></li>
</ul>

You don't need the characters or the AI connection to use the library. They are
separate pieces that become more useful together.

</details>

<details class="section" open>
<summary><span class="section-title" role="heading" aria-level="2" id="prerequisites">Before you start</span></summary>

<ul class="checklist">
  <li>Python 3.8 or newer. No extra Python packages are needed.</li>
  <li>Git, to download the project.</li>
  <li>About {{ grimoire.sizes.db_mb | plus: 100 }} MB of free space. The library
      file itself is about {{ grimoire.sizes.db_mb }} MB.</li>
  <li>Roughly the same space again if you build from source.</li>
</ul>

The download needs no build tools. Building from source only needs Python.

</details>


<details class="section">
<summary><span class="section-title" role="heading" aria-level="2" id="everyday-commands">Everyday commands</span></summary>

<pre><code>python3 db/query.py stats
python3 db/query.py search "Crota" --limit 5
python3 db/query.py character "eris" --limit 20
python3 db/query.py verify "Absolutely not." --speaker "Eris Morn" --exact</code></pre>

<p>Search treats punctuation as text instead of throwing an error. If the quote
checker prints <code>NOT FOUND</code>, stop: the line is not in the library. Do not
reword it until it passes.</p>

</details>

<details class="section">
<summary><span class="section-title" role="heading" aria-level="2" id="connect-an-ai">Connect an AI</span></summary>

The optional connector lets an AI app ask the library questions as tools. Install
it once:

<pre><code>bash mcp-server/install.sh</code></pre>

<p>The installer prints a configuration block pointing at
<code>mcp-server/run.sh</code>. It runs on your computer and only reads the
library. See <a href="{{ '/grimoire/mcp/' | url }}">Connect an AI</a> for the app
setup and the full tool list.</p>

</details>

<details class="section experts">
<summary><span class="section-title" role="heading" aria-level="2" id="for-experts">For Experts (or enthusiasts)</span></summary>

<p class="muted">The release details, rebuild path and test gates. You can ignore
this section if the short version worked.</p>

<h3 id="build-it">Build it yourself <a class="heading-anchor" href="#build-it" aria-label="Permalink to Build it yourself">#</a></h3>

This is slower and uses more disk, but it is repeatable and works offline once
the project files are present.

<pre><code>git clone https://github.com/sagaciouszu/destiny-agent-grimoire.git
cd destiny-agent-grimoire
python3 db/migrate.py</code></pre>

<p>The build reads <code>source/</code> and <code>archive/data/*.jsonl</code> and writes
<code>db/grimoire.db</code>.</p>

<h3 id="command-details">Command details <a class="heading-anchor" href="#command-details" aria-label="Permalink to Command details">#</a></h3>

<p>Every command accepts <code>--json</code> for scripts. Read commands accept
<code>--limit</code> and <code>--offset</code>.</p>

<p>The release file is the official download. <code>SHA256SUMS</code> is attached
to the same release, and the publish pipeline checks it before release.</p>

<pre><code>curl -fsSL https://github.com/sagaciouszu/destiny-agent-grimoire/releases/latest/download/grimoire.db -o grimoire.db
curl -fsSL https://github.com/sagaciouszu/destiny-agent-grimoire/releases/latest/download/SHA256SUMS -o SHA256SUMS
grep '  grimoire.db$' SHA256SUMS | sha256sum -c -
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

<p>Persona checks live in each persona repository and pull the shared gates
through <code>lore/tests/</code>.</p>

</details>

## Next

- [Try the commands](#everyday-commands)
- [Connect an AI]({{ '/grimoire/mcp/' | url }})
- [Assemble your fireteam]({{ '/personas/install/' | url }})
