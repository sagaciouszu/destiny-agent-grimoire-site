---
section: troubleshooting
layout: page
title: The audit scripts
category: Help · Audit scripts
lede: Six scripts stand between a change and the live site. What each one checks, how to run it, and what a failure looks like.
---

Every push to this site runs the same checks you can run yourself. They live in
`scripts/`, they take well under a minute, and they catch the mistakes that
would otherwise reach readers: a dead link, an unlabelled control, a Test Tape
that quotes the games, a consult copy counted as a character.

Most run against the built site; the Test Tapes check also needs the Grimoire
database, and the external-link check needs the network.

## Run them all

<pre><code>npm run check</code></pre>

builds the site, then runs the checks in order: links, accessibility, axe,
Test Tapes, roster. The first failure stops the run, so the error you see is
the first thing to fix.

The external-link check has its own command, because it depends on other
people's servers:

<pre><code>npm run check:external</code></pre>

## What each one checks

### Links and metadata

`scripts/check-links.py` walks every built page: internal links resolve,
fragments point at real ids, titles and descriptions are unique, canonical
URLs match, and the sitemap lists exactly the pages that were built. It also
catches leftovers — a link to the old site, a double-escaped entity, a
`robots.txt` that forgot the sitemap.

Run it alone:

<pre><code>python3 scripts/check-links.py _site</code></pre>

A failure names the page and the problem:

<pre><code>FAIL: 1 issue(s)
  - /personas/ghost/: dead link /grimoire-site/personas/ghosts/
</code></pre>

### Basic accessibility

`scripts/check-a11y.py` is a dependency-free pass over the built HTML: every
image has alt text, every control has a label, every link has a name, ids are
unique, and each page has exactly one `h1` and a `lang` attribute.

<pre><code>python3 scripts/check-a11y.py _site</code></pre>

### The axe scan

`scripts/check-axe.mjs` goes further and opens the key pages in a real
browser, in both dark and light, running axe-core against the WCAG 2.0 and
2.1 A and AA rules. It uses a local Chromium when one is installed, otherwise
Playwright's (`npx playwright install chromium`), and picks a free port so an
unrelated local server can never satisfy the checks.

<pre><code>node scripts/check-axe.mjs</code></pre>

Failures name the theme, the page and the rule:

<pre><code>FAIL: 1 accessibility violation(s)
  - [dark] Home: color-contrast (serious) — Elements must have sufficient color contrast
</code></pre>

### The Test Tapes check

`scripts/check-tapes.py` loads every tape from `_data/voices.js` and asks the
Grimoire's quote verifier whether any of them matches a canon line word for
word. It also fails when a tape is missing one of the fields the templates
render. This is the check behind the promise under the Test Tapes: none of
them are quotes from the games.

It needs the Grimoire checkout next to this one (`../destiny-agent-grimoire`)
for the database, which is why it runs on your machine but not in the deploy
workflow. Without the checkout it prints `SKIP:` and verifies nothing — the
promise goes unchecked, not proven.

<pre><code>python3 scripts/check-tapes.py</code></pre>

<pre><code>FAIL: 1 tape problem(s)
  - tape 42 (Eris Morn, on grief): matches canon [transcript:hellmouth (Eris Morn)] — Hold the line...
</code></pre>

### The roster check

`scripts/check-roster.py` enforces the rule that consult copies are helpers,
not personas: no `-consult` id may reach the roster or the placeholders, no
consult page gets built or listed in the sitemap, and every character total
written into a page matches the roster. It needs no database, so the deploy
workflow runs it too.

<pre><code>python3 scripts/check-roster.py _site</code></pre>

<pre><code>FAIL: 1 roster problem(s)
  - consult page built: _site/personas/drifter-consult
</code></pre>

### External links

`scripts/check-external.py` collects every link that leaves this site and
requests them eight at a time. A `403` or `429` is a warning — many
documentation hosts block bots — and anything else that does not answer is a
failure.

<pre><code>python3 scripts/check-external.py _site</code></pre>

## Where they run

- **On your machine.** `npm run check` runs everything except the external
  links; `npm run check:external` runs those. Run both before pushing.
- **On every push to `master`.** The deploy workflow builds the site, then
  runs the link, accessibility, roster and axe checks. A failure stops the
  deploy — nothing publishes until it is fixed. The Test Tapes check is the
  exception: continuous integration has no Grimoire database, so that one is
  left to your machine.
- **On pull requests and after each deploy.** A separate workflow runs the
  external-link check. It never blocks a deploy: a rate-limited host should
  not hold up a release.

## Reading a failure

Every script prints one `OK:` line when it passes. When it does not, it
prints `FAIL:` followed by one indented line per problem, and exits non-zero,
which is what stops `npm run check` and fails the CI step.

- `WARN:` comes from the external-link check: the host blocked the request,
  so the link may still be fine. Re-run later or open it by hand.
- `SKIP:` comes from the Test Tapes check when the Grimoire database is
  missing. Nothing was verified, and the run still passes.

The fix is usually one line: point the link at the path that exists, add the
alt text, delete the duplicate id. If the checks fail right after a fresh
download rather than after an edit, the setup is what broke — see
[The project checks fail after downloading]({{ '/troubleshooting/' | url }}#tests).

## Related

- [Back to Troubleshooting]({{ '/troubleshooting/' | url }})
- [The scripts in the repository](https://github.com/sagaciouszu/grimoire-site/tree/master/scripts)
