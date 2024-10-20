const fill = document.getElementsByClassName("fill")[0];
const empties = document.querySelectorAll(".empty");

fill.addEventListener("dragstart", dragStart);
fill.addEventListener("dragend", dragEnd);

empties.forEach((empty) => {
  empty.addEventListener("dragover", dragOver);
  empty.addEventListener("dragenter", dragEnter);
  empty.addEventListener("dragleave", dragLeave);
  empty.addEventListener("drop", dragDrop);
});

function dragStart() {
  console.log("Drag Start");
  this.classList.add("hold");
  setTimeout(() => {
    this.className = "invisible";
  }, [100]);
}
function dragEnd() {
  // console.log("Drag End");
  this.className = "fill";
}
function dragOver(e) {
  e.preventDefault();
  // console.log("Drag Over");
}
function dragEnter(e) {
  e.preventDefault();
  // console.log("Drag Enter");
  e.target.classList.add("hovered");
}
function dragLeave(e) {
  // console.log("Drag  Leave");
  e.target.classList.remove("hovered");
}
function dragDrop() {
  //   console.log("Drag Drop");
  this.className = "empty";
  this.append(fill);
}
