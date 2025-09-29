// Inject a shared footer into pages. Uses the current year automatically.
(function () {
  const placeholder = document.getElementById("site-footer");
  if (!placeholder) return;
  const year = new Date().getFullYear();
  placeholder.innerHTML = `
    <footer class="site-footer" role="contentinfo">
      <div class="footer-inner">
        <div class="footer-links">
          <a href="privacy.html">Privacy</a>
          <a href="credits.html">Credits</a>
        </div>
        <div class="footer-social" aria-hidden="false">
          <a href="https://twitter.com/" class="social" aria-label="Twitter" target="_blank" rel="noopener noreferrer">
            <svg class="icon" aria-hidden="true"><use xlink:href="icons.svg#icon-twitter"></use></svg>
          </a>
          <a href="https://instagram.com/" class="social" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
            <svg class="icon" aria-hidden="true"><use xlink:href="icons.svg#icon-instagram"></use></svg>
          </a>
          <a href="https://www.youtube.com/" class="social" aria-label="YouTube" target="_blank" rel="noopener noreferrer">
            <svg class="icon" aria-hidden="true"><use xlink:href="icons.svg#icon-youtube"></use></svg>
          </a>
        </div>
      </div>
      <p class="copyright">&copy; ${year} GiggleGalaxy</p>
    </footer>
  `;
})();
