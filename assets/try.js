// /try/ respawn countdown. Progressive enhancement: without JS the overlay
// shows "Respawn in 5 — waiting" with the actions visible (noscript block).
// With JS, actions stay hidden until the count finishes, then appear.
(function () {
  function startCountdown(overlay) {
    if (overlay.dataset.counted === "true") return;
    overlay.dataset.counted = "true";
    var label = overlay.querySelector("[data-countdown]");
    var actions = overlay.querySelector("[data-actions]");
    var n = 5;
    function tick() {
      if (document.activeElement && overlay.contains(document.activeElement)) {
        // Keep counting even if the visitor tabs around; never strand them.
      }
      if (n <= 0) {
        label.textContent = "Respawn ready";
        if (actions) actions.hidden = false;
        return;
      }
      label.textContent = "Respawn in " + n + " \u2014 waiting";
      n -= 1;
      setTimeout(tick, 1000);
    }
    tick();
  }

  function maybeStart() {
    var id = window.location.hash;
    if (!id || id.indexOf("#respawn-") !== 0) return;
    var overlay = document.getElementById(id.slice(1));
    if (overlay) startCountdown(overlay);
  }

  window.addEventListener("hashchange", maybeStart);
  maybeStart();
})();
