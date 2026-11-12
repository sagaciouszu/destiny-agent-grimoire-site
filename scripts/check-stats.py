#!/usr/bin/env python3
"""Fail when the built site carries a stale literal count or size.

The site reads `_data/grimoire.json` (exported from the live DB). Stat blocks
must render from that file; old hardcoded numbers are a release blocker.
Read-only; no DB needed.
"""
import glob
import json
import os
import subprocess
import sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DATA = json.load(open(os.path.join(ROOT, "_data", "grimoire.json"), encoding="utf-8"))
SITE = os.path.join(ROOT, "_site")
STALE = ["2,422", "78,740", "130,210", "170 MB", "270 MB",
         "Eighteen read-only tools", "23/23", "15/15",
         "29 MiB", "56 MiB", "41.9 MiB", "78.6 MiB", "65 checks", "89 checks", "91 checks",
         "seven scripts", "2024+ client", "tar -xJf", "tar -xzf",
         "sha256sum -c SHA256SUMS"]


def fmt(n):
    return f"{n:,}"


errors = []

# 1. No old literal anywhere in the built output.
for path in glob.glob(os.path.join(SITE, "**", "*.html"), recursive=True):
    text = open(path, encoding="utf-8", errors="ignore").read()
    for literal in STALE:
        if literal in text:
            errors.append(f"{os.path.relpath(path, SITE)}: stale {literal}")

# 2. The main stat pages render the exported numbers.
checks = {
    "grimoire/index.html": [fmt(DATA["counts"]["transcripts"]),
                            fmt(DATA["counts"]["transcript_lines"]),
                            fmt(DATA["counts"]["fts"])],
    "index.html": [fmt(DATA["counts"]["transcripts"])],
    "grimoire/install/index.html": [f'{DATA["sizes"]["db_mb"]} MB'],
    "personas/install/index.html": [f'{DATA["sizes"]["db_mb"]} MB'],
}
for rel, needles in checks.items():
    path = os.path.join(SITE, rel)
    if not os.path.exists(path):
        errors.append(f"missing built page: {rel}")
        continue
    text = open(path, encoding="utf-8", errors="ignore").read()
    for needle in needles:
        if needle not in text:
            errors.append(f"{rel}: missing {needle}")

# 3. MCP page lists every tool in the manifest snapshot.
mcp = os.path.join(SITE, "grimoire", "mcp", "index.html")
if not os.path.exists(mcp):
    errors.append("missing built page: grimoire/mcp/index.html")
else:
    text = open(mcp, encoding="utf-8", errors="ignore").read()
    for name in DATA["mcp_tool_names"]:
        if f"<code>{name}</code>" not in text:
            errors.append(f"grimoire/mcp: missing tool {name}")

# 4. Persona pages mention every roster agent and its current audit total.
try:
    agents = json.loads(subprocess.run(
        ["node", "-e", "console.log(JSON.stringify(require('./_data/agents.js')))"],
        cwd=ROOT, capture_output=True, text=True, check=True).stdout)
except Exception as exc:
    errors.append(f"cannot read _data/agents.js: {exc}")
    agents = []
roster = os.path.join(SITE, "personas", "index.html")
install = os.path.join(SITE, "personas", "install", "index.html")
for rel, path in (("personas/index.html", roster),
                  ("personas/install/index.html", install)):
    if not os.path.exists(path):
        errors.append(f"missing built page: {rel}")
        continue
    text = open(path, encoding="utf-8", errors="ignore").read()
    for agent in agents:
        if agent["name"] not in text:
            errors.append(f"{rel}: missing {agent['name']}")
    if rel == "personas/index.html":
        for agent in agents:
            audit = agent["audit"]
            needle = f"{audit['passed']}/{audit['total']}"
            if needle not in text:
                errors.append(f"{rel}: missing audit {agent['name']} {needle}")

if errors:
    print("SITE STATS FAIL")
    for error in errors:
        print("  " + error)
    sys.exit(1)
print(f"site stats OK ({DATA['release']}, {DATA['schema_version']})")
