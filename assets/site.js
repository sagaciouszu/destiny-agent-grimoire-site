(() => {
  const hoverCapable = window.matchMedia("(hover: hover) and (pointer: fine)");
  const compactNav = window.matchMedia("(max-width: 1100px)");
  const menus = [...document.querySelectorAll(".nav-menu")];

  const closeMenus = (except) => {
    menus.forEach((menu) => {
      if (menu !== except) menu.open = false;
    });
  };

  menus.forEach((menu) => {
    let closeTimer;

    menu.addEventListener("pointerenter", () => {
      if (!hoverCapable.matches || compactNav.matches) return;
      window.clearTimeout(closeTimer);
      closeMenus(menu);
      menu.open = true;
    });

    menu.querySelector(".nav-submenu")?.addEventListener("pointerenter", () => {
      window.clearTimeout(closeTimer);
    });

    menu.addEventListener("pointerleave", () => {
      if (!hoverCapable.matches || compactNav.matches) return;
      window.clearTimeout(closeTimer);
      closeTimer = window.setTimeout(() => {
        menu.open = false;
      }, 300);
    });
  });

  document.addEventListener("pointermove", (event) => {
    if (!hoverCapable.matches || compactNav.matches) return;
    menus.forEach((menu) => {
      if (menu.open && !menu.contains(event.target)) menu.open = false;
    });
  });

  document.addEventListener("click", (event) => {
    if (!event.target.closest(".nav-menu")) closeMenus();
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeMenus();
      document.activeElement?.blur();
    }
  });

  const header = document.querySelector(".site-header");
  const positionMobileMenu = () => {
    if (!header) return;
    document.documentElement.style.setProperty(
      "--mobile-menu-top",
      `${Math.round(header.getBoundingClientRect().bottom)}px`,
    );
  };

  menus.forEach((menu) => {
    menu.addEventListener("toggle", () => {
      if (!compactNav.matches || !menu.open) return;
      positionMobileMenu();
      menus.forEach((other) => {
        if (other !== menu) other.open = false;
      });
    });
  });

  window.addEventListener("resize", positionMobileMenu);
  window.addEventListener("scroll", () => {
    if (compactNav.matches) positionMobileMenu();
  }, { passive: true });

  document.querySelectorAll(".heading-anchor").forEach((link) => {
    const heading = link.closest("h1, h2, h3, h4, .section-title");
    if (!heading) return;
    const label = heading.textContent.replace(link.textContent, "").trim();
    link.setAttribute("aria-label", `Permalink to ${label}`);
    link.addEventListener("click", (event) => event.stopPropagation());
  });

  const live = document.createElement("div");
  live.className = "visually-hidden";
  live.setAttribute("aria-live", "polite");
  document.body.appendChild(live);

  document.querySelectorAll("pre").forEach((pre) => {
    const code = pre.querySelector("code");
    if (!code) return;
    const button = document.createElement("button");
    button.type = "button";
    button.className = "copy-button";
    button.textContent = "Copy";
    button.setAttribute("aria-label", "Copy code to clipboard");
    button.addEventListener("click", async () => {
      try {
        await navigator.clipboard.writeText(code.innerText);
        button.textContent = "Copied";
        live.textContent = "Code copied to clipboard";
        window.setTimeout(() => { button.textContent = "Copy"; }, 1600);
      } catch {
        live.textContent = "Copy failed";
      }
    });
    pre.appendChild(button);
  });

  const rotator = document.querySelector("[data-rotator]");
  if (rotator) {
    const items = [...rotator.querySelectorAll("[data-voice]")];
    const controls = rotator.querySelector("[data-rotator-controls]");
    const toggle = rotator.querySelector("[data-rotator-toggle]");
    const prev = rotator.querySelector("[data-rotator-prev]");
    const next = rotator.querySelector("[data-rotator-next]");
    const counter = rotator.querySelector("[data-rotator-count]");
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    const interval = 7000;
    let index = 0;
    let timer = null;
    let paused = reduce.matches;

    const topicSelect = rotator.querySelector("[data-rotator-topic]");
    const speakerSelect = rotator.querySelector("[data-rotator-speaker]");
    const matchesFilters = (item) =>
      (!topicSelect?.value || item.dataset.topic === topicSelect.value) &&
      (!speakerSelect?.value || item.dataset.speaker === speakerSelect.value);
    const filtered = () => items.filter(matchesFilters);

    const show = (nextIndex) => {
      index = (nextIndex + items.length) % items.length;
      items.forEach((item, i) => item.classList.toggle("is-active", i === index));
      const list = filtered();
      const position = list.indexOf(items[index]);
      const position1 = position < 0 ? 1 : position + 1;
      if (counter) counter.textContent = `${position1} / ${list.length}`;
      const query = new URLSearchParams();
      if (topicSelect?.value) query.set("topic", topicSelect.value);
      if (speakerSelect?.value) query.set("speaker", speakerSelect.value);
      query.set("tape", String(position1));
      window.history.replaceState(null, "", `${window.location.pathname}?${query.toString()}`);
    };

    const stop = () => {
      window.clearInterval(timer);
      timer = null;
    };

    const start = () => {
      stop();
      if (paused || reduce.matches || document.hidden) return;
      timer = window.setInterval(advance, interval);
    };

    const updateToggle = () => {
      if (toggle) toggle.textContent = paused ? "Play" : "Pause";
    };

    const advance = () => {
      const list = filtered();
      if (list.length < 2) return;
      const pos = list.indexOf(items[index]);
      const nextPos = pos === -1 ? 0 : (pos + 1) % list.length;
      show(items.indexOf(list[nextPos]));
    };

    const step = (delta) => {
      const list = filtered();
      if (!list.length) return;
      const pos = list.indexOf(items[index]);
      const base = pos === -1 ? (delta > 0 ? -1 : 0) : pos;
      const nextPos = (base + delta + list.length) % list.length;
      show(items.indexOf(list[nextPos]));
      start();
    };

    // Data order stays stable so a shared ?tape=N link resolves the same tape.
    const initialParams = new URLSearchParams(window.location.search);
    // The topic dropdown only lists the top topics, so a shared link may name a
    // topic it does not carry. Add it rather than silently dropping the filter.
    const applyInitialFilter = (select, param, dataKey) => {
      const requested = initialParams.get(param);
      if (!select || !requested) return;
      if (![...select.options].some((option) => option.value === requested)) {
        if (!items.some((item) => item.dataset[dataKey] === requested)) return;
        select.add(new Option(requested, requested));
      }
      select.value = requested;
    };
    applyInitialFilter(topicSelect, "topic", "topic");
    applyInitialFilter(speakerSelect, "speaker", "speaker");
    const initialList = filtered();
    const requested = Number.parseInt(initialParams.get("tape") || "0", 10);
    const initialIndex = initialList.length
      ? Math.min(Math.max(Number.isFinite(requested) ? requested : 1, 1), initialList.length) - 1
      : 0;
    show(initialList.length ? items.indexOf(initialList[initialIndex]) : 0);

    if (controls) controls.hidden = false;
    updateToggle();
    start();

    toggle?.addEventListener("click", () => {
      paused = !paused;
      updateToggle();
      if (paused) stop();
      else start();
    });

    prev?.addEventListener("click", () => step(-1));
    next?.addEventListener("click", () => step(1));

    const shuffleButton = rotator.querySelector("[data-rotator-shuffle]");
    const randomTape = () => {
      const available = items.filter(matchesFilters);
      if (!available.length) return;
      const pick = available[Math.floor(Math.random() * available.length)];
      show(items.indexOf(pick));
      start();
    };

    shuffleButton?.addEventListener("click", randomTape);
    topicSelect?.addEventListener("change", randomTape);
    speakerSelect?.addEventListener("change", randomTape);

    rotator.addEventListener("mouseenter", stop);
    rotator.addEventListener("mouseleave", start);
    rotator.addEventListener("focusin", stop);
    rotator.addEventListener("focusout", (event) => {
      if (!rotator.contains(event.relatedTarget)) start();
    });
    document.addEventListener("visibilitychange", () => {
      if (document.hidden) stop();
      else start();
    });
    reduce.addEventListener("change", () => {
      if (reduce.matches) { paused = true; updateToggle(); }
      start();
    });
  }

  const themeToggle = document.querySelector("[data-theme-toggle]");
  if (themeToggle) {
    const root = document.documentElement;
    const themeMeta = document.querySelector('meta[name="theme-color"]');
    const themeStatus = document.querySelector("[data-theme-status]");
    const themes = ["dark", "crucible", "gambit"];
    const names = {
      dark: "Vanguard dark",
      crucible: "Crucible",
      gambit: "Gambit",
    };
    const colors = {
      dark: "#0A0F12",
      crucible: "#0B0708",
      gambit: "#06110B",
    };

    const currentTheme = () =>
      themes.includes(root.dataset.theme) ? root.dataset.theme : "dark";

    const syncTheme = () => {
      const current = currentTheme();
      const next = themes[(themes.indexOf(current) + 1) % themes.length];
      const label = `Theme: ${names[current]}. Switch to ${names[next]}.`;
      themeToggle.setAttribute("aria-label", label);
      themeToggle.setAttribute("title", label);
      if (themeMeta) themeMeta.setAttribute("content", colors[current]);
      if (themeStatus) themeStatus.textContent = `Theme: ${names[current]}`;
    };

    syncTheme();
    themeToggle.addEventListener("click", () => {
      const next = themes[(themes.indexOf(currentTheme()) + 1) % themes.length];
      root.dataset.theme = next;
      try { localStorage.setItem("grimoire-theme", next); } catch (error) {}
      syncTheme();
    });
  }

  const symptomFilter = document.querySelector("[data-symptom-filter]");
  if (symptomFilter) {
    const cards = [...document.querySelectorAll(".toc-card")];
    const empty = document.querySelector("[data-filter-empty]");

    symptomFilter.addEventListener("input", () => {
      const query = symptomFilter.value.trim().toLowerCase();
      let visible = 0;

      cards.forEach((card) => {
        const group = card.querySelector(".toc-group")?.textContent.toLowerCase() || "";
        const groupMatch = Boolean(query) && group.includes(query);
        let cardVisible = false;

        card.querySelectorAll("li").forEach((item) => {
          const match = !query || groupMatch || item.textContent.toLowerCase().includes(query);
          item.hidden = !match;
          if (match) cardVisible = true;
        });

        card.hidden = !cardVisible;
        if (cardVisible) visible += 1;
      });

      if (empty) empty.hidden = visible > 0;
    });
  }
})();
