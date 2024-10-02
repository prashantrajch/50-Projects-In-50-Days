const textArea = document.getElementById("textarea");
const tagsElm = document.getElementById("tags");

textArea.addEventListener("keyup", (e) => {
  createTags(e.target.value);
  if (e.key === "Enter") {
    setTimeout(() => {
      e.target.value = "";
    }, 10);

    randomSelect();
  }
});

function createTags(value) {
  const tags = value
    .split(",")
    .filter((tag) => tag.trim() !== "")
    .map((tag) => tag.trim());
  tagsElm.innerHTML = "";
  tags.forEach((tag) => {
    const span = document.createElement("span");
    span.classList.add("tag");
    span.innerHTML = tag;
    tagsElm.append(span);
  });
}

function randomSelect() {
  const times = 30;
  const interval = setInterval(() => {
    const randomTag = pickRandomTag();
    hightlightTag(randomTag);
    setTimeout(() => {
      removeHightlightTag(randomTag);
    }, 100);
  }, 100);

  setTimeout(() => {
    clearInterval(interval);
    setTimeout(() => {
      const randomTag = pickRandomTag();
      hightlightTag(randomTag);
    });
  }, times * 100);
}

function pickRandomTag() {
  const tags = document.querySelectorAll(".tag");
  return tags[Math.floor(Math.random() * tags.length)];
}

function hightlightTag(tag) {
  tag.classList.add("highlight");
}
function removeHightlightTag(tag) {
  tag.classList.remove("highlight");
}
