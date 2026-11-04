#!/usr/bin/env python3
"""Basic accessibility checks for the built site.

This is deliberately dependency-free. It catches the common regressions:
missing alt text, unlabeled controls, empty links, duplicate ids and
keyboard-hostile tabindex values.
"""
import glob
import os
import re
import sys
from html import unescape

ROOT = sys.argv[1] if len(sys.argv) > 1 else "_site"
errors = []

for path in sorted(glob.glob(os.path.join(ROOT, "**", "*.html"), recursive=True)):
    text = open(path, encoding="utf-8").read()
    rel = "/" + os.path.relpath(path, ROOT).replace("index.html", "")

    if 'lang="en"' not in text:
        errors.append(f"{rel}: missing lang attribute")
    if text.count("<h1") != 1:
        errors.append(f"{rel}: expected one h1, found {text.count('<h1')}")
    if re.search(r'tabindex="[1-9]', text):
        errors.append(f"{rel}: positive tabindex")

    ids = re.findall(r'id="([^"]+)"', text)
    if len(ids) != len(set(ids)):
        errors.append(f"{rel}: duplicate ids")

    for img in re.findall(r"<img\b[^>]*>", text, re.I):
        if not re.search(r'\balt="', img):
            errors.append(f"{rel}: image without alt: {img[:90]}")

    for m in re.finditer(r"<a\b([^>]*)>(.*?)</a>", text, re.I | re.S):
        attrs, body = m.group(1), m.group(2)
        label = re.sub(r"<[^>]+>", " ", body)
        label = unescape(re.sub(r"\s+", " ", label)).strip()
        if not label and not re.search(r'aria-label="|title="', attrs):
            errors.append(f"{rel}: empty link: {m.group(0)[:100]}")

    for m in re.finditer(r"<button\b([^>]*)>(.*?)</button>", text, re.I | re.S):
        attrs, body = m.group(1), m.group(2)
        label = re.sub(r"<[^>]+>", " ", body)
        label = unescape(re.sub(r"\s+", " ", label)).strip()
        if not label and not re.search(r'aria-label="|title="', attrs):
            errors.append(f"{rel}: button without a name: {m.group(0)[:100]}")

    labelled = set()
    for block in re.findall(r"<label\b[^>]*>(.*?)</label>", text, re.I | re.S):
        labelled.update(re.findall(r"<(?:input|select|textarea)\b[^>]*>", block, re.I))
    for_controls = set(re.findall(r'<label\b[^>]*for="([^"]+)"', text, re.I))
    for control in re.findall(r"<(?:input|select|textarea)\b[^>]*>", text, re.I):
        if control in labelled:
            continue
        if re.search(r'aria-label="|aria-labelledby="|title="', control, re.I):
            continue
        control_id = re.search(r'\bid="([^"]+)"', control)
        if control_id and control_id.group(1) in for_controls:
            continue
        errors.append(f"{rel}: form control without a label: {control[:100]}")

if errors:
    print(f"FAIL: {len(errors)} accessibility issue(s)")
    for error in errors:
        print(f"  - {error}")
    sys.exit(1)

print(f"OK: {len(glob.glob(os.path.join(ROOT, '**', '*.html'), recursive=True))} pages passed basic accessibility checks")
