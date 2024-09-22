const boxes = document.querySelectorAll(".box");

window.addEventListener("scroll", checkBoxes);

checkBoxes();

function checkBoxes() {
  //This is for the fix the window innerHeight
  const triggerBottom = (window.innerHeight / 5) * 4;

  // Reference for sizing of our boxes.
  // https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect
  boxes.forEach((box, ind) => {
    const boxTop = box.getBoundingClientRect().top;

    if (boxTop < triggerBottom) {
      box.classList.add("show");
    } else {
      box.classList.remove("show");
    }
  });
}
