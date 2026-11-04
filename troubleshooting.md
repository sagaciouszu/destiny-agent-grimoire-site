---
layout: page
title: Troubleshooting
category: Diagnostics
lede: Start with the short list. If your symptom is there, you are probably one command away from fixing it. The deeper checks are grouped below.
---

<details class="section" open>
<summary><span class="section-title" role="heading" aria-level="2" id="first-checks">Try this first <a class="heading-anchor" href="#first-checks" aria-label="Permalink to Try this first">#</a></span></summary>

<p>Most first-run problems are one of these:</p>

<ol>
  <li><strong>No database.</strong> Download the release copy or run <code>python3 db/migrate.py</code> from the repository root.</li>
  <li><strong>Wrong folder.</strong> Commands expect the repository root, not the <code>db/</code> or <code>agents/</code> folder.</li>
  <li><strong>MCP client points at the wrong file.</strong> It should start <code>mcp-server/run.sh</code>, not <code>server.py</code>.</li>
  <li><strong>A persona cannot see the archive.</strong> Check that <code>lore/</code> points at the Grimoire and that <code>lore/db/grimoire.db</code> exists.</li>
</ol>

<p>If none of those fit, find your symptom below.</p>

</details>

<nav class="toc toc-tiles" aria-labelledby="toc-title">
<p class="toc-title" id="toc-title">Jump to a symptom</p>
<label class="toc-filter" for="symptom-filter">Filter symptoms
  <input id="symptom-filter" type="search" placeholder="database, MCP, agent…" data-symptom-filter>
</label>
<p class="toc-filter-empty" data-filter-empty hidden>No matching symptoms.</p>
<div class="toc-grid">
  <div class="toc-card">
    <p class="toc-group">First run</p>
    <ul>
      <li><a href="#database-missing">The database is missing</a></li>
      <li><a href="#python-missing">Python is missing or too old</a></li>
      <li><a href="#checksum">The checksum does not match</a></li>
      <li><a href="#lore-link">The archive link is broken</a></li>
    </ul>
  </div>
  <div class="toc-card">
    <p class="toc-group">Personas</p>
    <ul>
      <li><a href="#agent-missing">A persona is not listed</a></li>
      <li><a href="#too-many-agents">OpenCode lists hundreds of agents</a></li>
      <li><a href="#consult">A peer cannot be consulted</a></li>
    </ul>
  </div>
  <div class="toc-card">
    <p class="toc-group">Lore and tools</p>
    <ul>
      <li><a href="#mcp-tools">MCP tools do not appear</a></li>
      <li><a href="#mcp-start">The MCP server will not start</a></li>
      <li><a href="#verify">A quote does not verify</a></li>
      <li><a href="#no-lore">The persona has no archive access</a></li>
    </ul>
  </div>
  <div class="toc-card">
    <p class="toc-group">Maintenance</p>
    <ul>
      <li><a href="#tests">Tests fail after cloning</a></li>
    </ul>
  </div>
</div>
</nav>

<details class="section" open>
<summary><span class="section-title" role="heading" aria-level="2" id="database-missing">The database is missing <a class="heading-anchor" href="#database-missing" aria-label="Permalink to The database is missing">#</a></span></summary>

You will see `database not found`, or a persona will say it cannot read the archive.

The database is built, not committed. Download the release copy or build it:

<pre><code>curl -fsSL https://github.com/sagaciouszu/destiny-agent-grimoire/releases/latest/download/grimoire.db -o db/grimoire.db
python3 db/migrate.py</code></pre>

Run one, not both. If an earlier download left a half-file behind, delete
`db/grimoire.db` first.

</details>

<details class="section">
<summary><span class="section-title" role="heading" aria-level="2" id="python-missing">Python is missing or too old <a class="heading-anchor" href="#python-missing" aria-label="Permalink to Python is missing or too old">#</a></span></summary>

Check what you have:

<pre><code>python3 --version</code></pre>

The archive needs Python 3.8 or newer. On Debian or Ubuntu, `sudo apt install python3`
is usually enough. On macOS, use the python.org installer or Homebrew. On
Windows, install from python.org and make sure the launcher adds Python to your
PATH.

