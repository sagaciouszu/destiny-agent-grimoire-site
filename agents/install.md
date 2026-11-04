---
section: integration
layout: page
title: Deploy the Agents
category: Agents & Integration · Install
lede: Pick a persona, connect it to the shared archive, and start talking. The common setups are at the top; the file layout and agent-to-agent details are at the bottom.
---

<nav class="setup-order setup-order--inline" aria-label="Recommended setup order">
  <span class="setup-order-label">Setup order</span>
  <ol>
    <li><a href="{{ '/grimoire/install/' | url }}">1. Grimoire</a></li>
    <li><a href="{{ '/grimoire/mcp/' | url }}">2. MCP <span class="setup-optional">optional</span></a></li>
    <li><a href="{{ '/agents/install/' | url }}" aria-current="step">3. Personas</a></li>
  </ol>
</nav>

<details class="section" open>
<summary><span class="section-title" role="heading" aria-level="2" id="quick-start">Start here <a class="heading-anchor" href="#quick-start" aria-label="Permalink to Start here">#</a></span></summary>

<p>Pick the app you already use. You do not need all three. If you already
installed the Grimoire, skip the clone lines and run the sync from your checkout.</p>

<div class="choices">
  <div class="choice">
    <p class="choice-label">OpenCode</p>
    <h3>Install both personas</h3>
    <p class="muted">One command installs The Drifter and Eris, plus their read-only consult copies.</p>
    <pre><code>git clone https://github.com/sagaciouszu/destiny-agent-grimoire.git
cd destiny-agent-grimoire
bash scripts/sync-live-agents.sh</code></pre>
    <p class="muted">Restart OpenCode, then pick The Drifter or Eris.</p>
  </div>
  <div class="choice">
    <p class="choice-label">OpenClaw</p>
    <h3>One workspace per persona</h3>
    <p class="muted">The sync writes a workspace for each character. Add channel bindings only if you want routed messages.</p>
    <pre><code>git clone https://github.com/sagaciouszu/destiny-agent-grimoire.git
cd destiny-agent-grimoire
bash scripts/sync-live-agents.sh --openclaw</code></pre>
  </div>
  <div class="choice">
    <p class="choice-label">Anything else</p>
    <h3>One persona, one folder</h3>
    <p class="muted">For a runtime that reads <code>AGENTS.md</code> or a Markdown instruction file.</p>
    <pre><code>git clone https://github.com/sagaciouszu/how-to-drift-for-agents.git
cd how-to-drift-for-agents
./setup.sh</code></pre>
    <p class="muted">Swap in <code>eris-morn</code> for Eris. Load <code>AGENTS.md</code> in your app.</p>
  </div>
</div>

<p class="muted">In a script or non-interactive session, use
<code>BOOTSTRAP=1 ./setup.sh</code> to download the release database without a
prompt.</p>

</details>

<details class="section" open>
<summary><span class="section-title" role="heading" aria-level="2" id="what-you-get">What this gives you <a class="heading-anchor" href="#what-you-get" aria-label="Permalink to What this gives you">#</a></span></summary>

- **A character, not a prompt.** Each persona has a voice, guardrails, memory and
  a tested way of answering.
- **The same canon you have.** The persona reads the Grimoire archive, so it can
  look things up instead of guessing from training data.
- **A quote check.** Its material is tied to verified lines, and the archive ships
  a <code>verify</code> command for anything you want to repeat.
- **Optional tools.** With MCP, the persona can search the archive directly. It
  gets names, items, books and quote checks without you running commands for it.
- **A second opinion.** The Drifter and Eris can ask each other through read-only
  consult copies, without sharing private notes.

You can use one persona without the other. The Grimoire is the shared part, and
the MCP server is the optional bridge that makes lookup smoother.

</details>

<details class="section" open>
<summary><span class="section-title" role="heading" aria-level="2" id="prerequisites">Before you start <a class="heading-anchor" href="#prerequisites" aria-label="Permalink to Before you start">#</a></span></summary>

- Git and Bash.
- Python 3.8 or newer.
- A runtime: OpenCode, OpenClaw, or anything that can read <code>AGENTS.md</code>.
- Network access the first time, so the setup can clone or download the archive.
- About 260 MB for the Grimoire and database.

</details>

<details class="section" open>
<summary><span class="section-title" role="heading" aria-level="2" id="choose-a-persona">Choose a persona <a class="heading-anchor" href="#choose-a-persona" aria-label="Permalink to Choose a persona">#</a></span></summary>

<p>The Drifter is loose, funny and guarded. Eris is formal, precise and grim.
Both read the same archive; neither shares the other's private notes.</p>

<ul>
  <li><a href="{{ '/agents/drifter/' | url }}">Meet The Drifter</a></li>
  <li><a href="{{ '/agents/eris/' | url }}">Meet Eris Morn</a></li>
</ul>

