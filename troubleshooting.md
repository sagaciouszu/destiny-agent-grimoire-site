---
layout: page
section: troubleshooting
title: Troubleshooting
category: Help
lede: Start with the short list. If your symptom is there, the fix is probably one step away. The deeper checks are grouped below.
---

<details class="section" open>
<summary><span class="section-title" role="heading" aria-level="2" id="first-checks">Try this first</span></summary>

<p class="muted">A quick map: the <strong>library</strong> is the Grimoire file; your
<strong>app</strong> is the AI tool you use; the <strong>connector</strong> is the
optional bridge between them.</p>

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
      <li><a href="{{ '/troubleshooting/experts/' | url }}#the-project-checks-fail-after-downloading">The project checks fail after downloading</a></li>
      <li><a href="#the-audit-scripts">What the audit scripts check</a></li>
    </ul>
  </div>
</div>
</nav>

<details class="section" open>
<summary><span class="section-title" role="heading" aria-level="2" id="database-missing">The library file is missing</span></summary>

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
<summary><span class="section-title" role="heading" aria-level="2" id="python-missing">Python is missing or too old</span></summary>

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
<summary><span class="section-title" role="heading" aria-level="2" id="checksum">The download is incomplete</span></summary>

The download was cut short or changed on the way. Delete it and try again; do not
open or migrate a file that failed the check.

<pre><code>rm -f db/grimoire.db
curl -fsSL https://github.com/sagaciouszu/destiny-agent-grimoire/releases/latest/download/grimoire.db -o grimoire.db
curl -fsSL https://github.com/sagaciouszu/destiny-agent-grimoire/releases/latest/download/SHA256SUMS -o SHA256SUMS
grep '  grimoire.db$' SHA256SUMS | sha256sum -c -
mv grimoire.db db/grimoire.db</code></pre>

If it keeps failing, check your connection or proxy before assuming the release
is wrong.

</details>

<details class="section">
<summary><span class="section-title" role="heading" aria-level="2" id="lore-link">A character cannot find the library</span></summary>

A character project expects `lore/` to point at a Grimoire folder, or to be a
copy of it. If the link was moved or the folder renamed, recreate it:

<pre><code>./setup.sh /path/to/destiny-agent-grimoire</code></pre>

`setup.sh` removes a broken link and makes a new one. Keep the Grimoire outside
the OpenCode agents folder; inside it, every lore file would be picked up as an
agent.

</details>

<details class="section">
<summary><span class="section-title" role="heading" aria-level="2" id="agent-missing">A character is not listed</span></summary>

Run the sync again and look at what landed:

<pre><code>cd destiny-agent-grimoire
bash scripts/sync-live-agents.sh</code></pre>

You should see one `<id>.md` and one `<id>-consult.md` per character in
`~/.config/opencode/agents/`. The companion files should be inert, and the
Grimoire should live outside that folder.

If the character appears but cannot be selected, check `default_agent` in
`~/.config/opencode/opencode.json`. Use the character id (for example `drifter` or `mara-sov`), not the file name
with `.md`.

</details>

<details class="section">
<summary><span class="section-title" role="heading" aria-level="2" id="too-many-agents">OpenCode lists too many characters</span></summary>

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
<summary><span class="section-title" role="heading" aria-level="2" id="consult">One character cannot ask another</span></summary>

A character asks another through a read-only helper copy, not through the main
character. Main characters cannot be started as helpers.

Check that the series list has both main agents and that the consult files were
installed. A helper copy is read-only on purpose: it cannot run commands or
pass the question on. That is expected, not a bug.

</details>

<details class="section">
<summary><span class="section-title" role="heading" aria-level="2" id="mcp-tools">The AI connection is not showing up</span></summary>

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
<summary><span class="section-title" role="heading" aria-level="2" id="mcp-start">The AI connection will not start</span></summary>

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
<summary><span class="section-title" role="heading" aria-level="2" id="verify">The quote checker says no</span></summary>

The quote checker is strict about what counts as a line in this library. Common causes:

- **It is a paraphrase.** Reword it as your own words, or find the real line.
- **The speaker is wrong or too vague.** Use the full speaker name and exact mode.
- **Hidden characters came along for the ride.** They are cleaned up before
  comparison, but copied text can still differ from the source.
- **The library is out of date.** Rebuild it and try again.

If it still fails, do not present the line as a verified quote.

</details>

<details class="section">
<summary><span class="section-title" role="heading" aria-level="2" id="no-lore">A character cannot read the library</span></summary>

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

## The audit scripts

Nine checks stand between a change and the live site. What each one checks, how
to run it, and what a failure looks like.

Every push to this site runs the same checks you can run yourself. They live in
`scripts/`, they take well under a minute, and they catch the mistakes that
would otherwise reach readers: a dead link, an unlabelled control, a Test Tape
that quotes the games, a consult copy counted as a character.

Most run against the built site; the Test Tapes check also needs the Grimoire
database, and the external-link check needs the network.

### Run them all

<pre><code>npm run check</code></pre>

