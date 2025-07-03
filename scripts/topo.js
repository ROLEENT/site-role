document.addEventListener('DOMContentLoaded', () => {
  const btnTopo = document.getElementById('btn-topo');
  window.addEventListener('scroll', () => btnTopo.classList.toggle('hide', window.scrollY < 300));
  btnTopo.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
});