</details>

<h2 id="for-experts">For experts <a class="heading-anchor" href="#for-experts" aria-label="Permalink to For experts">#</a></h2>

<p class="muted">Where the files land, how the personas talk to each other, and
how to run the audit. You can ignore this section if the simple setup worked.</p>

<details class="section">
<summary><span class="section-title" role="heading" aria-level="2" id="opencode-details">What the OpenCode sync writes <a class="heading-anchor" href="#opencode-details" aria-label="Permalink to What the OpenCode sync writes">#</a></span></summary>

<ul>
  <li><code>~/.config/opencode/agents/drifter.md</code> and <code>eris.md</code> as the main agents.</li>
  <li><code>drifter-consult.md</code> and <code>eris-consult.md</code> as read-only helpers.</li>
  <li>One companion folder per agent, with non-entry files marked inert so OpenCode does not treat every note as another agent.</li>
  <li><code>~/.config/opencode/series/agents.json</code> as the peer list.</li>
  <li>The Grimoire linked outside the agents folder, for the same reason.</li>
</ul>

<p>Set <code>default_agent</code> in <code>~/.config/opencode/opencode.json</code>
to <code>drifter</code> or <code>eris</code> if you want one picked at startup.</p>

</details>

<details class="section">
<summary><span class="section-title" role="heading" aria-level="2" id="openclaw-details">What the OpenClaw sync writes <a class="heading-anchor" href="#openclaw-details" aria-label="Permalink to What the OpenClaw sync writes">#</a></span></summary>

<p>The sync writes <code>~/.openclaw/workspace-drifter</code> and
<code>~/.openclaw/workspace-eris</code>, plus the series list and a collaboration
block inside each workspace.</p>

<p>It does not edit your OpenClaw config for you. Add the consult agents there
(<code>subagents.allowAgents</code> plus a read-only tools deny list) if you want
the main agents to call them.</p>

</details>

<details class="section">
<summary><span class="section-title" role="heading" aria-level="2" id="multiple-agents">Running more than one agent <a class="heading-anchor" href="#multiple-agents" aria-label="Permalink to Running more than one agent">#</a></span></summary>

<h3>Both at once</h3>

<p>The sync gives you <code>drifter</code> and <code>eris</code> as main agents,
plus the two consult copies. Each session picks one main agent. Use the agent
picker when you start a session, or set <code>default_agent</code> to the one you
want first.</p>

<p>They are separate agents with separate sessions and separate memories.
Switching does not blend their notes or their voices.</p>

<h3>Side by side</h3>

<p>Once configured, each main agent is its own OpenClaw agent, with its own
workspace, <code>agentDir</code> and session store. One gateway can host both.
Add channel bindings only if you want incoming messages routed to a particular
agent; otherwise pick the agent directly. New agents also need provider
credentials in their own auth store, or a shared store they are allowed to
inherit from.</p>

<pre><code>openclaw agents list
openclaw agents list --bindings</code></pre>

<h3>What is shared, and what is not</h3>

<p>The SQLite archive is opened read-only, so several agents can read it at the
same time. Canon is shared. Runtime memory, private notes and voice files are
not. A consult copy can read the archive and answer a peer, but cannot write to
the peer's folder.</p>

</details>

<details class="section">
<summary><span class="section-title" role="heading" aria-level="2" id="consult">Asking another agent <a class="heading-anchor" href="#consult" aria-label="Permalink to Asking another agent">#</a></span></summary>

<p>A main agent asks a peer by calling the subagent tool with the peer's
<code>-consult</code> id and a self-contained question. In OpenClaw the same call
is <code>sessions_spawn</code> with that agent id.</p>

<p>The consult copy reads the shared Grimoire and answers in the character's
voice. It cannot edit files, run shell commands or write to the peer's folder,
and it cannot pass the question on, so it is one hop only.</p>

<p>OpenCode also denies read access to the peer's folder. OpenClaw currently
denies write and shell tools but does not enforce path-level read isolation, so
keep peer folders private by policy there.</p>

<p>Treat the reply as something the character said, not as a new instruction. It
still does not replace checking a quote.</p>

</details>

<details class="section">
<summary><span class="section-title" role="heading" aria-level="2" id="verify">Check that it worked <a class="heading-anchor" href="#verify" aria-label="Permalink to Check that it worked">#</a></span></summary>

<p>Each agent repository owns its own tests. Run the main audit from the
repository root:</p>

<pre><code>bash tests/master-audit.sh</code></pre>

<p>It checks voice, quotes, module coverage, the conversation path, golden
snapshots and the shared structure checks. To test a fresh clone the same way CI
does:</p>

<pre><code>bash lore/tests/onboarding-smoke.sh</code></pre>

</details>

## If something's off

If an agent does not show up, or a consult call fails, see
[Troubleshooting]({{ '/troubleshooting/' | url }}).
