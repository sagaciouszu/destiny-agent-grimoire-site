---
section: personas
layout: page
title: Install the Characters
category: Personas · Install
lede: Pick a character and add it to the AI app you already use. Start with the simple path; the file layout and advanced options are at the bottom.
setupOrder: true
setupStep: 3
permalink: /personas/install/
---

<details class="section" open>
<summary><span class="section-title" role="heading" aria-level="2" id="quick-start">Start here</span></summary>

<p>Open a terminal in the folder where you want the project. Pick the app you
already use; you don't need all three. Copy one block at a time. If you already
installed the Grimoire, skip the download lines and run the setup from that
folder.</p>

<div class="choices">
  <div class="choice">
    <h3 class="choice-label"><svg class="choice-icon choice-logo" viewBox="0 0 24 36" aria-hidden="true" focusable="false"><path fill="currentColor" opacity="0.55" d="M18 30H6V18H18V30Z"/><path fill="currentColor" d="M18 12H6V30H18V12ZM24 36H0V6H24V36Z"/></svg>OpenCode: install all characters</h3>
    <p class="muted choice-desc">One command copies the characters and their read-only helper copies into OpenCode.</p>
    <pre><code>git clone https://github.com/sagaciouszu/destiny-agent-grimoire.git
cd destiny-agent-grimoire
bash scripts/sync-live-agents.sh</code></pre>
    <p class="muted">Restart OpenCode, then pick a character.</p>
  </div>
  <div class="choice">
    <h3 class="choice-label"><span class="choice-icon" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M7 7c0-2 2-3 5-3s5 1 5 3M7 17c0 2 2 3 5 3s5-1 5-3M4 12h16"/></svg></span>OpenClaw: one workspace per character</h3>
    <p class="muted choice-desc">One workspace per character, plus the shared list.</p>
    <pre><code>git clone https://github.com/sagaciouszu/destiny-agent-grimoire.git
cd destiny-agent-grimoire
bash scripts/sync-live-agents.sh --openclaw</code></pre>
  </div>
  <div class="choice">
    <h3 class="choice-label"><span class="choice-icon" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M9 3h6v3a3 3 0 0 1 0 6v3H9v-3a3 3 0 0 1 0-6V3z"/></svg></span>Anything else: one character, one folder</h3>
    <p class="muted choice-desc">A character in its own folder, for any app that can read an instructions file.</p>
    <pre><code>git clone https://github.com/sagaciouszu/destiny-agent-drifter.git
cd destiny-agent-drifter
./setup.sh</code></pre>
    <p class="muted">Swap in another character&#39;s project name for a different character. Point your app at the instructions file, <code>AGENTS.md</code>.</p>
  </div>
</div>

<p class="muted">For unattended setup, use <code>BOOTSTRAP=1 ./setup.sh</code> to
download the library without questions. Preview every link and download with
<code>./setup.sh --dry-run</code>; use
<code>GRIMOIRE_DB=/path/to/grimoire.db ./setup.sh</code> to copy an offline
database instead.</p>

</details>

<details class="section" open>
<summary><span class="section-title" role="heading" aria-level="2" id="what-you-get">What this gives you</span></summary>

<ul class="tile-grid">
  <li><strong>A character, not a one-liner</strong><p>Each character has a voice, rules, memory and a tested way of answering.</p></li>
  <li><strong>The same library you have</strong><p>The character reads the Grimoire, so it can look things up instead of guessing.</p></li>
  <li><strong>A quote checker</strong><p>The material is tied to verified lines, and the library has a built-in checker.</p></li>
  <li><strong>Optional AI connection</strong><p>With the connector, the character can search the library directly.</p></li>
  <li><strong>A second opinion</strong><p>The characters can ask each other through read-only helper copies.</p></li>
</ul>

You can use one character without the others. The Grimoire is the shared part,
and the AI connection is optional.

</details>

<details class="section" open>
<summary><span class="section-title" role="heading" aria-level="2" id="prerequisites">Before you start</span></summary>

<ul class="checklist">
  <li>Git and a terminal.</li>
  <li>Python 3.8 or newer.</li>
  <li>An AI app: OpenCode, OpenClaw, or another app that can read an instructions file.</li>
  <li>Internet access the first time, to download the project and library.</li>
  <li>About {{ grimoire.sizes.db_mb }} MB for the library file.</li>
</ul>

</details>

<details class="section" open>
<summary><span class="section-title" role="heading" aria-level="2" id="choose-a-persona">Choose a character</span></summary>

<p>Each character has a different voice and a different corner of the lore. All
read the same library; none share private notes.</p>

