(() => {
  /* Mark items dated after today as upcoming, in the visitor's own time zone, so the label needs no rebuild. */
  const now = new Date(), pad = n => String(n).padStart(2, '0');
  const today = `${now.getFullYear()}-${pad(now.getMonth() + 1)}-${pad(now.getDate())}`;
  document.querySelectorAll('.academic-news-item').forEach(item => {
    if (item.dataset.date > today && !item.querySelector('.academic-news-badge')) {
      const badge = document.createElement('span'); badge.className = 'academic-news-badge'; badge.textContent = 'Upcoming';
      item.querySelector('.academic-news-date').append(badge);
    }
  });
})();
