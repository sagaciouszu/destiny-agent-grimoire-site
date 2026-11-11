---
section: personas
layout: page
title: Use Another App
category: Personas · Use Another App
lede: Pick the AI app you use. If you are not sure, start with OpenCode or OpenClaw; both get a scripted setup. Everything else can load a character instructions file and, where supported, the library connector.
permalink: /personas/platforms/
---

## OpenCode and OpenClaw

The setup script knows where these apps keep their files. It adds the
characters, the read-only helper copies and the shared list.

<pre><code># OpenCode
bash scripts/sync-live-agents.sh

# OpenClaw
bash scripts/sync-live-agents.sh --openclaw</code></pre>

<p>Run these from the Grimoire folder. The full walkthrough, including what gets
written where, is on <a href="{{ '/personas/install/' | url }}">Install the characters</a>.</p>

## Other apps

These apps read instructions in their own file or settings screen. The character
content is the same; only the location changes. The AI column links to each app's
guide for adding a local tool.

<table class="integration-table">
  <thead><tr><th>App</th><th>Instructions</th><th>AI connection</th></tr></thead>
  <tbody>
    <tr><td><a href="https://docs.anthropic.com/en/docs/claude-code/memory">Claude Code</a></td><td><code>CLAUDE.md</code></td><td><a href="https://docs.anthropic.com/en/docs/claude-code/mcp">AI guide</a></td></tr>
    <tr><td><a href="https://developers.openai.com/codex/guides/agents-md">Codex CLI</a></td><td><code>AGENTS.md</code></td><td><a href="https://developers.openai.com/codex/mcp">AI guide</a></td></tr>
    <tr><td><a href="https://geminicli.com/docs">Gemini CLI</a></td><td><code>GEMINI.md</code></td><td><a href="https://github.com/google-gemini/gemini-cli/blob/main/docs/tools/mcp-server.md">AI guide</a></td></tr>
    <tr><td><a href="https://docs.cursor.com/context/rules">Cursor</a></td><td>Rules</td><td><a href="https://docs.cursor.com/context/mcp">AI guide</a></td></tr>
    <tr><td><a href="https://docs.windsurf.com/windsurf/cascade/memories">Windsurf</a></td><td>Memories</td><td><a href="https://docs.windsurf.com/windsurf/cascade/mcp">AI guide</a></td></tr>
    <tr><td><a href="https://docs.cline.bot/features/cline-rules">Cline</a></td><td>Rules</td><td><a href="https://docs.cline.bot/mcp/mcp-overview">AI guide</a></td></tr>
    <tr><td><a href="https://docs.continue.dev/customize/rules">Continue</a></td><td>Rules</td><td><a href="https://docs.continue.dev/customize/mcp-tools">AI guide</a></td></tr>
    <tr><td><a href="https://docs.github.com/en/copilot/how-tos/configure-custom-instructions/add-repository-instructions">GitHub Copilot</a></td><td>Project instructions</td><td><a href="https://docs.github.com/en/copilot/how-tos/context/model-context-protocol">AI guide</a></td></tr>
    <tr><td><a href="https://docs.roocode.com/features/custom-instructions">Roo Code</a></td><td>Custom instructions</td><td><a href="https://docs.roocode.com/features/mcp/using-mcp-in-roo">AI guide</a></td></tr>
    <tr><td><a href="https://kilocode.ai/docs">Kilo Code</a></td><td>Rules</td><td><a href="https://kilocode.ai/docs/features/mcp/using-mcp-in-kilo-code">AI guide</a></td></tr>
    <tr><td><a href="https://zed.dev/docs/ai/overview">Zed</a></td><td>Rules</td><td><a href="https://zed.dev/docs/ai/mcp">AI guide</a></td></tr>
    <tr><td><a href="https://aider.chat/docs/usage/conventions.html">Aider</a></td><td><code>CONVENTIONS.md</code></td><td>n/a</td></tr>
  </tbody>
</table>

<p class="muted">File names and menus change between app versions. Use the linked
guide for the app you have; the character text you paste does not change.</p>

## What to copy

1. Open the character's instructions file, `AGENTS.md`.
2. Put it where your app reads instructions, or import it into that file.
3. If you want lookup, add the library connector using the app's AI guide.
4. If your app cannot start a local tool, use the search tool instead. The library
   still works, but the AI cannot call it for you.

The connector setup is the same for every app:
[install it once]({{ '/grimoire/mcp/' | url }}), then point the app at
`mcp-server/run.sh`.

## Other connection styles

<ul class="tile-grid">
  <li><strong>Apps that use skill files</strong><p>Load <code>lore/skills/destiny-grimoire/SKILL.md</code> instead of the connector. It explains the search commands and quote rules.</p></li>
  <li><strong>Paste-only apps</strong><p>Paste the instructions file into a chat. The character keeps its voice, but loses lookup and quote checking.</p></li>
</ul>

## What the setup does not do

The setup handles OpenCode and OpenClaw only. It does not change another app's
settings, install into other apps or copy credentials. Those steps are yours.

OpenClaw also handles privacy differently: its helper copies cannot write or run
commands, but they can still read other folders. Keep private folders private.

## Next

- [Install the characters]({{ '/personas/install/' | url }})
- [Connect an AI]({{ '/grimoire/mcp/' | url }})
- [Troubleshoot a missing character or connection]({{ '/troubleshooting/' | url }})