<ul>
  <li><a href="{{ '/personas/drifter/' | url }}">The Drifter</a> : loose, funny and guarded. Gambit, the Nine and the Dark Age.</li>
  <li><a href="{{ '/personas/eris/' | url }}">Eris Morn</a> : formal, precise and grim. The Hive, the Moon and the Witness.</li>
  <li><a href="{{ '/personas/zavala/' | url }}">Zavala</a> : measured and steady. The Vanguard, the Last City and the coalition.</li>
  <li><a href="{{ '/personas/calus/' | url }}">Calus</a> : theatrical, sensual and cruel. The Cabal, the Leviathan and the Witness.</li>
  <li><a href="{{ '/personas/ghost/' | url }}">Ghost</a> : warm, quick and anxious. The Light, the Traveler and the Guardian.</li>
  <li><a href="{{ '/personas/mara-sov/' | url }}">Mara Sov</a> : regal, calculating and patient. The Awoken, the Dreaming City and the line between Light and Dark.</li>
</ul>

</details>

<details class="section experts">
<summary><span class="section-title" role="heading" aria-level="2" id="for-experts">For Experts (or enthusiasts)</span></summary>

<p class="muted">Where the files land, how the personas talk to each other, and
how to run the audit. You can ignore this section if the simple setup worked.</p>

<h3 id="opencode-details">What the OpenCode sync writes <a class="heading-anchor" href="#opencode-details" aria-label="Permalink to What the OpenCode sync writes">#</a></h3>

<ul class="tile-grid">
  <li><strong>Main entries</strong><p>One <code>&lt;id&gt;.md</code> per character in the OpenCode agents folder.</p></li>
  <li><strong>Consult copies</strong><p>One <code>&lt;id&gt;-consult.md</code> per character, read-only.</p></li>
  <li><strong>Companion folders</strong><p>Non-entry files marked inert so they are not treated as agents.</p></li>
  <li><strong>Series list</strong><p><code>~/.config/opencode/series/agents.json</code> as the peer list.</p></li>
  <li><strong>Grimoire link</strong><p>The archive linked outside the agents folder.</p></li>
</ul>

<p>Set <code>default_agent</code> in <code>~/.config/opencode/opencode.json</code>
to any of the six character ids if you want one picked at startup.</p>

<h3 id="openclaw-details">What the OpenClaw sync writes <a class="heading-anchor" href="#openclaw-details" aria-label="Permalink to What the OpenClaw sync writes">#</a></h3>

<p>The sync writes <code>~/.openclaw/workspace-&lt;id&gt;</code> for each character,
plus the series list and a collaboration block inside each workspace.</p>

<p>It does not edit your OpenClaw config for you. Add the consult agents there
(<code>subagents.allowAgents</code> plus a read-only tools deny list) if you want
the main agents to call them.</p>

<h3 id="multiple-agents">Running more than one agent <a class="heading-anchor" href="#multiple-agents" aria-label="Permalink to Running more than one agent">#</a></h3>

<h4>More than one</h4>

<p>The sync gives you all six characters as main agents, plus a consult copy for
each. Each session picks one main agent. Use the agent picker when you start a
session, or set <code>default_agent</code> to the one you want first.</p>

<p>They are separate agents with separate sessions and separate memories.
Switching does not blend their notes or their voices.</p>

<h4>Side by side</h4>

<p>Once configured, each main agent is its own OpenClaw agent, with its own
workspace, <code>agentDir</code> and session store. One gateway can host both.
Add channel bindings only if you want incoming messages routed to a particular
agent; otherwise pick the agent directly. New agents also need provider
credentials in their own auth store, or a shared store they are allowed to
inherit from.</p>

<pre><code>openclaw agents list
openclaw agents list --bindings</code></pre>

<h4>What is shared, and what is not</h4>

<p>The SQLite archive is opened read-only, so several agents can read it at the
same time. Canon is shared. Runtime memory, private notes and voice files are
not. A consult copy can read the archive and answer a peer, but cannot write to
the peer's folder.</p>

<h3 id="consult">Asking another agent <a class="heading-anchor" href="#consult" aria-label="Permalink to Asking another agent">#</a></h3>

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

<h3 id="verify">Check that it worked <a class="heading-anchor" href="#verify" aria-label="Permalink to Check that it worked">#</a></h3>

<p>Each persona repository owns its own tests. Run the main audit from the
repository root:</p>

<pre><code>bash tests/master-audit.sh</code></pre>

<p>It checks voice, quotes, module coverage, the conversation path, golden
snapshots and the shared structure checks. To test a fresh clone the same way CI
does:</p>

<pre><code>bash lore/tests/onboarding-smoke.sh</code></pre>

</details>

## If something's off

If a character does not show up, or a helper call fails, see
[Troubleshooting]({{ '/troubleshooting/' | url }}).

## Next

- [Meet the characters]({{ '/personas/' | url }})
- [Use another app]({{ '/personas/platforms/' | url }})
- [Connect an AI to the library]({{ '/grimoire/mcp/' | url }})
- [Build a persona]({{ '/personas/build/' | url }})
