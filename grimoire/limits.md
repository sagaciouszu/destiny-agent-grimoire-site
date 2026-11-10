---
layout: page
title: Limits and provenance
category: The Grimoire · Limits
lede: What this library is, what it is not, and how to tell a verified line from a plausible one.
section: grimoire
---

This page is the honesty contract for the library. It is written to be read by
people and ingested by tools. If a claim elsewhere on this site conflicts with
this page, this page wins.

## Facts at this build

| Fact | Value |
|---|---|
| Transcript headers | {{ grimoire.counts.transcripts | commas }} |
| Transcript lines | {{ grimoire.counts.transcript_lines | commas }} |
| Caption-tier headers | {{ grimoire.counts.caption_headers | commas }} |
| Caption-tier lines | {{ grimoire.counts.caption_lines | commas }} |
| Observed speakers (discovery) | {{ grimoire.counts.speakers | commas }} |
| Persona-canon speakers | {{ grimoire.counts.canon_speakers | commas }} |
| Transcripts with no recorded timeline | {{ grimoire.counts.timeline_unknown | commas }} |
| Transcripts with no `source_url` | {{ grimoire.counts.source_url_missing | commas }} |
| Coverage entries with no dialogue | {{ grimoire.counts.coverage_no_dialogue | commas }} |
| Coverage entries with a partial transcript | {{ grimoire.counts.coverage_partial | commas }} |
| Schema | {{ grimoire.schema_version }} |
| Release | {{ grimoire.release }} |

The numbers move with each build. The site reads them from one generated
snapshot; they are not hand-copied.

## What this library is

- A fan-built SQLite database of Destiny text: books and entries, transcripts and
  dialogue, grimoire cards, item lore, records, seals and curated characters.
- A source-checking aid: every searchable row keeps the provenance we have, and
  `verify` can tell you whether a line exists in this library with the
  attribution you supply.
- Build-scoped: caption provenance names the client build that shipped the line,
  and each build is recorded rather than blended silently.

## What it is not

- **Not complete.** It is not every line, every item, every audio file or every
  version of every mission. About 16,000 item rows are stat-only and carry no lore
  text by design; the item table is a catalogue, not a lore dump. Some activities have no dialogue, a partial
  transcript or narration only. Those gaps are recorded in `coverage_notes`; they
  are not filled with guesses.
- **Not official.** It is not affiliated with or endorsed by Bungie. A line that
  passes `verify` is present in this corpus, not proof that Bungie still ships it
  or ever published it in that exact form.
- **Not a subtitle track.** {{ grimoire.counts.caption_headers | commas }} of the
  {{ grimoire.counts.transcripts | commas }} headers and
  {{ grimoire.counts.caption_lines | commas }} of the
  {{ grimoire.counts.transcript_lines | commas }} lines are caption-tier string
  bank text. That tier includes dialogue, narration and objectives in one table;
  its `kind` label is a heuristic from punctuation and in-string attribution, not
  a build-side fact.
- **Not era-pure.** A transcript without a recorded timeline stays unknown
  ({{ grimoire.counts.timeline_unknown | commas }} today). Season, act and
  expansion are never inferred from the wording. A line is dated only when the
  source or an explicit classification supports it.
- **Not a speaker guesser.** A speaker is used only when the string carries its
  own attribution, a verified caption source supplies it, or an alias maps it.
  `v_speakers` is discovery ({{ grimoire.counts.speakers | commas }} names,
  including caption-only names); `v_canon_speakers` is persona-canon membership
  ({{ grimoire.counts.canon_speakers | commas }}). Neither is a claim that every
  name is a major character.

## Provenance rules

- Caption lines keep their build, package and StringReference origin.
  `caption_provenance` is one row per line, first build wins;
  `caption_sightings` records every observation, including later builds.
- A build is not a proxy for an earlier build. Live text is legitimate for the
  live era and for verification; it is never presented as what an earlier
  expansion shipped. Drift is logged, not rewritten inline.
- Some transcript headers have no `source_url`
  ({{ grimoire.counts.source_url_missing | commas }} today). That is a visible
  gap, not a license to invent one. Caption rows carry build and package
  provenance instead.
- Mechanical copy and item fragments that duplicate an existing entry are
  excluded rather than counted twice.

## Quote verification

`verify` normalises the text and checks it against the library. Use it before
quoting:

```bash
python3 db/query.py verify "Absolutely not." --speaker "Eris Morn" --exact
```

- `--speaker` requires the attribution; a line with no speaker will not satisfy a
  named speaker.
- `--exact` requires a whole canonical row, not a fragment.
- A pass means "this text is in the library as attributed". It does not mean
  "this is the only version", "this is current live dialogue" or "Bungie
  officially endorses this use".

## AI and agent caveats

- The MCP server is read-only and has no SQL tool, write path or network access.
  It can still return a line that is real but irrelevant to the question.
- Agents are instructed to verify quotes, but an agent can still make a mistake.
  Treat agent output as a draft, not as canon. Run `verify` before publishing a
  quote.
- Private memory and `USER.md` are runtime state, not canon. Consult copies are
  read-only helpers, not separate personalities.
- Captions are searchable canon but not part of a persona's curated voice count.
  `persona.json` `canon_lines` excludes the caption tier.

## Known gaps

- {{ grimoire.counts.coverage_no_dialogue | commas }} recorded entries (activities
  and events) have no dialogue transcript; {{ grimoire.counts.coverage_partial | commas }}
  (activities and seasons) have a partial one. `coverage_notes` holds the
  per-entity status.
- Destiny 1 coverage exists only where verbatim text was captured; it is not a
  complete D1 archive.
- Audio, localisation beyond the shipped English tier, and removed builds are not
  redistributed.
- A missing line is not evidence that the line never existed. It may be vaulted,
  unrecorded, or in a build this project cannot retrieve.

## Corrections

If a claim here is wrong, open an issue with the page, the exact text, and the
source or database row that contradicts it. Correct the corpus and its
provenance; do not edit a quote to make the claim true.
