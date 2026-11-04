---
section: grimoire
layout: page
title: The Grimoire
category: The Grimoire · Overview
lede: One searchable place for Destiny lore, built so you and an AI can read the same source and check the same quotes.
---

## What it is

The Grimoire is one file on your computer. It holds Destiny's books, dialogue,
grimoire cards, item text, triumphs and a short list of characters with their
best lines. You can search it from a terminal, or let an AI search it through MCP.

Nothing is downloaded while you search. Once the file is on your computer, every
lookup is local. No account, no API key, no network.

## Why it helps

- **You stop tab-hopping.** Search one place instead of a dozen wiki pages.
- **You can check a quote.** The archive ships a `verify` command, so you can
  find out whether a line is real before you repeat it.
- **Your AI sees the same text you do.** The Drifter and Eris read this archive. With
  MCP, any compatible client can read it too.
- **The pieces stay separate.** The archive is useful on its own. The MCP server
  is optional. The personas are optional. Together they save you from copying
  lore into a prompt and hoping.

## What's inside

The current build has:

<div class="stat-grid">
  <div><strong>110</strong><span>books</span></div>
  <div><strong>1,158</strong><span>book entries</span></div>
  <div><strong>1,294</strong><span>transcripts</span></div>
  <div><strong>73,012</strong><span>dialogue lines</span></div>
  <div><strong>2,889</strong><span>grimoire cards</span></div>
  <div><strong>58,764</strong><span>items</span></div>
  <div><strong>71</strong><span>triumphs and seals</span></div>
  <div><strong>20</strong><span>curated characters</span></div>
</div>

<p>There are 124,484 searchable rows.</p>

The numbers show the size of the archive. The row you quote is the proof.

## How the pieces fit

<ul class="tile-grid">
  <li><strong>The Grimoire</strong><p>The archive. It is the part everything else reads.</p></li>
  <li><strong>The MCP server</strong><p>Turns the archive into read-only tools an AI can call, without giving it a shell.</p></li>
  <li><strong>The personas</strong><p>Independent characters with their own voice, guardrails and memory. They read the Grimoire for canon.</p></li>
</ul>

You can start with any one piece. Adding the others does not require a second
archive.

## Start here

- [Install the Grimoire]({{ '/grimoire/install/' | url }}) — the short version is
  one download and one command.
- [Connect an AI with MCP]({{ '/grimoire/mcp/' | url }}) — useful if you want an
  assistant to search for you.
- [Meet the personas]({{ '/agents/' | url }}) — useful if you want a character to
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
<p>This is a fan-built, non-commercial project. Destiny, its text, characters and art belong to Bungie. The database is a reading and checking aid, not a substitute for the source material or Bungie's own published lore.</p>
</div>

## Next

- [Install and query the Grimoire]({{ '/grimoire/install/' | url }})
- [Set up the MCP server]({{ '/grimoire/mcp/' | url }})
- [Troubleshoot a missing database or tool]({{ '/troubleshooting/' | url }})
- [Read the standards](https://github.com/sagaciouszu/destiny-agent-grimoire/blob/master/STANDARDS.md)
