# Interactive Persona Demo — Design

## Intent and why

The site today shows who the characters are (profiles, samples, test tapes) and
how to install them, but a visitor never gets to *talk* to one. The personas run
inside a coding tool on the visitor's own machine, so a real live chat on the
site would need a backend, API keys and money per message — none of which fit a
$0 budget.

This project adds a **free, static, choose-your-own-adventure demo** where a
visitor plays a short scene with The Drifter or Eris Morn: the character speaks
in voice, the visitor picks from three replies, and the scene branches to
different beats and endings. It runs entirely on GitHub Pages, costs nothing, and
can never break or bill anyone. The real, thinking character stays where it is
today — in the visitor's own OpenCode/OpenClaw install — and the demo's job is
to make them want to install it.

## Goals

- A visitor can play a short, in-character scene with The Drifter or Eris Morn
  without installing anything.
- Every line of dialogue is original and in the character's voice, written to
  match Destiny's tone (not canon quotes, like the test tapes).
- Three choices per beat, with real branching and at least one "death" branch
  per beat that triggers a "RESPAWN IN..." screen.
- Runs fully static on GitHub Pages. No backend, no API keys, no cost.
- Feels like a game beat, not a chat widget.

## Non-goals

- No real AI replies. No backend, no API proxy, no client-side model.
- No other characters at launch (Zavala, Calus, Ghost, Mara Sov stay on the
  roster pages, unplayable, possibly marked "coming later").
- No persistent save, accounts, leaderboards or sharing of playthroughs beyond
  a shareable URL per beat.
- No canon-quote verification for demo lines (they are original dialogue); they
  are checked only to ensure none matches a canon line verbatim, like test tapes.

## Anti-goals

- A demo that quietly depends on a free API tier that can vanish.
- A demo that can be abused to generate cost or spam.
- A demo whose lines could be mistaken for canon quotes.

## Constraints

- $0 budget, forever. Static hosting only (GitHub Pages).
- Must pass the existing site gate (`npm run check`): build, internal links,
  accessibility, roster checks.
- Dialogue must not collide with canon lines (extend the tape check).
- Content is hand-authored; keep it small enough to verify by eye.

## Approaches considered

- **Approach 1 — Interactive branching dialogue (chosen).** Static HTML/CSS/JS,
  hand-authored scenes, three choices per beat, death/respawn mechanic. Free,
  stable, on-brand.
- **Approach 2 — Free-tier AI proxy (rejected).** Real answers but depends on
  free tiers, cannot carry the Grimoire lookup, key-exposure risk. Fights the
  $0 constraint.
- **Approach 3 — Client-side model (rejected).** Huge download, weak voice, no
  lore lookup. Worse than Approach 1 while harder to build.

## The design

### Entry and flow

