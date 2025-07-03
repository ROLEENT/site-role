// scripts/carrossel.js

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.carousel-wrapper').forEach(wrapper => {
    const carousel = wrapper.querySelector('.carousel');
    const cards = carousel ? carousel.querySelectorAll('.card') : [];
    const prev = wrapper.querySelector('.arrow.left');
    const next = wrapper.querySelector('.arrow.right');
    let currentIndex = 0;

    function scrollToCard(index) {
      if (!cards.length) return;
      if (index < 0) index = cards.length - 1;
      if (index >= cards.length) index = 0;
      currentIndex = index;
      const cardWidth = cards[0].offsetWidth + 16;
      carousel.scrollTo({ left: cardWidth * index, behavior: 'smooth' });
    }

    prev?.addEventListener('click', () => scrollToCard(currentIndex - 1));
    next?.addEventListener('click', () => scrollToCard(currentIndex + 1));
  });
});


// scripts/topo.js

document.addEventListener('DOMContentLoaded', () => {
  const btnTopo = document.getElementById('btn-topo');
  if (!btnTopo) return;

  window.addEventListener('scroll', () => {
    btnTopo.classList.toggle('hide', window.scrollY <= 300);
  });

  btnTopo.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});


// scripts/menu.js

document.addEventListener('DOMContentLoaded', () => {
  const dropdown = document.querySelector('.dropdown');
  const button = document.querySelector('.dropdown-button');

  button.addEventListener('click', e => {
    e.stopPropagation();
    dropdown.classList.toggle('open');
    button.setAttribute('aria-expanded', dropdown.classList.contains('open'));
  });

  document.addEventListener('click', e => {
    if (!dropdown.contains(e.target)) {
      dropdown.classList.remove('open');
      button.setAttribute('aria-expanded', 'false');
    }
  });
});