builds the site, then runs the checks in order: stats, links, accessibility,
axe, Test Tapes, samples, roster and roster sync. The first failure stops the run, so the error you see is
the first thing to fix.

The external-link check has its own command, because it depends on other
people's servers:

<pre><code>npm run check:external</code></pre>

### Links and metadata

`scripts/check-links.py` walks every built page: internal links resolve,
fragments point at real ids, titles and descriptions are unique, canonical
URLs match, and the sitemap lists exactly the pages that were built. It also
catches leftovers , a link to the old site, a double-escaped entity, a
`robots.txt` that forgot the sitemap.

Run it alone:

<pre><code>python3 scripts/check-links.py _site</code></pre>

A failure names the page and the problem:

<pre><code>FAIL: 1 issue(s)
  - /personas/ghost/: dead link /destiny-agent-grimoire-site/personas/ghosts/
</code></pre>

### Basic accessibility

`scripts/check-a11y.py` is a dependency-free pass over the built HTML: every
image has alt text, every control has a label, every link has a name, ids are
unique, and each page has exactly one `h1` and a `lang` attribute.

<pre><code>python3 scripts/check-a11y.py _site</code></pre>

### The axe scan

`scripts/check-axe.mjs` goes further and opens the key pages in a real
browser, in dark, crucible and gambit, running axe-core against the WCAG 2.0 and
2.1 A and AA rules. It uses a local Chromium when one is installed, otherwise
Playwright's (`npx playwright install chromium`), and picks a free port so an
unrelated local server can never satisfy the checks.

<pre><code>node scripts/check-axe.mjs</code></pre>

Failures name the theme, the page and the rule:

<pre><code>FAIL: 1 accessibility violation(s)
  - [dark] Home: color-contrast (serious) , Elements must have sufficient color contrast
</code></pre>

### The Test Tapes check

`scripts/check-tapes.py` loads every tape from `_data/voices.js` and asks the
Grimoire's quote verifier whether any of them matches a canon line word for
word. It also fails when a tape is missing one of the fields the templates
render. This is the check behind the promise under the Test Tapes: none of
them are quotes from the games.

It needs the Grimoire checkout next to this one (`../destiny-agent-grimoire`)
for the database, which is why it runs on your machine but not in the deploy
workflow. Without the checkout it prints `SKIP:` and verifies nothing , the
promise goes unchecked, not proven.

<pre><code>python3 scripts/check-tapes.py</code></pre>

<pre><code>FAIL: 1 tape problem(s)
  - tape 42 (Eris Morn, on grief): matches canon [transcript:hellmouth (Eris Morn)] , Hold the line...
</code></pre>

### The roster check

`scripts/check-roster.py` enforces the rule that consult copies are helpers,
not personas: no `-consult` id may reach the roster or the placeholders, no
consult page gets built or listed in the sitemap, and every character total
written into a page matches the roster. It needs no database, so the deploy
workflow runs it too.

<pre><code>python3 scripts/check-roster.py _site</code></pre>

<pre><code>FAIL: 1 roster problem(s)
  - consult page built: _site/personas/drifter-consult
</code></pre>

### External links

`scripts/check-external.py` collects every link that leaves this site and
requests them eight at a time. A `403` or `429` is a warning , many
documentation hosts block bots , and anything else that does not answer is a
failure.

<pre><code>python3 scripts/check-external.py _site</code></pre>

### Where they run

- **On your machine.** `npm run check` runs everything except the external
  links; `npm run check:external` runs those. Run both before pushing.
- **On every push to `master`.** The deploy workflow builds the site, then
  runs the link, accessibility, roster and axe checks. A failure stops the
  deploy - nothing publishes until it is fixed. The Test Tapes and sample-line
  checks are the exception: continuous integration has no Grimoire database, so
  those two are left to your machine.
- **On pull requests and after each deploy.** A separate workflow runs the
  external-link check. It never blocks a deploy: a rate-limited host should
  not hold up a release.

### Reading a failure

Every script prints one `OK:` line when it passes. When it does not, it
prints `FAIL:` followed by one indented line per problem, and exits non-zero,
which is what stops `npm run check` and fails the CI step.

- `WARN:` comes from the external-link check: the host blocked the request,
  so the link may still be fine. Re-run later or open it by hand.
- `SKIP:` comes from the Test Tapes or sample-line check when the Grimoire
  database is missing. Nothing was verified, and the run still passes.

The fix is usually one line: point the link at the path that exists, add the
alt text, delete the duplicate id. If the checks fail right after a fresh
download rather than after an edit, the setup is what broke , see
[The project checks fail after downloading]({{ '/troubleshooting/experts/' | url }}#the-project-checks-fail-after-downloading).

## Still stuck

- [Install the Grimoire]({{ '/grimoire/install/' | url }})
- [Deploy an agent]({{ '/personas/install/' | url }})
- [Read the standards](https://github.com/sagaciouszu/destiny-agent-grimoire/blob/master/STANDARDS.md)
- [Open an issue](https://github.com/sagaciouszu/destiny-agent-grimoire/issues)
