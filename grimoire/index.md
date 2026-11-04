---
section: grimoire
layout: page
title: The Grimoire
category: The Grimoire · Overview
lede: One searchable place for Destiny lore, built so you and an AI can read the same source and check the same quotes.
---

## What it is

The Grimoire is a single local database of Destiny lore: books, dialogue,
grimoire cards, item text, triumphs and a hand-picked character index. You search
it from a terminal, or connect an AI to it through MCP.

It does not scrape a website while you work. Once the database is on your disk,
every lookup is a local read. No account, no API key, no network.

## Why it helps

- **You stop tab-hopping.** Search one place instead of a dozen wiki pages.
- **You can check a quote.** The archive ships a `verify` command, so you can
  find out whether a line is real before you repeat it.
- **Your AI gets the same canon.** The Drifter and Eris read this archive. With
  MCP, any compatible client can read it too.
- **The pieces stay separate.** The archive is useful on its own. The MCP server
  is optional. The personas are optional. Together they save you from copying
  lore into a prompt and hoping.

## What's inside

The current build has:

- 110 books and 1,158 book entries
- 1,229 transcripts with 71,221 dialogue lines
- 2,889 Destiny 1 grimoire cards
- 2,699 short interactions
- 58,764 items
- 71 triumphs and seals
- 20 curated characters with 1,229 quote-ready lines
- 120,731 rows in the search index

Those numbers are a map, not a citation. The row you quote is the citation.

## How the pieces fit

- **The Grimoire** is the archive. It is the part everything else reads.
- **The MCP server** turns the archive into read-only tools an AI can call. It is
  the easiest way to let an assistant look things up without giving it a shell.
- **The personas** are independent character agents. They bring voice, guardrails
  and memory, and they read the Grimoire for canon.

You can start with any one piece. Adding the others does not require a second
archive.

## Start here

- [Install the Grimoire]({{ '/grimoire/install/' | url }}) — the short version is
  one download and one command.
- [Connect an AI with MCP]({{ '/grimoire/mcp/' | url }}) — useful if you want an
  assistant to search for you.
- [Meet the personas]({{ '/agents/' | url }}) — useful if you want a character to
  talk to, not just a search box.

<h2 id="for-experts">For experts <a class="heading-anchor" href="#for-experts" aria-label="Permalink to For experts">#</a></h2>

<p class="muted">How the archive is built, the interfaces for tools, and the quote
policy. You can skip this if you only want to read lore.</p>

<h3 id="how-it-is-built">How it is built</h3>

The database is built from committed source files, not fetched at runtime. Every
content row records its source, and speaker names are normalised through aliases
so one character does not split across several spellings.

Search uses SQLite FTS5. You get the passage back, not a list of files to open.

<h3 id="ways-to-read-it">Ways to read it</h3>

- **The command line** is the reference tool: search, character lines, items,
  books, transcripts, records and quote checks, with JSON output for scripts.
- **The MCP server** exposes twelve read-only tools over local stdio for AI
  clients.
- **The agent skill** is a drop-in instruction file for runtimes that load skills
  instead of MCP servers.
- **`db/capabilities.json`** is the machine-readable manifest of tables, views,
  commands and contracts.

The command line and MCP server call the same Python layer. Fix a query once and
both get it.

<h3 id="the-quote-checker">The quote checker</h3>

`verify` takes a line and an optional speaker, normalises it the same way as
canon, and exits non-zero when the line is not there. Exact mode wants a whole
canonical row, not a fragment.

<pre><code>python3 db/query.py verify "Absolutely not." --speaker "Eris Morn" --exact</code></pre>

That is the check to run before putting words in a character's mouth.

<h3 id="not-canon">Not canon</h3>

This is a fan-built, non-commercial project. Destiny, its text, characters and art
belong to Bungie. The database is a reading and checking aid, not a substitute
for the source material or Bungie's own published lore.

## Next

- [Install and query the Grimoire]({{ '/grimoire/install/' | url }})
- [Set up the MCP server]({{ '/grimoire/mcp/' | url }})
- [Troubleshoot a missing database or tool]({{ '/troubleshooting/' | url }})
- [Read the standards](https://github.com/sagaciouszu/destiny-agent-grimoire/blob/master/STANDARDS.md)
