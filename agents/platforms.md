---
section: integration
layout: page
title: Integrations
category: Agents & Integration · Integrations
lede: Pick the app you use. OpenCode and OpenClaw get a scripted install; the rest load a project instruction file and, where supported, the Grimoire MCP server.
---

## Scripted installs

The series sync knows the OpenCode and OpenClaw folder layouts. It installs the
persona entries, the read-only consult copies and the shared series list.

<pre><code># OpenCode
bash scripts/sync-live-agents.sh

# OpenClaw
bash scripts/sync-live-agents.sh --openclaw</code></pre>

<p>Run those from the Grimoire checkout. The full walkthrough, including what
lands on disk, is on <a href="{{ '/agents/install/' | url }}">Deploy the Agents</a>.</p>

## Apps with project rules and MCP

These apps read project instructions in their own file or settings screen. The
persona content is the same `AGENTS.md`; only the place you put it changes. The
MCP column goes to that app's own guide for adding a local server.

<table class="integration-table">
  <thead><tr><th>App</th><th>Rules</th><th>MCP</th></tr></thead>
  <tbody>
    <tr><td><a href="https://docs.anthropic.com/en/docs/claude-code/memory">Claude Code</a></td><td><code>CLAUDE.md</code></td><td><a href="https://docs.anthropic.com/en/docs/claude-code/mcp">MCP guide</a></td></tr>
    <tr><td><a href="https://developers.openai.com/codex/guides/agents-md">Codex CLI</a></td><td><code>AGENTS.md</code></td><td><a href="https://developers.openai.com/codex/mcp">MCP guide</a></td></tr>
    <tr><td><a href="https://geminicli.com/docs">Gemini CLI</a></td><td><code>GEMINI.md</code></td><td><a href="https://github.com/google-gemini/gemini-cli/blob/main/docs/tools/mcp-server.md">MCP guide</a></td></tr>
    <tr><td><a href="https://docs.cursor.com/context/rules">Cursor</a></td><td>Rules</td><td><a href="https://docs.cursor.com/context/mcp">MCP guide</a></td></tr>
    <tr><td><a href="https://docs.windsurf.com/windsurf/cascade/memories">Windsurf</a></td><td>Memories</td><td><a href="https://docs.windsurf.com/windsurf/cascade/mcp">MCP guide</a></td></tr>
    <tr><td><a href="https://docs.cline.bot/features/cline-rules">Cline</a></td><td>Rules</td><td><a href="https://docs.cline.bot/mcp/mcp-overview">MCP guide</a></td></tr>
    <tr><td><a href="https://docs.continue.dev/customize/rules">Continue</a></td><td>Rules</td><td><a href="https://docs.continue.dev/customize/mcp-tools">MCP guide</a></td></tr>
    <tr><td><a href="https://docs.github.com/en/copilot/how-tos/configure-custom-instructions/add-repository-instructions">GitHub Copilot</a></td><td>Repository instructions</td><td><a href="https://docs.github.com/en/copilot/how-tos/context/model-context-protocol">MCP guide</a></td></tr>
    <tr><td><a href="https://docs.roocode.com/features/custom-instructions">Roo Code</a></td><td>Custom instructions</td><td><a href="https://docs.roocode.com/features/mcp/using-mcp-in-roo">MCP guide</a></td></tr>
    <tr><td><a href="https://kilocode.ai/docs">Kilo Code</a></td><td>Rules</td><td><a href="https://kilocode.ai/docs/features/mcp/using-mcp-in-kilo-code">MCP guide</a></td></tr>
    <tr><td><a href="https://zed.dev/docs/ai/overview">Zed</a></td><td>Rules</td><td><a href="https://zed.dev/docs/ai/mcp">MCP guide</a></td></tr>
    <tr><td><a href="https://aider.chat/docs/usage/conventions.html">Aider</a></td><td><code>CONVENTIONS.md</code></td><td>—</td></tr>
  </tbody>
</table>

<p class="muted">File names and menus change between app versions. Use the linked
guide for the app you have; the persona text you paste does not change.</p>

## What to copy

1. Open the persona's `AGENTS.md`.
2. Put it where your app reads project rules, or import it into that file.
3. If you want canon lookup, add the Grimoire server using the app's MCP guide.
4. If your app cannot launch a local server, use the command line instead: the
   archive still works, but the AI cannot call it as a tool.

The MCP server setup itself is the same for every client:
[install it once]({{ '/grimoire/mcp/' | url }}), then point the app at
`mcp-server/run.sh`.

## Other connection styles

- **Skill-based runtimes** load `lore/skills/destiny-grimoire/SKILL.md` instead of
  MCP. The skill explains the query commands and quote policy.
- **No file access** means pasting `AGENTS.md` into a chat prompt. The persona
  keeps its voice, but loses canon lookup and quote checking.

## What the sync does not automate

The sync handles OpenCode and OpenClaw only. It does not edit another app's
configuration, install into arbitrary runtimes or copy credentials. Those
bindings stay in your hands.

OpenClaw also differs from OpenCode on isolation: its consult tools deny writes
and shell access, but it does not enforce path-level read isolation. Keep private
folders private by policy there.

## Next

- [Deploy into OpenCode or OpenClaw]({{ '/agents/install/' | url }})
- [Install the MCP server]({{ '/grimoire/mcp/' | url }})
- [Troubleshoot a missing agent or tool]({{ '/troubleshooting/' | url }})
