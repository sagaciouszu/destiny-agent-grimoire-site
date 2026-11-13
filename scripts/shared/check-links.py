#!/usr/bin/env python3
"""Validate the built site: links, fragments, metadata, sitemap and robots."""
import glob
import os
import re
import sys

ROOT = sys.argv[1] if len(sys.argv) > 1 else "_site"
ORIGIN = "https://sagaciouszu.github.io/destiny-agent-grimoire-site"
errors = []

files = sorted(glob.glob(os.path.join(ROOT, "**", "*.html"), recursive=True))
titles = {}
descriptions = {}
noindex_pages = set()

for path in files:
    text = open(path, encoding="utf-8").read()
    rel = "/" + os.path.relpath(path, ROOT)
    if rel.endswith("/index.html"):
        rel = rel[: -len("index.html")]

    if text.count("<h1") != 1:
        errors.append(f"{rel}: expected one h1, found {text.count('<h1')}")
    if 'lang="en"' not in text:
        errors.append(f"{rel}: missing lang attribute")

    title = re.search(r"<title>(.*?)</title>", text, re.S)
    title = title.group(1).strip() if title else ""
    titles.setdefault(title, []).append(rel)

    description = re.search(r'<meta name="description" content="([^"]*)"', text)
    description = description.group(1) if description else ""
    descriptions.setdefault(description, []).append(rel)

    canonical = re.search(r'<link rel="canonical" href="([^"]+)"', text)
    canonical = canonical.group(1) if canonical else ""
    expected = ORIGIN + rel
    if rel == "/getting-started/":
        expected = ORIGIN + "/grimoire/install/"
    if 'http-equiv="refresh"' in text:
        target = re.search(r'url=([^"]+)"', text)
        if target:
            expected = ORIGIN + target.group(1).replace("/destiny-agent-grimoire-site", "")
    if canonical != expected:
        errors.append(f"{rel}: canonical {canonical!r} != {expected!r}")

    ids = re.findall(r'id="([^"]+)"', text)
    if len(ids) != len(set(ids)):
        errors.append(f"{rel}: duplicate ids")

    for href in re.findall(r'href="(/destiny-agent-grimoire-site/[^"]*)"', text):
        target = href.split("#")[0].split("?")[0].replace("/destiny-agent-grimoire-site", "")
        target_path = os.path.join(
            ROOT,
            (target + "index.html").lstrip("/") if target.endswith("/") else target.lstrip("/"),
        )
        if not os.path.exists(target_path):
            errors.append(f"{rel}: dead link {href}")

    for fragment in re.findall(r'href="#([^"]+)"', text):
        if fragment not in ids:
            errors.append(f"{rel}: missing fragment #{fragment}")

    if 'name="robots" content="noindex"' in text:
        noindex_pages.add(rel)

    if "`" in text:
        errors.append(f"{rel}: literal backtick")
    if "&amp;amp;" in text:
        errors.append(f"{rel}: double-escaped entity")
    # Guard against regressions to the pre-rename URL. Note the bare
    # 'destiny-agent-grimoire' prefix must NOT be flagged: the current origin
    # 'destiny-agent-grimoire-site' starts with it.
    if (
        "sagaciouszu.github.io/grimoire-site" in text
        or 'href="/grimoire-site/' in text
    ) and rel not in ("/404.html", "/getting-started/"):
        errors.append(f"{rel}: old site URL")

for label, group in (("title", titles), ("description", descriptions)):
    for value, pages in group.items():
        if value and len(pages) > 1:
            errors.append(f"duplicate {label}: {pages}")

sitemap_path = os.path.join(ROOT, "sitemap.xml")
if not os.path.exists(sitemap_path):
    errors.append("missing sitemap.xml")
else:
    sitemap = open(sitemap_path, encoding="utf-8").read()
    locs = [
        url.replace(ORIGIN, "")
        for url in re.findall(r"<loc>([^<]+)</loc>", sitemap)
    ]
    pages = set()
    for path in files:
        rel = "/" + os.path.relpath(path, ROOT)
        if rel.endswith("/index.html"):
            rel = rel[: -len("index.html")]
        if rel not in ("/404.html", "/getting-started/") and rel not in noindex_pages:
            pages.add(rel)
    if set(locs) != pages:
        errors.append(f"sitemap mismatch: missing={sorted(pages - set(locs))} extra={sorted(set(locs) - pages)}")
    if len(locs) != len(set(locs)):
        errors.append("sitemap has duplicate URLs")

robots_path = os.path.join(ROOT, "robots.txt")
if not os.path.exists(robots_path):
    errors.append("missing robots.txt")
elif f"Sitemap: {ORIGIN}/sitemap.xml" not in open(robots_path, encoding="utf-8").read():
    errors.append("robots.txt does not point at the sitemap")

if not os.path.exists(os.path.join(ROOT, "assets", "social.png")):
    errors.append("missing assets/social.png")

if errors:
    print(f"FAIL: {len(errors)} issue(s)")
    for error in errors:
        print(f"  - {error}")
    sys.exit(1)

print(f"OK: {len(files)} pages, links, metadata, sitemap and robots")
