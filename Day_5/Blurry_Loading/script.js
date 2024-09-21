const loadingText = document.getElementsByClassName("loading-text")[0];
const bg = document.querySelector(".bg");

let loader = 0;

let interval = setInterval(blurring, 30);

function blurring() {
  loader++;
  if (loader > 99) {
    clearInterval(interval);
  }
  loadingText.innerText = `${loader}%`;
  loadingText.style.opacity = scale(loader, 0, 100, 1, 0);
  bg.style.filter = `blur(${scale(loader, 0, 100, 30, 0)}px)`;
}

//https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers

function scale(number, inMin, inMax, outMin, outMax) {
  return ((number - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
}
