// scripts/carrossel.js

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.carousel-wrapper').forEach(wrapper => {
    const carousel = wrapper.querySelector('.carousel');
    wrapper.querySelector('.arrow.left').addEventListener('click', () =>
      carousel.scrollBy({ left: -carousel.offsetWidth / 2, behavior: 'smooth' })
    );
    wrapper.querySelector('.arrow.right').addEventListener('click', () =>
      carousel.scrollBy({ left: carousel.offsetWidth / 2, behavior: 'smooth' })
    );
  });
});
