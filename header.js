// Inject a shared header into pages. This keeps header markup consistent
// without server-side includes. The script runs during parsing so the
// header exists before DOMContentLoaded handlers run.
(function () {
  const placeholder = document.getElementById("site-header");
  if (!placeholder) return;

  placeholder.innerHTML = `
    <header>
      <div class="brand">
        <h1>GiggleGalaxy</h1>
        <p class="tag">Stories • Games • Creative Play</p>
      </div>
      <nav id="navbar" aria-label="Primary navigation">
        <a href="index.html">Home</a>
        <a href="about.html">About</a>
        <a href="gigglegalaxy.html">Giggle Galaxy</a>
        <a href="contact.html">Contact</a>
      </nav>
      <div class="header-controls">
        <button
          class="audio-toggle"
          id="audioToggle"
          aria-pressed="false"
          aria-label="Toggle audio"
        >
          🔊
        </button>
        <button
          class="menu-toggle"
          onclick="toggleMenu()"
          aria-controls="navbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          ☰
        </button>
      </div>
    </header>
  `;

  // If audio state exists in localStorage, reflect it immediately
  try {
    const audioMuted = localStorage.getItem("gg_audio_muted") === "true";
    const audioBtn = document.getElementById("audioToggle");
    if (audioBtn) {
      audioBtn.setAttribute("aria-pressed", audioMuted ? "true" : "false");
      audioBtn.textContent = audioMuted ? "🔇" : "🔊";
    }
  } catch (e) {
    // ignore
  }
})();
