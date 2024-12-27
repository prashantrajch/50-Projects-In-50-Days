const openBtn = document.getElementById("open-btn");
const closeBtn = document.getElementById("close-btn");
const nav = document.querySelectorAll(".nav");

openBtn.addEventListener("click", () => {
  nav.forEach((nav_el) => nav_el.classList.add("active"));
});

closeBtn.addEventListener("click", () => {
  nav.forEach((nav_el) => nav_el.classList.remove("active"));
});
