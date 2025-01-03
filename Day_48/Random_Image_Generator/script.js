const container = document.querySelector(".container");
const picsumURL = "https://picsum.photos/";
const refreshBtn = document.getElementById("refresh-btn");
const form = document.querySelector("form");

getRandomImg();

function getRandomImg(row = 2) {
  container.innerHTML = "";
  for (let i = 0; i < row * 3; i++) {
    const img = document.createElement("img");
    img.src = `${picsumURL}${getRandomSize()}?random=${i}`;
    img.loading = "lazy";
    container.appendChild(img);
  }
}

function getRandomSize() {
  return `${getRandomNumber()}/${getRandomNumber()}`;
}

function getRandomNumber() {
  return Math.floor(Math.random() * 10) + 300;
}

form.addEventListener("submit", (e) => {
  const inputTag = e.target[0];
  getRandomImg(inputTag.value);
  e.preventDefault();
});

refreshBtn.addEventListener("click", () => {
  getRandomImg(document.querySelector("input").value);
});
