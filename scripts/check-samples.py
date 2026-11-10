#!/usr/bin/env python3
"""Verify every site sample line against the Grimoire database.

The persona pages say their samples are checked. This gate makes that true:
each `_data/agents.js` sample must pass `query.py verify --speaker <speaker>
--exact`. Read-only. Skips cleanly when the local database is absent, like the
Test Tapes check.
"""
import json
import os
import subprocess
import sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
AGENTS = os.path.join(ROOT, '_data', 'agents.js')
GRIMOIRE = os.environ.get('GRIMOIRE') or os.path.join(
    os.path.dirname(ROOT), 'destiny-agent-grimoire')
DB = os.environ.get('GRIMOIRE_DB') or os.path.join(GRIMOIRE, 'db', 'grimoire.db')
QUERY = os.path.join(GRIMOIRE, 'db', 'query.py')


def load_agents():
    out = subprocess.run(
        ['node', '-e', "console.log(JSON.stringify(require('./_data/agents.js')))"],
        cwd=ROOT, capture_output=True, text=True, check=True).stdout
    return json.loads(out)


def speaker_for(agent):
    repo = os.path.join(os.path.dirname(GRIMOIRE), agent['repoName'])
    persona = os.path.join(repo, 'persona.json')
    if not os.path.isfile(persona):
        return None
    with open(persona, encoding='utf-8') as fh:
        return json.load(fh).get('speaker')


def main():
    if not os.path.isfile(DB):
        print(f'SKIP: no Grimoire database at {DB}')
        return 0
    agents = load_agents()
    errors, checked = [], 0
    for agent in agents:
        speaker = speaker_for(agent)
        if not speaker:
            errors.append(f'{agent["id"]}: no persona speaker')
            continue
        for sample in agent.get('samples', []):
            text = (sample.get('text') or '').strip()
            if not text:
                errors.append(f'{agent["id"]}: empty sample')
                continue
            result = subprocess.run(
                [sys.executable, QUERY, 'verify', text, '--speaker', speaker,
                 '--exact'], capture_output=True, text=True)
            checked += 1
            if result.returncode != 0:
                errors.append(f'{agent["id"]}: not verified -> {text[:70]}')
    if errors:
        print(f'FAIL: {len(errors)} sample problem(s):')
        for error in errors:
            print(f'  - {error}')
        return 1
    print(f'OK: {checked} site samples verified across {len(agents)} agents')
    return 0


if __name__ == '__main__':
    sys.exit(main())
