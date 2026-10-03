// Native HugoBlox keeps ownership of search, citation dialogs, and downloads.
(() => {
  const button = document.querySelector('.academic-menu-toggle');
  const nav = document.querySelector('#academic-navigation');
  if (!button || !nav) return;
  const close = () => {
    button.setAttribute('aria-expanded', 'false');
    button.setAttribute('aria-label', 'Open navigation');
    nav.classList.remove('is-open');
  };
  button.addEventListener('click', () => {
    const open = button.getAttribute('aria-expanded') !== 'true';
    button.setAttribute('aria-expanded', String(open));
    button.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
    nav.classList.toggle('is-open', open);
  });
  nav.addEventListener('click', event => { if (event.target.closest('a')) close(); });
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && button.getAttribute('aria-expanded') === 'true') { close(); button.focus(); }
  });
  // Native publication detail layouts have no custom main wrapper.
  if (!document.querySelector('#academic-main')) {
    const main = document.querySelector('.page-body');
    if (main) { main.id = 'academic-main'; main.setAttribute('tabindex', '-1'); }
  }
})();

(() => {
  const button = document.querySelector('.academic-back-to-top');
  if (!button) return;
  const update = () => { button.hidden = window.scrollY < 400; };
  window.addEventListener('scroll', update, { passive:true });
  update();
  button.addEventListener('click', () => {
    const target = document.querySelector('#academic-main');
    if (target) target.focus({ preventScroll:true });
    window.scrollTo({ top:0, behavior:matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' });
  });
})();

// A detail page's list link retains the filter state and reading position in this tab.
(() => {
  const link = document.querySelector('.academic-paper-header > .academic-more');
  if (!link) return;
  try {
    const saved = JSON.parse(sessionStorage.getItem('academic-publication-return'));
    if (!saved || saved.paper !== location.pathname) return;
    const url = new URL(saved.url, location.origin);
    if (url.origin !== location.origin || url.pathname !== '/publications/') return;
    const state = new URLSearchParams(url.hash.slice(1)); state.set('return','1');
    link.href = url.pathname + url.search + '#' + state.toString();
  } catch {}
})();
