#!/usr/bin/env python3
"""Consult copies are helpers: they never count toward a total.

Enforces on the built site and the roster data:
- no roster or placeholder id ends in -consult (consult copies are not personas)
- no consult page is generated or listed in the sitemap
- every spelled-out character total in the HTML ("five characters", "All five
  characters", "Five Destiny characters") equals the roster size, so totals
  can only ever count the real characters — never consult copies

Read-only; needs no Grimoire DB, so it also runs in CI.
"""
import glob
import json
import os
import re
import subprocess
import sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SITE = sys.argv[1] if len(sys.argv) > 1 else "_site"
errors = []


def load_data(name):
    out = subprocess.run(
        ["node", "-e", f"console.log(JSON.stringify(require('./_data/{name}.js')))"],
        cwd=ROOT,
        capture_output=True,
        text=True,
        check=True,
    ).stdout
    return json.loads(out)


agents = load_data("agents")
placeholders = load_data("placeholders")
roster_size = len(agents)

for entry in agents + placeholders:
    if entry["id"].endswith("-consult"):
        errors.append(f"{entry['id']}: consult copies must not be roster entries")

consult_pages = [
    path
    for path in glob.glob(os.path.join(ROOT, SITE, "personas", "*"))
    if "consult" in os.path.basename(path)
]
for path in consult_pages:
    errors.append(f"consult page built: {os.path.relpath(path, ROOT)}")

sitemap = os.path.join(ROOT, SITE, "sitemap.xml")
if os.path.exists(sitemap) and "-consult" in open(sitemap, encoding="utf-8").read():
    errors.append("sitemap lists a -consult URL")

# Spelled-out character totals: only the roster size may appear. The number
# must sit directly before "characters" (optionally "Destiny characters"), so
# stats like "20 curated characters" from the archive are untouched.
total_pattern = re.compile(
    r"\b(one|two|three|four|five|six|seven|eight|nine|ten|"
    r"eleven|twelve|thirteen|fourteen|fifteen|sixteen|seventeen|eighteen|nineteen|twenty|"
    r"\d+)\s+(?:Destiny\s+)?characters\b",
    re.IGNORECASE,
)
words = {
    "one": 1, "two": 2, "three": 3, "four": 4, "five": 5, "six": 6,
    "seven": 7, "eight": 8, "nine": 9, "ten": 10, "eleven": 11,
    "twelve": 12, "thirteen": 13, "fourteen": 14, "fifteen": 15,
    "sixteen": 16, "seventeen": 17, "eighteen": 18, "nineteen": 19,
    "twenty": 20,
}

for path in sorted(glob.glob(os.path.join(ROOT, SITE, "**", "*.html"), recursive=True)):
    text = open(path, encoding="utf-8").read()
    rel = "/" + os.path.relpath(path, ROOT)
    for match in total_pattern.finditer(text):
        token = match.group(1).lower()
        stated = words.get(token) if token in words else int(token)
        if stated != roster_size:
            errors.append(
                f"{rel}: says {match.group(0)!r} but the roster has {roster_size}"
            )

if errors:
    print(f"FAIL: {len(errors)} roster problem(s):")
    for error in errors:
        print(f"  - {error}")
    sys.exit(1)

print(f"OK: consult copies excluded — {roster_size} characters, no consult pages or counts")
