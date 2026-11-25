(() => {
  const root = document.querySelector('#presentation-index'); if (!root) return;
  const items = [...root.querySelectorAll('.academic-index-item')], list = root.querySelector('.academic-index-items');
  const query = root.querySelector('#talk-query'), sort = root.querySelector('#talk-sort');
  const formats = [...root.querySelectorAll('[name=talk-format]')], years = [...root.querySelectorAll('[name=talk-year]')];
  const panel = root.querySelector('.academic-filter-panel'), mobile = matchMedia('(max-width: 760px)');
  const setPanel = () => { panel.open = !mobile.matches; }; setPanel(); mobile.addEventListener('change', setPanel);
  const checked = els => els.filter(el => el.checked).map(el => el.value);
  const apply = (record = false) => {
    const q = query.value.trim().toLowerCase(), f = checked(formats), y = checked(years);
    const visible = items.filter(item => { const show = (!q || item.textContent.toLowerCase().includes(q)) && (!f.length || f.includes(item.dataset.format)) && (!y.length || y.includes(item.dataset.year)); item.hidden = !show; return show; });
    items.sort((a, b) => sort.value === 'oldest' ? a.dataset.date.localeCompare(b.dataset.date) : b.dataset.date.localeCompare(a.dataset.date)).forEach(item => list.append(item));
    root.querySelector('.academic-result-count').textContent = `${visible.length} of ${items.length} presentations`;
    root.querySelector('.academic-no-results').hidden = !!visible.length;
    root.querySelector('.academic-filter-count').textContent = f.length + y.length ? `· ${f.length + y.length} selected` : '';
    if (record) { const s = new URLSearchParams(); if (query.value) s.set('q', query.value); if (f.length) s.set('format', f.join(',')); if (y.length) s.set('years', y.join(',')); if (sort.value !== 'newest') s.set('sort', sort.value); history.pushState(null, '', location.pathname + location.search + (s.size ? '#' + s.toString() : '')); }
  };
  const restore = () => { const s = new URLSearchParams(location.hash.slice(1)); query.value = s.get('q') || ''; formats.forEach(el => el.checked = (s.get('format') || '').split(',').includes(el.value)); years.forEach(el => el.checked = (s.get('years') || '').split(',').includes(el.value)); sort.value = s.get('sort') === 'oldest' ? 'oldest' : 'newest'; apply(); };
  query.addEventListener('input', () => apply(true)); [sort, ...formats, ...years].forEach(el => el.addEventListener('change', () => apply(true)));
  root.querySelectorAll('.academic-filter-reset').forEach(b => b.addEventListener('click', () => { query.value = ''; [...formats, ...years].forEach(el => el.checked = false); sort.value = 'newest'; apply(true); }));
  window.addEventListener('popstate', restore); window.addEventListener('hashchange', restore); restore();
})();
