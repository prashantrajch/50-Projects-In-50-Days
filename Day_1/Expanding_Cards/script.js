const imgList = [
  {
    name: "Island",
    src: "https://images.unsplash.com/photo-1483683804023-6ccdb62f86ef?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "City",
    src: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?q=80&w=1544&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "South Indian Temple",
    src: "https://plus.unsplash.com/premium_photo-1697729444936-8c6a6f643312?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];
const allPanel = document.querySelectorAll(".panel");

allPanel.forEach((panel, ind) => {
  panel.addEventListener("click", addActive);
  if (ind !== 0 && ind !== 1) {
    panel.style.backgroundImage = `url(${imgList[ind - 2].src})`;
    panel.children[0].innerText = imgList[ind - 2].name;
  }
});

function addActive() {
  removeActive();
  this.classList.add("active");
}

function removeActive() {
  allPanel.forEach((panel, item) => {
    panel.classList.remove("active");
  });
}

window.addEventListener("resize", (e) => {
  if (e.target.innerWidth <= 480) {
    allPanel.forEach((panel, ind) => {
      if (checkActive(panel, ind)) {
        removeActive();
        allPanel[2].classList.add("active");
      }
    });
  }
});

function checkActive(panel, ind) {
  if (ind == 3 && panel.classList.contains("active")) {
    return true;
  } else if (ind == 4 && panel.classList.contains("active")) {
    return true;
  }
  return false;
}
