#!/usr/bin/env python3
"""Prove the Test Tapes are not canon quotations.

Every tape text is checked against the Grimoire DB with `query.py verify
--exact`: a tape fails if it matches any canon line verbatim. Also checks
each tape has the fields the templates render. Runs against the local
destiny-agent-grimoire checkout (the site CI does not have the DB); when
that checkout is absent the check is skipped with a notice.
"""
import json
import os
import subprocess
import sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
GRIMOIRE = os.path.join(os.path.dirname(ROOT), "destiny-agent-grimoire", "db")
QUERY = os.path.join(GRIMOIRE, "query.py")

if not os.path.exists(QUERY):
    print(f"SKIP: tape canon check ({QUERY} not found)")
    sys.exit(0)

tapes = json.loads(
    subprocess.run(
        ["node", "-e", "console.log(JSON.stringify(require('./_data/voices.js')))"],
        cwd=ROOT,
        capture_output=True,
        text=True,
        check=True,
    ).stdout
)

errors = []

for i, tape in enumerate(tapes, 1):
    for field in ("speaker", "url", "prompt", "text", "topic", "captured"):
        if not tape.get(field):
            errors.append(f"tape {i}: missing {field}")

texts = [tape["text"] for tape in tapes]
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
        errors.append(f"verify-many failed: {run.stderr.strip() or run.stdout.strip()[:200]}")
        continue
    if len(results) != len(batch):
        errors.append(f"verify-many returned {len(results)} results for {len(batch)} quotes")
        continue
    for offset, result in enumerate(results):
        if result["verified"]:
            tape = tapes[start + offset]
            sources = ", ".join(
                f"{m['source']}:{m['slug']}" + (f" ({m['speaker']})" if m.get("speaker") else "")
                for m in result["matches"]
            )
            errors.append(
                f"tape {start + offset + 1} ({tape['speaker']}, {tape['topic']}): "
                f"matches canon [{sources}] — {tape['text'][:70]}..."
            )

if errors:
    print(f"FAIL: {len(errors)} tape problem(s):")
    for error in errors:
        print(f"  - {error}")
    sys.exit(1)

print(f"OK: {len(tapes)} tapes verified — none match a canon line")
