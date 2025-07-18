// scripts.js

// Alterna o tema claro/escuro e salva no localStorage
function toggleTheme() {
  const root = document.documentElement;
  const currentBg = getComputedStyle(root).getPropertyValue('--bg').trim();
  const lampada = document.querySelector('.lampada-toggle');

  if (currentBg === '#000000') {
    root.style.setProperty('--bg', '#ffffff');
    root.style.setProperty('--text-color', '#2e2e2e');
    lampada.setAttribute('aria-pressed', 'true');
    localStorage.setItem('theme', 'light');
  } else {
    root.style.setProperty('--bg', '#000000');
    root.style.setProperty('--text-color', '#f3f3f7');
    lampada.setAttribute('aria-pressed', 'false');
    localStorage.setItem('theme', 'dark');
  }
}

// Aplica o tema salvo ao carregar a página
document.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme');
  const root = document.documentElement;

  if (savedTheme === 'light') {
    root.style.setProperty('--bg', '#ffffff');
    root.style.setProperty('--text-color', '#2e2e2e');
  } else {
    root.style.setProperty('--bg', '#000000');
    root.style.setProperty('--text-color', '#f3f3f7');
  }

  // Inicia o carrossel de cidades
  initCarrosselCidades();
});

// Lógica de scroll horizontal para destaques por cidade
function initCarrosselCidades() {
  const container = document.querySelector('.cards-container');
  const cards = container?.querySelectorAll('.card');
  if (!container || !cards.length) return;

  let currentIndex = 0;
  const cardWidth = cards[0].getBoundingClientRect().width + 12;

  function scrollToCard(index) {
    if (index < 0) index = cards.length - 1;
    if (index >= cards.length) index = 0;
    currentIndex = index;
    container.scrollTo({ left: cardWidth * index, behavior: 'smooth' });
  }

  const arrowLeft = document.querySelector('.scroll-arrow.left');
  const arrowRight = document.querySelector('.scroll-arrow.right');

  if (arrowLeft && arrowRight) {
    arrowLeft.addEventListener('click', () => scrollToCard(currentIndex - 1));
    arrowRight.addEventListener('click', () => scrollToCard(currentIndex + 1));
  }

  container.addEventListener('scroll', () => {
    const newIndex = Math.round(container.scrollLeft / cardWidth);
    currentIndex = newIndex;
  });

  setTimeout(() => {
    container.style.scrollBehavior = 'auto';
    container.scrollTo({ left: 0 });
    setTimeout(() => {
      container.style.scrollBehavior = 'smooth';
    }, 50);
  }, 300);
}
