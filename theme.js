// ==========================================
// Church Circuit — theme.js (v1)
// Runs inside GoHighLevel after styles.css
// This is where we’ll add more behavior later
// ==========================================

(function () {
  if (window.__ccThemeLoaded) {
    console.log("Church Circuit theme.js: already loaded, skipping.");
    return;
  }
  window.__ccThemeLoaded = true;

  // Detect current location / sub-account (future use)
  let locationId = null;
  try {
    const match = window.location.pathname.match(/location\/([a-zA-Z0-9]+)/);
    locationId = match && match[1] ? match[1] : null;
  } catch (e) {
    // ignore
  }

  console.log("⛪ Church Circuit theme.js loaded. Location:", locationId);

  // In v1 we don't need to manipulate the DOM here yet.
  // Styles are handled via styles.css.
  // Later we’ll add:
  // - custom welcome pages
  // - support drawer
  // - menu tweaks
  // - per-location behavior
})();
