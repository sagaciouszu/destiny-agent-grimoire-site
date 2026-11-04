---
layout: page
title: Troubleshooting
category: Diagnostics
lede: Start with the short list. If your symptom is there, the fix is probably one step away. The deeper checks are grouped below.
---

<details class="section" open>
<summary><span class="section-title" role="heading" aria-level="2" id="first-checks">Try this first <a class="heading-anchor" href="#first-checks" aria-label="Permalink to Try this first">#</a></span></summary>

<p>Most first-run problems are one of these:</p>

<ol>
  <li><strong>The library file is missing.</strong> Download it from the releases page, or rebuild it from the project files.</li>
  <li><strong>You are in the wrong folder.</strong> Run commands from the main project folder, not <code>db/</code> or <code>agents/</code>.</li>
  <li><strong>Your AI app points at the wrong file.</strong> It should start the connector's launcher, <code>mcp-server/run.sh</code>, not the Python file.</li>
  <li><strong>A character cannot find the library.</strong> Check the <code>lore/</code> link and that <code>lore/db/grimoire.db</code> exists.</li>
</ol>

<p>If none of those fit, find your symptom below.</p>

</details>

<nav class="toc toc-tiles" aria-labelledby="toc-title">
<p class="toc-title" id="toc-title">Jump to a symptom</p>
<label class="toc-filter" for="symptom-filter">Filter symptoms
  <input id="symptom-filter" type="search" placeholder="library, AI connection, character…" data-symptom-filter>
</label>
<p class="toc-filter-empty" data-filter-empty hidden>No matching symptoms.</p>
<div class="toc-grid">
  <div class="toc-card">
    <p class="toc-group">First run</p>
    <ul>
      <li><a href="#database-missing">The library file is missing</a></li>
      <li><a href="#python-missing">Python is missing or too old</a></li>
      <li><a href="#checksum">The download is incomplete</a></li>
      <li><a href="#lore-link">A character cannot find the library</a></li>
    </ul>
  </div>
  <div class="toc-card">
    <p class="toc-group">Personas</p>
    <ul>
      <li><a href="#agent-missing">A character is not listed</a></li>
      <li><a href="#too-many-agents">OpenCode lists too many characters</a></li>
      <li><a href="#consult">One character cannot ask another</a></li>
    </ul>
  </div>
  <div class="toc-card">
    <p class="toc-group">Library and AI</p>
    <ul>
      <li><a href="#mcp-tools">The AI connection is not showing up</a></li>
      <li><a href="#mcp-start">The AI connection will not start</a></li>
      <li><a href="#verify">The quote checker says no</a></li>
      <li><a href="#no-lore">A character cannot read the library</a></li>
    </ul>
  </div>
  <div class="toc-card">
    <p class="toc-group">Maintenance</p>
    <ul>
      <li><a href="#tests">The project checks fail after downloading</a></li>
    </ul>
  </div>
</div>
</nav>

<details class="section" open>
<summary><span class="section-title" role="heading" aria-level="2" id="database-missing">The library file is missing <a class="heading-anchor" href="#database-missing" aria-label="Permalink to The library file is missing">#</a></span></summary>

You will see `database not found`, or a character will say it cannot read the
library.

The library file is not included with the project. Download it from the releases
page or build it:

<pre><code>curl -fsSL https://github.com/sagaciouszu/destiny-agent-grimoire/releases/latest/download/grimoire.db -o db/grimoire.db
python3 db/migrate.py</code></pre>

Do one or the other. If an earlier download left a partial file, delete
`db/grimoire.db` first.

</details>

<details class="section">
<summary><span class="section-title" role="heading" aria-level="2" id="python-missing">Python is missing or too old <a class="heading-anchor" href="#python-missing" aria-label="Permalink to Python is missing or too old">#</a></span></summary>

Check what you have:

<pre><code>python3 --version</code></pre>

The search tool needs Python 3.8 or newer. On Debian or Ubuntu, `sudo apt install python3`
is usually enough. On macOS, use the python.org installer or Homebrew. On
Windows, install from python.org and make sure the launcher adds Python to your
PATH.

If you have several versions, `python3` may point at an old one. Run the commands
run the commands with the newer Python explicitly, for example `python3.12 db/query.py stats`.

</details>

<details class="section">
<summary><span class="section-title" role="heading" aria-level="2" id="checksum">The download is incomplete <a class="heading-anchor" href="#checksum" aria-label="Permalink to The checksum does not match">#</a></span></summary>

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
<summary><span class="section-title" role="heading" aria-level="2" id="lore-link">A character cannot find the library <a class="heading-anchor" href="#lore-link" aria-label="Permalink to A character cannot find the library">#</a></span></summary>

A character project expects `lore/` to point at a Grimoire folder, or to be a
copy of it. If the link was moved or the folder renamed, recreate it:

<pre><code>./setup.sh /path/to/destiny-agent-grimoire</code></pre>

`setup.sh` removes a broken link and makes a new one. Keep the Grimoire outside
the OpenCode agents folder; inside it, every lore file would be picked up as an
agent.

</details>

<details class="section">
<summary><span class="section-title" role="heading" aria-level="2" id="agent-missing">A character is not listed <a class="heading-anchor" href="#agent-missing" aria-label="Permalink to An agent is not listed">#</a></span></summary>

Run the sync again and look at what landed:

<pre><code>cd destiny-agent-grimoire
bash scripts/sync-live-agents.sh</code></pre>

You should see `drifter.md`, `eris.md`, `drifter-consult.md` and
`eris-consult.md` in `~/.config/opencode/agents/`. The companion files should be
inert, and the Grimoire should live outside that folder.

