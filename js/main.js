// ============================================
// MAIN JS — navigation and scroll animations
// ============================================

// Highlight active nav link based on current page
document.addEventListener('DOMContentLoaded', () => {
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('nav a').forEach(link => {
    if (link.getAttribute('href') === currentPage) {
      link.style.color = 'var(--color-accent)';
    }
  });
});
