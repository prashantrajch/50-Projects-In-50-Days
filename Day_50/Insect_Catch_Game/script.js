const screens = document.querySelectorAll(".screen");
const startBtn = document.getElementById("start-btn");
const choose_insects_btn = document.querySelectorAll(".choose-insect-btn");
const game_container = document.getElementsByClassName("game-container")[0];
const timeElm = document.getElementById("time");
const scoreElm = document.getElementById("score");
const messageElm = document.getElementById("message");
let seconds = 0;
let score = 0;
let selected_insect = {};

startBtn.addEventListener("click", () => screens[0].classList.add("up"));

choose_insects_btn.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const img = btn.querySelector("img");
    const src = img.src;
    const alt = img.alt;
    selected_insect = { src, alt };
    screens[1].classList.add("up");
    setTimeout(createInsect, 1000);
    startGame();
  });
});

function startGame() {
  setInterval(increaseTime, 1000);
}

function increaseTime() {
  let m = Math.floor(seconds / 60);
  let s = seconds % 60;
  m = m < 10 ? `0${m}` : m;
  s = s < 10 ? `0${s}` : s;
  timeElm.innerHTML = `Time: ${m}:${s}`;
  seconds++;
}

function createInsect() {
  const insect = document.createElement("div");

  insect.classList.add("insect");

  const { x, y } = getRandomLocation();

  insect.style.top = `${y}px`;
  insect.style.left = `${x}px`;
  insect.innerHTML = `<img src='${selected_insect.src}' alt='${
    selected_insect.alt
  }' style='transform: rotate(${Math.floor(Math.random() * 360)}deg)' />`;
  insect.addEventListener("click", catchInsect);

  game_container.appendChild(insect);
}

function getRandomLocation() {
  const width = window.innerWidth;
  const height = window.innerHeight;
  const x = Math.random() * (width - 200) + 100;
  const y = Math.random() * (height - 200) + 100;
  return { x, y };
}

function catchInsect() {
  increaseScore();
  this.classList.add("caught");
  setTimeout(() => this.remove(), 200);
  addInsects();
}

function addInsects() {
  setTimeout(createInsect, 1000);
  setTimeout(createInsect, 1500);
}

function increaseScore() {
  score++;
  if (score > 19) {
    messageElm.classList.add("visible");
  }
  scoreElm.innerHTML = `Score: ${score}`;
}
