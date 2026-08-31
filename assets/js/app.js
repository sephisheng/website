document.documentElement.classList.add('js-ready');

for (const card of document.querySelectorAll('.link-card')) {
  card.addEventListener('pointerdown', () => card.classList.add('is-pressing'));
  card.addEventListener('pointerup', () => card.classList.remove('is-pressing'));
  card.addEventListener('pointerleave', () => card.classList.remove('is-pressing'));
}
