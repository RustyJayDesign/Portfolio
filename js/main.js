// ============================================================
//  main.js — RustyJay Portfolio
// ============================================================

(function () {
  'use strict';

  const header    = document.getElementById('site-header');
  const toggle    = document.getElementById('nav-toggle');
  const mobileNav = document.getElementById('mobile-nav');

  // ── Scroll: logomark gray → red ───────────────────────────
  // Adds .is-scrolled to #site-header when the user scrolls
  // past 40px, triggering the CSS color transition on
  // .nav-logomark defined in style.css.

  function onScroll() {
    if (window.scrollY > 40) {
      header.classList.add('is-scrolled');
    } else {
      header.classList.remove('is-scrolled');
    }
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll(); // run once on load so page-reload position is respected


  // ── Mobile nav toggle ─────────────────────────────────────

  if (toggle && mobileNav) {

    toggle.addEventListener('click', function () {
      const isOpen  = toggle.getAttribute('aria-expanded') === 'true';
      const nowOpen = !isOpen;

      toggle.setAttribute('aria-expanded', String(nowOpen));
      toggle.setAttribute('aria-label', nowOpen ? 'Close menu' : 'Open menu');
      mobileNav.classList.toggle('is-open', nowOpen);
    });

    // Close on outside click
    document.addEventListener('click', function (e) {
      if (!header.contains(e.target) && mobileNav.classList.contains('is-open')) {
        toggle.setAttribute('aria-expanded', 'false');
        toggle.setAttribute('aria-label', 'Open menu');
        mobileNav.classList.remove('is-open');
      }
    });

    // Close on Escape key
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && mobileNav.classList.contains('is-open')) {
        toggle.setAttribute('aria-expanded', 'false');
        toggle.setAttribute('aria-label', 'Open menu');
        mobileNav.classList.remove('is-open');
        toggle.focus();
      }
    });
  }


  // ── Active nav link ───────────────────────────────────────
  // Marks the current page's nav link .active automatically.
  // nav.js uses absolute paths (e.g. /index.html, /about.html)
  // so we compare resolved pathnames directly.
  // Treats /index.html and / (and /RepoName/) as equivalent.

  const allNavLinks = document.querySelectorAll(
    '.nav-group .nav-link, .mobile-nav .nav-link'
  );

  // Normalize a pathname: strip trailing slash, collapse /index.html → root
  function normalizePath (p) {
    return p
      .replace(/\/index\.html$/, '')   // /foo/index.html → /foo
      .replace(/\/$/, '')              // /foo/           → /foo
      || '/';
  }

  const currentNorm = normalizePath(window.location.pathname);

  allNavLinks.forEach(function (link) {
    link.classList.remove('active');

    const href = link.getAttribute('href');

    // Skip external links (LinkedIn, etc.)
    if (!href || href.startsWith('http') || href.startsWith('//')) return;

    // Resolve href to an absolute pathname using the current origin
    const resolved = new URL(href, window.location.origin + '/').pathname;
    const linkNorm  = normalizePath(resolved);

    if (linkNorm === currentNorm) {
      link.classList.add('active');
    }
  });

})();
