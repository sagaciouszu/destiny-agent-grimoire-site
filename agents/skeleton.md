---
section: personas
layout: page
title: Agent Page Skeleton
category: Personas · Skeleton
lede: A working skeleton for a new persona page. It is intentionally hidden from the nav, dropdowns and sitemap.
permalink: /agents/skeleton/
noindex: true
---

<div class="callout">
<p><strong>Draft only.</strong> Copy this structure when adding a persona, then replace the placeholders. This page is not linked in the Personas dropdown or the sitemap.</p>
</div>

## Who they are

Describe the character in two or three short paragraphs: what they are known for,
what they care about, and what makes their voice distinct. Keep the first
paragraph useful on its own.

**Knowledgeable in:** add the topics a peer may ask about.

## In their own words

Add two or three short lines that pass `verify --exact` against the archive.

> Add a verified line here.
>
> — The character, on a topic

## What they won't do

- Quote a line the archive cannot verify.
- Present a guess as canon.
- Share another agent's private memory.
- Run shell commands from a consult copy.

## Eyes up

Clone the persona and connect it to the shared archive:

<pre><code>git clone &lt;repository-url&gt;
cd &lt;repository-name&gt;
./setup.sh</code></pre>

Use `BOOTSTRAP=1 ./setup.sh` in scripts. For OpenCode or OpenClaw, use the
series sync instead.

## For Experts (or enthusiasts)

### The record

- **Version:** add the release tag.
- **Audit:** add the passing suite count.
- **Updated:** add the last repository date.

### The brain

In OpenCode, the entry file is the main agent. A generic runtime can read
`AGENTS.md` directly. Add the entry filename and its GitHub link.

### The audit

<pre><code>bash tests/master-audit.sh</code></pre>

Describe what the suites cover and link the repository.

### The source

- [Repository](https://github.com/sagaciouszu)
- [README](https://github.com/sagaciouszu)
- [Issues](https://github.com/sagaciouszu)

## Next

- [Back to the personas]({{ '/agents/' | url }})
- [Deploy an agent]({{ '/agents/install/' | url }})
- [Add an Agent]({{ '/agents/build/' | url }})
