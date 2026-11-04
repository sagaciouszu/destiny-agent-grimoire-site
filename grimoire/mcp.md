---
layout: page
title: MCP Server
category: The Grimoire · MCP
lede: MCP is the bridge that lets an AI client search the Grimoire directly. Install it once, point your client at it, and the model can look things up instead of guessing.
section: grimoire
---

<nav class="setup-order setup-order--inline" aria-label="Recommended setup order">
  <span class="setup-order-label">Setup order</span>
  <ol>
    <li><a href="{{ '/grimoire/install/' | url }}">1. Grimoire</a></li>
    <li><a href="{{ '/grimoire/mcp/' | url }}" aria-current="step">2. MCP <span class="setup-optional">optional</span></a></li>
    <li><a href="{{ '/agents/install/' | url }}">3. Personas</a></li>
  </ol>
</nav>

## What it does

The MCP server gives an AI client a small set of named tools: search, character
lines, item lore and quote checks. The client calls those tools itself instead of
asking you to run commands.

It runs on your machine. There is no network service, no port and no account.
Your app starts it, talks to it directly, and stops it when the session ends.

## Why use it

<ul class="tile-grid">
  <li><strong>The model stops guessing</strong><p>It can search the archive and read the passage before it answers.</p></li>
  <li><strong>Quotes can be checked</strong><p><code>verify</code> is one of the tools, so the client can ask whether a line is canon.</p></li>
  <li><strong>Your personas get sharper</strong><p>The Drifter and Eris use the same archive. MCP gives them a direct lookup path.</p></li>
  <li><strong>It is safe to leave on</strong><p>The database is read-only, with no SQL tool, write path or network access.</p></li>
</ul>

You don't need MCP to use the Grimoire. It is the convenience layer for apps that
can launch a local process.

## Set it up

From the Grimoire checkout:

<pre><code>bash mcp-server/install.sh</code></pre>

The installer sets up a small local environment and prints a snippet to paste
into your app. Restart the app after you add it. If your client asks for a path, point it at `mcp-server/run.sh`; use
the absolute path if the client starts somewhere else.

The installer needs Python 3.10 or newer for the MCP SDK. The query command line
still runs on 3.8+.

## Try it

Once the client is connected, ask it for something that needs a lookup:

- “Find Eris lines about the Hive.”
- “What does the archive say about the Leviathan?”
- “Verify ‘Absolutely not.’ as an Eris Morn quote.”
- “Show me items with lore about the Moon.”

If the client lists the Grimoire tools but answers from memory anyway, ask it
directly to use the `search` or `verify` tool.

<details class="section experts">
<summary><span class="section-title" role="heading" aria-level="2" id="for-experts">For Experts (or enthusiasts) <a class="heading-anchor" href="#for-experts" aria-label="Permalink to For Experts (or enthusiasts)">#</a></span></summary>

<p class="muted">The client configuration, all eighteen tools, and the safety limits.</p>

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

<h3 id="the-tools">The eighteen tools</h3>

All read-only:

<ul class="tile-grid">
  <li><code>search</code><p>Full-text search across books, transcripts, cards, interactions, items and records.</p></li>
  <li><code>character</code><p>Curated lines for a character, or every transcript line with <code>all_lines</code>.</p></li>
  <li><code>character_info</code><p>Aliases, quote count and spoken-line count for a character.</p></li>
  <li><code>item</code><p>Item lore and metadata by slug.</p></li>
  <li><code>find_item</code><p>Find items by a title or slug fragment.</p></li>
  <li><code>book</code><p>Book metadata and its entries.</p></li>
  <li><code>transcript</code><p>Transcript metadata and dialogue lines, optionally filtered by speaker.</p></li>
  <li><code>record</code><p>A triumph or seal by slug or title.</p></li>
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
not canon, even if it sounds right.

<h3 id="safety">Safety</h3>

The database is opened read-only. There is no SQL tool, no write path and no
network access. Limits are clamped, long text is trimmed, and queries are capped
before they reach SQLite.

That makes the server safe to leave connected while you work. It also means it
cannot fix or ingest anything; those steps stay in the repository.

<h3 id="troubleshooting">If it will not connect</h3>

See [MCP tools do not appear]({{ '/troubleshooting/#mcp-tools' | url }}) for the
usual causes: missing virtual environment, wrong path, or a client that cannot
launch a local process.

</details>

## Next

- [Meet the personas]({{ '/agents/' | url }})
- [Use another app]({{ '/agents/platforms/' | url }})
- [Install the Grimoire]({{ '/grimoire/install/' | url }})
