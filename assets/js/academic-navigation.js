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
