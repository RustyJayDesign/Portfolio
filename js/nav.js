// ============================================================
//  nav.js — Shared navigation web component
//
//  Every page uses a single tag:  <site-nav></site-nav>
//  Edit the nav template below and every page updates at once.
//
//  PATH CONFIGURATION
//  BASE_PATH is auto-detected:
//    • Custom domain (rustyjay.com)          → ''
//    • GitHub Pages preview (.github.io/Portfolio) → '/Portfolio'
//    • localhost                              → ''
//  To override manually, replace the auto-detect block with:
//    const BASE_PATH = '/YourRepoName';
// ============================================================

const BASE_PATH = (function () {
  if (window.location.hostname.endsWith('github.io')) {
    const match = window.location.pathname.match(/^(\/[^/]+)/);
    return match ? match[1] : '';
  }
  return ''; // custom domain or localhost — serve from root
}());


class SiteNav extends HTMLElement {
  connectedCallback () {
    const p = BASE_PATH;

    // ── Edit everything inside this template literal ─────────
    // This is the ONLY place the nav HTML lives.
    // Changes here apply to every page on the site.
    this.innerHTML = `
      <header id="site-header">
        <nav class="site-nav" aria-label="Main navigation">

          <div class="nav-group nav-left">
            <a href="${p}/index.html"    class="nav-link">Home</a>
            <a href="${p}/case-studies/" class="nav-link">Case Studies</a>
            <a href="${p}/about.html"    class="nav-link">About Me</a>
          </div>

          <!-- Logomark: see style.css for SVG swap instructions -->
          <a href="${p}/index.html" class="nav-logomark" aria-label="Rusty Jay — home">
            <svg viewBox="0 0 57 80" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M10.0199 70.0282C10.5958 70.2149 11.1897 70.341 11.7918 70.4045L14.5516 70.7338C15.5551 70.8436 16.6371 70.9377 17.7818 71.0004C18.9265 71.0631 20.0398 71.1101 21.1217 71.1101C26.2336 71.1101 29.8558 69.5421 32.0982 66.6725C34.3405 63.803 35.3284 58.8322 35.3284 51.9485V22.5003H45.3639V54.1124C45.3991 57.6293 44.9988 61.1371 44.1722 64.5557C43.464 67.5236 42.145 70.3113 40.2991 72.7409C38.4263 75.1067 35.9741 76.9486 33.1801 78.088C29.6889 79.4621 25.9536 80.1078 22.2037 79.9854C17.8197 80.0307 13.4397 79.7055 9.11042 79.0132C5.3314 78.4173 2.30505 77.743 0 77.1628L10.0199 70.0282ZM46.4302 9.97153C45.8534 9.76847 45.2524 9.64195 44.6426 9.5952L41.8985 9.2659C40.895 9.15614 39.813 9.07774 38.6683 8.99933C37.5236 8.92093 36.3946 8.88957 35.3284 8.88957C30.2165 8.88957 26.5943 10.3635 24.3519 13.3272C22.1096 16.2908 21.1217 21.1675 21.1217 28.0512V57.4994H11.1646V25.8873C11.1294 22.3704 11.5297 18.8626 12.3563 15.4441C13.0581 12.471 14.3836 9.68092 16.2451 7.25879C18.1075 4.88895 20.5559 3.04591 23.3484 1.91171C26.84 0.538914 30.575 -0.106715 34.3248 0.0143592C38.7088 -0.0309686 43.0888 0.294254 47.4181 0.986556C51.1971 1.62946 54.2235 2.241 56.5285 2.82118L46.4302 9.97153Z" fill="currentColor"/>
              </svg>
          </a>

          <div class="nav-group nav-right">
            <a href="${p}/contact.html"                          class="nav-link">Contact</a>
            <a href="https://www.linkedin.com/in/rustysmith/"
               target="_blank" rel="noopener noreferrer"        class="nav-link">LinkedIn</a>
            <a href="${p}/Docs/resume.pdf"
               target="_blank" rel="noopener noreferrer"        class="nav-link">Resumé</a>
          </div>

          <button class="nav-toggle"
                  id="nav-toggle"
                  aria-label="Open menu"
                  aria-expanded="false"
                  aria-controls="mobile-nav">
            <span></span><span></span><span></span>
          </button>

        </nav>

        <div class="mobile-nav" id="mobile-nav">
          <a href="${p}/index.html"    class="nav-link">Home</a>
          <a href="${p}/case-studies/" class="nav-link">Case Studies</a>
          <a href="${p}/about.html"    class="nav-link">About Me</a>
          <a href="${p}/contact.html"  class="nav-link">Contact</a>
          <a href="https://www.linkedin.com/in/rustysmith/"
             target="_blank" rel="noopener noreferrer" class="nav-link">LinkedIn</a>
          <a href="${p}/Docs/resume.pdf"
             target="_blank" rel="noopener noreferrer" class="nav-link">Resumé</a>
        </div>
      </header>
    `;
    // ── End of nav template ──────────────────────────────────
  }
}

customElements.define('site-nav', SiteNav);
