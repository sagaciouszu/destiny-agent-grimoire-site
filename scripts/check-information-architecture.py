#!/usr/bin/env python3
"""Guard the isolated public-site boundary and live roster labels."""

from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
eleventyignore = (ROOT / ".eleventyignore").read_text()
home = (ROOT / "index.njk").read_text()
not_found = (ROOT / "404.md").read_text()

assert ".superpowers" in eleventyignore.splitlines(), (
    "Private planning artifacts must not be rendered into the site"
)
assert "docs/superpowers" in eleventyignore.splitlines(), (
    "Internal design documents must not be rendered into the public site"
)
assert "{{ agents | length }}" in home, (
    "Home should describe the data-driven roster, not a stale partial list"
)
assert "{{ agents | size }}" in not_found, (
    "404 page should describe the current character roster dynamically"
)
print("OK: internal documents are excluded and roster labels are data-driven")
