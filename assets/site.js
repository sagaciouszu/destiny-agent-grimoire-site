(() => {
  const hoverCapable = window.matchMedia("(hover: hover) and (pointer: fine)");
  const menus = [...document.querySelectorAll(".nav-menu")];

  const closeMenus = (except) => {
    menus.forEach((menu) => {
      if (menu !== except) menu.open = false;
    });
  };

  menus.forEach((menu) => {
    let closeTimer;

    menu.addEventListener("pointerenter", () => {
      if (!hoverCapable.matches) return;
      window.clearTimeout(closeTimer);
      closeMenus(menu);
      menu.open = true;
    });

    menu.addEventListener("pointerleave", () => {
      if (!hoverCapable.matches) return;
      window.clearTimeout(closeTimer);
      closeTimer = window.setTimeout(() => {
        menu.open = false;
      }, 140);
    });
  });

  document.addEventListener("pointermove", (event) => {
    if (!hoverCapable.matches) return;
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

  const mobileNav = window.matchMedia("(max-width: 720px)");
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
      if (!mobileNav.matches || !menu.open) return;
      positionMobileMenu();
      menus.forEach((other) => {
        if (other !== menu) other.open = false;
      });
    });
  });

  window.addEventListener("resize", positionMobileMenu);
  window.addEventListener("scroll", () => {
    if (mobileNav.matches) positionMobileMenu();
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

    const show = (nextIndex) => {
      index = (nextIndex + items.length) % items.length;
      items.forEach((item, i) => item.classList.toggle("is-active", i === index));
      if (counter) counter.textContent = `${index + 1} / ${items.length}`;
    };

    const stop = () => {
      window.clearInterval(timer);
      timer = null;
    };

    const start = () => {
      stop();
      if (paused || reduce.matches || document.hidden) return;
      timer = window.setInterval(() => show(index + 1), interval);
    };

    const updateToggle = () => {
      if (toggle) toggle.textContent = paused ? "Play" : "Pause";
    };

    if (controls) controls.hidden = false;
    updateToggle();
    start();

    toggle?.addEventListener("click", () => {
      paused = !paused;
      updateToggle();
      if (paused) stop();
      else start();
    });

    prev?.addEventListener("click", () => { show(index - 1); start(); });
    next?.addEventListener("click", () => { show(index + 1); start(); });

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

    const syncTheme = () => {
      const light = root.dataset.theme === "light";
      const label = light ? "Switch to dark theme" : "Switch to light theme";
      themeToggle.setAttribute("aria-label", label);
      themeToggle.setAttribute("title", label);
      if (themeMeta) themeMeta.setAttribute("content", light ? "#e2d6bf" : "#0b0b0c");
    };

    syncTheme();
    themeToggle.addEventListener("click", () => {
      const next = root.dataset.theme === "light" ? "dark" : "light";
      root.dataset.theme = next;
      try { localStorage.setItem("grimoire-theme", next); } catch (error) {}
      syncTheme();
    });
  }
})();
