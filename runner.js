// ===========================================
// Church Circuit — GHL Enhancer Runner
// Loads remote theme + UI customization files
// ===========================================

// URL where your theme.js and styles.css will live
const THEME_BASE_URL = "https://raw.githubusercontent.com/HunterThorne/church-circuit-enhancer/main";

// Dynamically load JS file
function loadScript(path) {
  return new Promise((resolve, reject) => {
    const s = document.createElement("script");
    s.src = `${THEME_BASE_URL}/${path}`;
    s.onload = resolve;
    s.onerror = reject;
    document.body.appendChild(s);
  });
}

// Dynamically load CSS file
function loadCSS(path) {
  const link = document.createElement("link");
  link.rel = "stylesheet";
  link.href = `${THEME_BASE_URL}/${path}`;
  document.head.appendChild(link);
}

// Run when GHL DOM begins loading
function initChurchCircuit() {
  console.log("⛪ Church Circuit Enhancer: Runner loaded…");

  // Load theme files
  loadCSS("styles.css");
  loadScript("theme.js")
    .then(() => console.log("Church Circuit Enhancer: theme.js loaded"))
    .catch(err => console.error("Failed to load theme.js", err));
}

// Make sure page is ready
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initChurchCircuit);
} else {
  initChurchCircuit();
}
