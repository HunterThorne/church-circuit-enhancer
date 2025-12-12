// Church Circuit – GHL Enhancement Runner (Single-file Theme v1)

(function () {
  // Prevent double-load
  if (window.__churchCircuitRunnerLoaded) {
    console.log("Church Circuit Runner: already loaded, skipping.");
    return;
  }
  window.__churchCircuitRunnerLoaded = true;

  console.log("Church Circuit Runner: starting…");

  // Utility: inject CSS into the page
  function injectCss(cssText) {
    let style = document.querySelector("style[data-cc-theme]");
    if (!style) {
      style = document.createElement("style");
      style.setAttribute("data-cc-theme", "church-circuit");
      document.head.appendChild(style);
    }
    style.textContent = cssText;
  }

  // Build our theme CSS
  const css = `
/* ======================================================
   CHURCH CIRCUIT — LEFT SIDEBAR THEME (STABLE FINAL)
   Primary: #1e3a8a
   Accent + Hover: #385cc2
   - Colors the entire left sidebar column (top, menu, bottom)
   - Only forces white text inside the nav elements
   - DOES NOT touch main content text (subaccounts, pages, etc.)
====================================================== */

/* Entire left sidebar column background */
#app .v-navigation-drawer,
#app .hl-left-nav,
#app .hl-left-nav-top,
#app .hl_nav,
#app aside {
  background-color: #1e3a8a !important;
}

/* White text/icons INSIDE the main nav areas ONLY */
#app .v-navigation-drawer *,
#app .hl-left-nav *,
#app .hl-left-nav-top *,
#app .hl_nav * {
  color: #ffffff !important;
}

/* Active menu item highlight */
#app .v-navigation-drawer .v-list-item--active,
#app .v-navigation-drawer .router-link-active,
#app .v-navigation-drawer .router-link-exact-active,
#app .hl_nav .router-link-active,
#app .hl_nav .router-link-exact-active {
  background-color: #385cc2 !important;
  border-radius: 6px;
  color: #ffffff !important;
}

/* Top section: workspace selector + search bar */
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

/* Bottom footer strip (area above Settings button) */
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

/* Hover override — force exact #385cc2 */
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

  function main() {
    injectCss(css);
    console.log("Church Circuit Runner: theme applied.");
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", main);
  } else {
    main();
  }
})();