If you have several versions, `python3` may point at an old one. Run the commands
with the newer interpreter explicitly, for example `python3.12 db/query.py stats`.

</details>

<details class="section">
<summary><span class="section-title" role="heading" aria-level="2" id="checksum">The checksum does not match <a class="heading-anchor" href="#checksum" aria-label="Permalink to The checksum does not match">#</a></span></summary>

The download was cut short or changed on the way. Delete it and try again; do not
open or migrate a file that failed the check.

<pre><code>rm -f db/grimoire.db
curl -fsSL https://github.com/sagaciouszu/destiny-agent-grimoire/releases/latest/download/grimoire.db -o grimoire.db
curl -fsSL https://github.com/sagaciouszu/destiny-agent-grimoire/releases/latest/download/SHA256SUMS -o SHA256SUMS
sha256sum -c SHA256SUMS
mv grimoire.db db/grimoire.db</code></pre>

If it keeps failing, check your connection or proxy before assuming the release
is wrong.

</details>

<details class="section">
<summary><span class="section-title" role="heading" aria-level="2" id="lore-link">The archive link is broken <a class="heading-anchor" href="#lore-link" aria-label="Permalink to The archive link is broken">#</a></span></summary>

A persona repository expects `lore/` to point at a Grimoire checkout, or to be a
clone of it. If the link was moved or the folder renamed, recreate it:

<pre><code>./setup.sh /path/to/destiny-agent-grimoire</code></pre>

`setup.sh` removes a broken link and makes a new one. Keep the Grimoire outside
the OpenCode agents folder; inside it, every lore file would be picked up as an
agent.

</details>

<details class="section">
<summary><span class="section-title" role="heading" aria-level="2" id="agent-missing">An agent is not listed <a class="heading-anchor" href="#agent-missing" aria-label="Permalink to An agent is not listed">#</a></span></summary>

Run the sync again and look at what landed:

<pre><code>cd destiny-agent-grimoire
bash scripts/sync-live-agents.sh</code></pre>

You should see `drifter.md`, `eris.md`, `drifter-consult.md` and
`eris-consult.md` in `~/.config/opencode/agents/`. The companion files should be
inert, and the Grimoire should live outside that folder.

If the persona appears but cannot be selected, check `default_agent` in
`~/.config/opencode/opencode.json`. Use the id (`drifter` or `eris`), not the file
name with `.md`.

</details>

<details class="section">
<summary><span class="section-title" role="heading" aria-level="2" id="too-many-agents">OpenCode lists hundreds of agents <a class="heading-anchor" href="#too-many-agents" aria-label="Permalink to OpenCode lists hundreds of agents">#</a></span></summary>

OpenCode treats every Markdown file under `agents/` as an agent, including files
inside a linked folder. A Grimoire link inside that folder makes every lore card
look like an agent.

<pre><code>ls -la ~/.config/opencode/agents</code></pre>

If `lore` appears there, move it outside. Remove the link if it is a symlink; move
the folder if it is a real directory:

<pre><code>rm ~/.config/opencode/agents/lore
# or, when it is a real folder:
mv ~/.config/opencode/agents/lore ~/.config/opencode/lore</code></pre>

Then run the sync again and reload OpenCode. The sync also removes stray `lore`
links and marks companion notes as inactive.

</details>

<details class="section">
<summary><span class="section-title" role="heading" aria-level="2" id="consult">A peer cannot be consulted <a class="heading-anchor" href="#consult" aria-label="Permalink to A peer cannot be consulted">#</a></span></summary>

Consultation targets the peer's `-consult` entry, not the main agent. Main agents
are primary-only and cannot be started as subagents.

Check that the series list has both agents and that the consult files were
installed. A consult copy is read-only on purpose: it cannot run shell commands or
pass the question on. That is expected, not a bug.

</details>

<details class="section">
<summary><span class="section-title" role="heading" aria-level="2" id="mcp-tools">MCP tools do not appear <a class="heading-anchor" href="#mcp-tools" aria-label="Permalink to MCP tools do not appear">#</a></span></summary>

