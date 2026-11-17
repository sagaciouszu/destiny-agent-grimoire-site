---
section: personas
layout: page
title: Build the Personas
category: Personas · Build
lede: Build the Grimoire and all 12 characters from source. This is the expert path — repeatable, offline-capable, and used by the release pipeline.
permalink: /personas/build/
---

## Prerequisites

- **Git** — to clone the project and all 12 agent repositories
- **Python 3.8+** — to run the build and search tools
- **Node.js 18+** — for the site build (optional, for local site preview)
- **~2 GB free space** — for the grimoire + all agent repos

---

## Clone Everything

```bash
# Grimoire (the library + build scripts)
git clone https://github.com/sagaciouszu/destiny-agent-grimoire.git
cd destiny-agent-grimoire

# All 12 agent repositories
bash scripts/sync-agents.sh --clone
```

The sync script clones: drifter, eris, calus, zavala, ghost, mara-sov, saint-14, petra-venj, osiris, ikora, crow, sloane.

---

## Build the Grimoire

```bash
# Creates db/grimoire.db from source/ and archive/data/
python3 db/migrate.py
```

The build reads `source/` (hand-authored books, transcripts, items) and vault-local `archive/data/*.jsonl` (operator vault, not committed) and writes `db/grimoire.db`.

---

## Run the Master Audit

```bash
# All 18 gates: DB integrity, source conformance, retrieval, docs, MCP, persona gates
bash grimoire-master-audit.sh

# Query interface tests (independent)
bash tests/query-interface-test.sh

# Agent conformance (from each agent repo)
python3 tests/conformance.py
```

---

## Build the Site Locally

```bash
cd ../destiny-agent-grimoire-site
npm install
npx @11ty/eleventy
# Output in _site/
```

---

## Deploy Characters to OpenCode

```bash
cd ../destiny-agent-grimoire
bash scripts/sync-live-agents.sh
```

This installs all 12 main agents plus 12 read-only consult copies to `~/.config/opencode/agents/`.

---

## Rebuild After Changes

If you modify source files, scraper output, or agent content:

```bash
# In the grimoire repo
python3 db/migrate.py
python3 tests/sync-doc-counts.py
bash grimoire-master-audit.sh

# In each agent repo (from its root)
python3 tests/conformance.py
```

---

## Release Artifacts

The official download is the release file. Verify before use:

```bash
curl -fsSL https://github.com/sagaciouszu/destiny-agent-grimoire/releases/latest/download/grimoire.db -o grimoire.db
curl -fsSL https://github.com/sagaciouszu/destiny-agent-grimoire/releases/latest/download/SHA256SUMS -o SHA256SUMS
grep '  grimoire.db$' SHA256SUMS | sha256sum -c -
mv grimoire.db db/grimoire.db
```

A mismatch means the file was cut short or changed in transit. Delete and download again instead of opening it.

---

## Next Steps

- [Install a character the simple way]({{ '/personas/install/' | url }})
- [Use another app]({{ '/personas/platforms/' | url }})
- [Troubleshooting]({{ '/troubleshooting/' | url }})