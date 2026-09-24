/* Shared HTML fragments for nav/footer so every page renders instantly.
   We inject via document.currentScript so pages don't need boilerplate. */
(function () {
  const activePage = (document.currentScript && document.currentScript.dataset.active) || '';
  const navDark = (document.currentScript && document.currentScript.dataset.navDark) === 'true';

  const linkClass = (name) => 'nav__link' + (name === activePage ? ' is-active' : '');

  const navHtml = `
  <header class="nav ${navDark ? 'nav--dark' : ''}" data-nav>
    <div class="nav__inner">
      <a href="index.html" class="nav__logo">
        Deborah Ufedejo
        <small>Ministries</small>
      </a>
      <nav class="nav__menu">
        <a href="about.html" class="${linkClass('about')}">About</a>
        <a href="ministry.html" class="${linkClass('ministry')}">Ministry</a>
        <a href="events.html" class="${linkClass('events')}">Events</a>
        <a href="invite.html" class="${linkClass('invite')}">Invite Deborah</a>
        <a href="give.html" class="${linkClass('give')}">Give</a>
        <a href="contact.html" class="${linkClass('contact')}">Contact</a>
      </nav>
      <a href="invite.html" class="nav__cta">
        Invite Deborah
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
      </a>
      <button class="nav__burger" aria-label="Open menu">
        <span></span><span></span><span></span>
      </button>
    </div>
  </header>

  <div class="mobile-menu">
    <div class="mobile-menu__head">
      <a href="index.html" class="nav__logo" style="color:var(--ink)">
        Deborah Ufedejo
        <small>Ministries</small>
      </a>
      <button class="mobile-menu__close" aria-label="Close menu">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 3l10 10M13 3L3 13" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>
      </button>
    </div>
    <div class="mobile-menu__list">
      <a href="about.html" class="mobile-menu__item">About <span>→</span></a>
      <a href="ministry.html" class="mobile-menu__item">Ministry <span>→</span></a>
      <a href="events.html" class="mobile-menu__item">Events <span>→</span></a>
      <a href="invite.html" class="mobile-menu__item">Invite Deborah <span>→</span></a>
      <a href="give.html" class="mobile-menu__item">Give <span>→</span></a>
      <a href="contact.html" class="mobile-menu__item">Contact <span>→</span></a>
    </div>
    <a href="invite.html" class="mobile-menu__cta">
      Invite Deborah
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
    </a>
  </div>`;

  const footerHtml = `
  <footer class="footer">
    <div class="container">
      <div class="footer__top">
        <div class="eyebrow" style="color: var(--gold-soft); margin-bottom: 32px;">Deborah Ufedejo Ministries</div>
        <h2 class="footer__wordmark">May every gathering<br/>become an <em>encounter with Jesus.</em></h2>
        <div class="footer__row">
          <p class="footer__statement">A ministry raising a generation that encounters Jesus deeply and carries His presence into families, communities, churches and nations.</p>
          <div style="display:flex; gap:12px;">
            <a href="invite.html" class="btn btn--light">Invite Deborah
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>
            </a>
            <a href="give.html" class="btn btn--ghost-light">Give</a>
          </div>
        </div>
      </div>

      <div class="footer__cols">
        <div class="footer__col">
          <h4>Explore</h4>
          <ul>
            <li><a href="index.html">Home</a></li>
            <li><a href="about.html">About Deborah</a></li>
            <li><a href="ministry.html">Ministry</a></li>
            <li><a href="events.html">Events</a></li>
          </ul>
        </div>
        <div class="footer__col">
          <h4>Partner</h4>
          <ul>
            <li><a href="invite.html">Invite Deborah</a></li>
            <li><a href="give.html">Give</a></li>
            <li><a href="contact.html">Contact</a></li>
            <li><a href="dashboard.html">Ministry Portal</a></li>
          </ul>
        </div>
        <div class="footer__col">
          <h4>Music</h4>
          <ul>
            <li><a href="#">Spotify</a></li>
            <li><a href="#">Apple Music</a></li>
            <li><a href="#">YouTube</a></li>
            <li><a href="#">Audiomack</a></li>
          </ul>
        </div>
        <div class="footer__col">
          <h4>Follow</h4>
          <ul>
            <li><a href="#">Instagram</a></li>
            <li><a href="#">Facebook</a></li>
            <li><a href="#">YouTube</a></li>
            <li><a href="#">TikTok</a></li>
          </ul>
        </div>
      </div>

      <div class="footer__bottom">
        <div>© <span id="copyYear"></span> Deborah Ufedejo Ministries. All rights reserved.</div>
        <div style="display:flex; gap:24px;">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms</a>
          <a href="contact.html">Contact</a>
        </div>
      </div>
    </div>
  </footer>`;

  // Write nav where the placeholder is
  const navSlot = document.getElementById('nav-slot');
  if (navSlot) navSlot.outerHTML = navHtml;

  const footerSlot = document.getElementById('footer-slot');
  if (footerSlot) footerSlot.outerHTML = footerHtml;

  // Copy year
  requestAnimationFrame(() => {
    const y = document.getElementById('copyYear');
    if (y) y.textContent = new Date().getFullYear();
  });
})();
