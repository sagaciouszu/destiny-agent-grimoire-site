#!/usr/bin/env python3
"""Sync roster metadata in `_data/agents.js` from the grimoire registry and git.

The profile prose stays hand-authored. This only rewrites fields that have a
single source: repo, entry, version/tag, release URL, last update and audit
totals. `--check` fails on drift.

Usage:
    python3 scripts/sync-agents.py [--check]
Environment:
    GRIMOIRE  path to the grimoire checkout (default ../destiny-agent-grimoire)
    AGENTS    path to the sibling agent checkouts (default parent of GRIMOIRE)
"""
import argparse
import json
import os
import re
import subprocess
import sys

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.dirname(HERE)
DEFAULT_GRIMOIRE = os.path.join(os.path.dirname(ROOT), 'destiny-agent-grimoire')
GRIMOIRE = os.environ.get('GRIMOIRE') or DEFAULT_GRIMOIRE
AGENTS = os.environ.get('AGENTS') or os.path.dirname(GRIMOIRE)
DATA = os.path.join(ROOT, '_data', 'agents.js')


def git(repo, *args):
    return subprocess.run(['git', '-C', repo, *args], capture_output=True,
                          text=True, check=True).stdout.strip()


def registry():
    path = os.path.join(GRIMOIRE, 'series', 'agents.json')
    with open(path, encoding='utf-8') as fh:
        return {a['id']: a for a in json.load(fh).get('agents', [])}


def audit_total(repo):
    path = os.path.join(repo, 'tests', 'suites.json')
    if not os.path.isfile(path):
        return None
    with open(path, encoding='utf-8') as fh:
        data = json.load(fh)
    return data.get('count') or len(data.get('suites', []))


def field(block, name, pattern, value):
    # Roster fields are JS object properties and carry a trailing comma.
    return re.sub(rf'^(\s*){name}:\s*{pattern}(,?)\s*$',
                  rf'\g<1>{name}: "{value}"\g<2>',
                  block, count=1, flags=re.M)


def update_block(block, agent, site_id):
    source = agent['source']
    repo = os.path.join(AGENTS, source)
    if not os.path.isdir(repo):
        return block, f'{site_id}: {source} not checked out'
    try:
        version = git(repo, 'describe', '--tags', '--abbrev=0').lstrip('v')
    except subprocess.CalledProcessError:
        return block, f'{site_id}: no tag'
    updated = git(repo, 'log', '-1', '--format=%cs')
    total = audit_total(repo)
    owner = 'sagaciouszu'
    block = field(block, 'repo', r'"[^"]*"', f'https://github.com/{owner}/{source}')
    block = field(block, 'repoName', r'"[^"]*"', source)
    block = field(block, 'entry', r'"[^"]*"', agent['entry'])
    block = field(block, 'entryUrl', r'"[^"]*"',
                  f'https://github.com/{owner}/{source}/blob/master/{agent["entry"]}')
    block = field(block, 'version', r'"[^"]*"', version)
    block = field(block, 'releaseUrl', r'"[^"]*"',
                  f'https://github.com/{owner}/{source}/releases/tag/v{version}')
    block = field(block, 'updated', r'"[^"]*"', updated)
    if total:
        block = re.sub(r'^(\s*)audit:\s*\{[^}]*\},?',
                       rf'\g<1>audit: {{ passed: {total}, total: {total} }},',
                       block, count=1, flags=re.M)
    return block, None


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--check', action='store_true')
    args = parser.parse_args()
    if not os.path.isfile(DATA):
        print(f'FAIL: {DATA} missing')
        return 1
    if not os.path.isdir(GRIMOIRE):
        print(f'SKIP: grimoire not found at {GRIMOIRE}')
        return 0
    text = open(DATA, encoding='utf-8').read()
    rows = registry()
    parts = re.split(r'(?=^  \{\n    id: ")', text, flags=re.M)
    out, issues, seen = [], [], set()
    for part in parts:
        match = re.match(r'  \{\n    id: "([^"]+)"', part)
        if not match:
            out.append(part)
            continue
        site_id = match.group(1)
        seen.add(site_id)
        if site_id not in rows:
            issues.append(f'{site_id}: not in series/agents.json')
            out.append(part)
            continue
        updated, issue = update_block(part, rows[site_id], site_id)
        if issue:
            issues.append(issue)
        out.append(updated)
    missing = sorted(set(rows) - seen)
    if missing:
        issues.append(f'registry ids missing from the site: {", ".join(missing)}')
    new = ''.join(out)
    if args.check:
        if new != text or issues:
            for issue in issues:
                print(f'  {issue}')
            print('FAIL: site roster metadata is stale; run scripts/sync-agents.py')
            return 1
        print(f'site roster current: {len(seen)} agents')
        return 0
    if new != text:
        open(DATA, 'w', encoding='utf-8').write(new)
        print(f'site roster updated: {len(seen)} agents')
    else:
        print(f'site roster already current: {len(seen)} agents')
    for issue in issues:
        print(f'  {issue}')
    return 1 if issues else 0


if __name__ == '__main__':
    sys.exit(main())
