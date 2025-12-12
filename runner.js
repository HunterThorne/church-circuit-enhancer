(function () {
  // prevent double-load
  if (window.__cc_runner_loaded) return;
  window.__cc_runner_loaded = true;

  console.log("Church Circuit Runner: starting…");

  function injectCss(cssText) {
    var existing = document.querySelector('style[data-cc-theme="1"]');
    if (!existing) {
      existing = document.createElement("style");
      existing.setAttribute("data-cc-theme", "1");
      document.head.appendChild(existing);
    }
    existing.textContent = cssText;
  }

  var css = `
/* ======================================================
   CHURCH CIRCUIT — LEFT SIDEBAR THEME (RUNNER v1)
   Primary: #1e3a8a
   Accent + Hover: #385cc2
   Only targets the left nav areas (no main page styling)
====================================================== */

/* Entire left sidebar column background */
#app .v-navigation-drawer,
#app .hl-left-nav,
#app .hl-left-nav-top,
#app .hl_nav,
#app aside {
  background-color: #1e3a8a !important;
}

/* White text/icons INSIDE nav only */
#app .v-navigation-drawer *,
#app .hl-left-nav *,
#app .hl-left-nav-top *,
#app .hl_nav * {
  color: #ffffff !important;
}

/* Active item */
#app .v-navigation-drawer .v-list-item--active,
#app .v-navigation-drawer .router-link-active,
#app .v-navigation-drawer .router-link-exact-active,
#app .hl_nav .router-link-active,
#app .hl_nav .router-link-exact-active {
  background-color: #385cc2 !important;
  border-radius: 6px;
  color: #ffffff !important;
}

/* Top area */
#app .v-navigation-drawer__header,
#app .hl-left-nav-top,
#app .location-switcher,
#app .location-container {
  background-color: #1e3a8a !important;
}

#app .v-navigation-drawer__header *,
#app .hl-left-nav-top *,
#app .location-switcher *,
#app .location-container * {
  color: #ffffff !important;
}

/* Bottom footer area */
#app .v-navigation-drawer__append,
#app .hl-left-nav-bottom,
#app .left-nav-footer {
  background-color: #1e3a8a !important;
}

#app .v-navigation-drawer__append *,
#app .hl-left-nav-bottom *,
#app .left-nav-footer * {
  color: #ffffff !important;
}

/* Hover */
#app .v-navigation-drawer .v-list-item:hover,
#app .hl_nav .v-list-item:hover {
  background-color: #385cc2 !important;
  color: #ffffff !important;
  border-radius: 6px;
}
#app .v-navigation-drawer .v-list-item:hover::before,
#app .hl_nav .v-list-item:hover::before {
  background-color: #385cc2 !important;
  opacity: 1 !important;
  border-radius: 6px;
}
`;

  function apply() {
    if (!document.head) return;
    injectCss(css);
    console.log("Church Circuit Runner: theme injected.");
  }

  // Run after DOM is ready
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", apply);
  } else {
    apply();
  }

  // Re-apply on SPA route changes (sub-account navigation)
  var lastUrl = location.href;
  setInterval(function () {
    if (location.href !== lastUrl) {
      lastUrl = location.href;
      apply();
    }
  }, 800);
})();
