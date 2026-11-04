---
section: grimoire
layout: page
title: The Grimoire
category: The Grimoire · Overview
lede: One searchable place for Destiny lore, built so you and an AI can read the same source and check the same quotes.
---

## What it is

The Grimoire is one database file in a folder on your computer. Think of it as a
local library in a single file: Destiny's books and their entries, dialogue from
missions, raids, seasons and events, grimoire cards, item lore, triumphs and
seals, plus a hand-picked list of characters and the lines they speak. The
dialogue is not a sampler of famous quotes; it is the conversations themselves,
with the speaker and source kept alongside.

You get the file from the project's download page, or by building it from the
source files yourself. It is not an app and it does not install a service. Once
it is on your computer, every lookup is local: nothing runs in the background,
nothing is downloaded while you search, and nothing is sent anywhere. No account,
no key, no network.

Because everything sits in one place, a single search can cross all of it at
once. You can follow a character through a storyline, find the exact exchange
behind a half-remembered quote, read the lore attached to a weapon or a piece of
armor, or compare how different factions describe the same event. You can browse
it yourself, or let an AI look things up through the optional connector.

## Why it helps

- **You stop tab-hopping.** Search one place instead of a dozen wiki pages.
- **You can check a quote.** A built-in checker tells you whether a line is
  real before you repeat it.
- **Your AI sees the same text you do.** All five characters read this library.
  With the optional connector, a compatible AI app can read it too.
- **The pieces stay separate.** The library is useful on its own. The AI
  connection is optional. The characters are optional. Together they save you
  from copying lore into a chat and hoping.

## What's inside

The current build has:

<div class="stat-grid">
  <div><strong>110</strong><span>books</span></div>
  <div><strong>1,158</strong><span>book entries</span></div>
  <div><strong>1,294</strong><span>transcripts</span></div>
  <div><strong>73,012</strong><span>dialogue lines</span></div>
  <div><strong>2,889</strong><span>grimoire cards</span></div>
  <div><strong>58,764</strong><span>items</span></div>
  <div><strong>18</strong><span>expansions</span></div>
  <div><strong>28</strong><span>seasons</span></div>
  <div><strong>9</strong><span>events</span></div>
  <div><strong>67</strong><span>activities</span></div>
  <div><strong>71</strong><span>triumphs and seals</span></div>
  <div><strong>20</strong><span>curated characters</span></div>
</div>

<p>There are 124,484 searchable entries.</p>

The numbers show the size of the library. The line you quote is the proof.

## How the pieces fit

<ul class="tile-grid">
  <li><strong>The Grimoire</strong><p>The library. It is the part everything else reads.</p></li>
  <li><strong>The AI connection</strong><p>Optional lookup tools an AI app can use, without giving it a command line.</p></li>
  <li><strong>The characters</strong><p>Independent voices with their own rules and memory. They read the Grimoire for the official text.</p></li>
</ul>

You can start with any one piece. Adding the others does not require a second
copy.

## Start here

- [Install the Grimoire]({{ '/grimoire/install/' | url }}) — the short version is
  one download and one check.
- [Connect an AI]({{ '/grimoire/mcp/' | url }}) — useful if you want an assistant
  to search for you.
- [Meet the characters]({{ '/agents/' | url }}) — useful if you want a character to
  talk to, not just a search box.

<h2 id="for-experts">For Experts (or enthusiasts) <a class="heading-anchor" href="#for-experts" aria-label="Permalink to For Experts (or enthusiasts)">#</a></h2>

<p class="muted">How the archive is built, what tools can use it, and the quote
rules. Skip this if you only want to read lore.</p>

<h3 id="how-it-is-built">How it is built</h3>

The database is built from files in the repository, not fetched while you search.
Every row records where it came from. Speaker names are cleaned up so one
character does not split across several spellings.

Search uses SQLite FTS5. You get the passage back, not a list of files to open.

<h3 id="ways-to-read-it">Ways to read it</h3>

<ul class="tile-grid">
  <li><strong>Command line</strong><p>Search, character lines, items, books, transcripts, records and quote checks. JSON output for scripts.</p></li>
  <li><strong>MCP server</strong><p>Eighteen read-only tools over local stdio for AI clients.</p></li>
  <li><strong>Skill file</strong><p>A drop-in skill for runtimes that load skills instead of MCP servers.</p></li>
  <li><strong><code>db/capabilities.json</code></strong><p>The machine-readable manifest of tables, views, commands and contracts.</p></li>
</ul>

The command line and MCP server call the same Python layer. Fix a query once and
both get it.

<h3 id="the-quote-checker">The quote checker</h3>

`verify` takes a line and an optional speaker, normalises it the same way as
canon, and exits non-zero when the line is not there. Exact mode wants a whole
canonical row, not a fragment.

<pre><code>python3 db/query.py verify "Absolutely not." --speaker "Eris Morn" --exact</code></pre>

That is the check to run before putting words in a character's mouth.

<div class="callout">
<h3 id="not-canon">Not canon</h3>
<p>This is a fan-built, non-commercial project. Destiny, its text, characters and art belong to Bungie. The library is a reading and checking aid, not a substitute for the source material or Bungie's own published lore.</p>
</div>

## Next

- [Install and search the Grimoire]({{ '/grimoire/install/' | url }})
- [Connect an AI]({{ '/grimoire/mcp/' | url }})
- [Troubleshoot a missing library or connection]({{ '/troubleshooting/' | url }})
- [Read the standards](https://github.com/sagaciouszu/destiny-agent-grimoire/blob/master/STANDARDS.md)
