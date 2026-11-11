# Design: Destiny Agent Grimoire Site

The locked system. Every Hallmark run reads this first and pages share it. Change it on purpose; the file is the rule.

## System
- Genre: atmospheric
- Shape of the first page: Marquee Hero (home); Long Document (docs and persona pages); Narrative Workflow (install pages)
- Theme: brand (Destiny 2 UI token system, preserved from the original site)
- Axes: dark/grotesk-sans/warm · posture: restrained

## Tokens
`assets/tokens.css` is the source of truth. The roles:
```css
:root {
  --color-paper: #0A0F12; --color-paper-2: #121419; --color-paper-3: #2B384B;
  --color-ink: #F2F2F2; --color-ink-2: #A0A0A4; --color-muted: #5C5860; --color-rule: rgba(208, 207, 210, 0.14);
  --color-accent: #B08D2E; --color-accent-ink: #E8C547; --color-focus: #7F9FB0;
  --font-display: "Neue Haas Grotesk Display Pro", "Neue Haas Grotesk", "Helvetica Neue", Helvetica, Arial, sans-serif;
  --font-body: "Neue Haas Grotesk Display Pro", "Neue Haas Grotesk", "Helvetica Neue", Helvetica, Arial, sans-serif;
  --font-outlier: "Geist Mono", ui-monospace, SFMono-Regular, Menlo, monospace;
  --radius-card: 0; --radius-pill: 0; --rule-hair: 1px; --shadow-card: none;
}
```
The spacing scale, the type scale, the easings and the durations are the scaffold's and live in `assets/tokens.css`. The original D2 tokens remain in `assets/site.css` under `--d2-*` and derived vars.

## Controls
- Primary: gold fill, square, 0 radius, 0.82rem bold tracked 0.18em (brand wordmark exception)
- Secondary: outlined, same radius and height

## Motion
- Character: still; one reveal at most; under reduced motion everything ends at once.

## Exports
`assets/tokens.css` in this project. Tailwind, DTCG or shadcn blocks are added here on request, per `export-formats.md`.
```

Need maybe add `## Variants`? No.

Now update .hallmark log? The skill says log entry. We can run theme.mjs log with entry. Let's do to be thorough. Need JSON.<|end|><|start|>start of code block <|constrain|>xml<|message|><rfl:parameter name="command">
cd /home/sredshaw/destiny/destiny-agent-grimoire-site && node /home/sredshaw/.agents/skills/hallmark/scripts/theme.mjs log --entry '{"mode":"redesign","depth":"full","scope":"site","shape":"Marquee Hero (home); Long Document (docs/personas); Narrative Workflow (installs)","theme":"brand (Destiny 2 UI)","genre":"atmospheric","signature":"live test-tape rotator","waived":["19 em dash in verified quotes","24a spacing tokens (partial)","58 word budget on docs pages"]}' 2>&1 | tail