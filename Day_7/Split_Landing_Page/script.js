const container = document.getElementsByClassName("container")[0];
const left_Split = document.getElementsByClassName("left")[0];
const right_Split = document.querySelector(".right");
console.log(container);

left_Split.addEventListener("mouseenter", () =>
  container.classList.add("hover-left")
);
left_Split.addEventListener("mouseleave", () =>
  container.classList.remove("hover-left")
);
right_Split.addEventListener("mouseenter", () =>
  container.classList.add("hover-right")
);
right_Split.addEventListener("mouseleave", () =>
  container.classList.remove("hover-right")
);
