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
dialogue includes full conversations and extracted gameplay subtitles. It is not
a complete archive of every line, and some rows are narration or objectives from
a string bank; the speaker, source and tier are kept alongside.

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
- **Your AI sees the same text you do.** All six characters read this library.
  With the optional connector, a compatible AI app can read it too.
- **The pieces stay separate.** The library is useful on its own. The AI
  connection is optional. The characters are optional. Together they save you
  from copying lore into a chat and hoping.

## What's inside

The current build has:

<div class="stat-grid">
  <div><strong>{{ grimoire.counts.books | commas }}</strong><span>books</span></div>
  <div><strong>{{ grimoire.counts.book_entries | commas }}</strong><span>book entries</span></div>
  <div><strong>{{ grimoire.counts.transcripts | commas }}</strong><span>transcripts</span></div>
  <div><strong>{{ grimoire.counts.transcript_lines | commas }}</strong><span>transcript lines</span></div>
  <div><strong>{{ grimoire.counts.grimoire_cards | commas }}</strong><span>grimoire cards</span></div>
  <div><strong>{{ grimoire.counts.items | commas }}</strong><span>items</span></div>
  <div><strong>{{ grimoire.counts.expansions | commas }}</strong><span>expansions</span></div>
  <div><strong>{{ grimoire.counts.seasons | commas }}</strong><span>seasons</span></div>
  <div><strong>{{ grimoire.counts.events | commas }}</strong><span>events</span></div>
  <div><strong>{{ grimoire.counts.activities | commas }}</strong><span>activities</span></div>
  <div><strong>{{ grimoire.counts.seals | commas }}</strong><span>seals</span></div>
  <div><strong>{{ grimoire.counts.characters | commas }}</strong><span>curated characters</span></div>
</div>

<p>There are {{ grimoire.counts.fts | commas }} searchable entries.</p>

The numbers show the size of the library. They do not claim completeness:
{{ grimoire.counts.caption_headers | commas }} of the transcript headers and
{{ grimoire.counts.caption_lines | commas }} of the lines are caption-tier, and
some activities have no dialogue. Read [Limits and provenance]({{ '/grimoire/limits/' | url }})
before quoting or publishing.

## How the pieces fit

{% include "fit-map.njk" %}

You can start with any one piece. Adding the others does not require a second
copy.

## Start here

- [Install the Grimoire]({{ '/grimoire/install/' | url }}) : the short version is
  one download and one check.
- [Connect an AI]({{ '/grimoire/mcp/' | url }}) : useful if you want an assistant
  to search for you.
- [Meet the characters]({{ '/personas/' | url }}) : useful if you want a character to
  talk to, not just a search box.

<h2 id="for-experts">For Experts (or enthusiasts) <a class="heading-anchor" href="#for-experts" aria-label="Permalink to For Experts (or enthusiasts)">#</a></h2>

<p class="muted">How the archive is built, what tools can use it, and the quote
rules. Skip this if you only want to read lore.</p>

<h3 id="how-it-is-built">How it is built</h3>

The database is built from files in the repository, not fetched while you search.
Every content row carries the source we have; where a source is missing, the
field stays empty rather than being filled in. Speaker names are cleaned up so one character does not split
across several spellings.

Search uses SQLite FTS5. You get the passage back, not a list of files to open.

<h3 id="ways-to-read-it">Ways to read it</h3>

<ul class="tile-grid">
  <li><strong>Command line</strong><p>Search, character lines, items, books, transcripts, records and quote checks. JSON output for scripts.</p></li>
  <li><strong>MCP server</strong><p>{{ grimoire.mcp_tools }} read-only tools over local stdio for AI clients.</p></li>
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
<p>This is a fan-built, non-commercial project. Destiny, its text, characters and art belong to Bungie. The library is a reading and checking aid, not a substitute for the source material or Bungie's own published lore. A passing <code>verify</code> means the line is in this corpus, not that Bungie published it in that form.</p>
</div>

## Next

- [Install and search the Grimoire]({{ '/grimoire/install/' | url }})
- [Connect an AI]({{ '/grimoire/mcp/' | url }})
- [Troubleshoot a missing library or connection]({{ '/troubleshooting/' | url }})
- [Read the standards](https://github.com/sagaciouszu/destiny-agent-grimoire/blob/master/STANDARDS.md)
