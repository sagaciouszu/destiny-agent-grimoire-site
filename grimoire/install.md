---
section: grimoire
layout: page
title: Install the Grimoire
category: The Grimoire · Install
lede: Get the library onto your computer in a few minutes. Start with the simple download; the full command reference is at the bottom.
---

<details class="section" open>
<summary><span class="section-title" role="heading" aria-level="2" id="quick-start">Start here</span></summary>

Open a terminal in the folder where you want to keep the project. You need Git
(to download the project), Python 3.8 or newer (to run the search
tool), and about {{ grimoire.sizes.db_mb | plus: 100 }} MB of free space. No
account, no key, no build tools.

The commands below download the project, download the library file, check the
download, put the file in the right folder, and print the library counts. Paste
the block into a terminal.

<pre><code>git clone https://github.com/sagaciouszu/destiny-agent-grimoire.git
cd destiny-agent-grimoire
base=https://github.com/sagaciouszu/destiny-agent-grimoire
curl -fsSL "$base/releases/latest/download/grimoire.db" -o grimoire.db
curl -fsSL "$base/releases/latest/download/SHA256SUMS" -o SHA256SUMS
grep '  grimoire.db$' SHA256SUMS | sha256sum -c -
mv grimoire.db db/grimoire.db
python3 db/query.py stats</code></pre>

<p>If the last command prints counts, you are ready to search.</p>

</details>

See [what the Grimoire offers]({{ '/grimoire/' | url }}) for the library overview.

<details class="section" open>
<summary><span class="section-title" role="heading" aria-level="2" id="prerequisites">Before you start</span></summary>

<ul class="checklist">
  <li>Python 3.8 or newer. No extra Python packages are needed.</li>
  <li>Git, to download the project.</li>
  <li>About {{ grimoire.sizes.db_mb | plus: 100 }} MB of free space. The library
      file itself is about {{ grimoire.sizes.db_mb }} MB.</li>
  <li>Roughly the same space again if you build from source.</li>
</ul>

The download needs no build tools. Building from source only needs Python.

</details>


<details class="section">
<summary><span class="section-title" role="heading" aria-level="2" id="everyday-commands">Everyday commands</span></summary>

<pre><code>python3 db/query.py stats
python3 db/query.py search "Crota" --limit 5
python3 db/query.py character "eris" --limit 20
python3 db/query.py verify "Absolutely not." --speaker "Eris Morn" --exact</code></pre>

<p>Search treats punctuation as text instead of throwing an error. If the quote
checker prints <code>NOT FOUND</code>, stop: the line is not in the library. Do not
reword it until it passes.</p>

</details>

<details class="section">
<summary><span class="section-title" role="heading" aria-level="2" id="connect-an-ai">Connect an AI</span></summary>

The optional connector lets an AI app ask the library questions as tools. Install
it once:

<pre><code>bash mcp-server/install.sh</code></pre>

<p>The installer prints a configuration block pointing at
<code>mcp-server/run.sh</code>. It runs on your computer and only reads the
library. See <a href="{{ '/grimoire/mcp/' | url }}">Connect an AI</a> for the app
setup and the full tool list.</p>

</details>

## Next

- [Try the commands](#everyday-commands)
- [Connect an AI]({{ '/grimoire/mcp/' | url }})
- [Assemble your fireteam]({{ '/personas/install/' | url }})
