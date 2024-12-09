const container = document.getElementById("container");
const colors = ["#e74c3c", "#8e44ad", "#3498db", "#e68e22", "#2ecc71"];

const SQUARES = 500;

for (let i = 0; i < SQUARES; i++) {
  const square = document.createElement("div");
  square.classList.add("square");

  square.addEventListener("mouseover", () => {
    setColor(square);
  });

  square.addEventListener("mouseout", () => removeColor(square));

  container.appendChild(square);
}

function setColor(elem) {
  const color = getRandomColor();

  elem.style.backgroundColor = color;
  elem.style.boxShandow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

function removeColor(elem) {
  elem.style.backgroundColor = "#1d1d1d";
  elem.style.boxShandow = "0 0 2px #000";
}

function getRandomColor() {
  return colors[Math.floor(Math.random() * colors.length)];
}
