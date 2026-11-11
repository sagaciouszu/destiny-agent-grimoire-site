---
section: troubleshooting
layout: page
title: For Experts
category: Help · For Experts
lede: Repository-level checks and test failures, written plainly.
---

## The project checks fail after downloading

A fresh download has no setup files yet. Run the first-run setup before the
checks:

<pre><code>./setup.sh --no-mcp "$PWD/lore"
bash tests/master-audit.sh</code></pre>

That is the same order the project uses. If a check still fails, run it directly;
it prints the missing file or mismatched count instead of hiding it.

## Which audit is which

The archive and each character have separate audits. Run each from its own
folder.

The archive audit covers database integrity, source conformance, retrieval,
documentation and the MCP surface. From the Grimoire folder:

<pre><code>bash grimoire-master-audit.sh</code></pre>

A character audit checks voice, quotes, module coverage, the conversation path,
golden snapshots and the shared structure checks. From the character's
repository:

<pre><code>bash tests/master-audit.sh</code></pre>

To test a fresh character clone the same way continuous integration does:

<pre><code>bash lore/tests/onboarding-smoke.sh</code></pre>

## Running one suite

Every suite in `tests/` runs on its own:

<pre><code>bash tests/test-db.sh
bash tests/query-interface-test.sh
mcp-server/.venv/bin/python tests/mcp-test.py
python3 tests/conformance.py</code></pre>

They print the missing file or mismatched count instead of hiding it. The
[verification table in the README](https://github.com/sagaciouszu/destiny-agent-grimoire/blob/master/README.md#verification)
lists every suite and what a passing run looks like.

## The site's own checks

This site gates itself too: `npm run check` runs the checks over the built
pages : links, accessibility, axe, Test Tapes and roster : and
`npm run check:external` runs the ninth, the external links. They are explained
under [The audit scripts]({{ '/troubleshooting/' | url }}#the-audit-scripts) on
Troubleshooting.

## Going deeper

- [STANDARDS.md](https://github.com/sagaciouszu/destiny-agent-grimoire/blob/master/STANDARDS.md) : the rules; section 10 is the change procedure.
- [Open an issue](https://github.com/sagaciouszu/destiny-agent-grimoire/issues)
- [The scripts in this site's repository](https://github.com/sagaciouszu/destiny-agent-grimoire-site/tree/master/scripts)
