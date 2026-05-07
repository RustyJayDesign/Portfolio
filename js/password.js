// ============================================
// PASSWORD PROTECTION
// Usage: add data-password="yourpassword" to
// the <main> element on any case study page,
// then include this script on that page.
// ============================================

document.addEventListener('DOMContentLoaded', () => {
  const main = document.querySelector('main[data-password]');
  if (!main) return;

  const correctPassword = main.getAttribute('data-password');
  const storageKey      = 'pw_' + window.location.pathname;

  // Already unlocked this session?
  if (sessionStorage.getItem(storageKey) === correctPassword) return;

  // Hide content and show prompt
  main.style.visibility = 'hidden';

  const overlay = document.createElement('div');
  overlay.innerHTML = `
    <div style="
      position:fixed; inset:0;
      background:var(--color-bg);
      display:flex; flex-direction:column;
      align-items:center; justify-content:center;
      gap:1rem; z-index:999;
      font-family:var(--font-body);
    ">
      <p style="color:var(--color-text-muted); font-size:0.9rem;">
        This case study is password protected.
      </p>
      <input
        id="pw-input"
        type="password"
        placeholder="Enter password"
        style="
          padding:0.5rem 1rem;
          border:1px solid var(--color-border);
          border-radius:var(--radius);
          background:var(--color-surface);
          color:var(--color-text);
          font-size:1rem;
          outline:none;
        "
      />
      <p id="pw-error" style="color:#ef4444; font-size:0.85rem; display:none;">
        Incorrect password.
      </p>
    </div>
  `;
  document.body.appendChild(overlay);

  document.getElementById('pw-input').addEventListener('keydown', (e) => {
    if (e.key !== 'Enter') return;
    if (e.target.value === correctPassword) {
      sessionStorage.setItem(storageKey, correctPassword);
      overlay.remove();
      main.style.visibility = 'visible';
    } else {
      document.getElementById('pw-error').style.display = 'block';
      e.target.value = '';
    }
  });
});
