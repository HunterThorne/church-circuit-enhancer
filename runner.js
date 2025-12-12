(function () {
  // prevent double-load
  if (window.__cc_runner_loaded) return;
  window.__cc_runner_loaded = true;

  console.log("Church Circuit Runner: starting…");

  function injectCssFile(href) {
    // If already injected, update cache-bust query
    var existing = document.querySelector('link[data-cc-theme="1"]');
    if (existing) {
      existing.href = href + (href.includes("?") ? "&" : "?") + "v=" + Date.now();
      return;
    }

    var link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = href + (href.includes("?") ? "&" : "?") + "v=" + Date.now();
    link.setAttribute("data-cc-theme", "1");
    document.head.appendChild(link);
  }

  function apply() {
    injectCssFile("https://raw.githubusercontent.com/HunterThorne/church-circuit-enhancer/main/styles.css");
    console.log("Church Circuit Runner: styles.css injected");
  }

  // Run after DOM is ready (GHL is Vue and can be late)
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", apply);
  } else {
    apply();
  }

  // Also re-apply after route changes (SPA)
  var lastUrl = location.href;
  setInterval(function () {
    if (location.href !== lastUrl) {
      lastUrl = location.href;
      apply();
    }
  }, 800);
})();
