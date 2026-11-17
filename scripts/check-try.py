#!/usr/bin/env python3
"""Prove the /try/ demo dialogue is not canon quotations.

Every beat text and death quip is checked against the Grimoire DB with
`query.py verify --exact`: a line fails if it matches any canon line verbatim.
Choice labels are UI, not voice, so they are not checked — same split as the
tape check (text checked, prompts not). Runs against the local
destiny-agent-grimoire checkout; when that checkout is absent the check is
skipped with a notice.
"""

import json
import os
import subprocess
import sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
GRIMOIRE = os.path.join(os.path.dirname(ROOT), "destiny-agent-grimoire", "db")
QUERY = os.path.join(GRIMOIRE, "query.py")

if not os.path.exists(QUERY):
    print(f"SKIP: demo dialogue canon check ({QUERY} not found)")
    sys.exit(0)

data = json.loads(
    subprocess.run(
        ["node", "-e", "console.log(JSON.stringify(require('./_data/try.js')))"],
        cwd=ROOT,
        capture_output=True,
        text=True,
        check=True,
    ).stdout
)

lines = []
for beat in data["beats"]:
    if beat.get("text"):
        lines.append((f"{beat['story']}:{beat['id']} text", beat["text"]))
    for choice in beat.get("choices", []):
        if choice.get("death"):
            lines.append((f"{beat['story']}:{beat['id']} quip", choice["death"]))

errors = []

texts = [text for _, text in lines]
batch_size = 20  # query.py verify-many accepts up to 20 quotes
for start in range(0, len(texts), batch_size):
    batch = texts[start : start + batch_size]
    run = subprocess.run(
        [sys.executable, QUERY, "verify-many", "--exact", "--json", *batch],
        capture_output=True,
        text=True,
    )
    # verify-many exits 1 when none of the quotes verify — that is the pass
    # case here. Only an unparseable response is a real failure.
    try:
        results = json.loads(run.stdout)["results"]
    except (json.JSONDecodeError, KeyError):
        errors.append(
            f"verify-many failed: {run.stderr.strip() or run.stdout.strip()[:200]}"
        )
        continue
    if len(results) != len(batch):
        errors.append(
            f"verify-many returned {len(results)} results for {len(batch)} quotes"
        )
        continue
    for offset, result in enumerate(results):
        if result["verified"]:
            label = lines[start + offset][0]
            matches = ", ".join(
                f"{m['source']}:{m['slug']}"
                + (f" ({m['speaker']})" if m.get("speaker") else "")
                for m in result["matches"]
            )
            errors.append(
                f"{label} matches canon [{matches}] — {lines[start + offset][1][:70]}..."
            )

if errors:
    print(f"FAIL: {len(errors)} demo dialogue problem(s):")
    for error in errors:
        print(f"  - {error}")
    sys.exit(1)

print(f"OK: {len(lines)} demo lines verified — none match a canon line")
