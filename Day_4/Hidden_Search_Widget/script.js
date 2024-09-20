const button = document.querySelector(".btn");

button.addEventListener("click", (e) => {
  button.parentElement.classList.toggle("active");
});
