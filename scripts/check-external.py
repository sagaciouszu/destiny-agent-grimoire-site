#!/usr/bin/env python3
"""Check external links in the built site.

Run from the repository root after `npm run build`:

    python3 scripts/check-external.py _site

The deploy workflow does not block on this because some documentation hosts
rate-limit automated requests. A separate workflow runs it after each deploy,
on pull requests and on manual dispatch.
"""
import concurrent.futures
import glob
import os
import re
import sys
import urllib.error
import urllib.request

ROOT = sys.argv[1] if len(sys.argv) > 1 else "_site"
USER_AGENT = "destiny-agent-grimoire-site-link-check/1.0 (+https://github.com/sagaciouszu/destiny-agent-grimoire-site)"

urls = set()
for path in glob.glob(os.path.join(ROOT, "**", "*.html"), recursive=True):
    text = open(path, encoding="utf-8").read()
    for url in re.findall(r'(?:href|src)="(https?://[^"]+)"', text):
        if url.startswith("https://sagaciouszu.github.io/destiny-agent-grimoire-site"):
            continue
        urls.add(url)


def check(url):
    request = urllib.request.Request(
        url,
        headers={"User-Agent": USER_AGENT, "Accept": "text/html,*/*;q=0.8"},
        method="GET",
    )
    try:
        with urllib.request.urlopen(request, timeout=20) as response:
            return url, response.status, ""
    except urllib.error.HTTPError as error:
        if error.code in (403, 429):
            return url, error.code, "blocked by the host"
        return url, error.code, str(error.reason)
    except Exception as error:  # network failures are reported, not raised
        return url, 0, str(error)


failures = []
warnings = []
with concurrent.futures.ThreadPoolExecutor(max_workers=8) as pool:
    for url, status, detail in pool.map(check, sorted(urls)):
        if 200 <= status < 400:
            continue
        if status in (403, 429):
            warnings.append((url, status, detail))
        else:
            failures.append((url, status, detail))

if warnings:
    print(f"WARN: {len(warnings)} link(s) blocked automated checks")
    for url, status, detail in warnings:
        print(f"  - {status} {url} ({detail})")

if failures:
    print(f"FAIL: {len(failures)} broken external link(s)")
    for url, status, detail in failures:
        print(f"  - {status or 'ERR'} {url} ({detail})")
    sys.exit(1)

print(f"OK: {len(urls)} external links checked")
