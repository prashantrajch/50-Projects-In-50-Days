const sounds = ["applause", "boo", "gasp", "tada", "victory", "wrong"];

sounds.forEach((sound) => {
  const btn = document.createElement("button");
  btn.classList.add("btn");
  btn.innerText = sound;
  btn.addEventListener("click", () => {
    stopSound();
    document.getElementById(sound).play();
  });
  document.getElementById("buttons").append(btn);
});

function stopSound() {
  sounds.forEach((sound) => {
    const elem = document.getElementById(sound);
    elem.pause();
    elem.currentTime = 0;
  });
}
