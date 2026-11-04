---
layout: default
title: Destiny Agent Grimoire
description: A searchable Destiny lore archive and a growing number of character agents that read from it.
---

<section class="hero">
  <div class="hero-copy">
    <p class="kicker">Destiny lore · for people and their agents</p>
    <h1>Destiny Agent Grimoire</h1>
    <p class="lede">
      One searchable archive of Destiny's books, dialogue and gear lore — plus a growing
      number of character agents that read from it. Every quote keeps its source, and you can
      check a line before you use it.
    </p>
    <div class="hero-actions">
      <a class="button button-primary" href="{{ '/grimoire/install/' | url }}">Get the archive</a>
      <a class="button" href="{{ '/agents/' | url }}">Meet the agents</a>
    </div>
  </div>

  <aside class="transmission" data-rotator aria-label="Test transcripts from the agent conversations">
    <p class="transmission-label">Test tapes</p>
    <div class="transmission-window">
      {% for voice in voices %}
      <figure class="transmission-item{% if forloop.first %} is-active{% endif %}" data-voice>
        <blockquote><p>{{ voice.text | escape }}</p></blockquote>
        <figcaption>{{ voice.speaker | escape }} <span class="transmission-topic">· {{ voice.topic | escape }}</span></figcaption>
      </figure>
      {% endfor %}
    </div>
    <div class="transmission-controls" data-rotator-controls hidden>
      <button type="button" data-rotator-prev aria-label="Previous test transcript">‹</button>
      <button type="button" data-rotator-toggle>Pause</button>
      <button type="button" data-rotator-next aria-label="Next test transcript">›</button>
      <span class="transmission-count" data-rotator-count aria-hidden="true">1 / {{ voices.size }}</span>
    </div>
    <p class="transmission-note">Scripted output from the agent test suites.</p>
  </aside>
</section>

<section class="categories" aria-label="Explore the project">
  <article class="category">
    <span class="category-index" aria-hidden="true">01</span>
    <div>
      <h2>The Grimoire</h2>
      <p>
        A single database of 110 books, 1,229 transcripts, 2,889 grimoire cards
        and 58,764 items. Search it from the command line, or plug it into an AI
        client through the MCP server.
      </p>
      <div class="category-links">
        <a href="{{ '/grimoire/' | url }}">See what's inside</a>
        <a href="{{ '/grimoire/install/' | url }}">Install it</a>
        <a href="{{ '/grimoire/mcp/' | url }}">Connect an MCP client</a>
      </div>
    </div>
  </article>

  <article class="category">
    <span class="category-index" aria-hidden="true">02</span>
    <div>
      <h2>The crew</h2>
      <p>
        The Drifter and Eris Morn are separate characters with their own voices,
        memories and tests. They share the archive and can quietly ask each other
        for help, without sharing private notes.
      </p>
      <div class="category-links">
        <a href="{{ '/agents/' | url }}">Meet the series</a>
      </div>
    </div>
  </article>

  <article class="category">
    <span class="category-index" aria-hidden="true">03</span>
    <div>
      <h2>The loadout</h2>
      <p>
        Give one character its own folder, or deploy the whole series into
        OpenCode or OpenClaw. The archive is shared; the memories are not.
      </p>
      <div class="category-links">
        <a href="{{ '/agents/install/' | url }}">Install an agent</a>
        <a href="{{ '/agents/platforms/' | url }}">Check platform support</a>
      </div>
    </div>
  </article>

  <article class="category">
    <span class="category-index" aria-hidden="true">04</span>
    <div>
      <h2>Guardian down</h2>
      <p>
        Missing database, no tools in your client, an agent that will not appear,
        or a quote that keeps failing. Start with the symptom and work back to the
        cause.
      </p>
      <div class="category-links">
        <a href="{{ '/troubleshooting/' | url }}">Fix a problem</a>
      </div>
    </div>
  </article>
</section>