If the character appears but cannot be selected, check `default_agent` in
`~/.config/opencode/opencode.json`. Use the id (`drifter` or `eris`), not the file
name with `.md`.

</details>

<details class="section">
<summary><span class="section-title" role="heading" aria-level="2" id="too-many-agents">OpenCode lists too many characters <a class="heading-anchor" href="#too-many-agents" aria-label="Permalink to OpenCode lists hundreds of agents">#</a></span></summary>

OpenCode treats every Markdown file under `agents/` as a character, including
files inside a linked folder. A Grimoire link inside that folder makes every lore
card look like a character.

<pre><code>ls -la ~/.config/opencode/agents</code></pre>

If `lore` appears there, move it outside. Remove the shortcut if it is a link;
move the folder if it is a real folder:

<pre><code>rm ~/.config/opencode/agents/lore
# or, when it is a real folder:
mv ~/.config/opencode/agents/lore ~/.config/opencode/lore</code></pre>

Then run the sync again and reload OpenCode. The sync also removes stray `lore`
links and marks companion notes as inactive.

</details>

<details class="section">
<summary><span class="section-title" role="heading" aria-level="2" id="consult">One character cannot ask another <a class="heading-anchor" href="#consult" aria-label="Permalink to A peer cannot be consulted">#</a></span></summary>

A character asks another through a read-only helper copy, not through the main
character. Main characters cannot be started as helpers.

Check that the series list has both agents and that the consult files were
installed. A helper copy is read-only on purpose: it cannot run commands or
pass the question on. That is expected, not a bug.

</details>

<details class="section">
<summary><span class="section-title" role="heading" aria-level="2" id="mcp-tools">The AI connection is not showing up <a class="heading-anchor" href="#mcp-tools" aria-label="Permalink to The AI connection is not showing up">#</a></span></summary>

Install the connector, then register the path it prints. In the Grimoire folder:

<pre><code>bash mcp-server/install.sh</code></pre>

From a character project, the same installer is under `lore/`:

<pre><code>bash lore/mcp-server/install.sh</code></pre>

Your app should start `mcp-server/run.sh` (or `lore/mcp-server/run.sh` from a
character project), not `server.py`. Use the full path if the app does not start
in the project folder. The connector uses a direct local connection; an app that
expects a web address needs a local bridge.

</details>

<details class="section">
<summary><span class="section-title" role="heading" aria-level="2" id="mcp-start">The AI connection will not start <a class="heading-anchor" href="#mcp-start" aria-label="Permalink to The AI connection will not start">#</a></span></summary>

Most of these are setup problems, not library problems.

- **The local setup is missing.** Run `bash mcp-server/install.sh` again; it
  creates the setup and installs the required packages.
- **The path is wrong.** Point your app at the full path to
  `mcp-server/run.sh`, not at the folder.
- **The library file is missing.** The connector needs `db/grimoire.db`; run the
  install page first.
- **The app expects a web address.** This connector uses a direct local
  connection. Use a local bridge, or an app that can start a local helper.

You can test the connector by hand from the main project folder:

<pre><code>mcp-server/.venv/bin/python tests/mcp-test.py</code></pre>

</details>

<details class="section">
<summary><span class="section-title" role="heading" aria-level="2" id="verify">The quote checker says no <a class="heading-anchor" href="#verify" aria-label="Permalink to A quote does not verify">#</a></span></summary>

The quote checker is strict about what counts as official text. Common causes:

- **It is a paraphrase.** Reword it as your own words, or find the real line.
- **The speaker is wrong or too vague.** Use the full speaker name and exact mode.
- **Hidden characters came along for the ride.** They are cleaned up before
  comparison, but copied text can still differ from the source.
- **The library is out of date.** Rebuild it and try again.

If it still fails, do not quote the line as official text.

</details>

<details class="section">
<summary><span class="section-title" role="heading" aria-level="2" id="no-lore">A character cannot read the library <a class="heading-anchor" href="#no-lore" aria-label="Permalink to A character cannot read the library">#</a></span></summary>

The character files can work without the library, but lookup and quote checks
cannot. If a character suddenly stops citing anything:

- Check `lore/db/grimoire.db` exists.
- Check `lore/` points at a real Grimoire folder.
- Run `./setup.sh` from the character project.
- Confirm your app starts in the project folder; the helper scripts find their
  files from their own location.

A helper copy has no command line on purpose. It relies on the AI connection for
lookup; without it, expect a shorter, less grounded answer.

</details>

<h2 id="for-experts">For Experts (or enthusiasts) <a class="heading-anchor" href="#for-experts" aria-label="Permalink to For Experts (or enthusiasts)">#</a></h2>

<p class="muted">Repository-level checks and test failures.</p>

<details class="section">
<summary><span class="section-title" role="heading" aria-level="2" id="tests">The project checks fail after downloading <a class="heading-anchor" href="#tests" aria-label="Permalink to The project checks fail after downloading">#</a></span></summary>

A fresh download has no setup files yet. Run the first-run setup before the
checks:

<pre><code>./setup.sh --no-mcp "$PWD/lore"
bash tests/master-audit.sh</code></pre>

That is the same order the project uses. If a check still fails, run it directly;
it prints the missing file or mismatched count instead of hiding it.

</details>

## Still stuck

- [Install the Grimoire]({{ '/grimoire/install/' | url }})
- [Deploy an agent]({{ '/agents/install/' | url }})
- [Read the standards](https://github.com/sagaciouszu/destiny-agent-grimoire/blob/master/STANDARDS.md)
- [Open an issue](https://github.com/sagaciouszu/destiny-agent-grimoire/issues)