Install the adapter, then register the path it prints. In the Grimoire checkout:

<pre><code>bash mcp-server/install.sh</code></pre>

From an agent repository, the same installer is under `lore/`:

<pre><code>bash lore/mcp-server/install.sh</code></pre>

The client should start `mcp-server/run.sh` (or `lore/mcp-server/run.sh` from an
agent repository), not `server.py`. Use the absolute path when the client does not
start in the repository folder. The server is stdio-only; a client that expects a
URL cannot connect to it without a local bridge.

</details>

<details class="section">
<summary><span class="section-title" role="heading" aria-level="2" id="mcp-start">The MCP server will not start <a class="heading-anchor" href="#mcp-start" aria-label="Permalink to The MCP server will not start">#</a></span></summary>

Most of these are setup problems, not canon problems.

- **The virtual environment is missing.** Run `bash mcp-server/install.sh` again;
  it creates the environment and installs the locked packages.
- **The path is wrong.** Point the client at the absolute path to
  `mcp-server/run.sh`, not at the folder.
- **The database is missing.** The server needs `db/grimoire.db`; run the install
  page first.
- **The client speaks HTTP.** This server speaks stdio. Put a local bridge in front
  of it, or use a client that can launch a process.

You can test the server by hand from the repository root:

<pre><code>mcp-server/.venv/bin/python tests/mcp-test.py</code></pre>

</details>

<details class="section">
<summary><span class="section-title" role="heading" aria-level="2" id="verify">A quote does not verify <a class="heading-anchor" href="#verify" aria-label="Permalink to A quote does not verify">#</a></span></summary>

`verify` is picky about what counts as canon. Common causes:

- **It is a paraphrase.** Reword it as your own words, or find the real line.
- **The speaker is wrong or too vague.** Use the full speaker name and add
  `--exact`.
- **Hidden characters came along for the ride.** They are cleaned up before
  comparison, but copied text can still differ from the source.
- **The database is stale.** Rebuild it and try again.

If it still fails, do not quote the line as canon.

</details>

<details class="section">
<summary><span class="section-title" role="heading" aria-level="2" id="no-lore">The agent has no archive access <a class="heading-anchor" href="#no-lore" aria-label="Permalink to The agent has no archive access">#</a></span></summary>

The character files can work without the archive, but canon lookup and quote
checks cannot. If a persona suddenly stops citing anything:

- Check `lore/db/grimoire.db` exists.
- Check `lore/` points at a real Grimoire checkout.
- Run `./setup.sh` from the persona's repository.
- Confirm the runtime is starting in the repository folder; the helper scripts
  resolve paths from their own location.

A consult copy has no shell on purpose. It relies on the MCP server for canon; if
MCP is not connected, expect a shorter, less grounded answer.

</details>

<h2 id="for-experts">For Experts (or enthusiasts) <a class="heading-anchor" href="#for-experts" aria-label="Permalink to For Experts (or enthusiasts)">#</a></h2>

<p class="muted">Repository-level checks and test failures.</p>

<details class="section">
<summary><span class="section-title" role="heading" aria-level="2" id="tests">Tests fail after cloning <a class="heading-anchor" href="#tests" aria-label="Permalink to Tests fail after cloning">#</a></span></summary>

A fresh clone has no runtime memory files yet. Do the onboarding step before the
audit:

<pre><code>./setup.sh --no-mcp "$PWD/lore"
bash tests/master-audit.sh</code></pre>

That is the same order CI uses. If a suite still fails, run that suite directly;
it prints the missing file or mismatched count instead of hiding it.

</details>

## Still stuck

- [Install the Grimoire]({{ '/grimoire/install/' | url }})
- [Deploy an agent]({{ '/agents/install/' | url }})
- [Read the standards](https://github.com/sagaciouszu/destiny-agent-grimoire/blob/master/STANDARDS.md)
- [Open an issue](https://github.com/sagaciouszu/destiny-agent-grimoire/issues)