A new top-level page, `/try/`, linked from the home page ("Try the
characters") and from each playable persona's page.

- `/try/` — the choice page. h2 + two buttons: **The Drifter** and **Eris Morn**.
  Picking one enters that character's first beat.
- `/try/<story>/<beat>/` — one page per beat (e.g. `/try/drifter/d1/`).
  Each page shows the character's line, three choice buttons, and the running h2.
- Death beats are not separate pages; they are a full-screen overlay ("RESPAWN
  IN...") rendered on the current beat's page, then the visitor retries that beat
  or restarts the story.
- Endings are beats with no choices (or a single "Play again / try the other
  character" prompt).

### Page structure and the h2

Every page in the flow carries an h2 whose text **starts with**:

> "Your Ghost reminds you that you needed to go visit Eris or The Drifter. You
> don't have time for both."

and then appends a short, page-specific suffix:

- Choice page: "...Choose one."
- Drifter beats: "...You chose The Drifter."
- Eris beats: "...You chose Eris Morn."
- Ending: "...You finished with The Drifter." / "...You finished with Eris Morn."
- Respawn overlay: no Ghost h2 (banner + Quest Failed + quip carry it).

*(My call — the user specified the opening line and that it changes per page;
the suffixes are my proposal.)*

### Story data model

Stories live in a new data file, `_data/try.js`, shaped like `_data/voices.js`:

```js
module.exports = {
  stories: [
    {
      id: "drifter",
      name: "The Drifter",
      title: "Spider's Stash",
      beats: [
        {
          id: "d1",
          speaker: "The Drifter",
          text: "…",
          choices: [
            { label: "…", next: "d2" },
            { label: "…", next: "d2" },
            { label: "…", next: "death:d1" }
          ]
        },
        { id: "death:d1", type: "death", text: "…", respawn: "d1" },
        { id: "end:d1", type: "ending", text: "…", next: ["d1", "eris:e1"] }
      ]
    }
  ]
};
```

A new template, `try.njk`, uses Eleventy pagination to generate one page per
beat across both stories, at `/try/<story-id>/<beat-id>/`. The landing is
`/try/` (the index).

### The Respawn mechanic

On a death branch, instead of navigating, the page shows a full-screen overlay
styled off the in-game death screen:

- Top red banner: **GUARDIAN DOWN** with a **WAITING TO REVIVE** strip.
- Backdrop: blurred story art (per-story image, blurred + darkened), not plain dim.
- Lower-left: plain-text countdown, "Respawn in N — waiting" — no spinner arrow.
- Countdown runs to zero, then **waits for the click** (no auto-return).
- After the countdown, one button lower-right: **Return to Start** (restarts the
  story from beat 1), next to a **REVIVES | ∞** counter (kept infinite).
- Left objective tracker flips to **Quest Failed** on death.
- Center: character death quip (e.g. Drifter: "Bad answer."). No Ghost h2 on the
  overlay.
- The overlay is driven by a small script in `assets/try.js`; no server needed.

### Content and voice

Two stories, ~5 beats each, 3 choices per beat, with at least one death branch
per beat and a couple of distinct endings.

**The Drifter — "Spider's Stash."** Drifter asks you to grab a package Spider
stashed on the Shore before Spider's crew finds it. Beats move from the offer
→ the details → the cave → the escape → the return. Sample beat:

> **The Drifter:** "Hey, hey. Look who wandered onto my ship. Guardian with good
> timing — I like that. I need a favour. Spider stashed a little package out on
> the Shore, and I need it before his crew goes digging. You grab it, bring it to
> me, we're square. Maybe I even owe you one. Maybe."
>
> - "What's the job?" → details
> - "What's in it for me?" → details
> - "I don't work for you." → death ("Bad answer." He grins and reaches for his
>   sidearm. RESPAWN.)

**Eris Morn — "The Leviathan's Shadow."** Eris needs help on the Leviathan
clearing out Nightmares that have grown bold. Beats move from the summons → the
threat → facing the Nightmares → the anchor → the resolution. Sample beat:

> **Eris Morn:** "Guardian. You came. I have need of you — not the Vanguard's
> kind of need. The Leviathan stirs again, and the Nightmares within it have
> grown bold. I cannot face them alone, and I will not ask the Vanguard to send
> more into that place. Will you walk the shadowed halls with me?"
>
> - "I'm with you, Eris." → threat
> - "What's changed on the Leviathan?" → threat
> - "I've had enough of the Leviathan." → soft ending (she lets you go, grimly)

Remaining beats are authored during implementation in the same voice. All
dialogue is original and runs through the tape check (no verbatim canon match).

### Visual style (locked)

Decided with the user via mockups (see brainstorm frame: layout-options,
respawn-overlay-v9, mixed-beat):

- Beat layout: **chat thread + quest-style choices.** The character speaks in
  chat bubbles (avatar disc + bubble); the visitor answers from a quest-style
  reply list under a REPLY rule: transparent buttons with a ▸ marker, the
  dangerous choice outlined red.
- Type: **Neue Haas Grotesk Display Pro throughout**, Helvetica Neue fallback
  stack. No italics anywhere, no monospaced face anywhere (not even the
  countdown — the earlier monospace-for-system-text call was reversed by the
  user).
- Respawn overlay v9: straight red GUARDIAN DOWN banner (a curved variant was
  tried and reverted), WAITING TO REVIVE strip, blurred story art backdrop,
  Quest Failed tracker left, quip centered (roman, not italic), bottom
  legibility bar with countdown lower-left and REVIVES | ∞ + Return to Start
  lower-right.
- Reviews on record: hallmark floor pass (waivers: tracked-cap game labels,
  middle-dot Ghost line — both locked copy/direction) and a web-guidelines
  UX pass whose findings are build requirements (real `<button>`s, aria-live
  countdown, tabular numerals, translate="no" on game terms, focus-visible +
  hover everywhere, img dimensions, curly quotes).

### Where it lives in the repo

- `_data/try.js` — story content.
- `try.njk` (root) — landing + paginated beats.
- `assets/try.js` — respawn countdown + choice handling.
- `assets/site.css` — new styles (or a small `assets/try.css`).
- Links added in `index.njk` and `agents/agent.njk` (for drifter/eris pages).
- Extend `scripts/check-tapes.py` (or add `scripts/check-try.py`) to cover demo
  dialogue: no verbatim canon match.
- Death-screen backdrops are specified per story: Tangled Shore
  (`free_roam_tangled_shore.jpg`) for the Drifter, K1 Communion
  (`moon_k1_communion.jpg`) for Eris. Both come from Bungie's official press
  kits; verify the press-kit terms cover this fan-site use (with credit) before
  shipping — otherwise replace with original art.

## Open questions

None — the doc is ready for sign-off. The h2 suffixes were my proposal;
everything else above is user-locked.