const toggleBtn = document.querySelector('.info-toggle');
const infoPanel = document.getElementById('product-info');

toggleBtn.addEventListener('click', () => {
  const isHidden = infoPanel.classList.toggle('hidden');
  toggleBtn.setAttribute('aria-expanded', !isHidden);
  toggleBtn.textContent = isHidden ? 'More Info' : 'Hide Info';

  if (!isHidden) {
    infoPanel.focus();
  }
});