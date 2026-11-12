---
layout: page
title: Search
category: Search
lede: Search the site — guides, install steps, troubleshooting, persona pages and the limits page.
section: search
---

<figure class="page-hero">
  <img src="{{ '/assets/zero-hour.jpg' | url }}" alt="A red-lit corridor aboard the Almighty." width="1280" height="720" decoding="async">
</figure>

<link href="{{ '/pagefind/pagefind-component-ui.css' | url }}" rel="stylesheet">
<script src="{{ '/pagefind/pagefind-component-ui.js' | url }}" type="module"></script>

<div class="search-shell" data-pf-theme="dark">
  <pagefind-config instance="docs-search" bundle-path="{{ '/pagefind/' | url }}" base-url="{{ '/' | url }}" excerpt-length="25"></pagefind-config>
  <pagefind-input instance="docs-search" placeholder="Search install guides, troubleshooting, personas…" autofocus></pagefind-input>
  <pagefind-summary instance="docs-search" default-message="Type a word or phrase to search the documentation."></pagefind-summary>
  <pagefind-results instance="docs-search"></pagefind-results>
  <pagefind-keyboard-hints instance="docs-search"></pagefind-keyboard-hints>
</div>

<style>
  .search-shell {
    --pf-background: #121419;
    --pf-text: #F2F2F2;
    --pf-text-secondary: #A0A0A4;
    --pf-text-muted: #A0A0A4;
    --pf-border: #2F2D45;
    --pf-border-focus: #7F9FB0;
    --pf-hover: #2B384B;
    --pf-mark: #E8C547;
    --pf-outline-focus: #E8C547;
    --pf-input-height: 44px;
    margin: 2rem 0 3rem;
  }
</style>

## What you can search here

This search covers the **site documentation** — install guides, troubleshooting,
persona pages, limits and provenance, and the build notes. It does **not** search
the 125,324 lore lines in the Grimoire database.

For lore search, install the Grimoire locally and use the command line:

```bash
python3 db/query.py search "your term" --limit 10
```

Or connect an AI through the MCP server — see
[Connect an AI]({{ '/grimoire/mcp/' | url }}).

## Tips

- Use exact phrases in quotes: `"absolutely not"`.
- Filter by the page you want: type `install` to find setup steps.
- The search is local — nothing is sent anywhere.
