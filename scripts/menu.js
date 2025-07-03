// menu.js
document.addEventListener("DOMContentLoaded", () => {
  const btn = document.querySelector(".dropdown-button");
  const content = document.querySelector(".dropdown-content");

  btn.addEventListener("click", () => {
    const expanded = btn.getAttribute("aria-expanded") === "true";
    btn.setAttribute("aria-expanded", !expanded);
    content.style.display = expanded ? "none" : "block";
  });

  document.addEventListener("click", (e) => {
    if (!e.target.closest(".dropdown")) {
      content.style.display = "none";
      btn.setAttribute("aria-expanded", "false");
    }
  });
});
