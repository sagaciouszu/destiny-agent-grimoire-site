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

It runs on your machine over stdio. There is no network service, no port and no
account. Your client starts it, talks to it through a pipe, and stops it when the
session ends.

## Why use it

- **The model stops guessing.** It can search the archive and read the passage
  before it answers.
- **Quotes can be checked.** `verify` is one of the tools, so the client can ask
  whether a line is canon.
- **Your personas get sharper.** The Drifter and Eris use the same archive. MCP
  gives them a direct lookup path instead of relying on memory.
- **It is safe to leave on.** The database is opened read-only and there is no SQL
  tool, write path or network access.

You do not need MCP to use the Grimoire. It is the convenience layer for clients
that can launch a local process.

## Set it up

From the Grimoire checkout:

<pre><code>bash mcp-server/install.sh</code></pre>

The installer creates a small virtual environment, installs the locked
dependencies, and prints a client snippet. Paste that into your client and
restart it. If your client asks for a path, point it at `mcp-server/run.sh`; use
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

<h2 id="for-experts">For experts <a class="heading-anchor" href="#for-experts" aria-label="Permalink to For experts">#</a></h2>

<p class="muted">The client configuration, all twelve tools, and the safety limits.</p>

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

<h3 id="the-tools">The twelve tools</h3>

All read-only:

- `search` — full-text search across books, transcripts, cards, interactions,
  items and records, with an optional source filter.
- `character` — curated lines for a character, or every transcript line with
  `all_lines`.
- `character_info` — aliases, quote count and spoken-line count for a character.
- `item` — item lore and metadata by slug.
- `find_item` — find items by a title or slug fragment.
- `book` — book metadata and its entries.
- `transcript` — transcript metadata and dialogue lines, optionally filtered by
  speaker.
- `record` — a triumph or seal by slug or title.
- `list_records` — cheap listings of books, characters, speakers or records.
- `stats` — row counts, top item types and top speakers.
- `verify` — check one quote, optionally with a speaker and exact mode.
- `verify_many` — check up to twenty quotes in one call.

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

## Next

- [Install the Grimoire]({{ '/grimoire/install/' | url }})
- [Read the archive overview]({{ '/grimoire/' | url }})
- [Deploy an agent]({{ '/agents/install/' | url }})
