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

| App | Rules | MCP |
|---|---|---|
| [Claude Code](https://docs.anthropic.com/en/docs/claude-code/memory) | `CLAUDE.md` | [MCP guide](https://docs.anthropic.com/en/docs/claude-code/mcp) |
| [Codex CLI](https://developers.openai.com/codex/guides/agents-md) | `AGENTS.md` | [MCP guide](https://developers.openai.com/codex/mcp) |
| [Gemini CLI](https://geminicli.com/docs) | `GEMINI.md` | [MCP guide](https://github.com/google-gemini/gemini-cli/blob/main/docs/tools/mcp-server.md) |
| [Cursor](https://docs.cursor.com/context/rules) | Rules | [MCP guide](https://docs.cursor.com/context/mcp) |
| [Windsurf](https://docs.windsurf.com/windsurf/cascade/memories) | Memories | [MCP guide](https://docs.windsurf.com/windsurf/cascade/mcp) |
| [Cline](https://docs.cline.bot/features/cline-rules) | Rules | [MCP guide](https://docs.cline.bot/mcp/mcp-overview) |
| [Continue](https://docs.continue.dev/customize/rules) | Rules | [MCP guide](https://docs.continue.dev/customize/mcp-tools) |
| [GitHub Copilot](https://docs.github.com/en/copilot/how-tos/configure-custom-instructions/add-repository-instructions) | Repository instructions | [MCP guide](https://docs.github.com/en/copilot/how-tos/context/model-context-protocol) |
| [Roo Code](https://docs.roocode.com/features/custom-instructions) | Custom instructions | [MCP guide](https://docs.roocode.com/features/mcp/using-mcp-in-roo) |
| [Kilo Code](https://kilocode.ai/docs) | Rules | [MCP guide](https://kilocode.ai/docs/features/mcp/using-mcp-in-kilo-code) |
| [Zed](https://zed.dev/docs/ai/overview) | Rules | [MCP guide](https://zed.dev/docs/ai/mcp) |
| [Aider](https://aider.chat/docs/usage/conventions.html) | `CONVENTIONS.md` | — |

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
