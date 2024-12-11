const contents = document.querySelectorAll(".content");
const listItems = document.querySelectorAll("nav ul li");

listItems.forEach((navLink, idx) => {
  navLink.addEventListener("click", () => {
    hideAllContents();
    removeAllActiveLinks();
    contents[idx].classList.add("show");
    navLink.classList.add("active");
  });
});

function hideAllContents() {
  contents.forEach((content) => content.classList.remove("show"));
}

function removeAllActiveLinks() {
  listItems.forEach((navLink) => navLink.classList.remove("active"));
}
