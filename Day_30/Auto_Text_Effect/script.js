const textElm = document.getElementById("text");
const speedElm = document.getElementById("speed");
const blinkLine = document.querySelector('.blink-line');
const text = "We Love Programming!";

let indx = 1;

let speed = 300 / speedElm.value;

writeText();

function writeText() {
  textElm.innerHTML = text.slice(0, indx).replace(/ /g,'&nbsp;');
  blinkLine.style.animationDuration = `0.${speed}s`
  indx++;
  if (indx > text.length) {
    indx = 1;
  }

  setTimeout(writeText, speed);
}

speedElm.addEventListener('input', (e) => speed = 300 / e.target.value)

