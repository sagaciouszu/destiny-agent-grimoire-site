---
layout: page
title: Connect an AI
category: The Grimoire · Connect an AI
lede: MCP is a small connector that lets an AI app look things up in the Grimoire instead of guessing. Set it up once, then ask the app questions.
section: grimoire
---

<nav class="setup-order setup-order--inline" aria-label="Recommended setup order">
  <span class="setup-order-label">Setup order</span>
  <ol>
    <li><a href="{{ '/grimoire/install/' | url }}">1. Grimoire</a></li>
    <li><a href="{{ '/grimoire/mcp/' | url }}" aria-current="step">2. AI access <span class="setup-optional">optional</span></a></li>
    <li><a href="{{ '/personas/install/' | url }}">3. Characters</a></li>
  </ol>
</nav>

## What it does

The connector gives an AI app a handful of lookup tools: search the library,
pull a character's lines, read item lore and check a quote. The app calls those
tools itself instead of asking you to run commands.

It runs on your computer. There is no website to sign into and no account. Your
app starts it when needed and stops it when you are done.

## Why use it

<ul class="tile-grid">
  <li><strong>The AI stops guessing</strong><p>It can search the library and read the passage before it answers.</p></li>
  <li><strong>Quotes can be checked</strong><p>The quote checker is one of the tools, so the app can ask whether a line is real.</p></li>
  <li><strong>Your characters get sharper</strong><p>All six characters use the same library. The connector gives them a direct lookup path.</p></li>
  <li><strong>It is safe to leave on</strong><p>The library is read-only: the connector cannot change it, run commands or reach the network.</p></li>
</ul>

You don't need this to use the Grimoire. It is for AI apps that can start a
local helper.

## Set it up

In the Grimoire folder:

<pre><code>bash mcp-server/install.sh</code></pre>

The installer creates a small local setup and prints a configuration block to
paste into your app. Restart the app after you add it. If your app asks for a
path, point it at `mcp-server/run.sh`; use the full path if the app starts
somewhere else.

The connector needs Python 3.10 or newer. The search tool still runs on 3.8 or
newer.

## Try it

Once the app is connected, ask it for something that needs a lookup:

- “Find Eris lines about the Hive.”
- “What does the library say about the Leviathan?”
- “Verify ‘Absolutely not.’ as an Eris Morn quote.”
- “Show me items with lore about the Moon.”

If the app lists the Grimoire tools but answers from memory anyway, ask it to
use the search or quote-checking tool directly.

<details class="section experts">
<summary><span class="section-title" role="heading" aria-level="2" id="for-experts">For Experts (or enthusiasts)</span></summary>

<p class="muted">The client configuration, all {{ grimoire.mcp_tools }} tools, and the safety limits.</p>

<h3 id="client-config">Client configuration</h3>

A typical local configuration looks like this:

<pre><code>{
  "mcp": {
    "servers": {
      "grimoire": {
        "type": "local",
        "command": ["/absolute/path/to/destiny-agent-grimoire/mcp-server/run.sh"]
      }
    }
  }
}</code></pre>

The exact shape depends on your client. If it only accepts remote servers, put a
local bridge in front of the stdio process.

<h3 id="the-tools">The tools</h3>

All read-only:

<ul class="tile-grid">
  <li><code>search</code><p>Full-text search across books, transcripts, cards, interactions, items and records.</p></li>
  <li><code>character</code><p>Curated lines for a character, or every transcript line with <code>all_lines</code>.</p></li>
  <li><code>character_info</code><p>Aliases, quote count and spoken-line count for a character.</p></li>
  <li><code>entity</code><p>Resolve a name to an entity, with aliases, relations and ranked documents.</p></li>
  <li><code>item</code><p>Item lore and metadata by slug.</p></li>
  <li><code>find_item</code><p>Find items by a title or slug fragment.</p></li>
  <li><code>book</code><p>Book metadata and its entries.</p></li>
  <li><code>transcript</code><p>Transcript metadata and dialogue lines, optionally filtered by speaker.</p></li>
  <li><code>record</code><p>A triumph record by slug or title.</p></li>
  <li><code>seals</code><p>Every manifest seal with its triumph record count.</p></li>
  <li><code>seal</code><p>A seal and its triumph records, by hash or name.</p></li>
  <li><code>lore</code><p>A manifest lore entry by hash or title fragment.</p></li>
  <li><code>list_records</code><p>Cheap listings of books, characters, speakers or records.</p></li>
  <li><code>stats</code><p>Row counts, top item types and top speakers.</p></li>
  <li><code>verify</code><p>Check one quote, optionally with a speaker and exact mode.</p></li>
  <li><code>verify_many</code><p>Check up to twenty quotes in one call.</p></li>
  <li><code>activities</code><p>List raids, dungeons, seasonal activities and other content with coverage.</p></li>
  <li><code>activity</code><p>Activity details, coverage, speakers and classified transcripts.</p></li>
  <li><code>seasons</code><p>Every season and episode with its official number and coverage.</p></li>
  <li><code>events</code><p>Every rotating event with coverage and occurrence count.</p></li>
  <li><code>event</code><p>Event details, yearly occurrences and classified transcripts.</p></li>
  <li><code>coverage</code><p>Coverage summary for activities, seasons and events, including gaps.</p></li>
</ul>

The two verification tools are the important ones. A line that fails `verify` is
not in this library, even if it sounds right; a pass means it is present as
attributed, not that it is current live dialogue.

<h3 id="safety">Safety</h3>

The database is opened read-only. There is no SQL tool, no write path and no
network access. Limits are clamped, long text is trimmed, resource reads are
capped, and queries are capped before they reach SQLite.

That makes the server safe to leave connected while you work. It also means it
cannot fix or ingest anything; those steps stay in the repository.

<h3 id="troubleshooting">If it will not connect</h3>

See [the AI connection troubleshooting]({{ '/troubleshooting/#mcp-tools' | url }}) for the
usual causes: missing virtual environment, wrong path, or a client that cannot
launch a local process.

</details>

## Next

- [Meet the characters]({{ '/personas/' | url }})
- [Use another app]({{ '/personas/platforms/' | url }})
- [Install the Grimoire]({{ '/grimoire/install/' | url }})
