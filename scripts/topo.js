// topo.js
const btnTopo = document.getElementById("btn-topo");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    btnTopo.classList.remove("hide");
  } else {
    btnTopo.classList.add("hide");
  }
});

btnTopo.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});
